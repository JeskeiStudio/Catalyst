﻿﻿using System;
using Grpc.Core;
using System.Threading;
using ADL.Rpc.Proto.Server;
using System.Threading.Tasks;
 using ADL.Services;

 namespace ADL.Rpc
{
    public class RpcService : IService
    {
        private Server Server { get; set; }
        private Task ServerTask { get; set; }
        private IRpcSettings Settings { get; set; }
        private CancellationTokenSource TokenSource { get; set; }
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="settings"></param>
        public RpcService(IRpcSettings settings)
        {
            Settings = settings;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="settings"></param>
        public bool StartService()
        {
            Server = new Server
            {
                Services = { RpcServer.BindService(new GRpcServer()) },
                Ports = { new ServerPort(Settings.BindAddress, Settings.Port, ServerCredentials.Insecure) }
            };
            TokenSource = new CancellationTokenSource();
            ServerTask = RunServiceAsync(Server, TokenSource.Token);
            return true;
        }
        
        /// <summary>
        /// 
        /// </summary>
        public bool StopService()
        {
            Console.WriteLine("Dispose started ");
            AwaitCancellation(TokenSource.Token);
            TokenSource.Cancel();
            try
            {
                ServerTask.Wait();
            }
            catch (AggregateException)
            {
                Console.WriteLine("RpcServer shutdown canceled");
            }
            Console.WriteLine("RpcServer shutdown");
            return false;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public bool RestartService()
        {
            if (StopService())
            {
                if (StartService())
                {
                    Console.WriteLine("RPC service restarted successfully");
                }
                else
                {
                    Console.WriteLine("Couldn't start rpc service");
                    return false;
                }
            }
            else
            {
                Console.WriteLine("Couldn't stop rpc service");
                return false;
            }
            return true;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="token"></param>
        /// <returns></returns>
        private static Task AwaitCancellation(CancellationToken token)
        {
            var taskSource = new TaskCompletionSource<bool>();
            token.Register(() => taskSource.SetResult(true));
            return taskSource.Task;
        }

        /// <summary>
        ///  Starts the RpcService
        /// </summary>
        /// <param name="server"></param>
        /// <param name="cancellationToken"></param>
        /// <returns></returns>
        private static async Task RunServiceAsync(Server server,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            server.Start();
            Console.WriteLine("Rpc Server started, listening on " + server.Ports.ToString());
            await AwaitCancellation(cancellationToken);
            await server.ShutdownAsync();
        }
    }
}
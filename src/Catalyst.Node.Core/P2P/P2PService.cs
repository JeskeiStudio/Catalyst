﻿using System;
using System.Collections.Generic;
using System.Net;
using Catalyst.Node.Common.Interfaces;
using Nethereum.Hex.HexConvertors.Extensions;

namespace Catalyst.Node.Core.P2P
{
    public class P2PService : IP2P
    {
        public P2PService(IPeerSettings settings, IPeerDiscovery peerDiscovery)
        {
            Discovery = peerDiscovery;
            Settings = settings;

            var ipEndPoint = new IPEndPoint(Settings.BindAddress, Settings.Port);
            Identifier = new PeerIdentifier(Settings.PublicKey.HexToByteArray(), ipEndPoint);
        }

        public IPeerDiscovery Discovery { get; }
        public IPeerIdentifier Identifier { get; }
        public IPeerSettings Settings { get; }

        public bool Ping(IPeerIdentifier targetNode) { throw new NotImplementedException(); }

        public List<IPeerIdentifier> FindNode(IPeerIdentifier queryingNode, IPeerIdentifier targetNode)
        {
            throw new NotImplementedException();
        }

        public List<IPeerIdentifier> GetPeers(IPeerIdentifier queryingNode) { throw new NotImplementedException(); }
        public bool Store(string k, byte[] v) { throw new NotImplementedException(); }
        public dynamic FindValue(string k) { throw new NotImplementedException(); }
        public List<IPeerIdentifier> PeerExchange(IPeerIdentifier queryingNode) { throw new NotImplementedException(); }
    }
}
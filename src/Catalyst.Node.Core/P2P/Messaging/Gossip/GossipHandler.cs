#region LICENSE

/**
* Copyright (c) 2019 Catalyst Network
*
* This file is part of Catalyst.Node <https://github.com/catalyst-network/Catalyst.Node>
*
* Catalyst.Node is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 2 of the License, or
* (at your option) any later version.
*
* Catalyst.Node is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with Catalyst.Node. If not, see <https://www.gnu.org/licenses/>.
*/

#endregion

using Catalyst.Common.Extensions;
using Catalyst.Common.Interfaces.P2P.Messaging.Gossip;
using Catalyst.Common.IO.Messaging.Handlers;
using Catalyst.Protocol.Common;
using DotNetty.Transport.Channels;

namespace Catalyst.Node.Core.P2P.Messaging.Gossip
{
    /// <summary>
    /// Channel Gossip Pipeline
    /// Handles gossip messages
    /// </summary>
    /// <seealso cref="ObservableServiceHandler" />
    /// <seealso cref="IGossipHandler" />
    public sealed class GossipHandler
        : SimpleChannelInboundHandler<AnySigned>,
            IGossipHandler
    {
        private readonly IGossipManager _gossipManager;

        /// <summary>Initializes a new instance of the <see cref="GossipHandler"/> class.</summary>
        /// <param name="gossipManager">The gossip manager.</param>
        public GossipHandler(IGossipManager gossipManager)
        {
            _gossipManager = gossipManager;
        }

        protected override void ChannelRead0(IChannelHandlerContext ctx, AnySigned msg)
        {
            // TODO Check sig
            if (msg.CheckIfMessageIsGossip())
            {
                _gossipManager.IncomingGossip(msg);

                AnySigned originalGossipedMessage = AnySigned.Parser.ParseFrom(msg.Value);
                ctx.FireChannelRead(originalGossipedMessage);
            }
            else
            {
                ctx.FireChannelRead(msg);
            }
        }
    }
}

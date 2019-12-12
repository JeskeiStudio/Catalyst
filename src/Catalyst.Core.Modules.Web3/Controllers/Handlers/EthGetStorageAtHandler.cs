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

using System;
using Catalyst.Abstractions.Kvm.Models;
using Catalyst.Abstractions.Ledger;
using Catalyst.Protocol.Deltas;
using LibP2P;
using Nethermind.Core.Crypto;
using Nethermind.Dirichlet.Numerics;
using Nethermind.Store;
using Address = Nethermind.Core.Address;

namespace Catalyst.Core.Modules.Web3.Controllers.Handlers
{
    [EthWeb3RequestHandler("eth", "getStorageAt")]
    public class EthGetStorageAtHandler : EthWeb3RequestHandler<Address, UInt256, BlockParameter, byte[]>
    {
        protected override byte[] Handle(Address address, UInt256 index, BlockParameter block, IWeb3EthApi api)
        {
            Cid deltaHash = GetDeltaHash(api, block);

            Delta delta = api.GetDelta(deltaHash);

            var stateRoot = new Keccak(delta.StateRoot.ToByteArray());
            api.StateProvider.StateRoot = stateRoot;
            return api.StorageProvider.Get(new StorageAddress(address, index));
        }

        static Cid GetDeltaHash(IWeb3EthApi api, BlockParameter block)
        {
            switch (block.Type)
            {
                case BlockParameterType.Earliest:
                    return api.DeltaCache.GenesisHash;
                case BlockParameterType.Latest:
                    return api.DeltaResolver.LatestDelta;
                case BlockParameterType.Pending:
                    return api.DeltaResolver.LatestDelta;
                case BlockParameterType.BlockNumber:
                    var blockNumber = block.BlockNumber.Value;
                    return api.DeltaResolver.Resolve(blockNumber);
                default:
                    throw new ArgumentOutOfRangeException();
            }
        }
    }
}

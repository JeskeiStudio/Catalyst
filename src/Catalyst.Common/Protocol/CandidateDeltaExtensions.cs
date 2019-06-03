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

using Catalyst.Protocol.Delta;
using Dawn;

namespace Catalyst.Common.Protocol
{
    public static class CandidateDeltaExtensions
    {
        public static bool IsValid(this CandidateDeltaBroadcast candidate)
        {
            Guard.Argument(candidate, nameof(candidate)).NotNull()
               .Require(c => c.ProducerId != null, c => $"{nameof(candidate.ProducerId)} cannot be null")
               .Require(c => c.PreviousDeltaDfsHash != null && !c.PreviousDeltaDfsHash.IsEmpty,
                    c => $"{nameof(candidate.PreviousDeltaDfsHash)} cannot be null or empty")
               .Require(c => c.Hash != null && !c.Hash.IsEmpty,
                    c => $"{nameof(candidate.Hash)} cannot be null or empty");

            return true;
        }
    }
}
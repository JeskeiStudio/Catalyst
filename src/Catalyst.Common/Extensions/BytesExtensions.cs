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
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Multiformats.Base;
using Multiformats.Hash;
using Multiformats.Hash.Algorithms;

namespace Catalyst.Common.Extensions
{
    public static class BytesExtensions
    {
        public static MemoryStream ToMemoryStream(this byte[] content)
        {
            var memoryStream = new MemoryStream();
            memoryStream.Write(content, 0, content.Length);
            memoryStream.Seek(0, SeekOrigin.Begin);
            return memoryStream;
        }

        public static Multihash ComputeMultihash(this IEnumerable<byte> bytes, IMultihashAlgorithm algorithm)
        {
            var hashBytes = algorithm.ComputeHash(bytes.ToArray());
            return hashBytes.ToMultihash();
        }

        public static Multihash ToMultihash(this IEnumerable<byte> bytes)
        {
            var array = bytes as byte[] ?? bytes.ToArray();
            return Multihash.Decode(array);
        }

        /// <summary>
        /// Converts a Multihash to a base 64 string suitable for URL representation.
        /// This will produce a relatively short string that can for instance be used
        /// as a content based filename in a Dfs context.
        /// </summary>
        /// <remarks>
        /// Here is the explanation for the 4/3:
        /// log2(64) = 6 => 1 char = 6 bits, and 1 byte = 8 bits
        /// => length(base64) * 6 = length(bytes) * 8
        /// => length(base64) <= 4/3 * length(bytes)
        /// </remarks>
        /// <param name="bytes">The bytes for which the hash will be calculated.</param>
        /// <param name="algorithm">The hashing algorithm used.</param>
        /// <returns></returns>
        public static string ToMultihashBase64UrlString(this IEnumerable<byte> bytes, IMultihashAlgorithm algorithm)
        {
            var hash = ComputeMultihash(bytes, algorithm);

            var base64Length = (int) Math.Ceiling(4 * algorithm.DefaultLength / 3.0);
            var trimmedString = hash.ToString(MultibaseEncoding.Base64Url).Substring(0, base64Length);
            return trimmedString;
        }
    }
}
﻿using System.Collections.Generic;
using System.Linq;
using Catalyst.Node.Common.Helpers.Config;
using Catalyst.Node.Common.Helpers.Enumerator;
using FluentAssertions;
using Xunit;

namespace Catalyst.Node.Common.UnitTests.P2P
{
    public static class NetworkTests
    {
        static NetworkTests()
        {
            NetworksAndExpectations = Enumeration.GetAll<Network>()
               .Select(n => new[] {n.Name, n as object}).ToList();
        }

        public static List<object[]> NetworksAndExpectations { get; set; }

        [Theory]
        [MemberData(nameof(NetworksAndExpectations))]
        public static void Network_can_be_parsed_from_string(string value, Network expectedNetwork)
        {
            var parsed = Enumeration.Parse<Network>(value);
            parsed.Should().Be(expectedNetwork);
        }

        [Fact]
        public static void All_should_return_all_declared_names()
        {
            var allModuleNames = Enumeration.GetAll<Network>().Select(m => m.Name);

            var expectedList = new List<string> {"mainnet", "devnet", "testnet"};

            allModuleNames.Should().BeEquivalentTo(expectedList);
        }
    }
}
using NSec.Cryptography;

namespace Catalyst.Node.Common.Interfaces
{
    /// <summary>
    ///     Wrapper for private key.
    /// </summary>
    public interface IPrivateKey : IPublicKey
    {
        Key GetNSecFormatPrivateKey();
    }
}
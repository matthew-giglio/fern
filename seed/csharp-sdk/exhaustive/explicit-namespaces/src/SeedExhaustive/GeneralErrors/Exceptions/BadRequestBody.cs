using SeedExhaustive;

namespace SeedExhaustive.GeneralErrors;

/// <summary>
/// This exception type will be thrown for any non-2XX API responses.
/// </summary>
[Serializable]
public class BadRequestBody(BadObjectRequestInfo body)
    : SeedExhaustiveApiException("BadRequestBody", 400, body)
{
    /// <summary>
    /// The body of the response that triggered the exception.
    /// </summary>
    public new BadObjectRequestInfo Body => body;
}

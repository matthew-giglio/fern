public final class FileDownloadClient: Sendable {
    public let service: ServiceClient
    private let config: ClientConfig

    public init(baseURL: String = FileDownloadEnvironment.default.rawValue, apiKey qpiKey: String, token: String? = nil, headers: [String: String]? = [:], timeout: Int? = nil, maxRetries: Int? = nil, urlSession: URLSession? = nil) {
        self.config = ClientConfig(baseURL: baseURL, apiKey: apiKey, token: token, headers: headers, timeout: timeout, urlSession: urlSession)
        self.service = ServiceClient(config: config)
    }
}
public struct WorkspaceSubmitRequest: Codable, Hashable {
    public let submissionId: SubmissionId
    public let language: Language
    public let submissionFiles: [SubmissionFileInfo]
    public let userId: String?
    public let additionalProperties: [String: JSONValue]

    public init(submissionId: SubmissionId, language: Language, submissionFiles: [SubmissionFileInfo], userId: String? = nil, additionalProperties: [String: JSONValue] = .init()) {
        self.submissionId = submissionId
        self.language = language
        self.submissionFiles = submissionFiles
        self.userId = userId
        self.additionalProperties = additionalProperties
    }

    public init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        self.submissionId = try container.decode(SubmissionId.self, forKey: .submissionId)
        self.language = try container.decode(Language.self, forKey: .language)
        self.submissionFiles = try container.decode([SubmissionFileInfo].self, forKey: .submissionFiles)
        self.userId = try container.decodeIfPresent(String.self, forKey: .userId)
        self.additionalProperties = try decoder.decodeAdditionalProperties(using: CodingKeys.self)
    }

    public func encode(to encoder: Encoder) throws -> Void {
        var container = try encoder.container(keyedBy: CodingKeys.self)
        try encoder.encodeAdditionalProperties(self.additionalProperties)
        try container.encode(self.submissionId, forKey: .submissionId)
        try container.encode(self.language, forKey: .language)
        try container.encode(self.submissionFiles, forKey: .submissionFiles)
        try container.encodeIfPresent(self.userId, forKey: .userId)
    }

    enum CodingKeys: String, CodingKey, CaseIterable {
        case submissionId
        case language
        case submissionFiles
        case userId
    }
}
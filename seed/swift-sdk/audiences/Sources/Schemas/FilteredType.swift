public struct FilteredType: Codable, Hashable {
    public let publicProperty: String?
    public let privateProperty: Int
    public let additionalProperties: [String: JSONValue]

    public init(publicProperty: String? = nil, privateProperty: Int, additionalProperties: [String: JSONValue] = .init()) {
        self.publicProperty = publicProperty
        self.privateProperty = privateProperty
        self.additionalProperties = additionalProperties
    }

    public init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        self.publicProperty = try container.decodeIfPresent(String.self, forKey: .publicProperty)
        self.privateProperty = try container.decode(Int.self, forKey: .privateProperty)
        self.additionalProperties = try decoder.decodeAdditionalProperties(using: CodingKeys.self)
    }

    public func encode(to encoder: Encoder) throws -> Void {
        var container = try encoder.container(keyedBy: CodingKeys.self)
        try encoder.encodeAdditionalProperties(self.additionalProperties)
        try container.encodeIfPresent(self.publicProperty, forKey: .publicProperty)
        try container.encode(self.privateProperty, forKey: .privateProperty)
    }

    enum CodingKeys: String, CodingKey, CaseIterable {
        case publicProperty = "public_property"
        case privateProperty = "private_property"
    }
}
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { mockServerPool } from "../../mock-server/MockServerPool";
import { SeedApiClient } from "../../../src/Client";

describe("Service", () => {
    test("endpoint", async () => {
        const server = mockServerPool.createServer();
        const client = new SeedApiClient({ environment: server.baseUrl });

        server.mockEndpoint().get("/service").respondWith().statusCode(200).build();

        const response = await client.folder.service.endpoint();
        expect(response).toEqual(undefined);
    });

    test("unknownRequest", async () => {
        const server = mockServerPool.createServer();
        const client = new SeedApiClient({ environment: server.baseUrl });
        const rawRequestBody = { key: "value" };

        server.mockEndpoint().post("/service").jsonBody(rawRequestBody).respondWith().statusCode(200).build();

        const response = await client.folder.service.unknownRequest({
            key: "value",
        });
        expect(response).toEqual(undefined);
    });
});

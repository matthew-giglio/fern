/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../../../core/index.js";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../../../core/headers.js";
import * as serializers from "../../../../../../serialization/index.js";
import * as errors from "../../../../../../errors/index.js";

export declare namespace Primitive {
    export interface Options {
        environment: core.Supplier<string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        /** Additional headers to include in requests. */
        headers?: Record<string, string | core.Supplier<string | undefined> | undefined>;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string | core.Supplier<string | undefined> | undefined>;
    }
}

export class Primitive {
    protected readonly _options: Primitive.Options;

    constructor(_options: Primitive.Options) {
        this._options = _options;
    }

    /**
     * @param {string} request
     * @param {Primitive.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.endpoints.primitive.getAndReturnString("string")
     */
    public getAndReturnString(
        request: string,
        requestOptions?: Primitive.RequestOptions,
    ): core.HttpResponsePromise<string> {
        return core.HttpResponsePromise.fromPromise(this.__getAndReturnString(request, requestOptions));
    }

    private async __getAndReturnString(
        request: string,
        requestOptions?: Primitive.RequestOptions,
    ): Promise<core.WithRawResponse<string>> {
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)),
                "/primitive/string",
            ),
            method: "POST",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({ Authorization: await this._getAuthorizationHeader() }),
                requestOptions?.headers,
            ),
            contentType: "application/json",
            requestType: "json",
            body: serializers.endpoints.primitive.getAndReturnString.Request.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.endpoints.primitive.getAndReturnString.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedExhaustiveError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedExhaustiveError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.SeedExhaustiveTimeoutError("Timeout exceeded when calling POST /primitive/string.");
            case "unknown":
                throw new errors.SeedExhaustiveError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {number} request
     * @param {Primitive.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.endpoints.primitive.getAndReturnInt(1)
     */
    public getAndReturnInt(
        request: number,
        requestOptions?: Primitive.RequestOptions,
    ): core.HttpResponsePromise<number> {
        return core.HttpResponsePromise.fromPromise(this.__getAndReturnInt(request, requestOptions));
    }

    private async __getAndReturnInt(
        request: number,
        requestOptions?: Primitive.RequestOptions,
    ): Promise<core.WithRawResponse<number>> {
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)),
                "/primitive/integer",
            ),
            method: "POST",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({ Authorization: await this._getAuthorizationHeader() }),
                requestOptions?.headers,
            ),
            contentType: "application/json",
            requestType: "json",
            body: serializers.endpoints.primitive.getAndReturnInt.Request.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.endpoints.primitive.getAndReturnInt.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedExhaustiveError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedExhaustiveError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.SeedExhaustiveTimeoutError("Timeout exceeded when calling POST /primitive/integer.");
            case "unknown":
                throw new errors.SeedExhaustiveError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {number} request
     * @param {Primitive.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.endpoints.primitive.getAndReturnLong(1000000)
     */
    public getAndReturnLong(
        request: number,
        requestOptions?: Primitive.RequestOptions,
    ): core.HttpResponsePromise<number> {
        return core.HttpResponsePromise.fromPromise(this.__getAndReturnLong(request, requestOptions));
    }

    private async __getAndReturnLong(
        request: number,
        requestOptions?: Primitive.RequestOptions,
    ): Promise<core.WithRawResponse<number>> {
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)),
                "/primitive/long",
            ),
            method: "POST",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({ Authorization: await this._getAuthorizationHeader() }),
                requestOptions?.headers,
            ),
            contentType: "application/json",
            requestType: "json",
            body: serializers.endpoints.primitive.getAndReturnLong.Request.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.endpoints.primitive.getAndReturnLong.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedExhaustiveError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedExhaustiveError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.SeedExhaustiveTimeoutError("Timeout exceeded when calling POST /primitive/long.");
            case "unknown":
                throw new errors.SeedExhaustiveError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {number} request
     * @param {Primitive.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.endpoints.primitive.getAndReturnDouble(1.1)
     */
    public getAndReturnDouble(
        request: number,
        requestOptions?: Primitive.RequestOptions,
    ): core.HttpResponsePromise<number> {
        return core.HttpResponsePromise.fromPromise(this.__getAndReturnDouble(request, requestOptions));
    }

    private async __getAndReturnDouble(
        request: number,
        requestOptions?: Primitive.RequestOptions,
    ): Promise<core.WithRawResponse<number>> {
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)),
                "/primitive/double",
            ),
            method: "POST",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({ Authorization: await this._getAuthorizationHeader() }),
                requestOptions?.headers,
            ),
            contentType: "application/json",
            requestType: "json",
            body: serializers.endpoints.primitive.getAndReturnDouble.Request.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.endpoints.primitive.getAndReturnDouble.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedExhaustiveError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedExhaustiveError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.SeedExhaustiveTimeoutError("Timeout exceeded when calling POST /primitive/double.");
            case "unknown":
                throw new errors.SeedExhaustiveError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {boolean} request
     * @param {Primitive.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.endpoints.primitive.getAndReturnBool(true)
     */
    public getAndReturnBool(
        request: boolean,
        requestOptions?: Primitive.RequestOptions,
    ): core.HttpResponsePromise<boolean> {
        return core.HttpResponsePromise.fromPromise(this.__getAndReturnBool(request, requestOptions));
    }

    private async __getAndReturnBool(
        request: boolean,
        requestOptions?: Primitive.RequestOptions,
    ): Promise<core.WithRawResponse<boolean>> {
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)),
                "/primitive/boolean",
            ),
            method: "POST",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({ Authorization: await this._getAuthorizationHeader() }),
                requestOptions?.headers,
            ),
            contentType: "application/json",
            requestType: "json",
            body: serializers.endpoints.primitive.getAndReturnBool.Request.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.endpoints.primitive.getAndReturnBool.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedExhaustiveError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedExhaustiveError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.SeedExhaustiveTimeoutError("Timeout exceeded when calling POST /primitive/boolean.");
            case "unknown":
                throw new errors.SeedExhaustiveError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {Date} request
     * @param {Primitive.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.endpoints.primitive.getAndReturnDatetime(new Date("2024-01-15T09:30:00.000Z"))
     */
    public getAndReturnDatetime(
        request: Date,
        requestOptions?: Primitive.RequestOptions,
    ): core.HttpResponsePromise<Date> {
        return core.HttpResponsePromise.fromPromise(this.__getAndReturnDatetime(request, requestOptions));
    }

    private async __getAndReturnDatetime(
        request: Date,
        requestOptions?: Primitive.RequestOptions,
    ): Promise<core.WithRawResponse<Date>> {
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)),
                "/primitive/datetime",
            ),
            method: "POST",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({ Authorization: await this._getAuthorizationHeader() }),
                requestOptions?.headers,
            ),
            contentType: "application/json",
            requestType: "json",
            body: serializers.endpoints.primitive.getAndReturnDatetime.Request.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.endpoints.primitive.getAndReturnDatetime.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedExhaustiveError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedExhaustiveError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.SeedExhaustiveTimeoutError("Timeout exceeded when calling POST /primitive/datetime.");
            case "unknown":
                throw new errors.SeedExhaustiveError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {string} request
     * @param {Primitive.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.endpoints.primitive.getAndReturnDate("2023-01-15")
     */
    public getAndReturnDate(
        request: string,
        requestOptions?: Primitive.RequestOptions,
    ): core.HttpResponsePromise<string> {
        return core.HttpResponsePromise.fromPromise(this.__getAndReturnDate(request, requestOptions));
    }

    private async __getAndReturnDate(
        request: string,
        requestOptions?: Primitive.RequestOptions,
    ): Promise<core.WithRawResponse<string>> {
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)),
                "/primitive/date",
            ),
            method: "POST",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({ Authorization: await this._getAuthorizationHeader() }),
                requestOptions?.headers,
            ),
            contentType: "application/json",
            requestType: "json",
            body: serializers.endpoints.primitive.getAndReturnDate.Request.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.endpoints.primitive.getAndReturnDate.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedExhaustiveError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedExhaustiveError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.SeedExhaustiveTimeoutError("Timeout exceeded when calling POST /primitive/date.");
            case "unknown":
                throw new errors.SeedExhaustiveError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {string} request
     * @param {Primitive.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.endpoints.primitive.getAndReturnUuid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")
     */
    public getAndReturnUuid(
        request: string,
        requestOptions?: Primitive.RequestOptions,
    ): core.HttpResponsePromise<string> {
        return core.HttpResponsePromise.fromPromise(this.__getAndReturnUuid(request, requestOptions));
    }

    private async __getAndReturnUuid(
        request: string,
        requestOptions?: Primitive.RequestOptions,
    ): Promise<core.WithRawResponse<string>> {
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)),
                "/primitive/uuid",
            ),
            method: "POST",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({ Authorization: await this._getAuthorizationHeader() }),
                requestOptions?.headers,
            ),
            contentType: "application/json",
            requestType: "json",
            body: serializers.endpoints.primitive.getAndReturnUuid.Request.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.endpoints.primitive.getAndReturnUuid.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedExhaustiveError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedExhaustiveError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.SeedExhaustiveTimeoutError("Timeout exceeded when calling POST /primitive/uuid.");
            case "unknown":
                throw new errors.SeedExhaustiveError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {string} request
     * @param {Primitive.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.endpoints.primitive.getAndReturnBase64("SGVsbG8gd29ybGQh")
     */
    public getAndReturnBase64(
        request: string,
        requestOptions?: Primitive.RequestOptions,
    ): core.HttpResponsePromise<string> {
        return core.HttpResponsePromise.fromPromise(this.__getAndReturnBase64(request, requestOptions));
    }

    private async __getAndReturnBase64(
        request: string,
        requestOptions?: Primitive.RequestOptions,
    ): Promise<core.WithRawResponse<string>> {
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)),
                "/primitive/base64",
            ),
            method: "POST",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({ Authorization: await this._getAuthorizationHeader() }),
                requestOptions?.headers,
            ),
            contentType: "application/json",
            requestType: "json",
            body: serializers.endpoints.primitive.getAndReturnBase64.Request.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.endpoints.primitive.getAndReturnBase64.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedExhaustiveError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedExhaustiveError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.SeedExhaustiveTimeoutError("Timeout exceeded when calling POST /primitive/base64.");
            case "unknown":
                throw new errors.SeedExhaustiveError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Fiddle from "../../../../../../api";
import * as core from "../../../../../../core";

export const Request: core.serialization.Schema<
    serializers.endpoints.container.getAndReturnOptional.Request.Raw,
    Fiddle.types.ObjectWithRequiredField | undefined
> = core.serialization
    .lazyObject(async () => (await import("../../../../..")).types.ObjectWithRequiredField)
    .optional();

export declare namespace Request {
    type Raw = serializers.types.ObjectWithRequiredField.Raw | null | undefined;
}

export const Response: core.serialization.Schema<
    serializers.endpoints.container.getAndReturnOptional.Response.Raw,
    Fiddle.types.ObjectWithRequiredField | undefined
> = core.serialization
    .lazyObject(async () => (await import("../../../../..")).types.ObjectWithRequiredField)
    .optional();

export declare namespace Response {
    type Raw = serializers.types.ObjectWithRequiredField.Raw | null | undefined;
}
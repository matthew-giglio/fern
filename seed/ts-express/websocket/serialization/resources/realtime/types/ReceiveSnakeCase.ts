/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedWebsocket from "../../../../api/index";
import * as core from "../../../../core";

export const ReceiveSnakeCase: core.serialization.ObjectSchema<
    serializers.ReceiveSnakeCase.Raw,
    SeedWebsocket.ReceiveSnakeCase
> = core.serialization.object({
    receiveText: core.serialization.property("receive_text", core.serialization.string()),
    receiveInt: core.serialization.property("receive_int", core.serialization.number()),
});

export declare namespace ReceiveSnakeCase {
    export interface Raw {
        receive_text: string;
        receive_int: number;
    }
}

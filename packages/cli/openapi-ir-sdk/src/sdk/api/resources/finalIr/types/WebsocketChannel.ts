/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernOpenapiIr from "../../..";

export interface WebsocketChannel extends FernOpenapiIr.WithDescription {
    path: string;
    groupName: FernOpenapiIr.SdkGroupName[];
    summary: string | undefined;
    handshake: FernOpenapiIr.WebsocketHandshake;
    publish: FernOpenapiIr.Schema | undefined;
    subscribe: FernOpenapiIr.Schema | undefined;
}
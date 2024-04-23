/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const OAuthConfiguration: core.serialization.Schema<
    serializers.OAuthConfiguration.Raw,
    FernIr.OAuthConfiguration
> = core.serialization
    .union("type", {
        clientCredentials: core.serialization.lazyObject(async () => (await import("../../..")).OAuthClientCredentials),
    })
    .transform<FernIr.OAuthConfiguration>({
        transform: (value) => {
            switch (value.type) {
                case "clientCredentials":
                    return FernIr.OAuthConfiguration.clientCredentials(value);
                default:
                    return value as FernIr.OAuthConfiguration;
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace OAuthConfiguration {
    type Raw = OAuthConfiguration.ClientCredentials;

    interface ClientCredentials extends serializers.OAuthClientCredentials.Raw {
        type: "clientCredentials";
    }
}
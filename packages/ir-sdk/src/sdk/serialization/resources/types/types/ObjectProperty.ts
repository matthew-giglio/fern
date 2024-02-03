/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const ObjectProperty: core.serialization.ObjectSchema<serializers.ObjectProperty.Raw, FernIr.ObjectProperty> =
    core.serialization
        .objectWithoutOptionalProperties({
            name: core.serialization.lazyObject(async () => (await import("../../..")).NameAndWireValue),
            valueType: core.serialization.lazy(async () => (await import("../../..")).TypeReference),
        })
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).Declaration));

export declare namespace ObjectProperty {
    interface Raw extends serializers.Declaration.Raw {
        name: serializers.NameAndWireValue.Raw;
        valueType: serializers.TypeReference.Raw;
    }
}
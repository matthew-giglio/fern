/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernDefinition from "../../../index";

export interface OpenApiSettingsSchema extends FernDefinition.BaseApiSettingsSchema {
    /** Whether to only include schemas referenced by endpoints in the generated SDK (i.e. a form of tree-shaking). Defaults to false. */
    "only-include-referenced-schemas"?: boolean;
    /** Whether to include path parameters within the generated in-lined request. Defaults to false. */
    "inline-path-parameters"?: boolean;
    /** Whether to prefer undiscriminated unions with literals. Defaults to false. */
    "prefer-undiscriminated-unions-with-literals"?: boolean;
    /** Enables parsing deep object query parameters */
    "object-query-parameters"?: boolean;
    /** Enables exploring readonly schemas in OpenAPI specifications */
    "respect-readonly-schemas"?: boolean;
    /** Enables respecting forward compatible enums in OpenAPI specifications. Defaults to false. */
    "respect-forward-compatible-enums"?: boolean;
    /** Enables using the `bytes` type for binary responsesin OpenAPI specifications. Defaults to a file stream. */
    "use-bytes-for-binary-response"?: boolean;
    /** The default encoding of form parameters. Defaults to JSON. */
    "default-form-parameter-encoding"?: FernDefinition.FormParameterEncoding;
    /** Filter to apply to the OpenAPI specification. */
    filter?: FernDefinition.OpenApiFilterSchema;
    /** Fine-tune your example generation */
    "example-generation"?: FernDefinition.OpenApiExampleGenerationSchema;
    /** Configure what `additionalProperties` should default to when not explicitly defined on a schema. Defaults to `false`. */
    "additional-properties-defaults-to"?: boolean;
    /**
     * If true, convert strings with format date to strings.
     * If false, convert strings with format date to dates.
     * Defaults to true.
     */
    "type-dates-as-strings"?: boolean;
    /**
     * If true, preserve oneOf structures with a single schema.
     * If false, unwrap oneOf structures with a single schema.
     * Defaults to false.
     */
    "preserve-single-schema-oneof"?: boolean;
}

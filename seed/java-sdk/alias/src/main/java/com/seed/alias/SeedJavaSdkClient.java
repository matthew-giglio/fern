/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.alias;

import com.seed.alias.core.ClientOptions;

public class SeedJavaSdkClient {
    protected final ClientOptions clientOptions;

    public SeedJavaSdkClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    public static SeedJavaSdkClientBuilder builder() {
        return new SeedJavaSdkClientBuilder();
    }
}
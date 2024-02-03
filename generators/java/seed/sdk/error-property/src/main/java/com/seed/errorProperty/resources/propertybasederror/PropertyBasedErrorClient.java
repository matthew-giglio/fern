/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.errorProperty.resources.propertybasederror;

import com.seed.errorProperty.core.ApiError;
import com.seed.errorProperty.core.ClientOptions;
import com.seed.errorProperty.core.ObjectMappers;
import com.seed.errorProperty.core.RequestOptions;
import java.io.IOException;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.Request;
import okhttp3.Response;

public class PropertyBasedErrorClient {
    protected final ClientOptions clientOptions;

    public PropertyBasedErrorClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    /**
     * GET request that always throws an error
     */
    public String throwError() {
        return throwError(null);
    }

    /**
     * GET request that always throws an error
     */
    public String throwError(RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("property-based-error")
                .build();
        Request okhttpRequest = new Request.Builder()
                .url(httpUrl)
                .method("GET", null)
                .headers(Headers.of(clientOptions.headers(requestOptions)))
                .addHeader("Content-Type", "application/json")
                .build();
        try {
            Response response =
                    clientOptions.httpClient().newCall(okhttpRequest).execute();
            if (response.isSuccessful()) {
                return ObjectMappers.JSON_MAPPER.readValue(response.body().string(), String.class);
            }
            throw new ApiError(
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(response.body().string(), Object.class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
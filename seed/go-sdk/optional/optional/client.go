// Code generated by Fern. DO NOT EDIT.

package optional

import (
	context "context"
	core "github.com/optional/fern/core"
	internal "github.com/optional/fern/internal"
	option "github.com/optional/fern/option"
	http "net/http"
)

type Client struct {
	baseURL string
	caller  *internal.Caller
	header  http.Header

	WithRawResponse *RawClient
}

func NewClient(opts ...option.RequestOption) *Client {
	options := core.NewRequestOptions(opts...)
	return &Client{
		baseURL: options.BaseURL,
		caller: internal.NewCaller(
			&internal.CallerParams{
				Client:      options.HTTPClient,
				MaxAttempts: options.MaxAttempts,
			},
		),
		header:          options.ToHeader(),
		WithRawResponse: NewRawClient(options),
	}
}

func (c *Client) SendOptionalBody(
	ctx context.Context,
	request map[string]interface{},
	opts ...option.RequestOption,
) (string, error) {
	options := core.NewRequestOptions(opts...)
	baseURL := internal.ResolveBaseURL(
		options.BaseURL,
		c.baseURL,
		"",
	)
	endpointURL := baseURL + "/send-optional-body"
	headers := internal.MergeHeaders(
		c.header.Clone(),
		options.ToHeader(),
	)

	var response string
	if _, err := c.caller.Call(
		ctx,
		&internal.CallParams{
			URL:             endpointURL,
			Method:          http.MethodPost,
			Headers:         headers,
			MaxAttempts:     options.MaxAttempts,
			BodyProperties:  options.BodyProperties,
			QueryParameters: options.QueryParameters,
			Client:          options.HTTPClient,
			Request:         request,
			Response:        &response,
		},
	); err != nil {
		return "", err
	}
	return response, nil
}

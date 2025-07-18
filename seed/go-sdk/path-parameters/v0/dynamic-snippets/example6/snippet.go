package example

import (
    client "github.com/path-parameters/fern/client"
    option "github.com/path-parameters/fern/option"
    context "context"
    fern "github.com/path-parameters/fern"
)

func do() {
    client := client.NewClient(
        option.WithBaseURL(
            "https://api.fern.com",
        ),
    )
    client.User.SearchUsers(
        context.TODO(),
        "tenant_id",
        "user_id",
        &fern.SearchUsersRequest{
            Limit: fern.Int(
                1,
            ),
        },
    )
}

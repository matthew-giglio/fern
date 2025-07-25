# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

import pydantic
from ....core.pydantic_utilities import (
    IS_PYDANTIC_V2,
    UniversalBaseModel,
    universal_field_validator,
    universal_root_validator,
)


class BadObjectRequestInfo(UniversalBaseModel):
    message: str

    class Validators:
        """
        Use this class to add validators to the Pydantic model.

            @BadObjectRequestInfo.Validators.root()
            def validate(values: BadObjectRequestInfo.Partial) -> BadObjectRequestInfo.Partial:
                ...

            @BadObjectRequestInfo.Validators.field("message")
            def validate_message(message: str, values: BadObjectRequestInfo.Partial) -> str:
                ...
        """

        _pre_validators: typing.ClassVar[typing.List[BadObjectRequestInfo.Validators._PreRootValidator]] = []
        _post_validators: typing.ClassVar[typing.List[BadObjectRequestInfo.Validators._RootValidator]] = []
        _message_pre_validators: typing.ClassVar[typing.List[BadObjectRequestInfo.Validators.PreMessageValidator]] = []
        _message_post_validators: typing.ClassVar[typing.List[BadObjectRequestInfo.Validators.MessageValidator]] = []

        @typing.overload
        @classmethod
        def root(
            cls, *, pre: typing.Literal[False] = False
        ) -> typing.Callable[
            [BadObjectRequestInfo.Validators._RootValidator], BadObjectRequestInfo.Validators._RootValidator
        ]: ...
        @typing.overload
        @classmethod
        def root(
            cls, *, pre: typing.Literal[True]
        ) -> typing.Callable[
            [BadObjectRequestInfo.Validators._PreRootValidator], BadObjectRequestInfo.Validators._PreRootValidator
        ]: ...
        @classmethod
        def root(cls, *, pre: bool = False) -> typing.Any:
            def decorator(validator: typing.Any) -> typing.Any:
                if pre:
                    cls._pre_validators.append(validator)
                else:
                    cls._post_validators.append(validator)
                return validator

            return decorator

        @typing.overload
        @classmethod
        def field(
            cls, field_name: typing.Literal["message"], *, pre: typing.Literal[True]
        ) -> typing.Callable[
            [BadObjectRequestInfo.Validators.PreMessageValidator], BadObjectRequestInfo.Validators.PreMessageValidator
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls, field_name: typing.Literal["message"], *, pre: typing.Literal[False] = False
        ) -> typing.Callable[
            [BadObjectRequestInfo.Validators.MessageValidator], BadObjectRequestInfo.Validators.MessageValidator
        ]: ...
        @classmethod
        def field(cls, field_name: str, *, pre: bool = False) -> typing.Any:
            def decorator(validator: typing.Any) -> typing.Any:
                if field_name == "message":
                    if pre:
                        cls._message_pre_validators.append(validator)
                    else:
                        cls._message_post_validators.append(validator)
                return validator

            return decorator

        class PreMessageValidator(typing.Protocol):
            def __call__(self, __v: typing.Any, __values: BadObjectRequestInfo.Partial) -> typing.Any: ...

        class MessageValidator(typing.Protocol):
            def __call__(self, __v: str, __values: BadObjectRequestInfo.Partial) -> str: ...

        class _PreRootValidator(typing.Protocol):
            def __call__(self, __values: typing.Any) -> typing.Any: ...

        class _RootValidator(typing.Protocol):
            def __call__(self, __values: BadObjectRequestInfo.Partial) -> BadObjectRequestInfo.Partial: ...

    @universal_root_validator(pre=True)
    def _pre_validate_bad_object_request_info(
        cls, values: BadObjectRequestInfo.Partial
    ) -> BadObjectRequestInfo.Partial:
        for validator in BadObjectRequestInfo.Validators._pre_validators:
            values = validator(values)
        return values

    @universal_root_validator(pre=False)
    def _post_validate_bad_object_request_info(
        cls, values: BadObjectRequestInfo.Partial
    ) -> BadObjectRequestInfo.Partial:
        for validator in BadObjectRequestInfo.Validators._post_validators:
            values = validator(values)
        return values

    @universal_field_validator("message", pre=True)
    def _pre_validate_message(cls, v: str, values: BadObjectRequestInfo.Partial) -> str:
        for validator in BadObjectRequestInfo.Validators._message_pre_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("message", pre=False)
    def _post_validate_message(cls, v: str, values: BadObjectRequestInfo.Partial) -> str:
        for validator in BadObjectRequestInfo.Validators._message_post_validators:
            v = validator(v, values)
        return v

    if not IS_PYDANTIC_V2:

        class Config:
            extra = pydantic.Extra.ignore

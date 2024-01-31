# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

import typing_extensions

from .error_info import ErrorInfo
from .running_submission_state import RunningSubmissionState
from .workspace_run_details import WorkspaceRunDetails
from .workspace_traced_update import WorkspaceTracedUpdate

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore


class WorkspaceSubmissionUpdateInfo_Running(pydantic.BaseModel):
    type: typing_extensions.Literal["running"]
    value: RunningSubmissionState

    class Config:
        frozen = True
        smart_union = True


class WorkspaceSubmissionUpdateInfo_Ran(WorkspaceRunDetails):
    type: typing_extensions.Literal["ran"]

    class Config:
        frozen = True
        smart_union = True
        allow_population_by_field_name = True


class WorkspaceSubmissionUpdateInfo_Stopped(pydantic.BaseModel):
    type: typing_extensions.Literal["stopped"]

    class Config:
        frozen = True
        smart_union = True


class WorkspaceSubmissionUpdateInfo_Traced(pydantic.BaseModel):
    type: typing_extensions.Literal["traced"]

    class Config:
        frozen = True
        smart_union = True


class WorkspaceSubmissionUpdateInfo_TracedV2(WorkspaceTracedUpdate):
    type: typing_extensions.Literal["tracedV2"]

    class Config:
        frozen = True
        smart_union = True
        allow_population_by_field_name = True


class WorkspaceSubmissionUpdateInfo_Errored(pydantic.BaseModel):
    type: typing_extensions.Literal["errored"]
    value: ErrorInfo

    class Config:
        frozen = True
        smart_union = True


class WorkspaceSubmissionUpdateInfo_Finished(pydantic.BaseModel):
    type: typing_extensions.Literal["finished"]

    class Config:
        frozen = True
        smart_union = True


WorkspaceSubmissionUpdateInfo = typing.Union[
    WorkspaceSubmissionUpdateInfo_Running,
    WorkspaceSubmissionUpdateInfo_Ran,
    WorkspaceSubmissionUpdateInfo_Stopped,
    WorkspaceSubmissionUpdateInfo_Traced,
    WorkspaceSubmissionUpdateInfo_TracedV2,
    WorkspaceSubmissionUpdateInfo_Errored,
    WorkspaceSubmissionUpdateInfo_Finished,
]
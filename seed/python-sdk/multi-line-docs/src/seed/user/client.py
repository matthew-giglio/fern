# This file was auto-generated by Fern from our API Definition.

import typing
from ..core.client_wrapper import SyncClientWrapper
from .raw_client import RawUserClient
from ..core.request_options import RequestOptions
from .types.user import User
from ..core.client_wrapper import AsyncClientWrapper
from .raw_client import AsyncRawUserClient
# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)
class UserClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._raw_client = RawUserClient(client_wrapper=client_wrapper)
    
    @property
    def with_raw_response(self) -> RawUserClient:
        """
        Retrieves a raw implementation of this client that returns raw responses.
        
        Returns
        -------
        RawUserClient
        """
        return self._raw_client
    
    def get_user(self, user_id: str, *, request_options: typing.Optional[RequestOptions] = None) -> None:
        """
        Retrieve a user.
        This endpoint is used to retrieve a user.
        
        Parameters
        ----------
        user_id : str
            The ID of the user to retrieve.
            This ID is unique to each user.
        
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.
        
        Returns
        -------
        None
        
        Examples
        --------
        from seed import SeedMultiLineDocs
        
        client = SeedMultiLineDocs(
            base_url="https://yourhost.com/path/to/api",
        )
        client.user.get_user(
            user_id="userId",
        )
        """
        _response = self._raw_client.get_user(user_id, request_options=request_options)
        return _response.data
    
    def create_user(self, *, name: str, age: typing.Optional[int] = OMIT, request_options: typing.Optional[RequestOptions] = None) -> User:
        """
        Create a new user.
        This endpoint is used to create a new user.
        
        Parameters
        ----------
        name : str
            The name of the user to create.
            This name is unique to each user.
        
        age : typing.Optional[int]
            The age of the user.
            This property is not required.
        
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.
        
        Returns
        -------
        User
        
        Examples
        --------
        from seed import SeedMultiLineDocs
        
        client = SeedMultiLineDocs(
            base_url="https://yourhost.com/path/to/api",
        )
        client.user.create_user(
            name="name",
            age=1,
        )
        """
        _response = self._raw_client.create_user(name=name, age=age, request_options=request_options)
        return _response.data
class AsyncUserClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._raw_client = AsyncRawUserClient(client_wrapper=client_wrapper)
    
    @property
    def with_raw_response(self) -> AsyncRawUserClient:
        """
        Retrieves a raw implementation of this client that returns raw responses.
        
        Returns
        -------
        AsyncRawUserClient
        """
        return self._raw_client
    
    async def get_user(self, user_id: str, *, request_options: typing.Optional[RequestOptions] = None) -> None:
        """
        Retrieve a user.
        This endpoint is used to retrieve a user.
        
        Parameters
        ----------
        user_id : str
            The ID of the user to retrieve.
            This ID is unique to each user.
        
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.
        
        Returns
        -------
        None
        
        Examples
        --------
        import asyncio
        
        from seed import AsyncSeedMultiLineDocs
        
        client = AsyncSeedMultiLineDocs(
            base_url="https://yourhost.com/path/to/api",
        )
        
        
        async def main() -> None:
            await client.user.get_user(
                user_id="userId",
            )
        
        
        asyncio.run(main())
        """
        _response = await self._raw_client.get_user(user_id, request_options=request_options)
        return _response.data
    
    async def create_user(self, *, name: str, age: typing.Optional[int] = OMIT, request_options: typing.Optional[RequestOptions] = None) -> User:
        """
        Create a new user.
        This endpoint is used to create a new user.
        
        Parameters
        ----------
        name : str
            The name of the user to create.
            This name is unique to each user.
        
        age : typing.Optional[int]
            The age of the user.
            This property is not required.
        
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.
        
        Returns
        -------
        User
        
        Examples
        --------
        import asyncio
        
        from seed import AsyncSeedMultiLineDocs
        
        client = AsyncSeedMultiLineDocs(
            base_url="https://yourhost.com/path/to/api",
        )
        
        
        async def main() -> None:
            await client.user.create_user(
                name="name",
                age=1,
            )
        
        
        asyncio.run(main())
        """
        _response = await self._raw_client.create_user(name=name, age=age, request_options=request_options)
        return _response.data

# Errors

Below are the types of errors that the API has standardized on.

### 400: Bad Request
Usually indicates a client error i.e. not specifying the arguments correctly.

### 401: Unathorized

### 403: Forbidden


### 404: Not Found

### 415: Unsupported Media Type
For POST, PUT, and DELETE requests with a non-empty request body, the `Content-Type` header is required and should be "application/json". If the header is missing or does not specify a JSON content type, the request will be rejected with an HTTP status code of 415.
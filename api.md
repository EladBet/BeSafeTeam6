## Users

GET `/users/:id`
Returns with info about the user (JSON).

POST `/users/signup`
Registers a new user into the database.

POST `/users/login`
Returns a JWT signed by the server.

## Ratings

GET `/ratings`
Returns all existing ratings (JSON).

GET `/ratings/:id`
Returns a specifig rating (JSON).

POST `/ratings/new`
Adds a new rating to the DB.
A valid JWT must be used as a bearer token,
otherwise the server will reject the request.

## Fashion Brands

GET `/brands`
Returns all fashion brands in the DB, including their final ratings (JSON).

GET `/brands/:brand`
Returns the rating of a specific fashion brand (JSON).

POST `/brands/add`
Lets user ask us to add a new fashion brand to the system.
The request should be added to the database and be processed manually.
The endpoint should just return staus 200 saying "request registered blah blah".
A valid JWT must be used as a bearer token,
otherwise the server will reject the request.

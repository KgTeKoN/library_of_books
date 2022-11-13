npm run start - to start the server
npm run compose - to create the database
npm run migrate - to create tables

http://localhost:5555/api/v1/auth/sign-up - POST endpoint for sign up. You must send body with properties:
                                            { "username": "your_user_name",
                                              "password": "your_password",
                                              "first_name": "your_first_name",
                                              "last_name": "your_last_name" }

http://localhost:5555/api/v1/auth/sign-in - POST endpoint for sign in. You must send body with properties:
                                            { "username": "your_user_name",
                                              "password": "your_password" }

http://localhost:5555/api/v1/get-status?username=your_user_name - GET endpoint for receiving user status.

http://localhost:5555/api/v1/change-status?username=your_user_name&status=new_status - PATCH endpoint for changing user status. 

http://localhost:5555/api/v1/auth/get-user?username=your_user_name - GET endpoint for receiving user information.

http://localhost:5555/api/v1/get-all-users  - GET endpoint for receiving all users information.

http://localhost:5555/api/v1/update-user?username=your_user_name - PATCH endpoint for updating user information. You must send body with properties:
                                                                        { "username": "your_user_name",
                                                                        "password": "your_password",
                                                                        "first_name": "your_first_name",
                                                                        "last_name": "your_last_name" }
                                                                    all properties are not required

http://localhost:5555/api/v1/delete-user?username=your_user_name - DELETE endpoint for deleting user.

http://localhost:5555/api/v1/get-book?title=book_title - GET endpoint for receiving book information.

http://localhost:5555/api/v1/get-all-books - GET endpoint for receiving all books information.

http://localhost:5555/api/v1/create-book  - POST endpoint for creating book. You must send body with properties:
                                            { "title": "book_title",
                                            "author": "book_author",
                                            "year": "year"}

http://localhost:5555/api/v1//update-book - PATCH endpoint for updating book. You must send body with properties:
                                            { "title": "book_title",
                                            "author": "book_author",
                                            "year": "year"} all properties are not required

http://localhost:5555/api/v1/delete-book?title=book_title - DELETE endpoint for deleting user.

http://localhost:5555/api/v1/get-favorite-books - GET endpoint for receiving all favorite books information.

http://localhost:5555/api/v1/add-favorite-book - POST endpoint for adding favorite book. You must send body with properties:
                                                { "username": "your_user_name",
                                                "title": "book_title"}

http://localhost:5555/api/v1/delete-favorite-book?username=your_user_name&title=title  - DELETE endpoint for deleting favorite book.

http://localhost:5555/api/v1/auth/activate - GET endpoint for log in. You must input "accessToken" in the header.

http://localhost:5555/api/v1/auth/refresh - GET endpoint for creating new access token. You must input "refreshToken" in the header.

http://localhost:5555/api/v1/auth/logout - GET endpoint for log out. You must input "accessToken" in the header.



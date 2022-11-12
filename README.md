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


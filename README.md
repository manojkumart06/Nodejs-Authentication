# Node.js Authentication System

This project provides a complete authentication system that can be used as a starter code for creating new applications. It includes features such as email sign-up, sign-in, sign-out, password reset, and social authentication with Google. The code is well-commented and follows a scalable folder structure.

## Table of Contents

- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Configuration](#configuration)
- [Usage](#usage)
- [Features](#features)
- [Notes](#notes)
- [Contributing](#contributing)
- [License](#license)

## Installation

Follow these steps to set up the project on your local system:

1. Clone the repository:

   git clone U7ON2T3WH57MMMMARVQHT5IOLB7ZDXOHFXAUEB3CQRDA66KLDUX3RXPE5E

2. Navigate to the project folder:

 cd your-repo

3. Install dependencies:

    npm install
   
4. Usage
    Run the application with the following command:

    npm start

    Visit http://localhost:8001 in your web browser to access the application.

## Features
    Sign Up: Create a new account using email.
    Sign In: Log in with your registered email and password.
    Sign Out: Log out of the current session.
    Reset Password: Reset the password after signing in.
    Social Authentication: Sign up or log in using Google.
    Forgot Password (Bonus Feature): Option to reset password via email or a reset password link.

## Notes
Do not commit sensitive information such as passwords to the repository.
The project uses Passport.js for session management. Other functionalities are built in-house.
Display notifications for unmatching passwords during sign up and incorrect passwords during sign in.
Recaptcha can be enabled for both sign up and log in for additional security.

## Contributing
Feel free to contribute to the project by opening issues or submitting pull requests.

## License
This project is licensed under the MIT License.
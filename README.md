# PeerWise

The Peer Tutoring Network is a web application designed to facilitate peer-to-peer tutoring services, allowing students to connect with knowledgeable peers for personalized tutoring assistance in various subjects. This README provides an overview of the project, including its features, setup instructions, and contribution guidelines.

## Features

User Authentication: Secure user authentication system allowing students and tutors to register and log in to the platform.\
Tutor Search: Students can search for tutors based on subjects and availability.\
Session Scheduling: Students and tutors can schedule tutoring sessions at convenient times.\
Feedback System: Enables both tutors and students to leave feedback after tutoring sessions.\
Payment Integration: Facilitates payments if tutors charge for their services.

## Tech Stack

Backend: Django (Python web framework)\
Frontend: React (JavaScript library)\
Database: PostgreSQL\
API Communication: Axios (Promise-based HTTP client for the browser and Node.js)\
Additional Tools: Django REST Framework, django-cors-headers (for handling CORS), React Router (for client-side routing)

## Setup Instructions

### Clone the Repository:

git clone https://github.com/your-username/peer-tutoring-network.git \
cd peer-tutoring-network

### Backend Setup:

Navigate to the backend directory and create a virtual environment.
Install dependencies using pip install -r requirements.txt.
Run migrations: python manage.py migrate.
Start the Django development server: python manage.py runserver.

### Frontend Setup:

Navigate to the frontend directory.
Install dependencies using npm install.
Start the React development server: npm start.

### Database Configuration:

Update the database settings in backend/settings.py to connect to your PostgreSQL database.
Accessing the Application:

Once both the backend and frontend servers are running, you can access the application at http://localhost:3000 in your web browser.

## Contributing

Contributions are welcome! If you'd like to contribute to the Peer Tutoring Network project, please follow these steps:

Fork the repository and create a new branch for your feature or bug fix.
Make your changes and ensure that the code follows the project's coding conventions.
Write tests to cover your changes, if applicable.
Submit a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License.

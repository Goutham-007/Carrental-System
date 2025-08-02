🚗 Car Rental Management System

A full-stack Car Rental platform built with Spring Boot and React, enabling users to browse, book, and manage car rentals with authentication and admin control.

Author

J Goutham Raj 

Tech Stack

Backend:Spring Boot (Java), Spring Security, JWT, REST APIs
Frontend:React.js, Material UI
Database:MySQL
Authentication: JWT Token-based with role-based access control (Admin/User)

Features

User
Register/Login (JWT-based)
Browse available cars (with images)
Book cars with custom duration
View and cancel their bookings

Admin
Add new cars with details and image URLs
View all users and their bookings
Delete or update car entries

Backend Setup

cd Backend
./mvnw spring-boot:run

Set your MySQL credentials in application.properties

Frontend Setup

cd ../Frontend

npm run dev
Frontend will run at: http://localhost:5173

Folder Structure

Carrental-System

 Backend       → Spring Boot backend (REST APIs, JWT, DB)
 
 Frontend/      → React frontend (UI & API integration)
 
 API Endpoints
| Method | Endpoint                  | Description                   | Role       |
| ------ | ------------------------- | ----------------------------- | ---------- |
| POST   | `/api/auth/login`         | User/admin login              | Public     |
| POST   | `/api/auth/register`      | User registration             | Public     |
| GET    | `/api/cars`               | Get all available cars        | USER/ADMIN |
| POST   | `/api/bookings`           | Book a car                    | USER       |
| GET    | `/api/bookings/user/{id}` | Get bookings for a user       | USER       |
| GET    | `/api/bookings`           | Get all bookings (admin only) | ADMIN      |
| POST   | `/api/cars`               | Add a new car                 | ADMIN      |
| DELETE | `/api/cars/{id}`          | Delete a car                  | ADMIN      |
| PUT    | `/api/cars/{id}`          | Update car details            | ADMIN      |


 Snapshots

 Home Page
 <img width="1913" height="878" alt="image" src="https://github.com/user-attachments/assets/ef1de11a-cf70-4a93-8185-c519ce85fc35" />

 Register
 <img width="1910" height="898" alt="image" src="https://github.com/user-attachments/assets/873e7bc8-4188-43ba-9fb7-bb20a69afdef" />

 Login
 <img width="1911" height="875" alt="image" src="https://github.com/user-attachments/assets/2f2b1358-0205-4829-9b3d-418b2dbd8e74" />
 
 Admin Page
 <img width="1917" height="892" alt="image" src="https://github.com/user-attachments/assets/708efaff-37bd-4a0b-ac21-1a853de0f62f" />

 Admin bookings view
 <img width="1919" height="426" alt="image" src="https://github.com/user-attachments/assets/0941f330-d4b5-4278-b4a4-55dc06a108f2" />

 User booking
 <img width="1902" height="790" alt="image" src="https://github.com/user-attachments/assets/2f759b1f-72c5-4436-9b3d-2b157d648327" />

 User booking view
 <img width="1912" height="478" alt="image" src="https://github.com/user-attachments/assets/db4962ff-c9df-44a7-93d4-1ff399ab77a7" />






 



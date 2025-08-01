🚗 Car Rental Management System

A full-stack Car Rental platform built with Spring Boot and React, enabling users to browse, book, and manage car rentals with authentication and admin control.

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


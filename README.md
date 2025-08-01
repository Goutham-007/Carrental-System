 Car Rental Management System

A full-stack web application for car rentals, built with React (frontend) and Spring Boot (backend)
It supports user and admin roles, secure login, car bookings, and car listings with images.

Tech Stack

Frontend: React, Vite, Material UI
Backend: Spring Boot, Spring Security, JWT
Database: MySQL
Auth: JWT-based authentication & role-based authorization
Tools: Axios, Git, GitHub

Features

User
Register / Login
View available cars
Book cars
View own bookings

Admin
Login
Add/edit/delete cars (with image URLs)
View all bookings across users

How to Run

Backend (Spring Boot)
 
cd backend/carrental
./mvnw spring-boot:run

DataBase

Configure your DB credentials in application.properties

Frontend (React)
 
cd frontend/carrental
npm install
npm run dev

Folder Structure

Carrental-System/
backend
|
carrental/   # Spring Boot app


frontend
|
carrental/   # React app

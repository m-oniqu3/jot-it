# Jot - Jot it down

Introducing Jot: Your Simple and Intuitive Note-taking App

Jot is a user-friendly notes app designed to help you capture your thoughts, ideas, and inspirations effortlessly. With Jot, you can quickly jot down anything that comes to mind, organize your notes into categories, and keep your ideas neatly structured. Jot is a simple and intuitive app that allows you to focus on what matters most: your thoughts and ideas.

![home page](/public/images/home.png)

## Description

Jot is a full-stack note-taking web application built with Node.js, Express, and MongoDB. It uses the MVC design pattern and RESTful API architecture. It leverages the power of HTML, CSS, and JavaScript on the frontend to provide a minimal and user-friendly interface. The back-end is built with Node.js and Express. The database is MongoDB.

## Motivation

Jot was developed with the purpose of honing my skills as a frontend developer transitioning into full-stack development. I wanted to build a simple and intuitive note-taking app that I can use to jot down my thoughts and ideas. I also wanted to build a project that would allow me to put into practice all the concepts and techniques I had learned. By building Jot, I was able to demonstrate my commitment to continuous learning and growth, as well as showcase my ability to apply my knowledge to develop a real-world application. It was a valuable opportunity to broaden my skill set and become a well-rounded developer.

## Features

- Create, read, and delete notes
- Organize notes into categories
- User authentication and authorization
- Responsive design

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express, Express Handlebars
- MongoDB
- Mongoose
- JSON Web Token
- bcryptjs

## Design File

[Figma Design File](https://www.figma.com/file/W3V45bWBNuW3P9yrhA4oOb/jot-notes?type=design&node-id=160%3A143&t=3Xdd5FOLE14G4Tps-1)

## Screenshots

![home page](/public/images/home.png)
![login page](/public/images/login.png)
![welcome page](/public/images/welcome.png)
![create page](/public/images/create.png)
![dashboard](/public/images/dashboard.png)
![details page](/public/images/details.png)

## Installation

1. Clone the repo

   ```sh
   git clone

   ```

2. Install NPM packages
   ```sh
    npm install
   ```
3. Create a .env file in the root directory and add the following environment variables

   ```sh
   DB_URL=your_mongodb_url
   JWT_SECRET=your_secret_key
   JWT_EXPIRES_IN=your_expires_in
   COOKIE_EXPIRES_IN=your_expires_in
   ```

4. Run the app
   ```sh
   npm start
   ```
5. Open your browser and go to http://localhost:4000

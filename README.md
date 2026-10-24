# IT313 Lab 4 – Student Roster

## Description

This project is a React Native application built with Expo. It displays student information using reusable components, props, and JSX.

## Features

- Displays each student's name, course, and enrolled units.
- Shows “Full Load” for students who qualify.
- Uses props to pass student information to the `StudentCard` component.
- Uses `.map()` to display all students in the roster.
- Displays the total number of students.

## Requirements

- Node.js
- Expo Go on a mobile device, or an Android emulator
- Project dependencies installed

## How to Run the Project

1. Open the project folder in Visual Studio Code.
2. Open the terminal in Visual Studio Code.
3. Install the required dependencies by running:

   ```bash
   npm install
   ```

4. Start the Expo development server:

   ```bash
   npx expo start
   ```

5. Wait for the QR code to appear in the terminal or browser.
6. Open Expo Go on your mobile device and scan the QR code. Make sure your computer and phone are connected to the same Wi-Fi network.
7. Wait for the application to load and display the student roster.

### Running on an Emulator

If you have an Android emulator set up, start it and press `a` in the Expo terminal to open the application.

## Components

- **StudentCard:** Displays an individual student's information.
- **Student Roster (`index.tsx`):** Stores the student data and renders a card for each student.

## Concepts Learned

- React Native components
- JSX
- Props
- Conditional rendering
- Rendering lists with `.map()`
- Using unique keys for list items

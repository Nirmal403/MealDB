# MealDB
VGTS technical task
# Meal Ordering App

This project is an interactive web application for browsing meals, viewing meal details, and making purchases. It utilizes the MealDB API for fetching meal data, Ant Design (Antd) UI for front-end development, and Redux for state management.

## Features

1. List meals in card view with name filter.
2. View complete meal data including ingredients and descriptions.
3. Checkout feature to capture shipping and contact information.
4. Purchase button to complete the order.
5. Order status displayed after purchase.
6. Automatic removal of user's shipping information and order details on refresh, redirecting to the home page.

## Technologies Used

- React.js
- Redux
- Ant Design (Antd) UI
- MealDB API

## Project Structure

The project follows the standard React.js project structure with Redux for state management. Here's a brief overview:

- `src/components`: Contains all the React components.
- `src/actions`: Redux action creators.
- `src/reducers`: Redux reducers.
- `src/store`: Redux store configuration.
- `src/api`: Functions to interact with the MealDB API.
- `public`: Public assets and HTML template.

## Setup Instructions

1. Clone the repository: `git clone https://github.com/Nirmal403/MealDB.git`.
2. Navigate to the project directory: `cd mealdb`.
3. Install dependencies: `npm install`.
4. Start the development server: `npm start`.

## Usage

1. Home Page:
   - Browse meals in card view.
   - Filter meals by name.

2. Meal Details Page:
   - Click on a meal card to view complete details.
   - View ingredients and descriptions.
   - Enter shipping and contact information.
   - Click the purchase button to complete the order.

3. Order Confirmation Page:
   - Display complete order information.
   - Status of the order as "Purchased".

## Contributors

- [Nirmal C](https://github.com/Nirmal403)


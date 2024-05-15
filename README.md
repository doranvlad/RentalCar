# Car Rental Application

This is a React application for a car rental company in Ukraine. The application consists of three main pages:

## Pages

1. **Home Page**: Provides a general overview of the services offered by the company.
2. **Catalog Page**: Displays a catalog of cars available for rent, with options to filter by brand, hourly rental price, and mileage.
3. **Favorites Page**: Displays a list of advertisements that the user has added to their favorites.

## Technical Requirements

- The application must render 12 advertisements on the catalog page initially, with the option to load more.
- Users can add advertisements to their favorites list by clicking a heart-shaped button on the advertisement card. The button's color should change to indicate the status.
- The favorites list should persist across page refreshes.
- Clicking on the "Learn more" button on an advertisement card should open a modal window with detailed information about the car and rental conditions.
- The modal window should close when the user clicks the close button, clicks outside the modal, or presses the Esc key.
- The mileage of the car should be displayed with commas (e.g., 4,500).
- The "Rental car" button should act as a link to allow users to contact the company via phone at +380730000000.
- Implement filtering by car brand using a dropdown menu populated from makes.json.
- Use React Router for routing with the following routes:
  - `/`: Home page
  - `/catalog`: Catalog page
  - `/favorites`: Favorites page
  - Non-existing routes should redirect to the home page.
- Implement pagination with 12 advertisements per page. Pagination should be handled on the backend side.

## Additional Features

- Implement filtering by hourly rental price using a dropdown menu with $10 increments.
- Implement filtering by mileage range using input fields.

## Technical Details

- The backend is simulated using MockAPI.
- Redux is used for state management.
- Axios is used for making requests.
- The project is styled using CSS according to the provided design.
- The project is deployed on GitHub Pages or Netlify.

## Installation and Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm run dev`.
4. Access the application in your browser at `http://localhost:3000`.

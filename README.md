# Shome - Furniture E-commerce React Application

A modern and responsive furniture e-commerce website built with React.

## Features

- Responsive design for all device sizes
- Product catalog with filtering and sorting
- Detailed product pages
- Shopping cart functionality
- User authentication (login/register)
- Blog section
- Wishlist management

## Tech Stack

- React.js
- React Router for navigation
- React Bootstrap for UI components
- React Icons for icons
- CSS for styling

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository

```
git clone <repository-url>
```

2. Navigate to the project directory

```
cd shome-react
```

3. Install dependencies

```
npm install
```

4. Start the development server

```
npm start
```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000)

## Project Structure

```
shome-react/
├── public/
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable components
│   ├── data/            # Dummy data
│   ├── pages/           # Page components
│   ├── context/         # React context for state management
│   ├── App.js           # Main app component
│   └── index.js         # Application entry point
└── package.json
```

## Backend Integration

This project is currently using dummy data for demonstration purposes. To integrate with a backend:

1. Replace the static data imports with API calls
2. Implement API services in a separate folder (e.g., `src/services/`)
3. Use environment variables for API URLs
4. Update state management to handle asynchronous data fetching

## Deployment

To build the project for production:

```
npm run build
```

This will create a `build` folder with optimized production build.

## License

This project is licensed under the MIT License.

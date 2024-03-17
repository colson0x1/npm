# NPM (Node Package Manager) Application

## Introduction

Welcome to the NPM (Node Package Manager) application! This repository contains a web application built with React and TypeScript, leveraging React Router for navigation and data fetching. The application allows users to browse and search for packages available in the NPM registry.

![npm](https://i.imgur.com/glpu30c.png)

## Features

- **React Router for Navigation:** The application utilizes React Router for client-side routing. This ensures seamless navigation between different views without the need for page reloads.

- **Data Fetching with React Router:** Data fetching is seamlessly integrated into the application using React Router. By defining loader functions for each route, the application fetches data as the user navigates through different pages.

- **Responsive Design:** The application is designed to be responsive, ensuring a consistent user experience across various devices and screen sizes.

## Application Architecture

The NPM application follows a modular architecture, with components organized into pages, loaders, and API queries.

### Pages

- **Root Page (`/`):** The root page serves as the entry point of the application. It displays a header component and dynamically renders child components based on the current route.

- **Home Page (`/home`):** The home page displays a list of featured packages fetched from the NPM registry. Each package is represented as a clickable item that redirects users to the corresponding details page.

- **Search Page (`/search`):** The search page allows users to search for packages by entering keywords. Search results are dynamically fetched and displayed as a list of package summaries.

- **Details Page (`/packages/:name`):** The details page provides detailed information about a specific package, including its name, description, license, author, maintainers, and repository URL.

### Loaders

- **Home Loader:** Fetches featured packages data for the home page.

- **Search Loader:** Fetches search results based on user-entered keywords.

- **Details Loader:** Fetches package details data for the details page.

### Components

- **Header Component:** Displays a header with the application name and a search input for searching packages.

- **Package List Item Component:** Represents an individual package in list format, used in both the home page and search results.

## Best Practices

- **Client-Side Routing:** React Router is utilized for client-side routing, providing a smooth and responsive user experience.

- **Data Fetching Patterns:** React Router's built-in data fetching capabilities are leveraged for small to medium-sized applications. For larger applications with more complex data management requirements, Redux Toolkit Query is recommended.

- **Modular Codebase:** The application is structured into reusable components, promoting code maintainability and scalability.

## Getting Started

To run the NPM application locally, follow these steps:

1. Clone this repository to your local machine.

   ```bash
   git clone https://github.com/colson0x1/npm.git
   ```

2. Navigate to the project directory.

   ```bash
   cd npm
   ```

3. Install dependencies using npm or yarn.

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. Start the development server.

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

5. Open your browser and visit [http://localhost:5173](http://localhost:5173) to view the application.

## Acknowledgments

Special thanks to the creators of React, React Router, NPM, and other open-source libraries used in this project.

---

## Screenshots

![npm](https://i.imgur.com/glpu30c.png)

![npm](https://i.imgur.com/NHcenEL.png)

![npm](https://i.imgur.com/8PqGPtk.png)

![npm](https://i.imgur.com/rF9sETk.png)

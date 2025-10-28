# 05_thirsty_12345678 - Thirsty Student Shop (Lab 5)

This application is the "Thirsty Student Shop" web server, built with Node.js and the Express framework. It demonstrates the use of the EJS templating engine, form handling for both GET and POST methods, and static file serving as required for Lab 5.

This project successfully implements:
* **EJS Templating**: All pages are rendered dynamically using EJS templates.
* **Dynamic Data**: Passes JavaScript data (like shop name, product categories, and shop locations) to the templates.
* **Static File Serving**: Serves the `style.css` file from a `public` directory.
* **GET Form Handling**: A search form that submits data via a URL query string.
* **POST Form Handling**: A register form and a survey form that submit data in the request body.
* **Extension Tasks**: Includes a styled survey, shop locations page, and server-side email validation.

## Technologies Used

* **Node.js**: The JavaScript runtime environment.
* **Express.js**: The web framework used for the server and routing.
* **EJS**: The "Embedded JavaScript" templating engine.

## How to Install and Run Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Vnturo/05_thirsty_33828139
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd 05_thirsty_33828139
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Start the server:**
    ```bash
    node index.js
    ```
5.  **View in browser:**
    The server will be running at `http://localhost:8000`.

## Available Routes

The application is deployed on the university VM and is accessible at the base URL:
**`http://www.doc.gold.ac.uk/usr/201/`**

The following routes are available:

| Route | Method | Description |
| :--- | :--- | :--- |
| `/` | `GET` | Displays the home page with a dynamic shop name and product list. |
| `/about` | `GET` | (Extension) Displays the about page with a dynamic list of shop locations. |
| `/search` | `GET` | Displays the search form. |
| `/search_result` | `GET` | Displays the results from the search form. |
| `/register` | `GET` | Displays the user registration form. |
| `/registered` | `POST` | Handles the registration form submission and validates the email. |
| `/survey` | `GET` | (Extension) Displays the customer survey form. |
| `/survey_results` | `POST` | (Extension) Handles the survey form submission and displays the results. |

## Project Structure

* `index.js`: The main server file. It imports Express/EJS, sets the port (8000), configures middleware (`urlencoded`, `static`), loads routes, and starts the server.
* `routes/main.js`: Contains all the Express route handlers (`router.get`, `router.post`). Also defines the global `shopData` object.
* `views/`: This directory contains all EJS templates.
    * `index.ejs`: Home page template.
    * `about.ejs`: About page template.
    * `search.ejs`: Search form page.
    * `search_result.ejs`: Search results page.
    * `register.ejs`: Registration form page.
    * `registered.ejs`: Registration status/result page.
    * `survey.ejs`: (Extension) Survey form page.
    * `survey_results.ejs`: (Extension) Survey results page.
* `public/`: (Extension) This directory contains all static assets.
    * `style.css`: The stylesheet used across all pages.
* `links.txt`: (Submission) Contains the single link to the deployed application for marking.
* `package.json`: Lists project dependencies (Express, EJS).
* `.gitignore`: Instructs Git to ignore the `node_modules` folder.
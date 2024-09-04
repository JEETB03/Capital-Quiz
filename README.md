# Capital City Quiz

## Description

The Capital City Quiz is a web-based application that tests users' knowledge of world capitals. The application selects a random country and prompts the user to enter the corresponding capital city. The user's score is tracked and displayed throughout the game. The quiz data is dynamically fetched from a PostgreSQL database.

## Features

- **Randomized Questions**: The quiz pulls random country-capital pairs from the database.
- **Score Tracking**: Users' correct answers are counted, and the total score is displayed.
- **Immediate Feedback**: Users receive feedback on whether their answer was correct.
- **Database Integration**: The quiz questions are stored and fetched from a PostgreSQL database.

## Technologies Used

- **Node.js**: Backend JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **PostgreSQL**: Relational database for storing quiz questions.
- **EJS**: Embedded JavaScript templating for rendering HTML.
- **CSS**: Styling for the frontend.

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- PostgreSQL installed and running.

### Steps

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/capital-city-quiz.git
    cd capital-city-quiz
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up the PostgreSQL database**:
    - Create a database named `world`.
    - Create a table named `capitals` with columns `country` (VARCHAR) and `capital` (VARCHAR).
    - Insert country-capital pairs into the `capitals` table.

4. **Update database credentials**:
    - Open `server.js` and update the database connection details (`user`, `password`, etc.) with your own.

5. **Run the application**:
    ```bash
    npm start
    ```
    The server will start at `http://localhost:3000`.

## Usage

- Navigate to `http://localhost:3000` in your web browser.
- The quiz will display a country, and you should enter the capital city in the input box.
- Submit your answer and receive immediate feedback.
- The total score is displayed and updated after each submission.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.


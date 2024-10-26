# Creating the README content as a string
readme_content = """
# ScreenScore

**ScreenScore** is a movie management application built with React that allows users to add, delete, and organize movies based on their titles and ratings. The application features a user-friendly interface that enhances the experience of managing a personal movie collection.

## Features

- **Add Movies:** Users can easily add movies with titles and ratings.
- **Delete Movies:** Users can remove movies from their collection.
- **Sort Movies:** Movies can be sorted by title or rating for better organization.
- **Responsive Design:** The application is built using React Bootstrap for a responsive and visually appealing layout.

## Technology Stack

- **Language:** JavaScript (ES6+)
- **Framework:** React
- **Styling:** Bootstrap
- **State Management:** React's useState hook

## Components

### 1. `AddMovieForm`

This component provides a form for adding new movies. Users can input the movie title and select a rating from a dropdown menu. The form validates input to ensure that the title and rating are provided before submission.

### 2. `Movie`

The `Movie` component displays individual movie items, showcasing the title and a star rating based on the movie's rating. It also includes a delete icon to remove the movie from the list.

### 3. `App`

The main component of the application that holds the overall state and manages the movies. It includes functionality to:
- Add a new movie.
- Delete an existing movie.
- Order movies by name or rating.

## Getting Started

### Prerequisites

- Ensure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DonLealGUA/ScreenScore/
2. Navigate to the project directory:
     ```bash
   cd screen-score
3. Install the necessary dependencies:
    ```bash
   npm install
### Running the Application
To start the application, run:
   ```bash
   npm start

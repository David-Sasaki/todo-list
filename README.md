# TODO List Management App

This is a simple TODO list management app built with React and TypeScript. It allows users to create multiple TODO lists arranged in an MxN grid, where M and N are customizable. Each TODO list contains items that can be added, edited, deleted, and moved within and between lists.

## Features

- Create multiple TODO lists arranged in an MxN grid.
- Add new items to each TODO list.
- Edit existing items.
- Delete selected items.
- Move items within and between TODO lists:
  - Move UP
  - Move DOWN
  - Move LEFT
  - Move RIGHT

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/David-Sasaki/todo-list.git
   ```
2. Navigate to the project directory:

   ```bash
   cd todo-list
   ```
3. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Start the development server: `npm start`
2. Open your web browser and visit `http://localhost:3000` to view the app.
3. Customize the number of `rows` and `columns` for the TODO list grid by modifying the `rows` and `columns` props in the `App` component located at `src/App.tsx`.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## Acknowledgements

- This project was created with [Create React App](https://create-react-app.dev/).
- Icons used in the app are from [FontAwesome](https://fontawesome.com/).

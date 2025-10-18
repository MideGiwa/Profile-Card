# Profile Card Component

This project implements a fully functional, accessible, and testable Profile Card component using semantic HTML, CSS (Flexbox for responsiveness), and vanilla JavaScript. It is designed to display user information, social links, hobbies, and dislikes, adapting its layout gracefully across various screen sizes.

## 🎯 Features

- **Semantic HTML**: Uses appropriate HTML5 tags for better structure and accessibility.
- **Responsive Design**: Leverages Flexbox to ensure the layout looks clean and functional on mobile, tablet, and desktop screens.
- **Accessibility**:
    - All interactive elements are keyboard-navigable.
    - Social links open in new tabs with `target="_blank"` and `rel="noopener noreferrer"`.
    - Avatar image includes an `alt` attribute.
    - Clear focus styles for interactive elements.
- **Testability**: Includes specific `data-testid` attributes on all required elements for automated testing.
- **Dynamic Content**: Displays the current time in milliseconds, updated every second using JavaScript.

## 🚀 Setup Instructions

To get this project up and running, follow these simple steps:

1.  **Clone the repository (or save the files locally):**
    ```bash
    # If this were a repo
    git clone <repository-url>
    cd Frontend/stage-0/profile-card
    ```
    Since this is a file generation, you will have `index.html`, `styles.css`, `script.js`, and `README.md` in your `Frontend/stage-0/profile-card` directory.

2.  **Open `index.html` in your browser:**
    Simply navigate to the `profile-card` directory and open the `index.html` file using your preferred web browser. You can do this by double-clicking the file or by using your browser's "Open File" option.

    ```bash
    # Example using open command on macOS
    open index.html
    ```

That's it! The profile card should be displayed and fully functional.

## 📂 Project Structure

The project consists of three main files, all located within the `profile-card` directory:

-   `index.html`: The main HTML file containing the structure and content of the profile card. It links to the CSS and JavaScript files.
-   `styles.css`: Contains all the CSS rules for styling the profile card, including responsive design using Flexbox, and focus styles for accessibility.
-   `script.js`: Provides the JavaScript logic, primarily for updating the current time in milliseconds.

## 🖼️ Example Output (Optional)

(You can insert a screenshot here if you'd like to visualize the component)

---

## 🛠️ `data-testid` Attributes

The following `data-testid` attributes are included as per the requirements for testing purposes:

| Element                | `data-testid`                    |
|------------------------|----------------------------------|
| Card container         | `test-profile-card`              |
| Name (plain text)      | `test-user-name`                 |
| Bio (paragraph)        | `test-user-bio`                  |
| Current time (ms)      | `test-user-time`                 |
| Avatar image           | `test-user-avatar`               |
| Social links list      | `test-user-social-links`         |
| Individual social link | `test-user-social-<network>`     |
| Hobbies list           | `test-user-hobbies`              |
| Dislikes list          | `test-user-dislikes`             |
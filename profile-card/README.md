# Multi-Page Web Application

This project extends a Profile Card component into a multi-page web application, featuring a **Profile Card**, an **About Me** page, and a **Contact Us** page with form validation. The application emphasizes **semantic HTML**, **accessibility**, **responsiveness (Flexbox)**, and includes specific `data-testid` attributes for automated testing, built using **vanilla JavaScript**.

## 🎯 Features

This application includes the following features:

### General Features:
-   **Semantic HTML**: Uses appropriate HTML5 tags for better structure and accessibility across all pages.
-   **Responsive Design**: Leverages Flexbox to ensure layouts look clean and functional on mobile, tablet, and desktop screens.
-   **Accessibility**: All interactive elements are keyboard-navigable with clear focus styles. All forms are designed with accessibility in mind (labels, `aria-describedby`, etc.).
-   **Testability**: Includes specific `data-testid` attributes on all required elements for automated testing.
-   **Modular Code**: JavaScript is separated for page-specific logic (`script.js` for profile card, `contact-script.js` for contact form).

### Profile Card Page (`index.html`):
-   Displays user information, avatar, bio, current time in milliseconds, social links, hobbies, and dislikes.
-   Dynamic content: Current time updates every second using JavaScript.
-   Social links open in new tabs with `target="_blank"` and `rel="noopener noreferrer"`.

### About Me Page (`about.html`):
-   A reflective page sharing personal thoughts and goals.
-   Sections include: Bio, Goals in this program, Areas of low confidence, Note to future self, and Extra thoughts.
-   Structured semantically with `<main>`, `<section>`, `<h2>`, `<h3>`, `<ul>`, and `<p>`.

### Contact Us Page (`contact.html`):
-   A simple contact form with client-side validation using vanilla JavaScript.
-   **Required fields**: Full Name, Email, Subject, Message.
-   **Validation Rules**:
    -   All fields are required.
    -   Email must be in a valid format (e.g., `name@example.com`).
    -   Message must be at least 10 characters long.
-   Shows dynamic error messages for invalid fields.
-   Displays a success message upon valid submission, then clears the form.
-   **Accessibility**: All inputs have `<label>`s linked with `for`, and error messages are tied to inputs with `aria-describedby`. The entire form is keyboard accessible.

## 🚀 Setup Instructions

To get this project up and running, follow these simple steps:

1.  **Clone the repository (or save the files locally):**
    ```bash
    # If this were a repo
    git clone <repository-url>
    cd Frontend/stage-0/profile-card
    ```
    Since this is a file generation, you will have `index.html`, `about.html`, `contact.html`, `styles.css`, `script.js`, `contact-script.js`, and `README.md` in your `Frontend/stage-0/profile-card` directory.

2.  **Open any of the HTML files in your browser:**
    Navigate to the `profile-card` directory and open `index.html`, `about.html`, or `contact.html` using your preferred web browser. You can do this by double-clicking the file or by using your browser's "Open File" option.

    ```bash
    # Example using open command on macOS
    open index.html
    ```
    You can then use the navigation menu at the top of the page to switch between the Profile Card, About Me, and Contact Us pages.

## 📂 Project Structure

The project consists of the following files, all located within the `profile-card` directory:

-   `index.html`: The main page containing the Profile Card component.
-   `about.html`: The About Me page with reflective content.
-   `contact.html`: The Contact Us page with a functional form and validation.
-   `styles.css`: Contains all the CSS rules for styling the entire application, including navigation, responsive design, and form elements.
-   `script.js`: Provides the JavaScript logic specifically for the Profile Card, primarily for updating the current time.
-   `contact-script.js`: Contains the JavaScript logic for client-side form validation on the Contact Us page.
-   `README.md`: This file, providing instructions and project details.

## 🖼️ Example Output (Optional)

(You can insert screenshots here for each page if you'd like to visualize the components)

---

## 🛠️ `data-testid` Attributes

The following `data-testid` attributes are included as per the requirements for testing purposes:

| Element                     | `data-testid`                           | Page             |
|:----------------------------|:----------------------------------------|:-----------------|
| Main Navigation             | `test-main-navigation`                  | All              |
| Card container              | `test-profile-card`                     | `index.html`     |
| Name (plain text)           | `test-user-name`                        | `index.html`     |
| Bio (paragraph)             | `test-user-bio`                         | `index.html`     |
| Current time (ms)           | `test-user-time`                        | `index.html`     |
| Avatar image                | `test-user-avatar`                      | `index.html`     |
| Social links list           | `test-user-social-links`                | `index.html`     |
| Individual social link      | `test-user-social-<network>`            | `index.html`     |
| Hobbies list                | `test-user-hobbies`                     | `index.html`     |
| Dislikes list               | `test-user-dislikes`                    | `index.html`     |
| About Me Page Container     | `test-about-page`                       | `about.html`     |
| About Me Bio Section        | `test-about-bio`                        | `about.html`     |
| About Me Goals Section      | `test-about-goals`                      | `about.html`     |
| About Me Confidence Section | `test-about-confidence`                 | `about.html`     |
| About Me Note to Future Self| `test-about-future-note`                | `about.html`     |
| About Me Extra Thoughts     | `test-about-extra`                      | `about.html`     |
| Contact Full Name Input     | `test-contact-name`                     | `contact.html`   |
| Contact Email Input         | `test-contact-email`                    | `contact.html`   |
| Contact Subject Input       | `test-contact-subject`                  | `contact.html`   |
| Contact Message Textarea    | `test-contact-message`                  | `contact.html`   |
| Contact Submit Button       | `test-contact-submit`                   | `contact.html`   |
| Contact Error Message       | `test-contact-error-<field>`            | `contact.html`   |
| Contact Success Message     | `test-contact-success`                  | `contact.html`   |
// Function to update the current time in milliseconds
function updateCurrentTime() {
    const currentTimeElement = document.querySelector('[data-testid="test-user-time"]');
    if (currentTimeElement) {
        currentTimeElement.textContent = Date.now();
    }
}

// Update time immediately on page load
updateCurrentTime();

// Update time every second (1000 milliseconds)
setInterval(updateCurrentTime, 1000);

// Optional: Keyboard navigation for social links (ensure accessibility)
document.addEventListener('DOMContentLoaded', () => {
    const socialLinksList = document.querySelector('[data-testid="test-user-social-links"] ul');

    if (socialLinksList) {
        const links = socialLinksList.querySelectorAll('a');

        links.forEach(link => {
            // Make entire li focusable, or ensure a has good focus style
            // As per CSS, li:focus-within handles the visual focus for the parent li
            // We ensure the anchor itself is naturally keyboard navigable
        });
    }
});

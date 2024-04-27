// getdates.js

// Get the current year
const currentYear = new Date().getFullYear();

// Update the copyright year in the footer's first paragraph
const copyrightYearSpan = document.getElementById('currentyear');
if (copyrightYearSpan) {
    copyrightYearSpan.textContent = currentYear;
}

// Get the last modified date of the document
const lastModifiedDate = new Date(document.lastModified);

// Format the last modified date
const formattedLastModifiedDate = lastModifiedDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
});

// Update the last modified date in the footer's second paragraph
const lastModifiedParagraph = document.getElementById('lastModified');
if (lastModifiedParagraph) {
    lastModifiedParagraph.textContent = `Last modified: ${formattedLastModifiedDate}`;
}

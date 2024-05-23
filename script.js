document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Dark Mode';
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});

/* Add the following CSS rules to styles.css for dark mode */
body.dark-mode {
    background-color: #333;
    color: #fff;
}

body.dark-mode header,
body.dark-mode footer {
    background-color: #222;
}

body.dark-mode article {
    background-color: #444;
}

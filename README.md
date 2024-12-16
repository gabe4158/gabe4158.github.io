# gabe4158.github.io


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gabriel, Joshua, and Zion Teach Tech</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="history.html">History of the Internet</a></li>
                <li><a href="browserwars.html">Browser Wars</a></li>
                <li><a href="teachtech.html">Tech Tutorials</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h1>Welcome to Gabriel, Joshua, and Zion Teach Tech</h1>
        <p>Learn the basics of web development, including history, browser wars, and more!</p>
        <section id="userInputSection">
            <label for="nameInput">Enter your name: </label>
            <input type="text" id="nameInput" placeholder="Your Name">
            <button onclick="changeName()">Submit</button>
            <p id="greetingMessage"></p>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Gabriel, Joshua, and Zion Teach Tech</p>
    </footer>
    <script src="js/script.js"></script>
</body>
</html>

/* General Styles */
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    color: #333;
    margin: 0;
    padding: 0;
}

header {
    background-color: #2c3e50;
    padding: 1rem;
    color: #fff;
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
}

footer {
    background-color: #2c3e50;
    color: #fff;
    text-align: center;
    padding: 1rem;
    position: fixed;
    width: 100%;
    bottom: 0;
}

/* Layout */
main {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

/* Flexbox Example */
#userInputSection {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
}

input[type="text"] {
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #3498db;
    color: #fff;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #2980b9;
}

/* Animations */
#userInputSection {
    animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

/* Z-Index Example */
#floatingMessage {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background-color: #e74c3c;
    color: #fff;
    z-index: 10;
    display: none;
}

/* Branded Styles (easily changeable) */
h1 {
    color: #3498db;
}

// Change user greeting message based on input
function changeName() {
    let nameInput = document.getElementById("nameInput").value;
    let greetingMessage = document.getElementById("greetingMessage");

    if (nameInput.trim() === "") {
        alert("Please enter your name.");
    } else {
        greetingMessage.textContent = `Hello, ${nameInput}! Welcome to Gabriel, Joshua, and Zion Teach Tech.

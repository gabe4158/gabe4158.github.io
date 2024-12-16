# gabe4158.github.io

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
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
</head>
<body>
    <main>
        <h1>History of the Internet</h1>
        <p>The Internet started in the late 1960s as a project called ARPANET. It expanded over time and transformed the way we communicate, shop, learn, and entertain ourselves.</p>
        <section id="internetHistory">
            <h2>Early Internet</h2>
            <p>The early internet was simple: just text-based information.</p>
            <h2>The Rise of the Web</h2>
            <p>With the introduction of the World Wide Web in the 1990s, the internet became more user-friendly.</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Gabriel, Joshua, and Zion Teach Tech</p>
    </footer>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <main>
        <h1>Browser Wars: Why Internet Explorer Sucks and Mozilla is Good</h1>
        <p>In the late 90s, Internet Explorer dominated the web. However, it was slow, insecure, and lacked features. Firefox, or Mozilla, revolutionized the web with open-source development and fast performance.</p>
        <section id="browserComparison">
            <h2>Internet Explorer</h2>
            <p>IE was often slow and incompatible with modern web standards.</p>
            <h2>Mozilla Firefox</h2>
            <p>Firefox brought innovations such as tabs, faster speed, and better security.</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Gabriel, Joshua, and Zion Teach Tech</p>
    </footer>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <main>
        <h1>Tech Tutorials</h1>
        <p>Here you can find tutorials on how to get started with web development, programming, and more!</p>
    </main>
    <footer>
        <p>&copy; 2024 Gabriel, Joshua, and Zion Teach Tech</p>
    </footer>
</body>
</html>


  // Change user greeting message based on input
function changeName() {
    let nameInput = document.getElementById("nameInput").value;
    let greetingMessage = document.getElementById("greetingMessage");

    if (nameInput.trim() === "") {
        alert("Please enter your name.");
    } else {
        greetingMessage.textContent = `Hello, ${nameInput}! Welcome to Gabriel, Joshua, and Zion Teach Tech.
  

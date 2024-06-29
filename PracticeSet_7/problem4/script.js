//Peoblem 4: Write a JavaScript code to change background of all <li> tags to cyan.

Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.background = "cyan";
})
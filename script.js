//your JS code here. If required.
const squares = document.querySelectorAll(".square");

squares.forEach((square) => {

    square.addEventListener("mouseenter", function () {

        squares.forEach((s) => {
            if (s !== square) {
                s.style.backgroundColor = "#6F4E37"; // Coffee
            } else {
                s.style.backgroundColor = "#E6E6FA"; // Lavender
            }
        });

    });

    square.addEventListener("mouseleave", function () {

        squares.forEach((s) => {
            s.style.backgroundColor = "#E6E6FA"; // Reset all to Lavender
        });

    });

});
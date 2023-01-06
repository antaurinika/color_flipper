const colors = ['A', 'B', 'C', 'D', 'E', 'F', 1, 2, 3, 4, 5, 6, 7, 8, 9];

const btn = document.getElementById('btn');
const color = document.getElementById('color');

btn.addEventListener("click", function ()  {
    let hexColor = "#";

    for(let i = 0; i < 6; i++) {
        hexColor += colors[Math.floor(Math.random() * colors.length)]
    }
    console.log(hexColor);

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});


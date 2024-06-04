const face = document.getElementById("container");
const pupils = document.querySelectorAll(".pupil");

const move = (event) => {
    let rect = face.getBoundingClientRect();
    let centerX = rect.left + rect.width / 2;
    let centerY = rect.top + rect.height / 2;
    let dx = event.clientX - centerX;
    let dy = event.clientY - centerY;

    let fx = dx / 20;
    let fy = dy / 20;

    face.style.transform = `translate(${fx}px, ${fy}px)`;

    let x = dx / (window.innerWidth / 110);
    let y = dy / 7;

    document.body.style.background = `rgba(${y}, ${x}, ${fy}, 0.5)`;

    for (const pupil of pupils) {
        pupil.style.transform = `translate(${x}px, ${y}px)`;
    }
};

window.addEventListener("mousemove", move);

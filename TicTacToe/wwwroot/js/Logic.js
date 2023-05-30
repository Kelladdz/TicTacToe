const btn1 = document.querySelector('#button1');
const btn2 = document.querySelector('#button2');
const btn3 = document.querySelector('#button3');
const btn4 = document.querySelector('#button4');
const btn5 = document.querySelector('#button5');
const btn6 = document.querySelector('#button6');
const btn7 = document.querySelector('#button7');
const btn8 = document.querySelector('#button8');
const btn9 = document.querySelector('#button9');

const cross1 = document.querySelector('#cross1');
const cross2 = document.querySelector('#cross2');
const cross3 = document.querySelector('#cross3');
const cross4 = document.querySelector('#cross4');
const cross5 = document.querySelector('#cross5');
const cross6 = document.querySelector('#cross6');
const cross7 = document.querySelector('#cross7');
const cross8 = document.querySelector('#cross8');
const cross9 = document.querySelector('#cross9');

const circle1 = document.querySelector('#circle1');
const circle2 = document.querySelector('#circle2');
const circle3 = document.querySelector('#circle3');
const circle4 = document.querySelector('#circle4');
const circle5 = document.querySelector('#circle5');
const circle6 = document.querySelector('#circle6');
const circle7 = document.querySelector('#circle7');
const circle8 = document.querySelector('#circle8');
const circle9 = document.querySelector('#circle9');

const crosses = document.querySelectorAll('.cross');
const circles = document.querySelectorAll('.circle');

const shapes = document.querySelectorAll('.svgshape');
const lines = document.querySelectorAll('.line1, .line2');

const buttons = document.querySelectorAll('button');

const table = document.querySelector('.table');

const space = document.querySelector('.space');
const winner = document.querySelector('.winner');

const circleWin = document.querySelector('#circle10');
const crossWin = document.querySelector('#cross10');

let Player1Turn = true;
let Winner = false;

const shapesDissappearing = [{ transform: "scale(1)" }, { transform: "scale(0)" }]
const shapesDissappearingTiming = { duration: 200, iteration: 1, fill: "forwards" };

const linesDissappearing = [{ strokeDashoffset: 0 }, { strokeDashoffset: 160 }]
const linesDissappearingTiming = { duration: 500, iteration: 1, fill: "forwards" };

function shapesDisappear() {
    lines.forEach(line => line.animate(linesDissappearing, linesDissappearingTiming));
}

function boardDisappear() {
    shapes.forEach(shape => shape.animate(shapesDissappearing, shapesDissappearingTiming));
}

function changeDiv() {
    space.outerHTML = winner;
    document.querySelector('#winmessage').style.display = "block";
    if (Player1Turn) document.querySelector('#circle10').style.display = "block";
    else document.querySelector('#cross10').style.display = "block";
}

function areYouWinner() {
    if ((circle1.style.display == "block" && circle2.style.display == "block" && circle3.style.display == "block") ||
        (circle4.style.display == "block" && circle5.style.display == "block" && circle6.style.display == "block") ||
        (circle7.style.display == "block" && circle8.style.display == "block" && circle9.style.display == "block") ||
        (cross1.style.display == "block" && cross2.style.display == "block" && cross3.style.display == "block") ||
        (cross4.style.display == "block" && cross5.style.display == "block" && cross6.style.display == "block") ||
        (cross7.style.display == "block" && cross8.style.display == "block" && cross9.style.display == "block") ||
        (circle1.style.display == "block" && circle5.style.display == "block" && circle9.style.display == "block") ||
        (circle3.style.display == "block" && circle5.style.display == "block" && circle7.style.display == "block") ||
        (cross1.style.display == "block" && cross5.style.display == "block" && cross9.style.display == "block") ||
        (cross3.style.display == "block" && cross5.style.display == "block" && cross7.style.display == "block") ||
        (circle1.style.display == "block" && circle4.style.display == "block" && circle7.style.display == "block") ||
        (circle2.style.display == "block" && circle5.style.display == "block" && circle8.style.display == "block") ||
        (circle3.style.display == "block" && circle6.style.display == "block" && circle9.style.display == "block") ||
        (cross1.style.display == "block" && cross4.style.display == "block" && cross7.style.display == "block") ||
        (cross2.style.display == "block" && cross5.style.display == "block" && cross8.style.display == "block") ||
        (cross3.style.display == "block" && cross6.style.display == "block" && cross9.style.display == "block")) {

        buttons.forEach(button => button.disabled = "true");
        setTimeout(boardDisappear, 1000);
        setTimeout(shapesDisappear, 1200);
        setTimeout(changeDiv, 2000);
        Winner = true;
        if (Player1Turn) {
            console.log("Player 1 win!");
        }
        else console.log("Player 2 win!");
    }
    else if (Player1Turn) Player1Turn = false;
    else Player1Turn = true;
}

btn1.addEventListener('click', function () {
    btn1.disabled = true;
    if (Player1Turn) {
        circle1.style.display = "block";
        areYouWinner();
    }
    else {
        cross1.style.display = "block";
        areYouWinner();
    }
})
btn2.addEventListener('click', function () {
    btn2.disabled = true;
    if (Player1Turn) {
        circle2.style.display = "block";
        areYouWinner();
    }
    else {
        cross2.style.display = "block";
        areYouWinner();
    }
})
btn3.addEventListener('click', function () {
    btn3.disabled = true;
    if (Player1Turn) {
        circle3.style.display = "block";
        areYouWinner();
    }
    else {
        cross3.style.display = "block";
        areYouWinner();
    }
})
btn4.addEventListener('click', function () {
    btn4.disabled = true;
    if (Player1Turn) {
        circle4.style.display = "block";
        areYouWinner();
    }
    else {
        cross4.style.display = "block";
        areYouWinner();
    }
})
btn5.addEventListener('click', function () {
    btn5.disabled = true;
    if (Player1Turn) {
        circle5.style.display = "block";
        areYouWinner();
    }
    else {
        cross5.style.display = "block";
        areYouWinner();
    }
})
btn6.addEventListener('click', function () {
    btn6.disabled = true;
    if (Player1Turn) {
        circle6.style.display = "block";
        areYouWinner();
    }
    else {
        cross6.style.display = "block";
        areYouWinner();
    }
})
btn7.addEventListener('click', function () {
    btn7.disabled = true;
    if (Player1Turn) {
        circle7.style.display = "block";
        areYouWinner();
    }
    else {
        cross7.style.display = "block";
        areYouWinner();
    }
})
btn8.addEventListener('click', function () {
    btn8.disabled = true;
    if (Player1Turn) {
        circle8.style.display = "block";
        areYouWinner();
    }
    else {
        cross8.style.display = "block";
        areYouWinner();
    }
})
btn9.addEventListener('click', function () {
    btn9.disabled = true;
    if (Player1Turn) {
        circle9.style.display = "block";
        areYouWinner();
    }
    else {
        cross9.style.display = "block";
        areYouWinner();
    }
})
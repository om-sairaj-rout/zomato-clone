let menuIcon = document.querySelector(".fa-bars");
let cross = document.querySelector(".fa-xmark");
let menuOpt = document.querySelector(".menu-opt");
let inputBox = document.querySelector("#bttn");
let exBoxArr = document.querySelectorAll(".ex-main_box");
let dropBox = document.querySelectorAll(".drop-ex_box");
let exDrop = document.querySelectorAll(".ex-downArrow");

let flag = 0;
menuIcon.addEventListener("click", function () {
    if (flag % 2 === 0) {
        menuOpt.style.display = "block";
        flag += 1;
    }
})

cross.addEventListener("click", function () {
    if (flag % 2 !== 0) {
        menuOpt.style.display = "none";
        flag += 1;
    }
})

function checkScreenSize() {
    if (innerWidth <= 769) {
        inputBox.innerHTML = "Share"
    }
    else {
        inputBox.innerHTML = "Share App Link"
    }
}

window.addEventListener("resize", checkScreenSize);

let i = 0;
exBoxArr.forEach((val,i) => {
    let exDown = 0;
    let exDownArrow = 180;
    val.addEventListener("click", () => {
        exDrop[i].style.transform = `rotate(${exDownArrow}deg)`;
        exDrop[i].style.transition = "transform 0.2s linear";
        exDownArrow += 180;
        if (exDown === 0) {
            dropBox[i].style.display = "flex";
            exDown = 1;
        }
        else {
            dropBox[i].style.display = "none";
            exDown = 0;
        }
    })
});
i++;



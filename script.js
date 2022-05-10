btnOne = document.querySelector(".one");
btnTwo = document.querySelector(".two");
btnThree = document.querySelector(".three");
btnFour = document.querySelector(".four");
btnFive = document.querySelector(".five");
btnSix = document.querySelector(".six");
btnSeven = document.querySelector(".seven");
btnEight = document.querySelector(".eight");
btnNine = document.querySelector(".nine");
btnZero = document.querySelector(".zero");
btnClear = document.querySelector(".clear");
btnBackspace = document.querySelector(".backspace");
btnDecimal = document.querySelector(".decimal");
btnAdd = document.querySelector(".addition");
btnSubtract = document.querySelector(".subtraction");
btnMultiply = document.querySelector(".multiplication");
btnDivide = document.querySelector(".division");
btnEquals = document.querySelector(".equals");
text = document.querySelector(".text");
display = document.querySelector(".display");

btnOne.addEventListener("click", (e) => {
	addText("1");
});

btnTwo.addEventListener("click", (e) => {
	addText("2");
});

btnThree.addEventListener("click", (e) => {
	addText("3");
});

btnFour.addEventListener("click", (e) => {
	addText("4");
});

btnFive.addEventListener("click", (e) => {
	addText("5");
});

btnSix.addEventListener("click", (e) => {
	addText("6");
});

btnSeven.addEventListener("click", (e) => {
	addText("7");
});

btnEight.addEventListener("click", (e) => {
	addText("8");
});

btnNine.addEventListener("click", (e) => {
	addText("9");
});

btnZero.addEventListener("click", (e) => {
	addText("0");
});

btnClear.addEventListener("click", (e) => {
    clearText();
});

btnDecimal.addEventListener("click", (e) => {
    addText(".");
});

btnAdd.addEventListener("click", (e) => {
    addText("+");
});

btnSubtract.addEventListener("click", (e) => {
    addText("-");
});

btnMultiply.addEventListener("click", (e) => {
    addText("*");
});

btnDivide.addEventListener("click", (e) => {
    addText("/");
});

btnEquals.addEventListener("click", (e) => {
    operate();
});

function addText(newText) {
	if (!text.textContent === "") {
		text.textContent = "";
	}
	text.textContent += newText;
}

function clearText() {
    text.textContent = "";
}
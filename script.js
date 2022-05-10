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

function addText(newText) {
	if (!text.textContent === "") {
		text.textContent = "";
	}
	text.textContent += newText;
}

digits = document.querySelectorAll(".row button");
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
operator = "";
digits.forEach((element) => {
	element.addEventListener("click", (e) => {
		addText(element.textContent);
	});
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

btnBackspace.addEventListener("click", (e) => {
	backspace();
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

function backspace() {
	text.textContent = text.textContent.slice(0, -1);
}

function operate() {}

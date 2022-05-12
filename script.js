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
firstNum = "";
secondNum = "";
digits.forEach((element) => {
	element.addEventListener("click", (e) => {
		addText(element.textContent);
	});
});

btnClear.addEventListener("click", (e) => {
	clearText();
});

btnAdd.addEventListener("click", (e) => {
	numLogic();
	operator = "+";
	addText("+");
});

btnSubtract.addEventListener("click", (e) => {
	numLogic();
	operator = "-";
	addText("-");
});

btnMultiply.addEventListener("click", (e) => {
	numLogic();
	operator = "*";
	addText("*");
});

btnDivide.addEventListener("click", (e) => {
	numLogic();
	operator = "/";
	addText("/");
});

btnEquals.addEventListener("click", (e) => {
	numLogic();
	operate(operator);
});

btnBackspace.addEventListener("click", (e) => {
	backspace();
});

function numLogic() {
	if (firstNum === "") {
		firstNum = text.textContent;
	} else if (secondNum === "") {
		secondNum = text.textContent.slice(
			firstNum.length + 1,
			text.textContent.length
		);
	}
}
function addText(newText) {
	if (!text.textContent === "") {
		text.textContent = "";
	}
	text.textContent += newText;
}

function clearText() {
	text.textContent = "";
	firstNum = "";
	secondNum = "";
	operator = "";
}

function backspace() {
	text.textContent = text.textContent.slice(0, -1);
}

function operate(operator) {
	if (operator === "+") {
		text.textContent = Number(firstNum) + Number(secondNum);
	}
	if (operator === "-") {
		text.textContent = Number(firstNum) - Number(secondNum);
	}
	if (operator === "*") {
		text.textContent = Number(firstNum) * Number(secondNum);
	}
	if (operator === "/") {
		if (secondNum === "0") {
			text.textContent = "don't you dare";
		} else {
			text.textContent = Number(firstNum) / Number(secondNum);
		}
	}
	firstNum = "";
	secondNum = "";
	operator = "";
}

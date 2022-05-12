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
	if (firstNum === "") {
		firstNum = text.textContent;
	} else if (secondNum === "") {
		secondNum = text.textContent.slice(
			firstNum.length + 1,
			text.textContent.length
		);
	}
	if (!(operator === "")) {
		operate(firstNum, secondNum, operator);
	}
	operator = "+";
	addText("+");
});

btnSubtract.addEventListener("click", (e) => {
	if (firstNum === "") {
		firstNum = text.textContent;
	} else if (secondNum === "") {
		secondNum = text.textContent.slice(
			firstNum.length + 1,
			text.textContent.length
		);
	}
	if (!(operator === "")) {
		operate(firstNum, secondNum, operator);
	}
	operator = "-";
	addText("-");
});

btnMultiply.addEventListener("click", (e) => {
	if (firstNum === "") {
		firstNum = text.textContent;
	} else if (secondNum === "") {
		secondNum = text.textContent.slice(
			firstNum.length + 1,
			text.textContent.length
		);
	}
	if (!(operator === "")) {
		operate(firstNum, secondNum, operator);
	}
	operator = "*";
	addText("*");
});

btnDivide.addEventListener("click", (e) => {
	if (firstNum === "") {
		firstNum = text.textContent;
	} else if (secondNum === "") {
		secondNum = text.textContent.slice(
			firstNum.length + 1,
			text.textContent.length
		);
	}
	if (!(operator === "")) {
		operate(firstNum, secondNum, operator);
	}
	operator = "/";
	addText("/");
});

btnEquals.addEventListener("click", (e) => {
	if (secondNum === "") {
		secondNum = text.textContent.slice(
			firstNum.length + 1,
			text.textContent.length
		);
	}
	operate(firstNum, secondNum, operator);
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
	firstNum = "";
	secondNum = "";
	operator = "";
}

function backspace() {
	text.textContent = text.textContent.slice(0, -1);
}

function operate(a, b, operator) {
	if (operator === "+") {
		text.textContent = (Number(a) + Number(b));
	}
	if (operator === "-") {
		text.textContent = (Number(a) - Number(b));
	}
	if (operator === "*") {
		text.textContent = (Number(a) * Number(b));
	}
	if (operator === "/") {
		if (secondNum == "0") {
			text.textContent = "don't you dare";
		} else {
			text.textContent = (Number(a) / Number(b));
		}
	}
	firstNum = "";
	secondNum = "";
	operator = "";
}
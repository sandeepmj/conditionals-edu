$(document).ready(function () {
	$("#submit").on("click", function (e) {
		e.preventDefault();

		var operation = $("input[name='operation']:checked").val();
		var number1 = parseInt($("#number1").val());
		var number2 = parseInt($("#number2").val());
		var number3 = parseInt($("#number3").val());

		if (operation != "add") {
			console.log("You are NOT performing addition");
		} else {
			console.log("Hey, we're adding");
		}

		if (operation == "add") {
			var sum = addition(number1, number2, number3);
		} else if (operation == "subtract") {
			var sum = subtract(number1, number2, number3);
		} else if (operation == "divide") {
			var sum = divide(number1, number2, number3);
		} else {
			var sum = multiply(number1, number2, number3);
		}

		$("#sum").val(sum);
	});
});

function addition(cat, dog, mouse) {
	var sum = cat + dog + mouse;
	return sum;
}

function multiply(cat, dog, mouse) {
	var sum = cat * dog * mouse;
	return sum;
}

function divide(cat, dog, mouse) {
	var sum = cat / dog / mouse;
	return sum;
}

function subtract(cat, dog, mouse) {
	var sum = cat - dog - mouse;
	return sum;
}

// $(document).ready(function () { // we must wait for the DOM to be ready as the browser can take a little while to read all of the HTML and build the elements
// 	$(".bug").each(function () {
// 		var bug = $(this)
// 		var message = bug.data("message");
// 		alert(message);
//
// 	}); // closes click related functions or events
//
//
// }); // closes document ready


$(document).ready(function () { // we must wait for the DOM to be ready as the browser can take a little while to read all of the HTML and build the elements

	$("#calculate").on("click", function (e) {
		e.preventDefault(); //have to add this so we don't get weird behavior in older browsers (or IE)

		var sum = 0;
		$(".number").each(function () {
			sum = sum + parseFloat($(this).val());
		});
		$("#answer").text(sum);
	}); // closes click related functions or events


}); // closes document ready

$(document).ready(function () {
	$("#design-hidden").click(function () {
		//$("#design-showing").toggle();
		$("#design-hidden").hide();
		$("#design-showing").show();
	});
	$("#design-showing").click(function () {
		$("#design-hidden").show();
		$("#design-showing").hide();
	});
	$("#development-hidden").click(function () {
		$("#development-hidden").hide();
		$("#development-showing").show();
	});
	$("#development-showing").click(function () {
		$("#development-hidden").show();
		$("#development-showing").hide();
	});
	$("#projectmgt-hidden").click(function () {
		$("#projectmgt-hidden").hide();
		$("#projectmgt-showing").show();
	});
	$("#projectmgt-showing").click(function () {
		$("#projectmgt-hidden").show();
		$("#projectmgt-showing").hide();
	});
});

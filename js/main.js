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

$(document).ready(function () {
	$("#grey #greythumb").hover(
		function () {
			$(this).stop().animate(
				{
					opacity: 0.4,
				},
				200
			);
			$(".thumb1").removeClass("hide1");
		},
		function () {
			$(this).stop().animate(
				{
					opacity: 1,
				},
				500
			);
			$(".thumb1").addClass("hide1");
		}
	);
	$("#ontario #ontariothumb").hover(
		function () {
			$(this).stop().animate(
				{
					opacity: 0.4,
				},
				200
			);
			$(".thumb2").removeClass("hide2");
		},
		function () {
			$(this).stop().animate(
				{
					opacity: 1,
				},
				500
			);
			$(".thumb2").addClass("hide2");
		}
	);
	$("#orange #orangethumb").hover(
		function () {
			$(this).stop().animate(
				{
					opacity: 0.4,
				},
				200
			);
			$(".thumb3").removeClass("hide3");
		},
		function () {
			$(this).stop().animate(
				{
					opacity: 1,
				},
				500
			);
			$(".thumb3").addClass("hide3");
		}
	);
});

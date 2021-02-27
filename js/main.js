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
	$("#brave #bravethumb").hover(
		function () {
			$(this).stop().animate(
				{
					opacity: 0.4,
				},
				200
			);
			$(".thumb4").removeClass("hide4");
		},
		function () {
			$(this).stop().animate(
				{
					opacity: 1,
				},
				500
			);
			$(".thumb4").addClass("hide4");
		}
	);
	$("#good #goodthumb").hover(
		function () {
			$(this).stop().animate(
				{
					opacity: 0.4,
				},
				200
			);
			$(".thumb5").removeClass("hide5");
		},
		function () {
			$(this).stop().animate(
				{
					opacity: 1,
				},
				500
			);
			$(".thumb5").addClass("hide5");
		}
	);
	$("#buttons #buttonsthumb").hover(
		function () {
			$(this).stop().animate(
				{
					opacity: 0.4,
				},
				200
			);
			$(".thumb6").removeClass("hide6");
		},
		function () {
			$(this).stop().animate(
				{
					opacity: 1,
				},
				500
			);
			$(".thumb6").addClass("hide6");
		}
	);
	$("#burned #burnedthumb").hover(
		function () {
			$(this).stop().animate(
				{
					opacity: 0.4,
				},
				200
			);
			$(".thumb7").removeClass("hide7");
		},
		function () {
			$(this).stop().animate(
				{
					opacity: 1,
				},
				500
			);
			$(".thumb7").addClass("hide7");
		}
	);
	$("#giraffe #giraffethumb").hover(
		function () {
			$(this).stop().animate(
				{
					opacity: 0.4,
				},
				200
			);
			$(".thumb8").removeClass("hide8");
		},
		function () {
			$(this).stop().animate(
				{
					opacity: 1,
				},
				500
			);
			$(".thumb8").addClass("hide8");
		}
	);
});

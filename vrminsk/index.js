$(function () {

	window.addEventListener("load", Load, false);

	function Load() {
		var menu1 = document.querySelectorAll(".menu1")[0];
		var wrap = document.querySelectorAll("#wrap")[0];

		var tel = document.querySelectorAll(".tel")[0];
		var tel1 = document.querySelectorAll(".tel")[1];
		tel.classList.add("telLoad");
		tel1.classList.add("telLoad");

		var logo = document.querySelectorAll(".logo")[0];
		logo.classList.add("logoLoad");

		var zagolovok = document.querySelectorAll("#zagolovok")[0];
		zagolovok.classList.add("zagLoad");

		var footer = document.querySelectorAll("#footer")[0];
		footer.classList.add("footerLoad");

		wrap.style.height = window.innerHeight + "px";

		var blocks = $(".block");
		blocks = Array.prototype.concat.apply([], blocks);
		var aLength = blocks.length;

		for (var i = 0; i < aLength; i++) {

			blocks[i].classList.add("block" + i)

		}

		var blKont = $(".blockKontent");
		blKont = Array.prototype.concat.apply([], blKont);
		var bLength = blKont.length;

		for (var i = 0; i < bLength; i++) {

			blKont[i].classList.add("z")
        }

	}

	$(".menu1").on("mouseover", function (e) {

		if (e.target !== e.currentTarget) {

			e.target.classList.add("msmov");

		}
	});

	function Rem() { 								

		zagolovok.classList.remove("zagLoad");
		$(".tel")[0].classList.remove("telLoad");
		$(".tel")[1].classList.remove("telLoad");
		footer.classList.remove("footerLoad");
		wrap.classList.remove("wrap");
		wrap.classList.add("wrap1");
		$(".logo")[0].classList.remove("logoLoad");
		var blocks = $(".block");

		blocks = Array.prototype.concat.apply([], blocks);
		var aLength = blocks.length;
		for (var i = 0; i < aLength; i++) {

			blocks[i].classList.remove("block" + i);

		}
	}

	function Head() {

		TweenLite.to($(".logo")[0], 0, {
			css : {
				marginLeft : "-150px"
			}
		});

		TweenLite.to($(".menu2"), 0, {
			css : {
				marginTop : "-120px"
			}
		});

		TweenLite.to($(".mini"), 0, {
			css : {
				transform : "scale(1,1)"
			},
			onComplete : Head2
		})

	}

	function Head2() {

		TweenLite.to($(".logo")[0], 0.6, {
			css : {
				marginLeft : "12px",
				opacity : 1
			},
			ease : Back.easeInOut,
			delay : 0.6
		});

		TweenLite.to($(".line"), 0.7, {
			css : {
				marginLeft : "-475px",
				width : "948px",
				opacity : 1
			},
			ease : Power1.easeInOut,
			delay : 0.5
		});

		TweenLite.to($(".menu2"), 0.5, {
			css : {
				marginTop : "13px"
			},

			ease : Bounce.easeOut,
			delay : 0.8
		});

	}

	function HeadBack() {

		TweenLite.to($(".logo"), 0.5, {
			css : {
				marginLeft : "-150px"
			},
			ease : Back.easeInOut
		});

		TweenLite.to($(".line"), 0.5, {
			css : {
				marginLeft : "475px",
				width : "0px",
				opacity : 0
			},

			ease : Power1.easeInOut
		});

		TweenLite.to($(".mini"), 0.5, {
			css : {
				transform : "scale(0,0)"
			},
			onComplete : Logo2,
			ease : Back.easeInOut
		});
	}

	function Logo2() {

		TweenLite.to($(".logo"), 0, {
			css : {
				marginLeft : "12px",
				opacity : 0
			}
		});
	}

	function Mini() {

		var Bl = $(".blockKontent");
		var menuTop = $(".mini");

		for (var i = 0; i < Bl.length; i++) {

			if (Bl[i].classList.contains("z1") === true) {

				menuTop[i].classList.add("mi2");

			} else {

				menuTop[i].classList.remove("mi2");
			}
		}
	}
	
	var a1 = $(".Kont0 p");						
	var a11 = $("#back11")[0];

	a11.addEventListener("click", Move1, false);

	function Move1(e) {

		var a111 = e.currentTarget.parentNode.parentNode;
		if (e.target !== e.currentTarget) {

			TweenLite.to(a111, 0.5, {
				css : {
					marginLeft : "475px"
				},
				onComplete : Remove1,
				ease : Elastic.easeInOut

			});

			function Remove1() {

				$(".Kont0")[0].classList.remove("z");
				$(".Kont0")[0].classList.add("z1");

				TweenLite.to(a1, 0.7, {
					css : {
						marginLeft : "40px",
						marginRight : "40px"
					},
					onComplete : Mini,
					ease : Power1.easeOut
				});

				TweenLite.to($(".Kont0 h1"), 0.7, {
					css : {
						opacity : 1,
						scale : 1
					},
					ease : Power1.easeInOut,
					delay : 0.5
				});

				TweenLite.to($(".imgKont")[0], 0.7, {
					css : {
						marginLeft : "870px"
					},
					ease : Elastic.easeInOut,
					delay : 0.5
				});

				Rem();

				TweenLite.to(a111, 0, {
					css : {
						marginLeft : "-475px"
					},
					onComplete : Head
				});

			}
		}
	}

	var a2 = $(".Kont1 p");
	var a22 = $("#back21")[0];

	a22.addEventListener("click", Move2, false);

	function Move2(e) {

		if (e.target !== e.currentTarget) {

			var a222 = e.currentTarget.parentNode.parentNode;

			TweenLite.to(a222, 0.5, {
				css : {
					marginLeft : "475px"
				},
				onComplete : Remove2,
				ease : Elastic.easeInOut

			});

			function Remove2() {

				$(".Kont1")[0].classList.remove("z");
				$(".Kont1")[0].classList.add("z1");

				TweenLite.to(a2, 0.7, {
					css : {
						marginTop : "30px",
						marginBottom : "30px"
					},
					onComplete : Mini,
					ease : Power1.easeOut
				});

				TweenLite.to($(".Kont1 h1"), 0.7, {
					css : {
						opacity : 1,
						scale : 1
					},
					ease : Power1.easeOut,
					delay : 0.5
				});

				TweenLite.to($(".imgKont")[1], 0.7, {
					css : {
						marginLeft : "870px"
					},
					ease : Elastic.easeInOut,
					delay : 0.5
				});

				Rem();

				TweenLite.to(a222, 0, {
					css : {
						marginLeft : "-475px"
					},
					onComplete : Head
				});
			}
		}
	}

	var a3 = $(".Kont2 p");
	var a33 = $("#back31")[0];

	a33.addEventListener("click", Move3, false);

	function Move3(e) {

		if (e.target !== e.currentTarget) {

			var a333 = e.currentTarget.parentNode.parentNode;

			TweenLite.to(a333, 0.5, {
				css : {
					marginLeft : "-1425px"
				},
				onComplete : Remove3,
				ease : Elastic.easeInOut

			});

			function Remove3() {

				$(".Kont2")[0].classList.remove("z");
				$(".Kont2")[0].classList.add("z1");

				TweenLite.to(a3, 0.7, {
					css : {
						marginTop : "30px",
						marginBottom : "30px"
					},
					onComplete : Mini,
					ease : Power1.easeOut
				});

				TweenLite.to($(".Kont2 h1"), 0.7, {
					css : {
						opacity : 1,
						scale : 1
					},
					ease : Power1.easeOut,
					delay : 0.5
				});

				TweenLite.to($(".imgKont")[2], 0.7, {
					css : {
						marginLeft : "870px"
					},
					ease : Elastic.easeInOut,
					delay : 0.5
				});

				Rem();

				TweenLite.to(a333, 0, {
					css : {
						marginLeft : "-475px"
					},
					onComplete : Head
				});
			}
		}
	}

	var a4 = $(".Kont3 p");
	var a44 = $("#back41")[0];

	a44.addEventListener("click", Move4, false);

	function Move4(e) {

		if (e.target !== e.currentTarget) {

			var a444 = e.currentTarget.parentNode.parentNode;

			TweenLite.to(a444, 0.5, {
				css : {
					marginLeft : "-1425px"
				},
				onComplete : Remove4,
				ease : Elastic.easeInOut

			});

			function Remove4() {

				$(".Kont3")[0].classList.remove("z");
				$(".Kont3")[0].classList.add("z1");

				TweenLite.to(a4, 0.7, {
					css : {
						marginLeft : "40px",
						marginRight : "40px"
					},
					onComplete : Mini,
					ease : Power1.easeOut
				});

				TweenLite.to($(".Kont3 h1"), 0.7, {
					css : {
						opacity : 1,
						scale : 1
					},
					ease : Power1.easeOut,
					delay : 0.5
				});

				TweenLite.to($(".imgKont")[3], 0.7, {
					css : {
						marginLeft : "870px"
					},
					ease : Elastic.easeInOut,
					delay : 0.5
				});

				Rem();

				TweenLite.to(a444, 0, {
					css : {
						marginLeft : "-475px"
					},
					onComplete : Head
				});
			}
		}
	}
	
	var menu2 = $(".menu2").on("mouseover", function (e) {		

			if ((e.target !== e.currentTarget) && (e.target.classList.contains("mi2") === false)) {

				e.target.classList.add("min1");

			}
		});

	var menu2 = $(".menu2").on("mouseout", function (e) {

			if (e.target !== e.currentTarget) {

				e.target.classList.remove("min1");

			}
		});

	var mini0 = $(".mini")[0]; 							

	mini0.addEventListener("click", Change, false);

	function Change(e) {

		BackMini1();
		BackMini2();
		BackMini3();

		e.target.classList.add("mi2");

		TweenLite.to(e.target, 0, {
			css : {},
			onComplete : Zx,
			delay : 0.7
		});

		function Zx() {

			$(".Kont0")[0].classList.remove("z");
			$(".Kont0")[0].classList.add("z1");
		}

		TweenLite.to($(".Kont0 p"), 0.7, {
			css : {
				marginLeft : "40px",
				marginRight : "40px"
			},
			onComplete : Mini,
			ease : Power1.easeOut,
			delay : 0.5
		});

		TweenLite.to($(".Kont0 h1"), 0.7, {
			css : {
				opacity : 1,
				scale : 1
			},
			ease : Power1.easeInOut,
			delay : 0.5
		});

		TweenLite.to($(".imgKont")[0], 0.7, {
			css : {
				marginLeft : "870px"
			},
			ease : Elastic.easeInOut,
			delay : 0.5
		});
	}

	var mini1 = $(".mini")[1];

	mini1.addEventListener("click", Change1, false);

	function Change1(e) {

		BackMini0();
		BackMini2();
		BackMini3();

		e.target.classList.add("mi2");

		TweenLite.to(e.target, 0, {
			css : {},
			onComplete : Zx,
			delay : 0.5
		});

		function Zx() {

			$(".Kont1")[0].classList.remove("z");
			$(".Kont1")[0].classList.add("z1");
		}

		TweenLite.to($(".Kont1 p"), 0.7, {
			css : {
				marginTop : "30px",
				marginBottom : "30px"
			},
			onComplete : Mini,
			ease : Power1.easeOut,
			delay : 0.5
		});

		TweenLite.to($(".Kont1 h1"), 0.7, {
			css : {
				opacity : 1,
				scale : 1
			},
			ease : Power1.easeInOut,
			delay : 0.5
		});

		TweenLite.to($(".imgKont")[1], 0.7, {
			css : {
				marginLeft : "870px"
			},
			ease : Elastic.easeInOut,
			delay : 0.5
		});
	}

	var mini2 = $(".mini")[2];

	mini2.addEventListener("click", Change2, false);

	function Change2(e) {

		BackMini0();
		BackMini1();
		BackMini3();

		e.target.classList.add("mi2");

		TweenLite.to(e.target, 0, {
			css : {},
			onComplete : Zx,
			delay : 0.5
		});

		function Zx() {

			$(".Kont2")[0].classList.remove("z");
			$(".Kont2")[0].classList.add("z1");
		}

		TweenLite.to($(".Kont2 p"), 0.7, {
			css : {
				marginTop : "30px",
				marginBottom : "30px"
			},
			onComplete : Mini,
			ease : Power1.easeOut,
			delay : 0.5
		});

		TweenLite.to($(".Kont2 h1"), 0.7, {
			css : {
				opacity : 1,
				scale : 1
			},
			ease : Power1.easeInOut,
			delay : 0.5
		});

		TweenLite.to($(".imgKont")[2], 0.7, {
			css : {
				marginLeft : "870px"
			},
			ease : Elastic.easeInOut,
			delay : 0.5
		});
	}

	var mini3 = $(".mini")[3];

	mini3.addEventListener("click", Change3, false);

	function Change3(e) {

		BackMini0();
		BackMini1();
		BackMini2();

		e.target.classList.add("mi2");

		TweenLite.to(e.target, 0, {
			css : {},
			onComplete : Zx,
			delay : 0.5
		});

		function Zx() {

			$(".Kont3")[0].classList.remove("z");
			$(".Kont3")[0].classList.add("z1");

		}

		TweenLite.to($(".Kont3 p"), 0.7, {
			css : {
				marginLeft : "40px",
				marginRight : "40px"
			},
			ease : Power1.easeOut,
			delay : 0.5
		});

		TweenLite.to($(".Kont3 h1"), 0.7, {
			css : {
				opacity : 1,
				scale : 1
			},
			ease : Power1.easeInOut,
			delay : 0.5
		});

		TweenLite.to($(".imgKont")[3], 0.7, {
			css : {
				marginLeft : "870px"
			},
			ease : Elastic.easeInOut,
			delay : 0.5
		});
	}

	var WinH = (window.innerHeight - 220) + "px";

	function BackMini0() {					

		$(".Kont0")[0].style.height = WinH;

		$(".mini")[0].classList.remove("mi2");

		TweenLite.to($(".Kont0")[0], 0.7, {
			css : {
				transform : "scale(0,0)"
			},
			onComplete : BM0,
			ease : Bounce.easeOut
		});
	}

	function BM0() {

		$(".Kont1")[0].style.height = "inherit";

		TweenLite.to($(".Kont0 h1"), 0, {
			css : {
				opacity : 0,
				scale : 1.7
			}
		});

		TweenLite.to($(".Kont0")[0], 0, {
			css : {
				transform : "scale(1,1)"
			}
		});

		TweenLite.to($(".Kont0 p"), 0, {
			css : {
				marginLeft : "-1100px",
				marginRight : "1100px"
			}
		});

		TweenLite.to($(".imgKont")[0], 0, {
			css : {
				marginLeft : "970px"
			}
		});

		$(".Kont0")[0].classList.remove("z1");
		$(".Kont0")[0].classList.add("z");

	}

	function BackMini1() {

		$(".Kont1")[0].style.height = WinH;

		$(".mini")[1].classList.remove("mi2");

		TweenLite.to($(".Kont1")[0], 0.7, {
			css : {
				transform : "scale(0,0)"
			},
			onComplete : BM1,
			ease : Bounce.easeOut
		});
	}
	
	function BM1() {

		$(".Kont1")[0].style.height = "inherit";

		TweenLite.to($(".Kont1 h1"), 0, {
			css : {
				opacity : 0,
				scale : 1.7
			}
		});

		TweenLite.to($(".Kont1")[0], 0, {
			css : {
				transform : "scale(1,1)"
			}
		});

		TweenLite.to($(".Kont1 p"), 0, {
			css : {
				marginTop : "-1100px",
				marginBottom : "1100px"

			}
		});

		TweenLite.to($(".imgKont")[1], 0, {
			css : {
				marginLeft : "970px"
			}
		});

		$(".Kont1")[0].classList.remove("z1");
		$(".Kont1")[0].classList.add("z");

	}

	function BackMini2() {

		$(".Kont2")[0].style.height = WinH;

		$(".mini")[2].classList.remove("mi2");

		TweenLite.to($(".Kont2")[0], 0.7, {
			css : {
				transform : "scale(0,0)"
			},
			onComplete : BM2,
			ease : Bounce.easeOut
		});
	}

	function BM2() {

		$(".Kont2")[0].style.height = "inherit";

		TweenLite.to($(".Kont2 h1"), 0, {
			css : {
				opacity : 0,
				scale : 1.7
			}
		});

		TweenLite.to($(".Kont2")[0], 0, {
			css : {
				transform : "scale(1,1)"
			}

		});

		TweenLite.to($(".Kont2 p"), 0, {
			css : {
				marginTop : "1100px",
				marginBottom : "-1100px"
			}
		});

		TweenLite.to($(".imgKont")[2], 0, {
			css : {
				marginLeft : "970px"
			}
		});

		$(".Kont2")[0].classList.remove("z1");
		$(".Kont2")[0].classList.add("z");

	}

	function BackMini3() {

		$(".Kont3")[0].style.height = WinH;

		$(".mini")[3].classList.remove("mi2");

		TweenLite.to($(".Kont3")[0], 0.7, {
			css : {

				transform : "scale(0,0)"

			},
			onComplete : BM3,
			ease : Bounce.easeOut
		});
	}

	function BM3() {

		$(".Kont3")[0].style.height = "inherit";

		TweenLite.to($(".Kont3 h1"), 0, {
			css : {
				opacity : 0,
				scale : 1.7
			}
		});

		TweenLite.to($(".Kont3")[0], 0, {
			css : {
				transform : "scale(1,1)"
			}

		});

		TweenLite.to($(".Kont3 p"), 0, {
			css : {
				marginLeft : "1100px",
				marginRight : "-1100px",
				transform : "scale(1,1)"
			}

		});

		TweenLite.to($(".imgKont")[3], 0, {
			css : {
				marginLeft : "970px"
			}
		});

		$(".Kont3")[0].classList.remove("z1");
		$(".Kont3")[0].classList.add("z");

	}


	function Wrap() { 							

		wrap.classList.remove("wrap1");
		wrap.classList.add("wrap");
	}

	var Img = $(".imgKont"); 				

	Img[0].addEventListener("click", Back, false);

	function Back() {

		var eP = $(".Kont0")[0];

		eP.style.height = WinH;

		TweenLite.to(eP, 0.7, {
			css : {
				transform : "scale(1,0)"
			},
			onComplete : Bk,
			ease : Elastic.easeOut

		});
		HeadBack();
		Wrap();
	}

	function Bk() {

		var K0 = $(".Kont0")[0];
		K0.classList.remove("z1");
		K0.classList.add("z");

		TweenLite.to($(".Kont0 h1"), 0, {
			css : {
				opacity : 0,
				scale : 1.7
			}
		});

		$(".Kont0")[0].style.height = "inherit";

		TweenLite.to($(".imgKont")[0], 0, {
			css : {
				marginLeft : "970px"
			}
		});

		TweenLite.to(K0, 0, {
			css : {
				transform : "scale(1,1)",
				delay : 0.5
			},
			onComplete : B
		});
	}

	function B() {

		TweenLite.to($(".Kont0 p"), 0, {
			css : {
				marginLeft : "-1100px",
				marginRight : "1100px",
				transform : "scale(1,1)",
				delay : 0.5
			},
			onComplete : Load
		});
	}

	Img[1].addEventListener("click", Back1, false);

	function Back1(e) {

		var eP1 = $(".Kont1")[0];

		eP1.style.height = WinH;

		TweenLite.to(eP1, 0.7, {
			css : {
				transform : "scale(1,0)"
			},
			onComplete : Bk1,
			ease : Elastic.easeOut

		});
		HeadBack();
		Wrap();
	}

	function Bk1() {

		var K1 = $(".Kont1")[0];
		K1.classList.remove("z1");
		K1.classList.add("z");

		TweenLite.to($(".Kont1 h1"), 0, {
			css : {
				opacity : 0,
				scale : 1.7
			}
		});

		$(".Kont1")[0].style.height = "inherit";

		TweenLite.to($(".imgKont")[1], 0, {
			css : {
				marginLeft : "970px"
			}
		});

		TweenLite.to(K1, 0, {
			css : {
				transform : "scale(1,1)",
				delay : 0.5
			},
			onComplete : B1
		});
	}

	function B1() {

		TweenLite.to($(".Kont1 p"), 0, {
			css : {
				marginTop : "-1100px",
				marginBottom : "1100px",
				delay : 0.5
			},
			onComplete : Load
		});
	}

	Img[2].addEventListener("click", Back2, false);

	function Back2() {

		var eP2 = $(".Kont2")[0];

		eP2.style.height = WinH;

		TweenLite.to(eP2, 0.7, {
			css : {
				transform : "scale(1,0)"
			},
			onComplete : Bk2,
			ease : Elastic.easeOut
		});

		HeadBack();
		Wrap();
	}

	function Bk2() {

		var K2 = $(".Kont2")[0];

		K2.classList.remove("z1");
		K2.classList.add("z");

		TweenLite.to($(".Kont2 h1"), 0, {
			css : {
				opacity : 0,
				scale : 1.7
			}
		});

		$(".Kont2")[0].style.height = "inherit";

		TweenLite.to($(".imgKont")[2], 0, {
			css : {
				marginLeft : "970px"
			}
		});

		TweenLite.to(K2, 0, {
			css : {
				transform : "scale(1,1)",
				delay : 0.5
			},
			onComplete : B2
		});
	}

	function B2() {

		TweenLite.to($(".Kont2 p"), 0, {
			css : {
				marginTop : "1100px",
				marginBottom : "-1100px",
				delay : 0.5
			},
			onComplete : Load
		});
	}

	Img[3].addEventListener("click", Back3, false);

	function Back3(e) {

		var eP3 = $(".Kont3")[0];

		eP3.style.height = WinH;

		TweenLite.to(eP3, 0.7, {
			css : {
				transform : "scale(1,0)"
			},
			onComplete : Bk3,
			ease : Elastic.easeOut

		});

		HeadBack();
		Wrap();
	}

	function Bk3() {

		var K3 = $(".Kont3")[0];

		K3.classList.remove("z1");
		K3.classList.add("z");

		TweenLite.to($(".Kont3 h1"), 0, {
			css : {
				opacity : 0,
				scale : 1.7
			}
		});

		$(".Kont3")[0].style.height = "inherit";

		TweenLite.to($(".imgKont")[3], 0, {
			css : {
				marginLeft : "970px"
			}
		});

		TweenLite.to(K3, 0, {
			css : {
				transform : "scale(1,1)",
				delay : 0.5
			},
			onComplete : B3
		});
	}

	function B3() {

		TweenLite.to($(".Kont3 p"), 0, {
			css : {
				marginLeft : "1100px",
				marginRight : "-1100px",
				delay : 0.5
			},
			onComplete : Load
		});
	}

	$(".logo")[0].addEventListener("click", function (e) { 		

		Back();
		Back1();
		Back2();
		Back3();
		HeadBack();
		Rem();
		Wrap();
		Load();

	});

});

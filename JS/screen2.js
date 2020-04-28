
function allowDrop(ev) {
  	ev.preventDefault();
}

function drag(ev) {
  	ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
}


$(document).ready(function(){
	var screenOne = new screen1();//màn chơi 1
	//var screenTwo = new screen2();//màn chơi 2
	//var screenThree = new screen3();
})

class screen1{
	constructor(){
		this.startEvents();
	}
 	startEvents(){
 		$('.start').click(this.startOnclick.bind(this));
 		// ẩn start
 		$('.frac2-1').click(this.fracOnclick.bind(this));
 		$('.frac2-1a').click(this.fracOnclicka.bind(this));
 		$('.frac2-1b').click(this.fracOnclickb.bind(this));
 		$('.frac2-1c').click(this.fracOnclickc.bind(this));
 		$('.frac2-1d').click(this.fracOnclickd.bind(this));
 	}
 	// ẩn start và màn hình làm mờ
 	startOnclick(){
 		$('.start').hide();
 		$('.start-modal').hide();
 	}
 	fracOnclick(){
 		$("#ball5").addClass("add-ball5");
 		$(".bodys1").show();
 	}
 	fracOnclicka(){
 		$("#ball4").addClass("add-ball5");
 		$(".bodys2").show();
 	}
 	fracOnclickb(){
 		$("#ball3").addClass("add-ball5");
 		$(".bodys3").show();
 	}
 	fracOnclickc(){
 		$("#ball2").addClass("add-ball5");
 		$(".bodys4").show();
 	}
 	fracOnclickd(){
 		$("#ball1").addClass("add-ball5");
 		$(".end-game").show(500);
 	}

 	

}

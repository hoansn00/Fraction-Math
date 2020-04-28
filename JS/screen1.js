$(document).ready(function(){
	var screenOne = new screen1();//màn chơi 1
	var screenTwo = new screen2();//màn chơi 2
	var screenThree = new screen3();
})

class screen1{
	constructor(){
		this.startEvents();
	}
 	startEvents(){
 		$('.start').click(this.startOnclick.bind(this));// ẩn start
 		$(".numerator1").blur(this.checkNumeratorOne.bind(this));
 		$(".denominator1").blur(this.checkDenominatorOne.bind(this));
 		$(".numerator2").blur(this.checkNumeratorTwo.bind(this));
 		$(".denominator2").blur(this.checkDenominatorTwo.bind(this));
 		$(".compare").blur(this.checkCompare.bind(this));
 	}
 	// ẩn start và màn hình làm mờ
 	startOnclick(){
 		$('.start').hide();
 		$('.start-modal').hide();
 		$(".numerator1").focus();
 		$(".ball5").addClass("add-ball5");
 	}
 	checkNumeratorOne(){
 		var numeratorOne = $(".numerator1").val();
 		if(numeratorOne==2){
 			$(".denominator1").focus();
 			$(".numerator1").removeClass("add");
 			return;
 		}
 		if(numeratorOne!=2){
 			$(".numerator1").focus();
 			$(".numerator1").addClass("add");
 			return;
 		}
 		
 	}
 	checkDenominatorOne(){
 		var DenominatorOne = $(".denominator1").val();
 		if(DenominatorOne==5){
 			$(".numerator2").focus();
 			$(".denominator1").removeClass("add");
 			return;
 		}
 		if(DenominatorOne!=5){
 			$(".denominator1").addClass("add");
 			$(".denominator1").focus();
 			return;
 		}
 	}
 	checkNumeratorTwo(){
 		var numeratorTwo = $(".numerator2").val();
 		if(numeratorTwo==3){
 			$(".numerator2").removeClass("add");
 			$(".denominator2").focus();
 			return;
 		}
 		if(numeratorTwo!=3){
 			$(".numerator2").addClass("add");
 			$(".numerator2").focus();
 			return;
 		}
 		
 	}
 	checkDenominatorTwo(){
 		var DenominatorTwo = $(".denominator2").val();
 		if(DenominatorTwo==5){
 			$(".compare").focus();
 		   	$(".denominator2").removeClass("add");
 			return;
 		}
 		if(DenominatorTwo!=5){
 			$(".denominator2").addClass("add");
 			$(".denominator2").focus();
 			return;
 		}
 	}
 	checkCompare(){
 		var compare =$(".compare").val();
 		if(compare=="<"){
 			$("#ball5").addClass("add-ball5");
 			$(".bodys-one").show();
 			$(".compare").removeClass("add");
 			$(".numerator1-one").focus();
 		}
 		else{
 			if(compare==""){
 				alert("Điền dấu > ; < ; =");
 			}
 			else{
 				//alert('Đáp án chưa chính xác. Bạn có thể thử lại!');
 				$(".compare").addClass("add");
 				return;
 			}

 		}
 	}

}
//màn hình 2
class screen2{
	constructor(){
		this.startEvents();
	}
 	startEvents(){
 		$(".numerator1-one").blur(this.checkNumeratorOne1.bind(this));
 		$(".denominator1-one").blur(this.checkDenominatorOne1.bind(this));
 		$(".numerator2-one").blur(this.checkNumeratorTwo1.bind(this));
 		$(".denominator2-one").blur(this.checkDenominatorTwo1.bind(this));
 		$(".compare-one").blur(this.checkCompare1.bind(this));
 	}
 	checkNumeratorOne1(){
 		var numeratorOne1 = $(".numerator1-one").val();
 		if(numeratorOne1==2){
 			$(".denominator1-one").focus();
 			$(".numerator1-one").removeClass("add");
 			return;
 		}
 		if(numeratorOne1!=2){
 			$(".numerator1-one").addClass("add");
 			$(".numerator1-one").focus();
 			return;
 		}
 		
 	}
 	checkDenominatorOne1(){
 		var DenominatorOne1 = $(".denominator1-one").val();
 		if(DenominatorOne1==3){
 			$(".numerator2-one").focus();
 			$(".denominator1-one").removeClass("add");
 			return;
 		}
 		if(DenominatorOne1!=3){
 			$(".denominator1-one").addClass("add");
 			$(".denominator1-one").focus();
 			return;
 		}
 	}
 	checkNumeratorTwo1(){
 		var numeratorTwo1 = $(".numerator2-one").val();
 		if(numeratorTwo1==1){
 			$(".numerator2-one").removeClass("add");
 			$(".denominator2-one").focus();
 			return;
 		}
 		if(numeratorTwo1!=1){
 			$(".numerator2-one").focus();
 			$(".numerator2-one").addClass("add");
 			return;
 		}
 		
 	}
 	checkDenominatorTwo1(){
 		var DenominatorTwo1 = $(".denominator2-one").val();
 		if(DenominatorTwo1==3){
 			$(".denominator2-one").removeClass("add");
 			$(".compare-one").focus();
 			return;
 		}
 		if(DenominatorTwo1!=3){
 			$(".denominator2-one").addClass("add");
 			$(".denominator2-one").focus();
 			return;
 		}
 	}
 	checkCompare1(){
 		var compare1 =$(".compare-one").val();
 		if(compare1==">"){
 			$(".compare-one").removeClass("add");
 			$("#ball4").addClass("add-ball4");
 			$(".bodys-two").show();
 			$(".numerator1-two").focus();
 		}
 		else{
 			if(compare1==""){
 				alert("Điền dấu > ; < ; =");
 			}
 			else{
 				$(".compare-one").addClass("add");
 				//alert('Đáp án chưa chính xác. Bạn có thể thử lại!');
 				return;
 			}
 		}
 	}	
}
//man hinh 3
class screen3{
	constructor(){
		this.startEvents();
	}
 	startEvents(){
 		$(".numerator1-two").blur(this.checkNumeratorOne2.bind(this));
 		$(".denominator1-two").blur(this.checkDenominatorOne2.bind(this));
 		$(".numerator2-two").blur(this.checkNumeratorTwo2.bind(this));
 		$(".denominator2-two").blur(this.checkDenominatorTwo2.bind(this));
 		$(".compare-two").blur(this.checkCompare2.bind(this));
 	}
 	checkNumeratorOne2(){
 		var numeratorOne2 = $(".numerator1-two").val();
 		if(numeratorOne2==3){
 			$(".numerator1-two").removeClass("add");
 			$(".denominator1-two").focus();
 			return;
 		}
 		if(numeratorOne2!=3){
 			$(".numerator1-two").addClass("add");
 			$(".numerator1-two").focus();
 			return;
 		}
 		
 	}
 	checkDenominatorOne2(){
 		var DenominatorOne2 = $(".denominator1-two").val();
 		if(DenominatorOne2==4){
 			$(".denominator1-two").removeClass("add");
 			$(".numerator2-two").focus();
 			return;
 		}
 		if(DenominatorOne2!=4){
 			$(".denominator1-two").addClass("add");
 			$(".denominator1-two").focus();
 			return;
 		}
 	}
 	checkNumeratorTwo2(){
 		var numeratorTwo2 = $(".numerator2-two").val();
 		if(numeratorTwo2==1){
 			$(".numerator2-two").removeClass("add");
 			$(".denominator2-two").focus();
 			return;
 		}
 		if(numeratorTwo2!=1){
 			$(".numerator2-two").addClass("add");
 			$(".numerator2-two").focus();
 			return;
 		}
 		
 	}
 	checkDenominatorTwo2(){
 		var DenominatorTwo2 = $(".denominator2-two").val();
 		if(DenominatorTwo2==4){
 			$(".denominator2-two").removeClass("add");
 			$(".compare-two").focus();
 			return;
 		}
 		if(DenominatorTwo2!=4){
 			$(".denominator2-two").addClass("add");
 			$(".denominator2-two").focus();
 			return;
 		}
 	}
 	checkCompare2(){
 		var compare2 =$(".compare-two").val();
 		if(compare2==">"){
 			$("#ball3").addClass("add-ball3");
 			//$(".start").show();
 			$(".bodys-two").addClass("hide1");
 			//$(".start-modal").show();
 			$(".end-game").show(500);
 			//$(".bodys-two").hide();
 		}
 		else{
 			if(compare2==""){
 				alert("Điền dấu > ; < ; =");
 			}
 			else{
 				//alert('Đáp án chưa chính xác. Bạn có thể thử lại!');
 				$(".compare-two").addClass("add");
 				return;
 			}
 		}
 	}
}
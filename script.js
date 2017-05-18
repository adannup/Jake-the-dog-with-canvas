(function(){
	var canvas 	= 	document.getElementById('myCanvas');
	var ctx		=	canvas.getContext('2d');

	var w = canvas.width, h = canvas.height;

	var radians = function(degrees){
		return (Math.PI/180) * degrees;
	};

	var position = function(value){
		value = value || 1;
		return w/3 * value;
	};

	var eyes = function(){
		//arc(x, y, radius, startAngle, endAngle, anticlockwise)
		//moveTo(x, y)

		ctx.beginPath();
	    ctx.arc(position(1), 150, 70, 0, radians(360), true); //Eye Right
	    ctx.moveTo(position(2) + 70, 150);
	    ctx.arc(position(2), 150, 70, 0, radians(360), true); //Eye Left
	    ctx.fill();
	    ctx.closePath();
	    
	    ctx.beginPath();
	    ctx.fillStyle = 'white';
	    ctx.moveTo(position(1) + 50 - 10, 150 - 10);
	    ctx.arc(position(1) - 10, 150 - 10, 50, 0, radians(360), true); //Ocular Eye Right
	    ctx.moveTo(position(2) + 50 - 10, 150 - 10);
	    ctx.arc(position(2) -10, 150 -10, 50, 0, radians(360), true); //Ocular Eye Left
	    ctx.fill();
	    ctx.closePath();  
	};

	var nose = function(){
		//bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
		//moveTo(x, y)
		ctx.beginPath();
		ctx.fillStyle = 'black';
		ctx.moveTo(position(1) + 70, 230);
		ctx.bezierCurveTo(position(1) + 70 -5, 190, position(2) - 70 +5, 190, position(2) - 70, 230); //UP
		ctx.moveTo(position(1) + 70, 230);
		ctx.bezierCurveTo(position(1) + 70 -5, 270, position(2) - 70 +5, 270, position(2) - 70, 230);
		ctx.fill();
		ctx.closePath(); 
	};

	var mustache = function(){
		//bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
		//moveTo(x, y)
		ctx.beginPath();
		ctx.lineWidth = 6;
		ctx.fillStyle = '#f8c029';
		ctx.moveTo(position(1), 200);
		ctx.bezierCurveTo(position(1) + 20, 110, position(2) - 20 , 110, position(2), 200); //Superior
		ctx.bezierCurveTo(position(2) + 30 + 10, 340 - 30, position(2) + 30, 340, position(2) + 30, 340); //Lateral exterior derecha
		ctx.bezierCurveTo(position(2) + 30 - 10, 340 + 25, position(2) - 70 + 10, 340 + 20, position(2) - 70, 340); //inferior derecha
		ctx.bezierCurveTo(position(2) - 70 , 340, position(2) - 70, 340, position(2) - 70, 230); //lateral  interior derecha
		ctx.bezierCurveTo(position(2) - 70 +5 , 190, position(1) + 70 -5 , 190, position(1) + 70, 230); //superior interno
		ctx.bezierCurveTo(position(1) + 70 , 340, position(1) + 70, 340 -10, position(1) + 70, 340); //lateral interior izquierda
		ctx.bezierCurveTo(position(1) + 70 - 10, 340 + 20, position(1) - 30 + 10, 340 + 25, position(1) - 30, 340); //inferior izquierda
		ctx.bezierCurveTo(position(1) - 30 - 10, 340 -30, position(1), 200, position(1), 200); //Lateral exterior derecha
		ctx.stroke();
		ctx.fill();
		ctx.closePath(); 
	};


	var mouth = function(){
		//moveTo(x, y)
		ctx.beginPath();
		ctx.lineWidth = 3;
	    ctx.moveTo(position(1) + 70, 230 + 50);
		ctx.bezierCurveTo(position(1) + 70 -5, 230 + 50 + 20, position(2) - 70 +5, 230 + 50 + 20, position(2) - 70, 230 +50); //UP
		ctx.stroke();
		ctx.closePath();
	};

	(function draw(){
		eyes();
		nose();
		mouth();
		mustache();
	})();

})();
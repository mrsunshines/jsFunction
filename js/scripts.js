alert("Welcome to my page that will calculate area covered by a triangle of your choice just type in values and clap your hands while this 'state of the art' computer will perform this super complex operation...by a JS Function!!wow!!")

var	a = prompt ('type in base length'),
	h = prompt ('type in height');

function getTriangleArea(a, h) {
	if ((a <= 0) || (h <= 0)) {
    alert('Come on .. have you seen a negative distance 4real? Try again with some positive values - Nieprawidłowa wartość - daj cos na plusie');
    } else if ((a > 0) && (h > 0)) {
    var triangleArea = a*h/2;	
    alert('' + triangleArea + ' jest polem twego trójkąta');
	}
}

getTriangleArea(a, h);

var pole1 = getTriangleArea(10, 5);
var pole2 = getTriangleArea(8, 3);
var pole3 = getTriangleArea(7, 2);

alert(pole1);
alert(pole2);
alert(pole3);

/*function myFirstFunction(parameter) {
	return 'returnedvalue';
}
// wywolanie
myFirstFunction(); */
//task
alert("Welcome to my page that will calculate area covered by a triangle of your choice just type in values and clap your hands while this 'state of the art' computer will perform this super complex operation...by a JS Function!!wow!!")

var	a = prompt ('type in base length'),
	h = prompt ('type in height'),
	triangleArea = a*h/2;

function getTriangleArea(a, h) {
	if ((a <= 0) || (h <= 0)) {
    alert('Come on .. have you seen a negative distance 4real? Try again with some positive values - Nieprawidłowa wartość - daj cos na plusie');
    } else if ((a > 0) && (h > 0)) {
    alert('' + triangleArea + ' jest polem twego trójkąta');	
	}
}
getTriangleArea(a, h);
/*
var	a = prompt ('type in base length'),
	h = prompt ('type in height'),
	triangleArea = a*h/2;
if ((a <= 0) || (h <= 0)) {
    alert('Come on .. have you seen a negative distance 4real? Nieprawidłowa warotść');
}    
alert(triangleArea);

console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
function getTriangleArea(a, h) {
	if ((a <= 0) || (h <= 0)) {
    alert('Come on .. have you seen a negative distance 4real? Nieprawidłowa warotść');
    } else if ((a > 0) && (h > 0)) {
    return (a*h/2);	
	}
}
getTriangleArea(a, h);
// function getTriangleArea(getTriangleArea)
*/
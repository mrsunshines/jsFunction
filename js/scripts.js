alert("Welcome to my page that will calculate area covered by a triangle of your choice just type in values and clap your hands while this 'state of the art' computer will perform this super complex operation...by a JS Function!!wow!!");

var	a = prompt ('type in base length'),
	h = prompt ('type in height'),
	area = getTriangleArea(a, h);
if ((a <= 0) || (h <= 0)) {
	alert('Come on .. have you seen a negative distance 4real? Try again with some positive values - Nieprawidłowa wartość - daj cos na plusie');
} else if ((a > 0) && (h > 0)) {
	getTriangleArea(a, h);
}
function getTriangleArea(a, h) {
	return a*h/2;
}
var pole1 = getTriangleArea(10, 5);
var pole2 = getTriangleArea(8, 3);
var pole3 = getTriangleArea(7, 2);
alert('' + area + ' jest polem twego trójkąta');
alert('Tera deser(y) wg sugestii Mentora')
alert('' + pole1 + ' jest to pole trojkątka o podstawie 10 i wysokości 5 ');
alert('' + pole2 + ' jest to pole trojkątka o podstawie 8 i wysokości 3 ');
alert('' + pole3 + ' jest to pole trojkątka o podstawie 7 i wysokości 2 ');
alert('A to koniec ... chyba, no bo funcja w środku - alerty na zewnątrz a błąd nie wyświetla się ...')
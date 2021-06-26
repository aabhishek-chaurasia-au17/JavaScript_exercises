var area = "circle"
var PI = 3.142, l = 5, b = 4, r = 3;

switch (area) {
    case "triangel":
        console.log("the area of the tringel is " + (l*b)/2);
        break;
    case "circle":
        console.log("the area of the circle is " + PI * r ** 2);
        break;
    case "rectangle":
        console.log("the area of the rectangle is " + l * b);
        break;
    default:
        console.log("please enter a valid data");
}
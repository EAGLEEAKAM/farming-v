
function calculate(){
    var number1=Number(document.getElementById("first_number").value);
var area=number1*number1;
console.log(area);
var perimeter=4*number1;
console.log(perimeter);
document.getElementById("label_area").innerHTML=area;
document.getElementById("label_length").innerHTML=perimeter;
}

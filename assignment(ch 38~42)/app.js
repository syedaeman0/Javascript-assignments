//___________________ CHAP 38 -42

//-------QUES 1
// function power(a,b){
//     var result =a;
//  if(b<0){
//     a= 1/a; 
//     b=-b
//  }
//  for(var i=0; i<b; i++){
//     result **=a;
//  }
//  return result;
// }
// power(a,b);

//------ Ques 2
// var year= parseInt(prompt('enter a year'))
// function isleapyear(year){
//     if ((year % 4===0 && year % 100 !==0 || year % 400===0)){
//        console.log(year +  "leap year")
//     } else{
//         console.log (year + "is not a leap year")
//     }
// }
// isleapyear(year);

//--------- QUES 3
// var a = parseInt(prompt('enter a value'))
// var b = parseInt(prompt('enter b value'))
// var c = parseInt(prompt('enter c value'))
// function SemiPerimeter(a, b, c) {
//     return (a + b + c) / 2;
// }
// console.log(SemiPerimeter())
// SemiPerimeter()
// function getTriangleArea(a, b, c) {
//     var S = SemiPerimeter(a, b, c);
//     var area = Math.pow(S * (S - a) * (S - b) * (S - c));
//     return area;
// }
// console.log(getTriangleArea())
// getTriangleArea()

//----------QUES 4
function mainone(){
    var subj1= parseInt(prompt("enter a subj 1 marks"))
    var subj2= parseInt(prompt("enter a subj 2 marks"))
    var subj3= parseInt(prompt("enter a subj 3 marks"))
    totalmarks = 100
 function averagefun(){
     var totalnum = subj1+ subj2 + subj3
     var average= totalnum/3
     function percent(){
        var percent = average/ totalmarks * 100
        return percent
     } 
     percent()
    
 }
 averagefun()
}
mainone()

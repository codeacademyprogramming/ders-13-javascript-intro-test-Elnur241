let x = prompt("bir terefin uzunlugunu daxil et");
let y=prompt("bir terefin uzunlugunu daxil et");
let z=prompt("bir terefin uzunlugunu daxil et");
let X = parseInt(x);
let Z = parseInt(z);
let Y= parseInt(y);
if(X==Y && Y==Z && X==Z){
    alert('berabertereflidir');

}else if(X+Y>Z && X+Z>Y && Y+Z>X){
    alert("dogrudur");

}else{
    alert("dogru deyil")
}
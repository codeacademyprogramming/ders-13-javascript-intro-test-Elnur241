
 let a=prompt("a terefini daxil edin");
 let b=prompt("b terefini daxil edin");
 let c=prompt("c terefini daxil edin")

if (a+b<c && a+c<b && b+c<a){
    alert("bu ucbucaq beraber tereflidir")

}else if(a==b && a==c ){
alert("bu ucbucaq beraber yanlidir")

}else if(a==b && a==c && b==c){
    alert("bu ucbucaq beraberyanlidir")

}else{
    alert("bele ucbucaq yoxdur")
}
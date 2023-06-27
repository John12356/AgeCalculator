function set(){
var d1= document.getElementById("day").value;
var m1= document.getElementById("month").value;
var y1= document.getElementById("year").value;
// let rd=document.getElementById("day1");
// let rm=document.getElementById("mon1");
// let ry=document.getElementById("year1");

var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var date=new Date();
var d2=date.getDate();
var m2=date.getMonth() +1;
var y2=date.getFullYear();

if(d2<d1){
    d2=d2 + month[m2-1];
    m2=m2-1;
}
if(m2<m1){
    m2=m2+12;
    y2=y2-1;
}

var d3=d2-d1;
var m3=m2-m1;
var y3=y2-y1;

//rd.innerText=d3;

document.getElementById("day1").innerHTML = d3;
document.getElementById("mon1").innerHTML = m3;
document.getElementById("year1").innerHTML = y3;
}


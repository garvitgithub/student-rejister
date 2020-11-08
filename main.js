array=[];
display=[];
function submit()
{
for(var j=1;j<=4;j++)

{
var studentname=document.getElementById("name_of_the_student_"+j).value;
console.log(studentname);
display.push(studentname);
array.push("<h4>NAME: "+studentname+"</h4>");
}
console.log(display);
document.getElementById("display_name_with_commas").innerHTML=array;
var remove=array.join(" ");
console.log(remove);
document.getElementById("display_name_without_commas").innerHTML=remove;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}

function sorting()
{
array.sort();
console.log(array);
var displaysort=[];
var length=array.length;
console.log(length);
for(var a=0;a>length;a++)
{
displaysort.push("<h4>NAME: "+array[a]+"</h4>");
console.log(displaysort);
}
var remove=array.join(" ");
console.log(remove);
document.getElementById("display_name_without_commas").innerHTML=remove;
}

function update()
{
    document.getElementById("display_name_without_commas").innerHTML="<h1>"+display+"</h1>";


}
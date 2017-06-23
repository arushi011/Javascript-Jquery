var today = new Date();
var year = today.getFullYear();
var month = today.toLocaleString("en-us", { month: "long" });

var first = new Date(today.getYear(), today.getMonth()+1, 1);
var fday = first.getDay();

var last = new Date(today.getYear(), today.getMonth()+1, 0);
var lday = last.getDate();

document.getElementById("datehere").innerHTML = today.getDate()+" "+month+" "+year;
for(var i = 1; i<fday; i++)
{document.getElementById("addpills").innerHTML += "<label></label>";}
for(var i = 1; i <= lday; i++)
{
document.getElementById("addpills").innerHTML +=
  "<label>"
   + i + 
  "</label>";
}
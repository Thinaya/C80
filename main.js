var GuestName = document.getElementById("name1").value;
name_of_people.push(GuestName);

name_of_people.sort();

function searching()
{
    var s= document.getElementById("s1").value
    var found=0
    var j;
    for(j=0; j<names_of_people.length; j++)
{
    if(s==names_of_people[j]){

    }
}
document.getElementById("p2").innerHTML="name found"+found+" times/s";
console.log("found name"+found+" time/s");
}
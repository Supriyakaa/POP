// write js code here corresponding to favourites.html
var  masai=JSON.parse(localStorage.getItem("favourites")) || [];
displayData(masai);

function displayData(masai){
    document.querySelector("tbody").innerHTML="";

    masai.foreach(function(elem){

        var tr= document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText=elem.Match;

        var td2=document.createElement("td");
        td1.innerText=elem.TeamA;

        var td3=document.createElement("td");
        td1.innerText=elem.TeamB;

        var td4=document.createElement("td");
        td1.innerText=elem.Date;

        
        var td5=document.createElement("td");
        td1.innerText=elem.Venue;

        var td6 =document.createElement("td");
        td6.innerText="Delete";
        td6.style.cursor="pointer";

        td6.addEventListener("click",deletrow)
            
        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr);
   
        });
        function deleterow(){
            event.target.parentNode.remove();
        }
    }
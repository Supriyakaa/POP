// write js code here corresponding to matches.html
var sarr=JSON.parse(localStorage.getItem("schedule")) || [];
console.log(sarr);
 
displayData(sarr);
var masai=JSON.parse(localStorage.getItem("favourites")) || [];
 function displayData(sarr){
     document.querySelector ("tbody").innerHTML="";
     sarr.foreach(function(elem){
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
         td6.innerText="Favourites";
         td6.style.color="green";
         td6.style.cursor="pointer";

         td6.addEventListener("click",function(){
             addfav(elem);
             
         });

     tr.append(td1,td2,td3,td4,td5,td6);
     document.querySelector("tbody").append(tr);

     });
 }

 function addfav(elem){
     masai.push(elem);

     localStorage.setItem("favouritems",JSON.stringify(masai));
     window.localStorage.href="favourites.html"
 }

  function againfilter(){
      var noun=document.querySelector("#filterVenue").value
      console.log(noun);

      var  filter = sarr.filter(function(elem){
          return elem.Venue === noun
      });
      displayData(filter);
  }
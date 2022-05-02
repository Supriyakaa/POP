// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",myfunction)

var sarr =JSON.parse(localStorage.getItem("schedule")) || [];

function myfunction(){
    event.preventDefault();


     arrobj = {
         Match:masaiForm.matchNum.value,
         TeamA:masaiForm.teamA.value,
         TeamB:masaiForm.teamB.value,
         Date:masaiForm.date.value,
         Venue:masaiForm.venue.value,
     }

     sarr.push(arrobj);
     console.log(sarr);
     localStorage.setItem("schedule",JSON.stringify(sarr))
     window.localStorage.href="matches.html"
}
   
const calculateBtn=document.getElementById("calculate-btn")
const totalCalculateBtn=document.getElementById("totalCost-btn")
const playerExpenses=document.getElementById("player-expenses");
const totalExpenses=document.getElementById("total-expenses")

//calculation for perplayer expenses..

 calculateBtn.addEventListener("click",function(){
 const perPlayer=document.getElementById("per-player")

    let perCost=parseInt(perPlayer.value)
    if(isNaN(perCost)){
        alert("please enter any number")
   
}
else{
     playerExpenses.innerText=perCost*5 
}

  });

//calculation total cost for all..

totalCalculateBtn.addEventListener("click",function(){
    
const managerCost=document.getElementById("manager")
const coachCost=document.getElementById("coach")
const perPlayer=document.getElementById("per-player")
  let perCost=parseInt(perPlayer.value)
  let managerCostInt=parseInt(managerCost.value)
  let coachCostInt=parseInt(coachCost.value)

if(isNaN(managerCostInt)&&isNaN(coachCostInt))
  {
    alert("please enter any number")
 
}
else{
    const totalCost=managerCostInt+coachCostInt+perCost*5
    totalExpenses.innerText=totalCost;
  }

  });
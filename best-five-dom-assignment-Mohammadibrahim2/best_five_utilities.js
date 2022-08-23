function player(name){
	const playerName=document.getElementById(name)
	return playerName.innerText

}
 const player1=player("player-name")
 const player2=player("player-name1")
 const player3=player("player-name2")
 const player4=player("player-name3")
 const player5=player("player-name4")
 const player6=player("player-name5")
 const player7=player("player-name6")
 const player8=player("player-name7")

 function selectBtn(button){
   let selectBtn3 = document.getElementById(button)
   return selectBtn3
 }
 
 const selectButton=selectBtn("select-player")
 const selectButton1=selectBtn("select-player1")
 const selectButton2=selectBtn("select-player2")
 const selectButton3=selectBtn("select-player3")
 const selectButton4=selectBtn("select-player4")
 const selectButton5=selectBtn("select-player5")
 const selectButton6=selectBtn("select-player6")
 const selectButton7=selectBtn("select-player7")

 
function selectPlayers(selectPlayerButton,playerName){

  const listBoard =document.getElementById("board")
  const numberOfLi=listBoard.getElementsByTagName("li").length 
  if(numberOfLi<5)

  {
  selectPlayerButton.style.backgroundColor="#666"
  selectPlayerButton.style.color="#000";
  const li=document.createElement("li")
  li.innerText=playerName
  listBoard.appendChild(li) 
  selectPlayerButton.setAttribute("disabled","")
}

  else{
    alert("Thank you.it's full.Try next match")
  }
};

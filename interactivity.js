function playToggle(){
  var pButton = document.getElementById("player");
  
  if(pButton.innerHTML == "pause"){
    pButton.innerHTML = "play_arrow";
    
    //code for pausing the song
  }
  else if(pButton.innerHTML == "play_arrow"){
    pButton.innerHTML = "pause";
    
    //code for continue playing song
  }
}

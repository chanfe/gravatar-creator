function updateDOM(input){
    let identicon = new Identicon(input)
    let defColor = `rgb(255,255,255)`
    let c = 0
    for(let i = 0; i < 5; i++){
      for(let j = 0; j < 3; j++){
        if(identicon.uniqueInt[c] < 127){
          document.getElementById(`${i}-${j}`).style.backgroundColor = identicon.color
          document.getElementById(`${i}-${4-j}`).style.backgroundColor = identicon.color
        }
        else{
          document.getElementById(`${i}-${j}`).style.backgroundColor = defColor
          document.getElementById(`${i}-${4-j}`).style.backgroundColor = defColor
        }
        c++;
      }
    }
    console.log(identicon)
  
  }
function updateDOM(input){
    let identicon = new Identicon(input)
    identicon.matrix.forEach((row,i) => {
        row.forEach((col,j) => {
            document.getElementById(`${i}-${j}`).style.backgroundColor = identicon.matrix[i][j]
        })
        
    })
    console.log(identicon)
  
  }
function handleSubmit(e) {
  e.preventDefault()
  const input = e.target.querySelector("input").value
  updateDOM(input)
  e.target.reset()

}
// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
})

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", a => {
    a.preventDefault()
    //let blockColor = `rgb(${getRandomInt(256)},${getRandomInt(256)},${getRandomInt(256)})`
    //let defColor = `rgb(${getRandomInt(256)},${getRandomInt(256)},${getRandomInt(256)})`
    let defColor = `rgb(255,255,255)`
    let text_value = a.target[0].value
    const hashedArr = md5.array(text_value)
    let blockColor = `rgb(${hashedArr[0]},${hashedArr[1]},${hashedArr[2]})`
    let c = 0
    for(let i = 0; i < 5; i++){
      for(let j = 0; j < 3; j++){
        if(hashedArr[c] < 127){
          document.getElementById(`${i}-${j}`).style.backgroundColor = blockColor
          document.getElementById(`${i}-${4-j}`).style.backgroundColor = blockColor
        }
        else{
          document.getElementById(`${i}-${j}`).style.backgroundColor = defColor
          document.getElementById(`${i}-${4-j}`).style.backgroundColor = defColor
        }
        c+=1
      }
    }

  })
})

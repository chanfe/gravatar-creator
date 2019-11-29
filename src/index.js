function handleSubmit(e) {
  e.preventDefault()
  const input = e.target.querySelector("input").value
  updateDOM(input)
  e.target.reset()

}

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

class Identicon {
  // make use of the md5.array method, which is in scope because we required it in our index.html
  constructor(user) {
    this.user = user;
    this.uniqueInt = this._user_value()
    this.color = this._rbg_color();
  }

  _user_value(){
    return md5.array(this.user)
  }

  _rbg_color() {
    return `rgb(${this.uniqueInt[0]},${this.uniqueInt[1]},${this.uniqueInt[2]})`
  }
  
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
})


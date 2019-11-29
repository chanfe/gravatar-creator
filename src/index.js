function handleSubmit(e) {
  e.preventDefault()
  const input = e.target.querySelector("input").value
  updateDOM(input)
  e.target.reset()
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
})


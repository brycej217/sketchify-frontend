"use client"

export default function CreateButton() {
  return (<button className="btn btn-lg btn-primary" onClick={() => login()}>Create Sketch</button>)
}

const login = async () => {
  try {
    let response = await fetch('https://sketchify-backend-673009b3e188.herokuapp.com/api/login')
    let url = await response.text()
    window.location.href = url
  } catch (error) {
    console.log(`ERROR ${error}`)
  }
}
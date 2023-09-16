import AboutButton from "../components/AboutButton"
import Signature from "../components/Signature"

export default function Page( {searchParams}) {
  return (
    <main>
      <div className="container-fluid center-vertically">
        <img src={searchParams.image}></img>
        <p style={{ fontSize: "1.5vw" }}>{searchParams.prompt}</p>
      </div>
      <div className="text-center reduce-space">
        <AboutButton />
        <Signature />
      </div>
    </main>
  )
}
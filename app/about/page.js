export default function Page() {
    return (
        <main>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-8 center-vertically">
                <h1 style={{ fontSize: "1.5vw" }}>What?</h1>
                <p class="text-center">
                  Sketchify is a web app that uses AI to generate a visual
                  representation of your Spotify listening data.
                </p>
                <br></br>
                <h1 style={{ fontSize: "1.5vw" }}>Who?</h1>
                <p class="text-center">
                  Sketchify was made by{" "}
                  <a href="https://github.com/brycej217" target="_blank">
                    Bryce Joseph
                  </a>
                  , a third-year computer science major at NYU.
                </p>
                <br></br>
                <h1 style={{ fontSize: "1.5vw" }}>How?</h1>
                <p class="text-center">
                  Sketchify uses the Spotify API and the Replicate API to generate an
                  image based on your data. I retrieve your Spotify data from the
                  Spotify API, calculate your top 5 distinct genres, and then send it to
                  the Replicate API via a prompt. Replicate hosts various Stable
                  Diffusion models, which is how your sketch is generated!
                </p>
                <br></br>
                <h1 style={{ fontSize: "1.5vw" }}>How did you calculate my genres?</h1>
                <p class="text-center">
                  I get the genres from your top artists from the last 6-months. I then
                  process these genres to find the top 5 ones that you have listened to most
                  frequently. You can see these genres listed in order right below your sketch.
                </p>
                <br></br>
                <h1 style={{ fontSize: "1.5vw" }}>How do I save my sketch?</h1>
                <p class="text-center">
                  On a laptop/PC, right click your sketch and save the image. On a
                  mobile device, hold down on the iceberg image to save or share it (or
                  screenshot!).
                </p>
              </div>
            </div>
          </div>
        </main>
      );
}

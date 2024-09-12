import { useState } from "react"

function App() {

  const [donateValue, setDonateValue] = useState();

  const handleInput = (e) => {
    setDonateValue(e.target.value)
  }

  return (
    <section className="container">
      <div>

        <div>
          <button>Donate monthly</button>
          <button>Donate once</button>
        </div>
      </div>

      <div>
        <div>
          <h3>
            I would like to make a *monthly" donation of
          </h3>

          <div>
            <form onChange={handleInput} >

              <label htmlFor="">
                2
                <input type="radio" name="donation" value="2" />
              </label>

              <label htmlFor="">3
              <input type="radio" name="donation" value="2" />
              </label>

              <label htmlFor="">
                4
              <input type="radio" name="donation" value="2" />
              </label>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default App

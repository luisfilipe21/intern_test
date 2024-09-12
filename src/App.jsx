import { useState } from "react";
import visa from "./assets/visa-logo.png";
import debit from "./assets/direct-debit.png";
import fundraising from "./assets/fundraising-logo.png";
import masterCard from "./assets/mastercard-logo.png";
import paypal from "./assets/paypal-logo.png";
import pound from "./assets/pound.svg";
import secure from "./assets/secure.svg";
import selected from "./assets/selected.svg";

function App() {

  const [donateValue, setDonateValue] = useState(20);

  console.log(donateValue)

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
            <form onChange={(e) => setDonateValue(e.target.value)} >

              <label htmlFor="">
                2
                <input type="radio" name="donation" value="2" />
              </label>

              <label htmlFor="">3
                <input type="radio" name="donation" value="3" />
              </label>

              <label htmlFor="">
                4
                <input type="radio" name="donation" value="4" />
              </label>
              <label htmlFor="">
                5
                <input type="radio" name="donation" value="5" />
              </label>

              <button type="submit">Donate <img src={pound} />{donateValue} montly <img src={secure} alt="" /></button>

            </form>

            <div>
              <p>
                <img src={pound} />{donateValue} help an Animal Rescue Team make an urgent animal rescue
              </p>
            </div>
          </div>
          <div>
            <div>

              <p>I would like to make a one-off donation</p>
            </div>

            <div>
        <p>All Direct Debits are protected by the Direct Debit Guarantee.</p>
        <img src={debit} alt="" />
        <img src={fundraising} alt="" />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default App

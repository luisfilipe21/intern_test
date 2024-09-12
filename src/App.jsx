import { useState } from "react";
import visa from "./assets/visa-logo.png";
import debit from "./assets/direct-debit.png";
import fundraising from "./assets/fundraising-logo.png";
import masterCard from "./assets/mastercard-logo.png";
import paypal from "./assets/paypal-logo.png";
import pound from "./assets/pound.svg";
import secure from "./assets/secure.svg";
import selected from "./assets/selected.svg";

import style from "./style.module.scss";

function App() {

  const [donateValue, setDonateValue] = useState(20);
  const [selectedDonationMethod, setSelectedDonationMethod] = useState();

  console.log(donateValue)

  return (
    <section className="container">
      <div className={style.container}>

        <div className={style.boxDate}>
            <button className="btnDate">Donate monthly</button>
            <button className="btnDate">Donate once</button>
        </div>


        <div className={style.boxForm}>
          <div className={style.boxInfoForm}>
            <h3>
              I would like to make a *monthly" donation of
            </h3>

            <form
              className={style.divForm}
              onChange={(e) => setDonateValue(e.target.value)} >

              <label>
                <img src={pound} alt="" />6

                <input
                  className={style.customRadio}
                  type="radio"
                  name="donation"
                  value="6"
                />
              </label>

              <label><img src={pound} alt="" />12
                <input type="radio"
                  name="donation"
                  value="12" />
              </label>

              <label>
                <img src={pound} alt="" />18
                <input type="radio"
                  name="donation"
                  value="18" />
              </label>

              <label>
                <img src={pound} alt="" />30
                <input type="radio"
                  name="donation"
                  value="30" />
              </label>

              <label>
                <img src={pound} alt="" /> Another ammout
                <input type="radio"
                  name="donation"
                  value="" />
              </label>

              <button className="btn" type="submit">
                Donate <img className={style.imgPound} src={pound} />{donateValue} montly <img className={style.imgLock} src={secure} alt="" />
              </button>

            </form>

            <div className={style.line}>
              <p>
                <img src={pound} />{donateValue} Could help answer and emergency call to our Animal Rescue Line
              </p>
              <span></span>
            </div>


          </div>

          <div className={style.divFooter}>
            <div className={style.donate}>
              <p>I would like to make a one-off donation</p>
            </div>

            <div className={style.rights}>
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

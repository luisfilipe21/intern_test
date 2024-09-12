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
  const [month, setMonth] = useState(false)

  return (
    <section className="container">
      <form className={style.container}>

        <div className={style.boxDate}>

          {month ?
            <>
              <label className="btnMonth" htmlFor="month"  >
                Donate monthly
                <input type="radio" id="month" value={"month"} />
              </label>

              <label htmlFor="once" className="btnMonth" >
                Donate once
                <input type="radio" value="once" />
              </label>
            </>
            :

            <>
              <label className="btnMonth" htmlFor="" checked>
                Donate monthly
                <input type="radio" />
              </label>

              <label htmlFor="" className="btnMonth" >
                Donate once
                <input type="radio" />
              </label>
            </>}



        </div>


        <div className={style.boxForm}>
          <div className={style.boxInfoForm}>
            <h3>
              I would like to make a monthly donation of
            </h3>

            <form
              className={style.divForm}
              onChange={(e) => setDonateValue(e.target.value)} >
              <div className={style.divLabel}>
                <label>
                  <img src={pound} />6

                  <input
                    className={style.customRadio}
                    type="radio"
                    name="donation"
                    value="6"
                  />
                </label>

                <label><img src={pound} />12
                  <input type="radio"
                    name="donation"
                    value="12" />
                </label>

                <label>
                  <img src={pound} />18
                  <input type="radio"
                    name="donation"
                    value="18" />
                </label>

                <label>
                  <img src={pound} />30
                  <input type="radio"
                    name="donation"
                    value="30" />
                </label>
              </div>

              <div className={style.dif}>
                <label className="difInput">
                  <img src={pound} /> Another ammout
                  <input type="radio"
                    name="donation"
                    value=""
                  />
                </label>
              </div>

              <button className={`btn`}>
                Donate 
                <img width={15} className={style.imgPound} src={pound}/>
                 
                {donateValue} montly
                <img width={15} className={style.imgLock} src={secure} />
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
              <div className={style.images}>
              <img src={debit} />
              <img src={fundraising} />
              </div>
            </div>

          </div>
        </div>

      </form>
    </section>
  )
}

export default App

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

  const [donateValue, setDonateValue] = useState(6);
  const [month, setMonth] = useState(true)

  const handleEvent = (e) => {
    console.log(e.target.value);
    if (e.target.value === "month") {
      setMonth(true);
    }

    if (e.target.value === "once") {
      setMonth(false);
    }

  }

  return (
    <section className="container">
      <form className={style.container}>

        <div className={style.boxDate}>

          {month ?
            <>
              <label onClick={handleEvent} className="btnMonth" htmlFor="month"  >
                Donate monthly
                <input type="radio" id="month" value={"month"} />
              </label>

              <label onClick={handleEvent} htmlFor="once" className="btnDate" >
                Donate once
                <input type="radio" id="once" value={"once"} />
              </label>
            </>

            :
            <>
              <label onClick={handleEvent} className="btnDate" htmlFor="month"  >
                Donate monthly
                <input type="radio" id="month" value={"month"} />
              </label>


              <label onClick={handleEvent} htmlFor="once" className="btnMonth" >
                Donate once
                <input type="radio" id="once" value={"once"} />
              </label>
            </>}
        </div>


        <div className={style.boxForm}>
          <div className={style.boxInfoForm}>
            <h3>
              {month ? "I would like to make a monthly donation of" :
                "I would like to make a one-off donation of"}
            </h3>

            <div
              className={style.divForm}
              onChange={(e) => setDonateValue(e.target.value)} >
              <div className={style.divLabel}>
                <label>
                  <img src={pound} />
                  {month ? 6 : 10}

                  <input
                    className={style.customRadio}
                    type="radio"
                    name="donation"
                    value="6"
                  />
                </label>

                <label>
                  <img src={pound} />
                  {month ? 12 : 40}

                  <input type="radio"
                    name="donation"
                    value="12" />
                </label>

                <label>
                  <img src={pound} />
                  {month ? 18 : 75}

                  <input type="radio"
                    name="donation"
                    value="18" />
                </label>

                <label>
                  <img src={pound} />
                  {month ? 30 : 100}

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
                <img width={15} className={style.imgPound} src={pound} />

                {donateValue}
                {month ? "montlhly" : "today"}

                <img width={15} className={style.imgLock} src={secure} />
              </button>

            </div>


            <div className={style.line}>
              <p>
                <img src={pound} />{donateValue}
                {month ?
                  "Could help answer and emergency call to our Animal Rescue Line"
                  : "Could help an Anumal Rescue Team take on an urgent animal rescue"}

              </p>
              <span></span>
            </div>


          </div>

          <div className={style.divFooter}>
            <div className={style.donate}>
              <p>
                {month ? "I would like to make a one-off donation" : "I would like to give monthly"}
              </p>
            </div>

            <div className={style.rights}>
              {month ?
                <>
                  <p>All Direct Debits are protected by the Direct Debit Guarantee.</p>

                  <div className={style.images}>
                    <img src={debit} />
                    <img src={fundraising} />
                  </div>
                </>

                :
                <div className={style.images}>
                  <img width={50} src={visa} />
                  <img width={50} src={masterCard} />
                  <img width={50} src={paypal} />
                  <img width={50} src={fundraising} />
                </div>}


            </div>

          </div>
        </div>

      </form>
    </section>
  )
}

export default App

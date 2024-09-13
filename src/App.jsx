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
import { Inputs } from "./components/Inputs";
import { useForm } from "react-hook-form";
import { Buttons } from "./components/Buttons";

function App() {

  const [donateValue, setDonateValue] = useState(6);
  const [month, setMonth] = useState(true);
  const { register, handleSubmit } = useForm();

  const handleEvent = (e) => {
    console.log(e.target.value);
    if (e.target.value === "month") {
      setMonth(true);
    }

    if (e.target.value === "once") {
      setMonth(false);
    }

  }

  const donatinValue = (e) => {
    setDonateValue(e.target.value);
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

            {month ?
              <>
                <div
                  className={style.divForm}
                  onChange={donatinValue} >
                  <div className={style.divLabel}>
                    <Inputs
                      {...register("donation")}
                      type="radio"
                      value="6"
                      imgSrc={pound}

                    />
                    <Inputs
                      {...register("donation")}
                      type="radio"
                      value="12"
                      imgSrc={pound}

                    />
                    <Inputs
                      {...register("donation")}
                      type="radio"
                      value="18"
                      imgSrc={pound}

                    />
                    <Inputs
                      {...register("donation")}
                      type="radio"
                      value="30"
                      imgSrc={pound}

                    />
                  </div>

                  <div className={style.dif}>

                    <Inputs
                      {...register("donation")}
                      type="radio"
                      value={" Another ammount"}
                      imgSrc={pound}
                    />
                  </div>

                  <Buttons
                    imgSrc={pound}
                    secure={secure}
                    donateValue={donateValue}
                  />
                </div>
              </>

              :

              <>
                <div
                  className={style.divForm}
                  onChange={donatinValue} >
                  <div className={style.divLabel}>

                    <Inputs
                      {...register("donation")}
                      type="radio"
                      value="10"
                      imgSrc={pound}

                    />
                    <Inputs
                      {...register("donation")}
                      type="radio"
                      value="40"
                      imgSrc={pound}

                    />
                    <Inputs
                      {...register("donation")}
                      type="radio"
                      value="75"
                      imgSrc={pound}

                    />

                    <Inputs
                      {...register("donation")}
                      type="radio"
                      value="100"
                      imgSrc={pound}

                    />


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
                    today

                    <img width={15} className={style.imgLock} src={secure} />
                  </button>

                </div>
              </>}



            <div className={style.line}>
              <p>
                <img src={pound} />{donateValue} {month ?
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

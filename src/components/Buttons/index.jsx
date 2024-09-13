import style from "./style.module.scss";

export const Buttons = ({ pound, donateValue, secure }) => {
    return (
        <button className={`btn`}>
            Donate
            <img width={15} className={style.imgPound} src={pound} />

            {donateValue} montlhly  <img width={15} className={style.imgLock} src={secure} />
        </button>
    )
}
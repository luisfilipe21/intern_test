import style from "./style.module.scss";

export const Buttons = ({ pound, donateValue, secure, name }) => {
    return (
        <button className={`btn`}>
            Donate
            <img width={15} className={style.imgPound} src={pound} />

            {donateValue} {name} <img width={15} className={style.imgLock} src={secure} />
        </button>
    )
}
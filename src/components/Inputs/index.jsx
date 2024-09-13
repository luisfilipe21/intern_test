import { forwardRef } from "react"
import style from "./style.module.scss"

export const Inputs = forwardRef(({ imgSrc, handleEvent, htmlFor, ...rest }, ref) => {

    return (
        <label htmlFor={htmlFor} onClick={handleEvent}>
            <img src={imgSrc} />
            {rest.value}

            <input
                ref={ref}
                {...rest}
            />
        </label>
    )
})
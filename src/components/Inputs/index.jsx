import { forwardRef } from "react"
import style from "./style.module.scss"

export const Inputs = forwardRef(({ imgSrc, ...rest }, ref) => {
 
    return (
        <label >
            <img src={imgSrc} />
            {rest.value}

            <input 
                ref={ref}
                {...rest}
            />
        </label>
    )
})
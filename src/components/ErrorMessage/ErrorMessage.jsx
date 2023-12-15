import { useSelector } from "react-redux"
import css from "./ErrorMessage.module.css"
import { selectError } from "redux/root/selectors"

export const ErrorMessage = () => {
    const error = useSelector(selectError)
    return (
        <>
            {error && <h2 className={css["err-title"]}>{`ERROR: ${error}`}</h2>}
        </>
    )
}
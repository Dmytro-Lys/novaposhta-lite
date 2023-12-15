import { Dna } from 'react-loader-spinner'
import css from "./Loader.module.css"
import { useSelector } from "react-redux";
import { selectIsLoading } from 'redux/root/selectors';

export const Loader = () => {
    const render = useSelector(selectIsLoading)
    return (
        <Dna
            visible={render}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass={css.loader}
        />)
}

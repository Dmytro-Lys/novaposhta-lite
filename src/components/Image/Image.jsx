import css from './Image.module.css';

const Image = ({ src, title, width, height, children }) => {
    return (
        <div style ={{width: {width}, height: {height}}} className={css["img-wrapper"]}>
            <img src={src} alt={title} className={css.img} />
            {children}
        </div>
    )
}

export default Image
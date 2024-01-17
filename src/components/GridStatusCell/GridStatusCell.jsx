import clsx from "clsx"
import css from './GridStatusCell.module.css'

const GridStatusCell = ({ text }) => {
    const getStatusClass = statusName => {
    switch (statusName) {
      case 'Прибув у відділення': return css.arrived;
      case 'Отримано': return css.received;
      case 'Проблемні': return css.problematic;
      default: return css.moved;
    }
  }  
    return (
        <span className={clsx(css.status, getStatusClass(text))}>{text}</span>
    )
}

export default GridStatusCell

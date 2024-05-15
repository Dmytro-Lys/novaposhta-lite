import clsx from "clsx"
import PropTypes from "prop-types";
import { useDispatch, } from "react-redux";
import {  useEffect } from "react";
import { fetchDocumentStatus } from 'API/novaposhtaAxiosAPI';
import css from './GridStatusCell.module.css'

const GridStatusCell = ({ text, Number }) => {
    const dispatch = useDispatch()
    const { REACT_APP_TRACKING_API_KEY } = process.env;
    if (!REACT_APP_TRACKING_API_KEY) console.log('TRACKING_API_KEY is not read')
    
    useEffect(() => {
      if (!REACT_APP_TRACKING_API_KEY) return 
      if (text === 'У дорозі' || text === 'Готується до відправлення' || text === 'Змінено адресу') {
        dispatch(fetchDocumentStatus({
          apiKey: REACT_APP_TRACKING_API_KEY,
          modelName: 'InternetDocument',
          calledMethod: "getDocumentsEWMovement",
          language: "uk",
          methodProperties: {
            Number,
            NewFormat: 1
          },
          system: "Tracking"
        }))
      };
  }, [dispatch, text, Number, REACT_APP_TRACKING_API_KEY]);  
  
  const getStatusClass = statusName => {
    switch (statusName) {
      case 'Прибув у відділення': return css.arrived;
      case 'Отримано': return css.received;
      case 'Одержано': return css.received;
      case 'Проблемні': return css.problematic;
      case 'Готується до відправлення': return css.preparation;
      case 'Змінено адресу': return css['change-location'];
      default: return css.moved;
      }
      

  }  
    return (
        <span className={clsx(css.status, getStatusClass(text))}>{text === 'Одержано' ? 'Отримано' : text}</span>
    )
}

export default GridStatusCell

GridStatusCell.propTypes = {
  text: PropTypes.string.isRequired,
  Number: PropTypes.string.isRequired
}
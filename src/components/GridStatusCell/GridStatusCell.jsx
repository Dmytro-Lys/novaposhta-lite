import clsx from "clsx"

import { useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
import { fetchDocumentStatus } from 'API/novaposhtaAxiosAPI';
import css from './GridStatusCell.module.css'

const GridStatusCell = ({ text, Number }) => {
    const dispatch = useDispatch()
    const firstRender = useRef(true)
  const { REACT_APP_TRACKING_API_KEY } = process.env;
  
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            return
        }
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
      case 'Проблемні': return css.problematic;
      case 'Готується до відправлення': return css.preparation;
      case 'Змінено адресу': return css['change-location'];
      default: return css.moved;
      }
      

  }  
    return (
        <span className={clsx(css.status, getStatusClass(text))}>{text}</span>
    )
}

export default GridStatusCell

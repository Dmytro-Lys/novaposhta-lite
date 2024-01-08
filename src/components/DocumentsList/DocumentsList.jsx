// import Box from '@mui/material/Box';
// import clsx from "clsx"
// import { DataGrid } from '@mui/x-data-grid';
import { formatDate } from 'API/helpers';
import { useSelector } from 'react-redux';
import { getDocuments } from 'redux/documents/selectors';
// import { getLimit, getPage } from 'redux/query/selectors';


import css from './DocumentsList.module.css'
import 'react-data-grid/lib/styles.css';
import './CustomGridStyles.css';
import ReactDataGrid from 'react-data-grid';
import GridStatusCell from "components/GridStatusCell/GridStatusCell";


const DocumentsList = () => {

  const documents = useSelector(getDocuments)
  // const documents =[]  
  // const pageSize = useSelector(getLimit)
  // const page = useSelector(getPage)
  // const ref = useRef()
  // const getStatusClass = statusName => {
  //   switch (statusName) {
  //     case 'Прибув у відділення': return css.arrived;
  //     case 'Отримано': return css.received;
  //     default: return css.moved;
  //   }
  // }  
  // const spanFormatter = ( text ) => {
  //   // console.log(text)
  //   return <span className={clsx(css.status, getStatusClass(text))}>{text}</span>
  // }
    
  // const columns = [
  //   { field: 'id', headerName: 'Номер', width: 140, headerAlign: 'center', align: 'center' },
  //   { field: 'TrackingStatusName', headerName: 'Статус', width: 120, headerAlign: 'center', align: 'center' },
  //   { field: 'DateTime', headerName: 'Дата створення', width: 120 },
  //   { field: 'ScheduledDeliveryDate', headerName: 'Плановий час доставки', width: 120 },
  //   { field: 'Cost', headerName: 'Оголошена вартість', width: 100 },
  //   { field: 'DocumentCost', headerName: 'Вартість доставки', width: 100 },
  //   { field: 'DocumentWeight', headerName: 'Вага', width: 70 },
  //   { field: 'SeatsAmount', headerName: 'Кількість місць', width: 50 },
  //   { field: 'CargoDescription', headerName: 'Опис відправлення', width: 100 },
  //   { field: 'CounterpartySenderDescription', headerName: 'Відправник', width: 100 },
  //   { field: 'SenderName', headerName: 'Контакт відправника', width: 100 },
  //   { field: 'PhoneSender', headerName: 'Телефон відправника', width: 100 },
  //   { field: 'SenderAddressDescription', headerName: 'Адреса відправлення', width: 100 },
  //   { field: 'RecipientName', headerName: 'Контакт отримувача', width: 100 },
  //   { field: 'PhoneRecipient', headerName: 'Телефон отримувача', width: 100 },
  //   { field: 'RecipientAddressDescription', headerName: 'Адреса отримання', width: 100 },
  //   { field: 'PayerType', headerName: 'Платник за доставку', width: 100 },
  //   { field: 'FirstDayStorage', headerName: 'Платне зберігання', width: 100 },
  //   { field: 'ReceivingDateTime', headerName: 'Дата отримання', width: 100 },
  //   { field: 'Note', headerName: 'Додаткова інформація', width: 100 },
  // ]
  const columns = [
    { key: 'id', name: 'Номер', width: 120, headerCellClass: css.cellCenter,  cellClass: css.cellCenter},
    { key: 'TrackingStatusName', name: 'Статус', width: 100, headerCellClass: css.cellCenter, cellClass: css.cellCenter},
    { key: 'DateTime', name: 'Дата створення', width: 90 },
    { key: 'ScheduledDeliveryDate', name: 'Плановий час доставки', width: 105},
    { key: 'Cost', name: 'Оголошена вартість', width: 100, headerCellClass: css.cellCenter, cellClass: css.cellRight },
    { key: 'DocumentCost', name: 'Вартість доставки', width: 100, headerCellClass: css.cellCenter, cellClass: css.cellRight },
    { key: 'DocumentWeight', name: 'Вага', width: 70, headerCellClass: css.cellCenter, cellClass: css.cellRight },
    { key: 'SeatsAmount', name: 'Кількість місць', width: 80, headerCellClass: css.cellCenter, cellClass: css.cellCenter },
    { key: 'CargoDescription', name: 'Опис відправлення', width: 120 },
    { key: 'CounterpartySenderDescription', name: 'Відправник', width: 120 },
    { key: 'SenderName', name: 'Контакт відправника', width: 110 },
    { key: 'PhoneSender', name: 'Телефон відправника', width: 100 },
    { key: 'SenderAddressDescription', name: 'Адреса відправлення', width: 180 },
    { key: 'RecipientName', name: 'Контакт отримувача', width: 110 },
    { key: 'PhoneRecipient', name: 'Телефон отримувача', width: 100 },
    { key: 'RecipientAddressDescription', name: 'Адреса отримання', width: 180 },
    { key: 'PayerType', name: 'Платник за доставку', width: 100 },
    { key: 'FirstDayStorage', name: 'Платне зберігання', width: 90 },
    { key: 'ReceivingDateTime', name: 'Дата отримання', width: 90 },
    { key: 'Note', name: 'Додаткова інформація', width: 100 },
  ]

  const rows = documents && documents.length > 0 ? documents.map(({
    Number,
    TrackingStatusName, 
    DateTime,
    ScheduledDeliveryDate,
    Cost,
    DocumentCost,
    DocumentWeight,
    SeatsAmount,
    CargoDescription,
    CounterpartySenderDescription,
    SenderName,
    PhoneSender,
    SenderAddressDescription,
    RecipientName,
    PhoneRecipient,
    RecipientAddressDescription,
    PayerType,
    FirstDayStorage,
    ReceivingDateTime,
    Note
  }) => {
    return {
      id: Number,
      TrackingStatusName: <GridStatusCell text={TrackingStatusName}/>, //   spanFormatter( TrackingStatusName),
      DateTime: formatDate(DateTime),
      ScheduledDeliveryDate: formatDate(ScheduledDeliveryDate),
      Cost: `${Cost} грн`,
      DocumentCost: `${DocumentCost} грн`,
      DocumentWeight: `${DocumentWeight} кг`,
      SeatsAmount,
      CargoDescription,
      CounterpartySenderDescription,
      SenderName,
      PhoneSender,
      SenderAddressDescription,
      RecipientName,
      PhoneRecipient,
      RecipientAddressDescription,
      PayerType: PayerType === 'Recipient' ? 'Отримувач' : 'Відправник',
      FirstDayStorage: formatDate(FirstDayStorage),
      ReceivingDateTime: formatDate(ReceivingDateTime),
      Note
    }
  }) : []
    return (
        <ReactDataGrid
          rows={rows}
        // rowsCount={pageSize + 1}
        
          columns={columns}
          headerRowHeight={45}
          rowHeight={75}
        />
    )
}

export default DocumentsList
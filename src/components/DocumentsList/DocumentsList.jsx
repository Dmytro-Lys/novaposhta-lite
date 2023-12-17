import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { formatDate } from 'API/helpers';

const DocumentsList = (documents) => {


    const columns = [
        { field: 'Number', headerName: 'Номер', width: 140 },
        { field: 'TrackingStatusName', headerName: 'Статус', width: 100 },
        { field: 'DateTime', headerName: 'Дата створення', width: 100 },
        { field: 'ScheduledDeliveryDate', headerName: 'Плановий час доставки', width: 100 },
        { field: 'Cost', headerName: 'Оголошена вартість', width: 100 },
        { field: 'DocumentCost', headerName: 'Вартість доставки', width: 100 },
        { field: 'DocumentWeight', headerName: 'Вага', width: 70 },
        { field: 'SeatsAmount', headerName: 'Кількість місць', width: 50 },
        { field: 'CargoDescription', headerName: 'Опис відправлення', width: 100 },
        { field: 'CounterpartySenderDescription', headerName: 'Відправник', width: 100 },
        { field: 'SenderName', headerName: 'Контакт відправника', width: 100 },
        { field: 'PhoneSender', headerName: 'Телефон відправника', width: 100 },
        { field: 'SenderAddressDescription', headerName: 'Адреса відправлення', width: 100 },
        { field: 'RecipientName', headerName: 'Контакт отримувача', width: 100 },
        { field: 'PhoneRecipient', headerName: 'Телефон отримувача', width: 100 },
        { field: 'RecipientAddressDescription', headerName: 'Адреса отримання', width: 100 },
        { field: 'PayerType', headerName: 'Платник за доставку', width: 100 },
        { field: 'FirstDayStorage', headerName: 'Платне зберігання', width: 100 },
        { field: 'ReceivingDateTime', headerName: 'Дата отримання', width: 100 },
        { field: 'Note', headerName: 'Додаткова інформація', width: 100 },
    ]

    const rows = documents.map(({
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
            Number,
            TrackingStatusName,
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
    })
    return (
        <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        // initialState={{
        //   pagination: {
        //     paginationModel: {
        //       pageSize: 5,
        //     },
        //   },
        // }}
        // pageSizeOptions={[5]}
        // checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    )
}

export default DocumentsList
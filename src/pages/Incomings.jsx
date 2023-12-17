import Container from '@mui/material/Container';
// import { useGetIncomingDocumentsQuery } from 'API/novaposhtaApi';
import {  useSelector } from 'react-redux';
import { getSelectApiKey } from 'redux/receivers/selectors';
import { getLimit, getPage } from 'redux/query/selectors';
import { getDateFrom, getDateTo } from 'API/helpers';
// import DocumentsList from 'components/DocumentsList/DocumentsList';
// import Pagination from 'components/Pagination/Pagination';

const Incomings = () => {
    const apiKey = useSelector(getSelectApiKey)
    const Limit = useSelector(getLimit)
    const Page = useSelector(getPage)
    const body = {
        apiKey,
        modelName: 'InternetDocument',
        calledMethod: "getIncomingDocumentsByPhone",
        methodProperties: {
            DateTimeFrom: getDateFrom(),
            DateTimeTo: getDateTo(),
            Limit,
            Page
        }
    }
    console.log(body)
    // const { data = {} } = useGetIncomingDocumentsQuery(body)
    

    return (
         <Container component="main">
            <h2>Вхідні посилки</h2>

        </Container>
    )
}

export default Incomings
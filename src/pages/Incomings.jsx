// import Container from '@mui/material/Container';
// import { useGetIncomingDocumentsMutation } from 'API/novaposhtaApi';
import {  useSelector, useDispatch } from 'react-redux';
import { getSelectApiKey } from 'redux/receivers/selectors';
import { getLimit, getPage } from 'redux/query/selectors';
// import { resetQuery } from 'redux/query/querySlice';
import { fetchDocuments } from 'API/novaposhtaAxiosAPI';
import { getDateFrom, getDateTo } from 'API/helpers';

import {  useEffect} from 'react';
import DocumentsList from 'components/DocumentsList/DocumentsList';
import Pagination from 'components/Pagination/Pagination';

const Incomings = () => {
    const dispatch = useDispatch()
    const apiKey = useSelector(getSelectApiKey)
    const Limit = useSelector(getLimit)
    const Page = useSelector(getPage)
    // const firstRender = useRef(true)

    // useEffect(() => {
    //     if (!apiKey) return
    //     dispatch(resetQuery())
    // },[dispatch, apiKey]
    // )
  
    useEffect(() => {
        // if (firstRender.current) {
        //     firstRender.current = false
        //     return
        // }
        if (!apiKey) return
        dispatch(fetchDocuments({
                apiKey,
                modelName: 'InternetDocument',
                calledMethod: "getIncomingDocumentsByPhone",
                methodProperties: {
                    DateTimeFrom: getDateFrom(),
                    DateTimeTo: getDateTo(),
                    Limit,
                    Page
                }
            }));
  }, [dispatch, apiKey, Limit, Page]);
    
    
    
    return (
        //  <Container component="main" maxWidth='100%'>
         <div>
            <DocumentsList />
            <Pagination />
         </div>   
        //   </Container>
    )
}

export default Incomings
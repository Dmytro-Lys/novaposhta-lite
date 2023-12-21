import Container from '@mui/material/Container';
// import { useGetIncomingDocumentsMutation } from 'API/novaposhtaApi';
import {  useSelector, useDispatch } from 'react-redux';
import { getSelectApiKey } from 'redux/receivers/selectors';
import { getLimit, getPage } from 'redux/query/selectors';
import { fetchDocuments } from 'API/novaposhtaAxiosAPI';
import { getDateFrom, getDateTo } from 'API/helpers';

import {  useEffect, useRef } from 'react';
import DocumentsList from 'components/DocumentsList/DocumentsList';
import Pagination from 'components/Pagination/Pagination';

const Incomings = () => {
    // const [data, setData]= useState([])
    const dispatch = useDispatch()
    const apiKey = useSelector(getSelectApiKey)
    const Limit = useSelector(getLimit)
    const Page = useSelector(getPage)
    const firstRender = useRef(true)
    
    // const [ getIncomingDocuments, {isError, error} ] = useGetIncomingDocumentsMutation()
    // console.log(data)
    // const handleGetDocuments = useCallback( async () => {
    //     try {
    //         const documents = await getIncomingDocuments({
    //             apiKey,
    //             modelName: 'InternetDocument',
    //             calledMethod: "getIncomingDocumentsByPhone",
    //             methodProperties: {
    //                 DateTimeFrom: getDateFrom(),
    //                 DateTimeTo: getDateTo(),
    //                 Limit,
    //                 Page
    //             }
    //         }).unwrap()
    //         if (!documents) throw new Error('data not found')
    //         setData(documents.data[0].result)
    //         // return(<DocumentsList documents={documents.data[0].result}/>)
    //         // console.log(data)
    //     } catch (error) {
    //         console.log (error)
    //     }
    // },[getIncomingDocuments, apiKey, Limit, Page])
    // if (isError) console.log(error)
    // handleGetDocuments()
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            return
        }
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
         <Container component="main" maxWidth='100%'>
            {/* <h2>Вхідні посилки</h2> */}
            {/* <ErrorMessage /> */}
            <DocumentsList />
            <Pagination/>
          {/* <Loader /> */}
        </Container>
    )
}

export default Incomings
import {  useSelector, useDispatch } from 'react-redux';
import { getSelectApiKey } from 'redux/receivers/selectors';
import { getLimit, getPage } from 'redux/query/selectors';
import { fetchDocuments } from 'API/novaposhtaAxiosAPI';
import { getDateFrom, getDateTo } from 'API/helpers';

import {  useEffect, useRef } from 'react';
import DocumentsList from 'components/DocumentsList/DocumentsList';
import Pagination from 'components/Pagination/Pagination';


const Outgoings = () => {
     const dispatch = useDispatch()
    const apiKey = useSelector(getSelectApiKey)
    const Limit = useSelector(getLimit)
    const Page = useSelector(getPage)
    const firstRender = useRef(true)
  
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            return
        }
        if (!apiKey) return
        dispatch(fetchDocuments({
                apiKey,
                modelName: 'InternetDocument',
                calledMethod: "getOutgoingDocumentsByPhone",
                methodProperties: {
                    DateTimeFrom: getDateFrom(),
                    DateTimeTo: getDateTo(),
                    Limit,
                    Page
                }
            }));
    }, [dispatch, apiKey, Limit, Page]);
    
    return (
         <div>
            <DocumentsList />
            <Pagination />
         </div> 
    )
}

export default Outgoings
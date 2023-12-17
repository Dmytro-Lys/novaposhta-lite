import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const novaposhtaApi = createApi({
    reducerPath: 'novaposhtaApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.novaposhta.ua/v2.0/json/'
    }),
    endpoints: (build) => ({
        getIncomingDocuments: build.query({
            query: (body) => {
                return {
                    body
                }
            }
            
        })
    })
})

export const { useGetIncomingDocumentsQuery} = novaposhtaApi
import { createSelector} from "@reduxjs/toolkit";
export const getReceivers = state => state.receivers.items; 

export const getSelectReceiver = state => state.receivers.selectItem;
export const getSelectApiKey = state => state.receivers.items && state.receivers.selectItem ? state.receivers.items.find(item => item.id === state.receivers.selectItem).apiKey : '';
export const getSelectReceiverName = state => state.receivers.items && state.receivers.selectItem ? state.receivers.items.find(item => item.id === state.receivers.selectItem).receiverName: '';
export const selectFilter = state => state.filter;
export const getIsVisibleReceivers = state => state.receivers.isVisibleReceivers

export const selectVisibleReceivers = createSelector(
[ getReceivers, selectFilter],
   (receivers, filter) => {
   if (!receivers)  return []
   return receivers.filter(receiver => receiver.receiverName.toLowerCase()
    .includes(filter.toLowerCase()))
 }
)

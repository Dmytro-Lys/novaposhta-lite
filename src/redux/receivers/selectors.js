import { createSelector } from "@reduxjs/toolkit";
export const getReceivers = state => state.receivers.items;
export const getSelectReceiver = state => state.receivers.selectItem;
export const getSelectApiKey = state => state.receivers.items.find(item => item.id === state.receivers.selectItem).apiKey;
export const selectFilter = state => state.filter;
export const getIsVisibleReceivers = state => state.receivers.isVisibleReceivers

export const selectVisibleReceivers = createSelector(
[ getReceivers, selectFilter],
  (receivers, filter) => {
   return receivers.filter(receiver => receiver.receiverName.toLowerCase()
    .includes(filter.toLowerCase()))
 }
)
// export const getDelClick = state => state.receivers.delClick;

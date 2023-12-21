export const getReceivers = state => state.receivers.items;
export const getSelectReceiver = state => state.receivers.selectItem;
export const getSelectApiKey = state => state.receivers.items.find(item => item.id === state.receivers.selectItem).apiKey;
export const getDelClick = state => state.receivers.delClick;

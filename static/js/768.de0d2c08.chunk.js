"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[768],{5100:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var r=n(1614),a=n(5048),i=n(8206),o=function(e){return e.query.limit},s=function(e){return e.query.page},c=n(8841),u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(0===e.length||e.includes("0001"))return"";var n=new Date(e);if(n.getTime<=0)return"";var r=String(n.getDate()).padStart(2,"0"),a=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getFullYear()),o="".concat(r,".").concat(a,".").concat(i);if(t){var s=String(n.getHours()).padStart(2,"0"),c=String(n.getMinutes()).padStart(2,"0"),u=String(n.getSeconds()).padStart(2,"0");return"".concat(o," ").concat(s,":").concat(c,":").concat(u)}return o},d=function(){var e=new Date;return e.setMonth(e.getMonth()-3),e.setHours(0,0,0,0),u(e.toString())},l=function(){var e=new Date;return e.setMonth(e.getMonth()+1),e.setHours(0,0,0,0),u(e.toString())},m=n(2791),h=function(e){return e.documents.items},g=function(e){return e.documents.count},p="DocumentsList_cellCenter__o-0bq",D="DocumentsList_cellRight__H5623",S=(n(5120),n(7394)),y=n(8182),C="GridStatusCell_status__74g2q",w="GridStatusCell_received__LXL6Y",v="GridStatusCell_moved__nXHIV",f="GridStatusCell_arrived__R36vP",k=n(184),P=function(e){var t=e.text;return(0,k.jsx)("span",{className:(0,y.Z)(C,function(e){switch(e){case"\u041f\u0440\u0438\u0431\u0443\u0432 \u0443 \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f":return f;case"\u041e\u0442\u0440\u0438\u043c\u0430\u043d\u043e":return w;default:return v}}(t)),children:t})},_=function(){var e=(0,a.v9)(h),t=[{key:"id",name:"\u041d\u043e\u043c\u0435\u0440",width:120,headerCellClass:p,cellClass:p},{key:"TrackingStatusName",name:"\u0421\u0442\u0430\u0442\u0443\u0441",width:100,headerCellClass:p,cellClass:p},{key:"DateTime",name:"\u0414\u0430\u0442\u0430 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f",width:90},{key:"ScheduledDeliveryDate",name:"\u041f\u043b\u0430\u043d\u043e\u0432\u0438\u0439 \u0447\u0430\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",width:105},{key:"Cost",name:"\u041e\u0433\u043e\u043b\u043e\u0448\u0435\u043d\u0430 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044c",width:100,headerCellClass:p,cellClass:D},{key:"DocumentCost",name:"\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044c \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",width:100,headerCellClass:p,cellClass:D},{key:"DocumentWeight",name:"\u0412\u0430\u0433\u0430",width:70,headerCellClass:p,cellClass:D},{key:"SeatsAmount",name:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u043c\u0456\u0441\u0446\u044c",width:80,headerCellClass:p,cellClass:p},{key:"CargoDescription",name:"\u041e\u043f\u0438\u0441 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044f",width:120},{key:"CounterpartySenderDescription",name:"\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u043d\u0438\u043a",width:120},{key:"SenderName",name:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043d\u0438\u043a\u0430",width:110},{key:"PhoneSender",name:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043d\u0438\u043a\u0430",width:100},{key:"SenderAddressDescription",name:"\u0410\u0434\u0440\u0435\u0441\u0430 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044f",width:180},{key:"RecipientName",name:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u043e\u0442\u0440\u0438\u043c\u0443\u0432\u0430\u0447\u0430",width:110},{key:"PhoneRecipient",name:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u043e\u0442\u0440\u0438\u043c\u0443\u0432\u0430\u0447\u0430",width:100},{key:"RecipientAddressDescription",name:"\u0410\u0434\u0440\u0435\u0441\u0430 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f",width:180},{key:"PayerType",name:"\u041f\u043b\u0430\u0442\u043d\u0438\u043a \u0437\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443",width:100},{key:"FirstDayStorage",name:"\u041f\u043b\u0430\u0442\u043d\u0435 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u043d\u043d\u044f",width:90},{key:"ReceivingDateTime",name:"\u0414\u0430\u0442\u0430 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f",width:90},{key:"Note",name:"\u0414\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u0430 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f",width:100}],n=e&&e.length>0?e.map((function(e){var t=e.Number,n=e.TrackingStatusName,r=e.DateTime,a=e.ScheduledDeliveryDate,i=e.Cost,o=e.DocumentCost,s=e.DocumentWeight,c=e.SeatsAmount,d=e.CargoDescription,l=e.CounterpartySenderDescription,m=e.SenderName,h=e.PhoneSender,g=e.SenderAddressDescription,p=e.RecipientName,D=e.PhoneRecipient,S=e.RecipientAddressDescription,y=e.PayerType,C=e.FirstDayStorage,w=e.ReceivingDateTime,v=e.Note;return{id:t,TrackingStatusName:(0,k.jsx)(P,{text:n}),DateTime:u(r),ScheduledDeliveryDate:u(a),Cost:"".concat(i," \u0433\u0440\u043d"),DocumentCost:"".concat(o," \u0433\u0440\u043d"),DocumentWeight:"".concat(s," \u043a\u0433"),SeatsAmount:c,CargoDescription:d,CounterpartySenderDescription:l,SenderName:m,PhoneSender:h,SenderAddressDescription:g,RecipientName:p,PhoneRecipient:D,RecipientAddressDescription:S,PayerType:"Recipient"===y?"\u041e\u0442\u0440\u0438\u043c\u0443\u0432\u0430\u0447":"\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u043d\u0438\u043a",FirstDayStorage:u(C),ReceivingDateTime:u(w),Note:v}})):[];return(0,k.jsx)(S.ZP,{rows:n,columns:t,headerRowHeight:45,rowHeight:75})},R=n(8720),N=n(7264),T=function(){var e=(0,a.I0)(),t=(0,a.v9)(o),n=(0,a.v9)(s),r=(0,a.v9)(g);return(0,k.jsx)(R.Z,{component:"div",count:r,page:n-1,onPageChange:function(t,n){e((0,N.YA)(n+1))},rowsPerPage:t,rowsPerPageOptions:[5,10,20,50,100],labelRowsPerPage:"\u0415\u043b\u0435\u043c\u0435\u043d\u0442\u0456\u0432 \u043d\u0430 \u0441\u0442\u043e\u0440\u0456\u043d\u0446\u0456",onRowsPerPageChange:function(t){e((0,N.Np)(parseInt(t.target.value,10))),e((0,N.YA)(1))}})},A=function(){var e=(0,a.I0)(),t=(0,a.v9)(i.Dc),n=(0,a.v9)(o),u=(0,a.v9)(s),h=(0,m.useRef)(!0);return(0,m.useEffect)((function(){h.current?h.current=!1:e((0,c.D)({apiKey:t,modelName:"InternetDocument",calledMethod:"getIncomingDocumentsByPhone",methodProperties:{DateTimeFrom:d(),DateTimeTo:l(),Limit:n,Page:u}}))}),[e,t,n,u]),(0,k.jsxs)(r.Z,{component:"main",maxWidth:"100%",children:[(0,k.jsx)(_,{}),(0,k.jsx)(T,{})]})}}}]);
//# sourceMappingURL=768.de0d2c08.chunk.js.map
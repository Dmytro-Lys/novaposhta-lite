"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[100],{1396:function(e,t,n){n.d(t,{BC:function(){return i},p6:function(){return r},xx:function(){return a}});var r=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(0===e.length||e.includes("0001"))return"";var n=new Date(e);if(n.getTime<=0)return"";var r=String(n.getDate()).padStart(2,"0"),i=String(n.getMonth()+1).padStart(2,"0"),a=String(n.getFullYear()),o="".concat(r,".").concat(i,".").concat(a);if(t){var c=String(n.getHours()).padStart(2,"0"),s=String(n.getMinutes()).padStart(2,"0"),u=String(n.getSeconds()).padStart(2,"0");return"".concat(o," ").concat(c,":").concat(s,":").concat(u)}return o},i=function(){var e=new Date;return e.setMonth(e.getMonth()-3),e.setHours(0,0,0,0),r(e.toString())},a=function(){var e=new Date;return e.setMonth(e.getMonth()+1),e.setHours(0,0,0,0),r(e.toString())}},3800:function(e,t,n){n.d(t,{Z:function(){return C}});var r=n(1396),i=n(5048),a=n(1200),o="DocumentsList_cellCenter__o-0bq",c="DocumentsList_cellRight__H5623",s=(n(5120),n(7394)),u=n(8182),d="GridStatusCell_status__74g2q",l="GridStatusCell_received__LXL6Y",m="GridStatusCell_moved__nXHIV",p="GridStatusCell_arrived__R36vP",h="GridStatusCell_problematic__+sz16",g=n(184),D=function(e){var t=e.text;return(0,g.jsx)("span",{className:(0,u.Z)(d,function(e){switch(e){case"\u041f\u0440\u0438\u0431\u0443\u0432 \u0443 \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f":return p;case"\u041e\u0442\u0440\u0438\u043c\u0430\u043d\u043e":return l;case"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u043d\u0456":return h;default:return m}}(t)),children:t})},C=function(){var e=(0,i.v9)(a.q),t=[{key:"id",name:"\u041d\u043e\u043c\u0435\u0440",width:120,headerCellClass:o,cellClass:o},{key:"TrackingStatusName",name:"\u0421\u0442\u0430\u0442\u0443\u0441",width:100,headerCellClass:o},{key:"DateTime",name:"\u0414\u0430\u0442\u0430 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f",width:90},{key:"ScheduledDeliveryDate",name:"\u041f\u043b\u0430\u043d\u043e\u0432\u0438\u0439 \u0447\u0430\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",width:105},{key:"Cost",name:"\u041e\u0433\u043e\u043b\u043e\u0448\u0435\u043d\u0430 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044c",width:100,headerCellClass:o,cellClass:c},{key:"DocumentCost",name:"\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044c \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",width:100,headerCellClass:o,cellClass:c},{key:"DocumentWeight",name:"\u0412\u0430\u0433\u0430",width:70,headerCellClass:o,cellClass:c},{key:"SeatsAmount",name:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u043c\u0456\u0441\u0446\u044c",width:80,headerCellClass:o,cellClass:o},{key:"CargoDescription",name:"\u041e\u043f\u0438\u0441 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044f",width:120},{key:"CounterpartySenderDescription",name:"\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u043d\u0438\u043a",width:120},{key:"SenderName",name:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043d\u0438\u043a\u0430",width:110},{key:"PhoneSender",name:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043d\u0438\u043a\u0430",width:100},{key:"SenderAddressDescription",name:"\u0410\u0434\u0440\u0435\u0441\u0430 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044f",width:180},{key:"CounterpartyRecipientDescription",name:"\u041e\u0442\u0440\u0438\u043c\u0443\u0432\u0430\u0447",width:120},{key:"RecipientName",name:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u043e\u0442\u0440\u0438\u043c\u0443\u0432\u0430\u0447\u0430",width:110},{key:"PhoneRecipient",name:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u043e\u0442\u0440\u0438\u043c\u0443\u0432\u0430\u0447\u0430",width:100},{key:"RecipientAddressDescription",name:"\u0410\u0434\u0440\u0435\u0441\u0430 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f",width:180},{key:"PayerType",name:"\u041f\u043b\u0430\u0442\u043d\u0438\u043a \u0437\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443",width:100},{key:"FirstDayStorage",name:"\u041f\u043b\u0430\u0442\u043d\u0435 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u043d\u043d\u044f",width:90},{key:"ReceivingDateTime",name:"\u0414\u0430\u0442\u0430 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f",width:90},{key:"Note",name:"\u0414\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u0430 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f",width:100}],n=e&&e.length>0?e.map((function(e){var t=e.Number,n=e.TrackingStatusName,i=e.DateTime,a=e.ScheduledDeliveryDate,o=e.Cost,c=e.DocumentCost,s=e.DocumentWeight,u=e.SeatsAmount,d=e.CargoDescription,l=e.CounterpartySenderDescription,m=e.SenderName,p=e.PhoneSender,h=e.SenderAddressDescription,C=e.CounterpartyRecipientDescription,f=e.RecipientName,y=e.PhoneRecipient,S=e.RecipientAddressDescription,v=e.PayerType,w=e.FirstDayStorage,k=e.ReceivingDateTime,P=e.Note;return{id:t,TrackingStatusName:(0,g.jsx)(D,{text:n}),DateTime:(0,r.p6)(i),ScheduledDeliveryDate:(0,r.p6)(a),Cost:"".concat(o," \u0433\u0440\u043d"),DocumentCost:"".concat(c," \u0433\u0440\u043d"),DocumentWeight:"".concat(s," \u043a\u0433"),SeatsAmount:u,CargoDescription:d,CounterpartySenderDescription:l,SenderName:m,PhoneSender:p,SenderAddressDescription:h,CounterpartyRecipientDescription:C,RecipientName:f,PhoneRecipient:y,RecipientAddressDescription:S,PayerType:"Recipient"===v?"\u041e\u0442\u0440\u0438\u043c\u0443\u0432\u0430\u0447":"\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u043d\u0438\u043a",FirstDayStorage:(0,r.p6)(w),ReceivingDateTime:(0,r.p6)(k),Note:P}})):[];return(0,g.jsx)(s.ZP,{rows:n,columns:t,headerRowHeight:45,rowHeight:75})}},7605:function(e,t,n){n(2791);var r=n(8720),i=n(8634),a=n(5048),o=n(7264),c=n(1200),s=n(184);t.Z=function(){var e=(0,a.I0)(),t=(0,a.v9)(i.i),n=(0,a.v9)(i.f),u=(0,a.v9)(c.F);return(0,s.jsx)(r.Z,{component:"div",count:u,page:n-1,onPageChange:function(t,n){e((0,o.YA)(n+1))},rowsPerPage:t,rowsPerPageOptions:[5,10,20,50,100],labelRowsPerPage:"\u0415\u043b\u0435\u043c\u0435\u043d\u0442\u0456\u0432 \u043d\u0430 \u0441\u0442\u043e\u0440\u0456\u043d\u0446\u0456",onRowsPerPageChange:function(t){e((0,o.Np)(parseInt(t.target.value,10))),e((0,o.YA)(1))}})}},5950:function(e,t,n){n.r(t);var r=n(5048),i=n(8206),a=n(8634),o=n(8841),c=n(1396),s=n(2791),u=n(3800),d=n(7605),l=n(184);t.default=function(){var e=(0,r.I0)(),t=(0,r.v9)(i.Dc),n=(0,r.v9)(a.i),m=(0,r.v9)(a.f),p=(0,s.useRef)(!0);return(0,s.useEffect)((function(){p.current?p.current=!1:t&&e((0,o.D)({apiKey:t,modelName:"InternetDocument",calledMethod:"getIncomingDocumentsByPhone",methodProperties:{DateTimeFrom:(0,c.BC)(),DateTimeTo:(0,c.xx)(),Limit:n,Page:m}}))}),[e,t,n,m]),(0,l.jsxs)("div",{children:[(0,l.jsx)(u.Z,{}),(0,l.jsx)(d.Z,{})]})}},1200:function(e,t,n){n.d(t,{F:function(){return i},q:function(){return r}});var r=function(e){return e.documents.items},i=function(e){return e.documents.count}},8634:function(e,t,n){n.d(t,{f:function(){return i},i:function(){return r}});var r=function(e){return e.query.limit},i=function(e){return e.query.page}}}]);
//# sourceMappingURL=100.3ae616db.chunk.js.map
(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{20:function(t,e,n){t.exports={contact__list:"contacts-list_contact__list__1CVI9",btn:"contacts-list_btn__fKySI",contactList__item:"contacts-list_contactList__item__3TUPM",name:"contacts-list_name__2JGh4",contacts:"contacts-list_contacts__PpsPU",enter:"contacts-list_enter__swGwa",enterActive:"contacts-list_enterActive__24uOt",exit:"contacts-list_exit__36oV5",exitActive:"contacts-list_exitActive__1rDDh"}},56:function(t,e,n){},58:function(t,e,n){t.exports={wrapper:"global_wrapper__327cc"}},67:function(t,e,n){t.exports=n(96)},95:function(t,e,n){},96:function(t,e,n){"use strict";n.r(e);var a,c,r=n(0),o=n.n(r),s=n(7),i=n.n(s),u=n(39),l=n(10),d=n(12),m=n(13),f=Object(l.b)("contacts/addRequest"),b=Object(l.b)("contacts/addSucess"),C=Object(l.b)("contacts/addError"),h=Object(l.b)("contacts/fetchRequest"),p=Object(l.b)("contacts/fetchSucess"),E=Object(l.b)("contacts/fetchError"),O={deleteContactsRequest:Object(l.b)("contacts/deleteRequest"),deleteContactsSucess:Object(l.b)("contacts/deletSucess"),deleteContactsError:Object(l.b)("contacts/deleteError"),getFilter:Object(l.b)("contacts/filter"),addContactRequest:f,addContactSucess:b,addContactError:C,fetchContactsSucess:p,fetchContactsRequest:h,fetchContactsError:E},j=Object(l.c)([],(a={},Object(d.a)(a,O.addContactSucess,(function(t,e){return[].concat(Object(u.a)(t),[e.payload])})),Object(d.a)(a,O.deleteContactsSucess,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),Object(d.a)(a,O.fetchContactsSucess,(function(t,e){return e.payload})),a)),_=Object(l.c)(!1,(c={},Object(d.a)(c,O.addContactRequest,(function(){return!0})),Object(d.a)(c,O.addContactSucess,(function(){return!1})),Object(d.a)(c,O.addContactError,(function(){return!1})),Object(d.a)(c,O.deleteContactsRequest,(function(){return!0})),Object(d.a)(c,O.deleteContactsSucess,(function(){return!1})),Object(d.a)(c,O.deleteContactsError,(function(){return!1})),c)),g=Object(l.c)(" ",Object(d.a)({},O.getFilter,(function(t,e){return e.payload}))),v=Object(m.c)({items:j,filter:g,loading:_}),y=Object(l.d)(),S=Object(l.a)({reducer:{contacts:v},devTools:!1,middleware:Object(u.a)(y)}),N=n(15),x=(n(77),n(33)),q=n(34),w=n(41),F=n(40),R=n(127),L=n(126),k=n(128),A=n(35),I=n(42),P=n.n(I),B={addContact:function(t){return function(e){e(O.addContactRequest()),P.a.post("http://127.0.0.1:2000/contacts",Object(A.a)({},t)).then((function(t){console.log(t.data),e(O.addContactSucess(t.data))})).catch((function(t){return e(O.addContactError(t))}))}},fetchContacts:function(){return function(t){t(O.fetchContactsRequest()),P.a.get("http://127.0.0.1:2000/contacts").then((function(e){var n=e.data;return t(O.fetchContactsSucess(n))})).catch((function(e){return t(O.fetchContactsError(e))}))}},deleteContact:function(t){return function(e){e(O.deleteContactsRequest()),P.a.delete("http://127.0.0.1:2000/contacts/".concat(t)).then((function(){return e(O.deleteContactsSucess(t))})).catch((function(t){return e(O.deleteContactsError(t))}))}}},D=n(129),T=(n(56),Notification=function(){return o.a.createElement(D.a,null,o.a.createElement("p",{className:"notification"},"This contact is already exists"))}),J=function(t){Object(w.a)(n,t);var e=Object(F.a)(n);function n(){var t;Object(x.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:" ",number:" ",notification:!1},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.getContact=function(e){if(e.preventDefault(),t.props.state.contacts.items.find((function(e){return e.name===t.state.name})))t.setState({notification:!0,name:" ",number:" "});else{var n={name:t.state.name,number:t.state.number,id:R.a};t.props.onAddContact(n),t.setState({name:" ",number:" "})}},t}return Object(q.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.name,a=e.number;return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:this.getContact},o.a.createElement("h2",null,"Name"),o.a.createElement("label",null,"Name:",o.a.createElement(L.a,{id:"outlined-basic",type:"text",name:"name",value:n,onChange:this.handleChange,required:!0})),o.a.createElement("label",null,"Phone number:",o.a.createElement(L.a,{type:"tel",name:"number",value:a,onChange:this.handleChange,required:!0})),o.a.createElement(k.a,{variant:"contained",color:"primary",type:"submit"},"Add Contact")),o.a.createElement(D.a,{in:this.state.notification,unmountOnExit:!0,timeout:2e3,classNames:"notification",onEntered:function(){return t.setState({notification:!1})}},o.a.createElement(T,null)))}}]),n}(r.Component),G={onAddContact:B.addContact},M=Object(N.b)((function(t){return{state:t}}),G)(J),U=n(20),V=n.n(U),K=n(130),z=n(17),H=function(t){return t.contacts.items},Q=function(t){return t.contacts.filter},W=Object(z.a)([Q,H],(function(t,e){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),X={getFilter:Q,getItems:H,getExistingContacts:W,loading:function(t){return t.contacts.loading},getContactById:function(t,e){return H(t).find((function(t){return t.id===e}))}};var Y=Object(N.b)((function(t,e){var n=X.getContactById(t,e.id);return Object(A.a)({},n)}),(function(t,e){return{deleteContact:function(){return t(B.deleteContact(e.id))}}}))((function(t){var e=t.id,n=t.name,a=t.number,c=t.deleteContact;return o.a.createElement("li",{className:V.a.contactList__item},o.a.createElement("div",{className:V.a.contacts},o.a.createElement("span",{className:V.a.name},n),o.a.createElement("span",{className:V.a.tel},": ",a)),o.a.createElement(k.a,{className:V.a.btn,variant:"contained",color:"secondary",type:"button",id:e,onClick:c},"delete Contact"))}));var Z=Object(N.b)((function(t){return{contactList:X.getExistingContacts(t)}}))((function(t){var e=t.contactList;return o.a.createElement(K.a,{component:"ul",className:V.a.contact__list},e.map((function(t){var e=t.id;return o.a.createElement(D.a,{key:e,timeout:250,unmountOnExit:!0,classNames:V.a},o.a.createElement(Y,{key:e,id:e}))})))})),$={getFilterName:O.getFilter},tt=Object(N.b)((function(t){return{filter:X.getFilter(t)}}),$)((function(t){var e=t.filter,n=t.getFilterName;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"Contacts"),o.a.createElement(L.a,{type:"text",value:e,name:"filter",onChange:function(t){return n(t.target.value)}}))})),et=n(58),nt=n.n(et),at=(n(95),function(){return o.a.createElement(D.a,{appear:!0,in:!0,timeout:500,unmountOnExit:!0,classNames:"AppTitle"},o.a.createElement("h1",{className:"title"},"PhoneBook"))}),ct=function(t){Object(w.a)(n,t);var e=Object(F.a)(n);function n(){return Object(x.a)(this,n),e.apply(this,arguments)}return Object(q.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchContacts()}},{key:"render",value:function(){return o.a.createElement("div",{className:nt.a.wrapper},o.a.createElement(at,null),this.props.isLoading&&o.a.createElement("h1",null,"Still Loading..."),o.a.createElement(M,null),o.a.createElement(tt,null),o.a.createElement(Z,null))}}]),n}(r.Component),rt={onFetchContacts:B.fetchContacts},ot=Object(N.b)((function(t){return{isLoading:X.loading(t)}}),rt)(ct);i.a.render(o.a.createElement(N.a,{store:S},o.a.createElement(ot,null)),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.5ca1b909.chunk.js.map
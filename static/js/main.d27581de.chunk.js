(this["webpackJsonpreact-guided-focus-form-example"]=this["webpackJsonpreact-guided-focus-form-example"]||[]).push([[0],{13:function(e,n,t){e.exports={label:"Label_label__22e0I"}},15:function(e,n,t){e.exports=t(22)},20:function(e,n,t){},22:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),r=t(11),o=t.n(r),i=(t(20),t(14)),c=t(7),u=t(3),d=t(1),m=t(4),s=t(12),v=t.n(s),f=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e&&e.setSelectionRange(n,n)},b=t(13),g=t.n(b);var p=l.a.memo((function(e){var n=e.children,t=Object(c.a)(e,["children"]);return l.a.createElement("label",Object.assign({className:g.a.label},t),n)})),E=t(8),h=t.n(E),_=function(e,n){var t=e.replace(/\s/g,"");return n<0?[t,""]:[null===t||void 0===t?void 0:t.substr(0,n),null===t||void 0===t?void 0:t.substr(n,t.length)]};var k=function(e){var n=e.label,t=e.name,r=e.config,o=e.validation,i=e.error,c=e.control,s=(o||{}).maxLength,b=void 0===s?1:s,g=c.register,E=c.getValues,k=c.setValue,j=Object(a.useMemo)((function(){return function(e,n){return Object(d.a)(Array(n)).map((function(n,t){return{id:t,name:"".concat(e,"[").concat(t,"]")}}))}(t,null===r||void 0===r?void 0:r.size)}),[r,t]),y=Object(a.useCallback)((function(e){var n;return null===(n=c.fieldsRef.current[e])||void 0===n?void 0:n.ref}),[c]),O=Object(a.useCallback)((function(e){var n=y(e);n&&n.focus()}),[y]),C=Object(a.useCallback)((function(e,n){var t=y(e);if(t){var a=t.selectionStart;k(e,n,{shouldValidate:!0}),f(document.activeElement,a)}}),[y,k]),w=Object(a.useCallback)((function(e,n){var t,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document.activeElement.selectionStart,l=null===(t=j[e])||void 0===t?void 0:t.name,r=_(n,b),o=Object(m.a)(r,2),i=o[0],c=o[1];l&&i&&(C(l,i),a>=n.length&&(O(l),c&&w(e+1,c,a)))}),[j,b,C,O]),F=Object(a.useCallback)((function(e){var n,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=null===(n=j[e])||void 0===n?void 0:n.name,l=E(a),r=l.substr.apply(l,Object(d.a)(t?[1]:[0,l.length-1]));C(a,r),O(a),t&&f(y(a),0)}),[C,O,y,E,j]),N=Object(a.useCallback)((function(e){var n=e.id,t=e.name;return function(e){var a=E(t);if("Backspace"===e.key&&(null===j||void 0===j?void 0:j[n-1]))setTimeout((function(){E(t)===a&&F(n-1)}));else if("Delete"===e.key&&(null===j||void 0===j?void 0:j[n+1]))setTimeout((function(){E(t)===a&&F(n+1,!0)}));else if("ArrowLeft"===e.key&&(null===j||void 0===j?void 0:j[n-1])){var l,r;if(0===document.activeElement.selectionStart)e.preventDefault(),O(null===(l=j[n-1])||void 0===l?void 0:l.name),f(y(null===(r=j[n-1])||void 0===r?void 0:r.name),b)}else if("ArrowRight"===e.key&&(null===j||void 0===j?void 0:j[n+1])){var o,i;if(document.activeElement.selectionEnd===a.length)e.preventDefault(),O(null===(o=j[n+1])||void 0===o?void 0:o.name),f(y(null===(i=j[n+1])||void 0===i?void 0:i.name),0)}}}),[O,y,E,j,b,F]),S=Object(a.useCallback)((function(e){var n=e.id;e.name;return function(e){var t=e.target.value;w(n,t)}}),[w]),D=Object(a.useCallback)((function(e){var n=e.name;return function(){k(n,"")}}),[k]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{htmlFor:t},n),l.a.createElement("div",null,j.map((function(e){var n,t=e.id,a=e.name;return l.a.createElement("input",{key:a,ref:g(o),name:a,type:"tel",autoComplete:"off",className:v()(h.a.input,(n={},Object(u.a)(n,h.a.valid,E(a)&&!(null===i||void 0===i?void 0:i[t])),Object(u.a)(n,h.a.error,null===i||void 0===i?void 0:i[t]),n)),onKeyDown:N({id:t,name:a}),onChange:S({id:t,name:a}),onPaste:D({id:t,name:a})})}))))};var j=function(e){var n=e.type,t=Object(c.a)(e,["type"]);switch(n){case"CARD_NUMBER_FIELD":return l.a.createElement(k,t);default:return null}},y=t(9),O=t.n(y),C=[{label:"Card number",name:"cardnumber",type:"CARD_NUMBER_FIELD",config:{size:4},validation:{required:!0,minLength:4,maxLength:4,pattern:/\d/}}];var w=function(){var e=Object(i.a)({mode:"onChange"}),n=e.handleSubmit,t=e.errors,a=e.formState,r=e.reset,o=e.control;return l.a.createElement("div",{className:O.a.container},l.a.createElement("form",{className:O.a.form,onSubmit:n((function(e){var n,t;console.log("Digit:",null===(n=e.digit)||void 0===n?void 0:n.join(""));var a=null===(t=o.fieldsRef.current["digit[0]"])||void 0===t?void 0:t.ref;a&&a.focus(),r()}))},C.map((function(e){return l.a.createElement(j,Object.assign({key:e.name,error:null===t||void 0===t?void 0:t[e.name],control:o},e))})),l.a.createElement("br",null),l.a.createElement("small",null,"Try to copy and paste over the fields"," ",l.a.createElement("span",{role:"img","aria-label":"magic"},"\u2728")),l.a.createElement("small",null,"You can use arrows to move between fields"," ",l.a.createElement("span",{role:"img","aria-label":"magic"},"\ud83d\udc8e")),l.a.createElement("small",null,"Also use `backspace` and `delete` keys"," ",l.a.createElement("span",{role:"img","aria-label":"genius"},"\ud83d\udd2e")),l.a.createElement("button",{type:"submit",className:O.a.button,disabled:!a.isValid},"Pay")))};var F=function(){return l.a.createElement(w,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,n,t){e.exports={input:"CardNumberField_input__9AUES",valid:"CardNumberField_valid__261vT",error:"CardNumberField_error__eSH3X"}},9:function(e,n,t){e.exports={container:"GuidedForm_container__2naks",form:"GuidedForm_form__2azPp",button:"GuidedForm_button__3lkIY"}}},[[15,1,2]]]);
//# sourceMappingURL=main.d27581de.chunk.js.map
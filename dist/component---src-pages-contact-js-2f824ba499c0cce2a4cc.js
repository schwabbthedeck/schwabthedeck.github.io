(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"Cuy+":function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),r=t.n(l),s=t("Bl7J"),i=t("vrFN"),c=t("wx14"),o=t("zLVn"),n=t("TSYQ"),m=t.n(n),d=(t("K9S6"),r.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"div":t,s=e.className,i=e.type,n=void 0===i?"valid":i,d=e.tooltip,b=void 0!==d&&d,f=Object(o.a)(e,["as","className","type","tooltip"]);return r.a.createElement(l,Object(c.a)({},f,{ref:a,className:m()(s,n+"-"+(b?"tooltip":"feedback"))}))})));d.displayName="Feedback";var b=d,f=r.a.createContext({controlId:void 0}),u=t("vUet"),v=r.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,i=e.bsCustomPrefix,n=e.className,d=e.type,b=void 0===d?"checkbox":d,v=e.isValid,p=void 0!==v&&v,x=e.isInvalid,O=void 0!==x&&x,j=e.isStatic,y=e.as,N=void 0===y?"input":y,E=Object(o.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),h=Object(l.useContext)(f),P=h.controlId,I=h.custom?[i,"custom-control-input"]:[s,"form-check-input"],w=I[0],C=I[1];return s=Object(u.a)(w,C),r.a.createElement(N,Object(c.a)({},E,{ref:a,type:b,id:t||P,className:m()(n,s,p&&"is-valid",O&&"is-invalid",j&&"position-static")}))}));v.displayName="FormCheckInput";var p=v,x=r.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,i=e.className,n=e.htmlFor,d=Object(o.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),b=Object(l.useContext)(f),v=b.controlId,p=b.custom?[s,"custom-control-label"]:[t,"form-check-label"],x=p[0],O=p[1];return t=Object(u.a)(x,O),r.a.createElement("label",Object(c.a)({},d,{ref:a,htmlFor:n||v,className:m()(i,t)}))}));x.displayName="FormCheckLabel";var O=x,j=r.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,i=e.bsCustomPrefix,n=e.inline,d=void 0!==n&&n,v=e.disabled,x=void 0!==v&&v,j=e.isValid,y=void 0!==j&&j,N=e.isInvalid,E=void 0!==N&&N,h=e.feedbackTooltip,P=void 0!==h&&h,I=e.feedback,w=e.className,C=e.style,F=e.title,k=void 0===F?"":F,g=e.type,R=void 0===g?"checkbox":g,V=e.label,S=e.children,L=e.custom,z=e.as,T=void 0===z?"input":z,B=Object(o.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),M="switch"===R||L,G=M?[i,"custom-control"]:[s,"form-check"],J=G[0],Y=G[1];s=Object(u.a)(J,Y);var q=Object(l.useContext)(f).controlId,Q=Object(l.useMemo)((function(){return{controlId:t||q,custom:M}}),[q,M,t]),U=null!=V&&!1!==V&&!S,W=r.a.createElement(p,Object(c.a)({},B,{type:"switch"===R?"checkbox":R,ref:a,isValid:y,isInvalid:E,isStatic:!U,disabled:x,as:T}));return r.a.createElement(f.Provider,{value:Q},r.a.createElement("div",{style:C,className:m()(w,s,M&&"custom-"+R,d&&s+"-inline")},S||r.a.createElement(r.a.Fragment,null,W,U&&r.a.createElement(O,{title:k},V),(y||E)&&r.a.createElement(b,{type:y?"valid":"invalid",tooltip:P},I))))}));j.displayName="FormCheck",j.Input=p,j.Label=O;var y=j,N=r.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,i=e.bsCustomPrefix,n=e.className,d=e.isValid,b=e.isInvalid,v=e.lang,p=e.as,x=void 0===p?"input":p,O=Object(o.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),j=Object(l.useContext)(f),y=j.controlId,N=j.custom?[i,"custom-file-input"]:[s,"form-control-file"],E=N[0],h=N[1];return s=Object(u.a)(E,h),r.a.createElement(x,Object(c.a)({},O,{ref:a,id:t||y,type:"file",lang:v,className:m()(n,s,d&&"is-valid",b&&"is-invalid")}))}));N.displayName="FormFileInput";var E=N,h=r.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,i=e.className,n=e.htmlFor,d=Object(o.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),b=Object(l.useContext)(f),v=b.controlId,p=b.custom?[s,"custom-file-label"]:[t,"form-file-label"],x=p[0],O=p[1];return t=Object(u.a)(x,O),r.a.createElement("label",Object(c.a)({},d,{ref:a,htmlFor:n||v,className:m()(i,t),"data-browse":d["data-browse"]}))}));h.displayName="FormFileLabel";var P=h,I=r.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,i=e.bsCustomPrefix,n=e.disabled,d=void 0!==n&&n,v=e.isValid,p=void 0!==v&&v,x=e.isInvalid,O=void 0!==x&&x,j=e.feedbackTooltip,y=void 0!==j&&j,N=e.feedback,h=e.className,I=e.style,w=e.label,C=e.children,F=e.custom,k=e.lang,g=e["data-browse"],R=e.as,V=void 0===R?"div":R,S=e.inputAs,L=void 0===S?"input":S,z=Object(o.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),T=F?[i,"custom"]:[s,"form-file"],B=T[0],M=T[1];s=Object(u.a)(B,M);var G=Object(l.useContext)(f).controlId,J=Object(l.useMemo)((function(){return{controlId:t||G,custom:F}}),[G,F,t]),Y=null!=w&&!1!==w&&!C,q=r.a.createElement(E,Object(c.a)({},z,{ref:a,isValid:p,isInvalid:O,disabled:d,as:L,lang:k}));return r.a.createElement(f.Provider,{value:J},r.a.createElement(V,{style:I,className:m()(h,s,F&&"custom-file")},C||r.a.createElement(r.a.Fragment,null,F?r.a.createElement(r.a.Fragment,null,q,Y&&r.a.createElement(P,{"data-browse":g},w)):r.a.createElement(r.a.Fragment,null,Y&&r.a.createElement(P,null,w),q),(p||O)&&r.a.createElement(b,{type:p?"valid":"invalid",tooltip:y},N))))}));I.displayName="FormFile",I.Input=E,I.Label=P;var w=I,C=(t("91GP"),t("2W6z"),r.a.forwardRef((function(e,a){var t,s,i=e.bsPrefix,n=e.bsCustomPrefix,d=e.type,b=e.size,v=e.htmlSize,p=e.id,x=e.className,O=e.isValid,j=void 0!==O&&O,y=e.isInvalid,N=void 0!==y&&y,E=e.plaintext,h=e.readOnly,P=e.custom,I=e.as,w=void 0===I?"input":I,C=Object(o.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),F=Object(l.useContext)(f).controlId,k=P?[n,"custom"]:[i,"form-control"],g=k[0],R=k[1];if(i=Object(u.a)(g,R),E)(s={})[i+"-plaintext"]=!0,t=s;else if("file"===d){var V;(V={})[i+"-file"]=!0,t=V}else if("range"===d){var S;(S={})[i+"-range"]=!0,t=S}else if("select"===w&&P){var L;(L={})[i+"-select"]=!0,L[i+"-select-"+b]=b,t=L}else{var z;(z={})[i]=!0,z[i+"-"+b]=b,t=z}return r.a.createElement(w,Object(c.a)({},C,{type:d,size:v,ref:a,readOnly:h,id:p||F,className:m()(x,t,j&&"is-valid",N&&"is-invalid")}))})));C.displayName="FormControl";var F=Object.assign(C,{Feedback:b}),k=r.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.children,n=e.controlId,d=e.as,b=void 0===d?"div":d,v=Object(o.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(u.a)(t,"form-group");var p=Object(l.useMemo)((function(){return{controlId:n}}),[n]);return r.a.createElement(f.Provider,{value:p},r.a.createElement(b,Object(c.a)({},v,{ref:a,className:m()(s,t)}),i))}));k.displayName="FormGroup";var g=k,R=t("JI6e"),V=r.a.forwardRef((function(e,a){var t=e.as,s=void 0===t?"label":t,i=e.bsPrefix,n=e.column,d=e.srOnly,b=e.className,v=e.htmlFor,p=Object(o.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),x=Object(l.useContext)(f).controlId;i=Object(u.a)(i,"form-label");var O="col-form-label";"string"==typeof n&&(O=O+"-"+n);var j=m()(b,i,d&&"sr-only",n&&O);return v=v||x,n?r.a.createElement(R.a,Object(c.a)({as:"label",className:j,htmlFor:v},p)):r.a.createElement(s,Object(c.a)({ref:a,className:j,htmlFor:v},p))}));V.displayName="FormLabel",V.defaultProps={column:!1,srOnly:!1};var S=V,L=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,s=e.as,i=void 0===s?"small":s,n=e.muted,d=Object(o.a)(e,["bsPrefix","className","as","muted"]);return t=Object(u.a)(t,"form-text"),r.a.createElement(i,Object(c.a)({},d,{ref:a,className:m()(l,t,n&&"text-muted")}))}));L.displayName="FormText";var z=L,T=r.a.forwardRef((function(e,a){return r.a.createElement(y,Object(c.a)({},e,{ref:a,type:"switch"}))}));T.displayName="Switch",T.Input=y.Input,T.Label=y.Label;var B=T,M=t("YdCC"),G=Object(M.a)("form-row"),J=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.inline,s=e.className,i=e.validated,n=e.as,d=void 0===n?"form":n,b=Object(o.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(u.a)(t,"form"),r.a.createElement(d,Object(c.a)({},b,{ref:a,className:m()(s,i&&"was-validated",l&&t+"-inline")}))}));J.displayName="Form",J.defaultProps={inline:!1},J.Row=G,J.Group=g,J.Control=F,J.Check=y,J.File=w,J.Switch=B,J.Label=S,J.Text=z;var Y=J,q=t("cWnB");a.default=function(){return r.a.createElement(s.a,null,r.a.createElement(i.a,{title:"Contact Me"}),r.a.createElement("h1",null,"Contact Me"),r.a.createElement("h3",null,"Feel free to drop me a line."),r.a.createElement(Y,{name:"contact",method:"post",action:"/thanks/","data-netlify":"true","data-netlify-honeypot":"bot-field"},r.a.createElement(Y.Group,{controlId:"formBasicEmail"},r.a.createElement(Y.Label,null,"Email address"),r.a.createElement(Y.Control,{type:"email",placeholder:"Enter email",name:"email"})),r.a.createElement(Y.Group,{controlId:"formBasicSubject"},r.a.createElement(Y.Label,null,"Subject"),r.a.createElement(Y.Control,{type:"text",placeholder:"Subject",name:"subject"})),r.a.createElement(Y.Group,{controlId:"formBasicMessage"},r.a.createElement(Y.Label,null,"Message"),r.a.createElement(Y.Control,{as:"textarea",rows:3,name:"message"})),r.a.createElement(q.a,{variant:"primary",type:"submit"},"Submit"),r.a.createElement("input",{type:"hidden",name:"form-name",value:"contact"})))}},JI6e:function(e,a,t){"use strict";t("8+KV");var l=t("wx14"),r=t("zLVn"),s=t("TSYQ"),i=t.n(s),c=t("q1tI"),o=t.n(c),n=t("vUet"),m=["xl","lg","md","sm","xs"],d=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,c=e.as,d=void 0===c?"div":c,b=Object(r.a)(e,["bsPrefix","className","as"]),f=Object(n.a)(t,"col"),u=[],v=[];return m.forEach((function(e){var a,t,l,r=b[e];if(delete b[e],"object"==typeof r&&null!=r){var s=r.span;a=void 0===s||s,t=r.offset,l=r.order}else a=r;var i="xs"!==e?"-"+e:"";a&&u.push(!0===a?""+f+i:""+f+i+"-"+a),null!=l&&v.push("order"+i+"-"+l),null!=t&&v.push("offset"+i+"-"+t)})),u.length||u.push(f),o.a.createElement(d,Object(l.a)({},b,{ref:a,className:i.a.apply(void 0,[s].concat(u,v))}))}));d.displayName="Col",a.a=d},cWnB:function(e,a,t){"use strict";var l=t("wx14"),r=t("zLVn"),s=t("TSYQ"),i=t.n(s),c=t("q1tI"),o=t.n(c),n=t("vUet"),m=t("dbZe"),d=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.variant,c=e.size,d=e.active,b=e.className,f=e.block,u=e.type,v=e.as,p=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),x=Object(n.a)(t,"btn"),O=i()(b,x,d&&"active",x+"-"+s,f&&x+"-block",c&&x+"-"+c);if(p.href)return o.a.createElement(m.a,Object(l.a)({},p,{as:v,ref:a,className:i()(O,p.disabled&&"disabled")}));a&&(p.ref=a),u?p.type=u:v||(p.type="button");var j=v||"button";return o.a.createElement(j,Object(l.a)({},p,{className:O}))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1},a.a=d}}]);
//# sourceMappingURL=component---src-pages-contact-js-2f824ba499c0cce2a4cc.js.map
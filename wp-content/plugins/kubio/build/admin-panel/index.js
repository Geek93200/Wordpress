this.kubio=this.kubio||{},this.kubio.adminPanel=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=561)}({2:function(e,t){!function(){e.exports=this.lodash}()},561:function(e,t,n){"use strict";n.r(t),n.d(t,"initAdmin",(function(){return f})),n.d(t,"convertNodeToTemplate",(function(){return l})),n.d(t,"initAdminStore",(function(){return c})),n.d(t,"ContentMetas",(function(){return u}));var o=n(84),r=n(2),i=n.n(r);const u={INSERT_ELEMENT:"insert-element",IS_PRESET:"is-preset",IS_DEFAULT_PRESET:"is-default-preset",IS_FREE:"is-free"},f=(document.domain.endsWith("colibriwp.com"),()=>{o.Log.warn("The initAdmin method is used for Kubio internal developing")}),l=()=>{o.Log.warn("The convertNodeToTemplate method is used for Kubio internal developing")},{kubioRemoteContentFile:s}=window.kubioUtilsData,a=()=>new Promise((e=>{window.fetch(s).then((t=>{t.json().then((t=>{var n;e((n=t,{sections:i.a.filter(n,{type:"template",component:"kubio/section"}),headers:i.a.filter(n,{type:"template",component:"kubio/header"}),footers:i.a.filter(n,{type:"template",component:"kubio/footer"}),presets:i.a.filter(n,(e=>{if("preset"===e.type)return!0;if("template"===e.type){const t=i.a.get(e,"meta",[]);if(t.includes(u.IS_PRESET)&&t.includes(u.IS_DEFAULT_PRESET))return!0}}))}))}))}))})),c=e=>{a().then((t=>{e(t)}))}},84:function(e,t){!function(){e.exports=this.kubio.log}()}});

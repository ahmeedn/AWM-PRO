import{c as a}from"./index-C-NAaxdN.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],p=a("printer",l),u=(n,c)=>{if(!n||!n.length)return;const i=Object.keys(n[0]),r=[i.join(","),...n.map(o=>i.map(d=>{let t=o[d];return t==null?t="":typeof t=="string"&&(t=`"${t.replace(/"/g,'""')}"`),t}).join(","))].join(`
`),s=new Blob(["\uFEFF"+r],{type:"text/csv;charset=utf-8;"}),e=document.createElement("a");if(e.download!==void 0){const o=URL.createObjectURL(s);e.setAttribute("href",o),e.setAttribute("download",`${c}.csv`),e.style.visibility="hidden",document.body.appendChild(e),e.click(),document.body.removeChild(e)}},y=()=>{window.print()};export{p as P,u as d,y as p};

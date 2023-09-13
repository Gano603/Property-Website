import{j as s,r as l,a as M}from"./index-3b2434f4.js";import{S as C}from"./SearchBar-372f81ff.js";import{G as v,B as f,a as y}from"./index.esm-ff90aa9c.js";import{a as g}from"./axios-4a70c6fc.js";import"./index.esm-4f34a3a3.js";function S(t){return v({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"}}]})(t)}const u=({title:t,click_action:e})=>s.jsx("button",{className:"option-button",onClick:e,children:t});function z(t){return v({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"}}]})(t)}function b(t){return v({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M19.875 12c.621 0 1.125 .512 1.125 1.143v5.714c0 .631 -.504 1.143 -1.125 1.143h-15.875a1 1 0 0 1 -1 -1v-5.857c0 -.631 .504 -1.143 1.125 -1.143h15.75z"}},{tag:"path",attr:{d:"M9 12v2"}},{tag:"path",attr:{d:"M6 12v3"}},{tag:"path",attr:{d:"M12 12v3"}},{tag:"path",attr:{d:"M18 12v3"}},{tag:"path",attr:{d:"M15 12v2"}},{tag:"path",attr:{d:"M3 3v4"}},{tag:"path",attr:{d:"M3 5h18"}},{tag:"path",attr:{d:"M21 3v4"}}]})(t)}const B=({feature_name:t})=>s.jsxs("span",{children:[s.jsx(z,{}),t]}),k=({imageUrl:t,type:e,price:n,beds:i,baths:r,size:c,address:d,features:o,setdisplayMenu:p,setdisplayAd:h,iter:j})=>s.jsxs("div",{className:"ad-card",onClick:()=>{p(!0),h(j)},children:[s.jsx("div",{children:s.jsx("img",{src:t,alt:"Apartment"})}),s.jsxs("div",{className:"details",children:[s.jsx("h2",{children:e}),s.jsxs("h3",{children:["PKR ",n]}),s.jsx("h5",{children:d}),s.jsx("hr",{}),s.jsxs("div",{className:"ad-options",children:[s.jsxs("div",{children:[s.jsx(f,{title:"Bedrooms"}),s.jsx("span",{children:i})]}),s.jsxs("div",{children:[s.jsx(y,{title:"Bathrooms"}),s.jsx("span",{children:r})]}),s.jsxs("div",{children:[s.jsx(b,{style:{transform:"rotate(180deg)"},title:"Size"}),s.jsx("span",{children:c})]})]}),s.jsx("hr",{}),s.jsx("div",{children:s.jsx("div",{className:"features",children:o.length>0&&o.map((x,m)=>s.jsx(B,{feature_name:x},m))})})]})]});const D=({size:t})=>s.jsxs("div",{className:"size-display",children:[s.jsx("p",{children:`${Math.floor(t/20)} Kanals and ${t%20} Marlas`}),s.jsxs("p",{children:[t*272.251," ft²"]})]}),w=({index:t,setdisplayMenu:e})=>{const[n,i]=l.useState(0),[r,c]=l.useState(!1);return s.jsx("div",{className:"main-window",children:s.jsxs("div",{className:"display-window",children:[s.jsxs("div",{className:"detail-window",children:[s.jsx("div",{className:"exit-button",children:s.jsx("span",{onClick:()=>e(!1),children:"x"})}),s.jsxs("div",{className:"details-section",children:[s.jsx("h1",{children:t.type.toUpperCase()}),s.jsxs("h2",{children:["RS ",t.price]}),s.jsx("h3",{children:t.address.toUpperCase()}),s.jsx("div",{className:"detail-description",children:t.description}),s.jsxs("div",{children:[s.jsxs("span",{children:[s.jsx(f,{title:"Beds"}),t.beds]}),s.jsxs("span",{children:[s.jsx(y,{title:"Baths"}),t.baths]}),s.jsxs("span",{onClick:()=>c(!r),children:[s.jsx(b,{title:"Size"}),s.jsx("span",{style:{"text-decoration":"underline",cursor:"pointer"},children:t.size})]})]}),r&&s.jsx(D,{size:t.size})]})]}),s.jsxs("div",{className:"image-window",children:[s.jsx("button",{className:"change-button",onClick:()=>i((n-1+t.imageData.length)%t.imageData.length),children:"<"}),s.jsx("img",{src:t.imageData[n],alt:"property-image"}),s.jsx("button",{className:"change-button",onClick:()=>i((n+1)%t.imageData.length),children:">"})]})]})})},_=({api_Url:t})=>{const{location:e}=M(),[n,i]=l.useState(),[r,c]=l.useState([]),[d,o]=l.useState(10),[p,h]=l.useState(!1),[j,x]=l.useState(),m=()=>{e==="all"?g.get(t+"/ad/getallads").then(({data:{details:a}})=>c(a)).then(()=>i(!0)).catch(a=>console.log(a)):g.post(t+"/ad/getadbycity",{city:e}).then(({data:{details:a}})=>{c(a)}).then(()=>i(!0)).catch(a=>console.log(a))};return l.useEffect(()=>{m(),i(!1)},[]),s.jsxs(s.Fragment,{children:[p&&s.jsx(w,{index:r[j],setdisplayMenu:h}),s.jsx(C,{address:e,class_name:"Display-searchbar"}),s.jsx("div",{className:"top-poster"}),s.jsxs("div",{className:"display",children:[s.jsxs("h1",{children:["Properties for Sale in ",e]}),s.jsx("div",{className:"responsive-on-700px filter-button",children:s.jsxs("button",{className:"option-button",children:[s.jsx(S,{}),s.jsx("span",{children:"Filters"})]})}),s.jsxs("div",{className:"responsive-off-700px",children:[s.jsx(u,{title:"Purchase"}),s.jsx(u,{title:"Rental"})]}),s.jsx("hr",{}),!n&&s.jsx("div",{className:"loader"}),r.length>0&&r.slice(0,d).map((a,N)=>s.jsx(k,{iter:N,setdisplayAd:x,setdisplayMenu:h,features:a.features,imageUrl:a.imageData[0],type:a.type,price:a.price,beds:a.beds,baths:a.baths,size:a.size,address:a.address},a._id))]}),s.jsx("div",{className:"loadmore_option",children:s.jsx(u,{title:"Load More",click_action:()=>o(d+10)})})]})};export{_ as default};

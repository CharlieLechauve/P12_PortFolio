(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{3727:function(e,t,n){Promise.resolve().then(n.bind(n,8446)),Promise.resolve().then(n.bind(n,8610)),Promise.resolve().then(n.t.bind(n,1441,23)),Promise.resolve().then(n.t.bind(n,7558,23)),Promise.resolve().then(n.t.bind(n,4326,23)),Promise.resolve().then(n.t.bind(n,7628,23)),Promise.resolve().then(n.t.bind(n,2758,23)),Promise.resolve().then(n.t.bind(n,3995,23)),Promise.resolve().then(n.t.bind(n,8877,23)),Promise.resolve().then(n.t.bind(n,7304,23))},8446:function(e,t,n){"use strict";n.d(t,{_:function(){return o}});var a=n(7437),l=n(2265);let o=(0,l.createContext)(),{NAV:s,TOGGLE:r,COLOR:i,POPUP:u,DIRECTION:c,DARK:d,LANGUAGE:_}={NAV:"NAV",TOGGLE:"TOGGLE",COLOR:"COLOR",DIRECTION:"DIRECTION",POPUP:"POPUP",DARK:"DARK"},b={nav:"home",toggle:!1,color:"yellow",direction:"top",popup:null,blogs:[{id:1,author:"Charlie",date:"01/06/2024",tags:"ecology, greencode, development",title:"How to respect nature when coding",img:" ",desc:" Nature need us to be respectful. Let's talk about Green Code "}],dark:!0,language:"EN"},p=(e,t)=>{let{type:n,payload:a}=t;switch(n){case s:return{...e,nav:a};case r:return{...e,toggle:a};case i:return{...e,color:a};case c:return{...e,direction:a};case u:return{...e,popup:a};case d:return{...e,dark:a};case _:return{...e,language:a};default:return e}};t.default=e=>{let{children:t}=e,[n,g]=(0,l.useReducer)(p,b),f=(0,l.useCallback)((e,t)=>{g({type:s,payload:e}),g({type:r,payload:t})},[]),m=(0,l.useCallback)(e=>{g({type:i,payload:e})},[]),y=(0,l.useCallback)(e=>{g({type:c,payload:e})},[]),h=(0,l.useCallback)(e=>{g({type:u,payload:e})},[]),v=(0,l.useCallback)(e=>{g({type:d,payload:e})},[]),P=(0,l.useCallback)(()=>{console.log("Toggling language from",n.language);let e="EN"===n.language?"FR":"EN";g({type:_,payload:e}),console.log("Language toggled to",e)},[n.language]),{nav:k,toggle:C,color:N,direction:O,popup:E,blogs:R,dark:x,language:w}=n;return(0,a.jsx)(o.Provider,{value:{nav:k,changeNav:f,toggle:C,color:N,changeColor:m,direction:O,changeDirection:y,popupToggle:h,popup:E,blogs:R,dark:x,darkToggle:v,language:w,toggleLanguage:P},children:t})}},8610:function(e,t,n){"use strict";var a=n(7437),l=n(8446),o=n(2265);t.default=()=>{let{color:e}=(0,o.useContext)(l._);return(0,a.jsx)(o.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:"/assets/css/skins/".concat(e,".css")})})}},8877:function(){},4326:function(){},7628:function(){},2758:function(){},3995:function(){},7304:function(){},7558:function(e){e.exports={style:{fontFamily:"'__Open_Sans_bb63ad', '__Open_Sans_Fallback_bb63ad'",fontStyle:"normal"},className:"__className_bb63ad",variable:"__variable_bb63ad"}},1441:function(e){e.exports={style:{fontFamily:"'__Poppins_268f66', '__Poppins_Fallback_268f66'",fontStyle:"normal"},className:"__className_268f66",variable:"__variable_268f66"}}},function(e){e.O(0,[268,15,76,971,23,744],function(){return e(e.s=3727)}),_N_E=e.O()}]);
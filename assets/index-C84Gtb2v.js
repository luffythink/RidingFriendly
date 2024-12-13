import{d as X,r as j,o as x,a as r,c as a,b as t,u as h,t as b,F as w,e as $,f as I,n as k,g as P,h as L,i as A,s as U,j as E,S as J,k as Y,l as K,m as Z,p as q}from"./vendor-BupkWOYW.js";(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function _(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=_(e);fetch(e.href,s)}})();const M=X("main",{state:()=>({isMobile:!1}),getters:{},actions:{setIsMobile(f){this.isMobile=f}}}),D={Introduce:"首页",Conversations:"脑洞",Abilities:"打怪",Jobs:"工具",Products:"行动",Works:"共创",Pricing:"加入",Footer:"后记",AgeTitle:"岁数",Name:"CMQXDGD"},G=""+new URL("logo-zBjCmdRd.png",import.meta.url).href,T=(f,u)=>{const _=f.__vccOpts||f;for(const[c,e]of u)_[c]=e;return _},Q={class:"navbar navbar-expand-lg py-2 mb-3 jn-navbar-top"},tt={id:"navbar-top",class:"container-xl"},et={class:"jn-logo"},st={class:"navbar-brand flex align-items-center align-content-center",href:"#"},ot=["src"],nt={class:"fw-bold"},it=["title"],rt={class:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup"},at={class:"navbar-nav"},lt=["href"],ct={__name:"Nav",setup(f){const u=j(0),_=()=>{const c=new Date,e=new Date("2024-06-30"),s=c.getTime()-e.getTime(),d=new Date(s),m=Math.abs(d.getUTCFullYear()-1970)+d.getMonth()/12;u.value=m.toFixed(2)};return x(()=>{_()}),(c,e)=>(r(),a("header",Q,[t("nav",tt,[t("div",et,[t("a",st,[t("span",null,[t("img",{src:h(G),alt:"logo",class:"jn-logo-img"},null,8,ot)]),t("span",nt,b(h(D).Name),1),t("span",{class:"fw-lighter",title:h(D).AgeTitle},".v"+b(u.value),9,it)])]),e[0]||(e[0]=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon bg-transparent"})],-1)),t("div",rt,[t("div",at,[(r(),a(w,null,$(["Introduce","Conversations","Abilities","Jobs","Products","Works","Pricing","Footer"],s=>t("a",{key:s,class:"nav-link",href:`#${s}`},b(h(D)[s]),9,lt)),64))])])])]))}},dt=T(ct,[["__scopeId","data-v-9827c2de"]]),S={name:"骑行友好实验 2024 策展 ",subtitle:"自由的风 · 骑行与生活",button:"Just ride it"},ut=`<p>On the way，一起定义骑行友好，一起共创打怪游戏，一起尽情自由 riding。
一场「骑行友好实验计划」行动正在进行  ing</p>
<h3>串门骑行打怪</h3>
<h4>板块：XXX</h4>
<br>
<ul>
<li><strong>理念</strong>：围绕可持续生活下绿色出行主题，人与人、人与车、人与社区展开…</li>
<li><strong>形式</strong>：街展 / 巡展 / 临展+参与式策展（认领版块 / 发起版块+自主行动）</li>
<li><strong>布展物料</strong>：低碳环保+可持续使用</li>
</ul>
<br>
<p>会发生什么呢？我们一起期待。</p>
<hr>
<p><strong>时间</strong>：2024 年 12 月 22 日</p>
<p><strong>地点</strong>：成都市成华区智慧驿站 - 绿道 100</p>
`,_t={class:"text-dark mb-4 jn-introduce-doc"},mt=["innerHTML"],pt={class:"btn-purple",href:"#Conversations"},bt={key:0,class:"col-6 px-4 pt-4"},gt={__name:"Introduce",setup(f){const u=M(),_=I(()=>u.isMobile),c=j(""),e=s=>s.toString().replace(/<li>/g,'<p><i class="bi bi-check-circle-fill text-purple"></i> ').replace(/<\/li>/g,"</p>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");return c.value=e(ut),(s,d)=>(r(),a("div",{class:k(["row jn-introduce justify-content-evenly pt-5 mx-0",_.value?"jn-mobile-mt":"jn-desktop-mt"]),id:"Introduce"},[t("div",{class:k([_.value?"col-12 px-5 py-2":"col-5 p-5"])},[t("div",null,[t("h2",{class:k(["jn-introduce-title",[_.value?"jn-h2-mobile":"jn-h2"]])},b(h(S).name),3),t("h3",{class:k(["jn-introduce-subtitle",[_.value?"jn-h3-mobile":"jn-h3"]])},b(h(S).subtitle),3),t("div",_t,[t("div",{innerHTML:c.value,class:"mb-4"},null,8,mt),t("a",pt,[P(b(h(S).button)+"  ",1),d[0]||(d[0]=t("i",{class:"bi bi-arrow-down-circle"},null,-1))])])])],2),_.value?L("",!0):(r(),a("div",bt,d[1]||(d[1]=[t("div",{class:"jn-introduce-bg"},null,-1)])))],2))}},vt=T(gt,[["__scopeId","data-v-0d19dec0"]]),ht="modulepreload",ft=function(f,u){return new URL(f,u).href},H={},p=function(u,_,c){let e=Promise.resolve();if(_&&_.length>0){const d=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),m=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));e=Promise.allSettled(_.map(n=>{if(n=ft(n,c),n in H)return;H[n]=!0;const l=n.endsWith(".css"),g=l?'[rel="stylesheet"]':"";if(!!c)for(let y=d.length-1;y>=0;y--){const O=d[y];if(O.href===n&&(!l||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${g}`))return;const v=document.createElement("link");if(v.rel=l?"stylesheet":ht,l||(v.as="script"),v.crossOrigin="",v.href=n,m&&v.setAttribute("nonce",m),document.head.appendChild(v),l)return new Promise((y,O)=>{v.addEventListener("load",y),v.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${n}`)))})}))}function s(d){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=d,window.dispatchEvent(i),!i.defaultPrevented)throw d}return e.then(d=>{for(const i of d||[])i.status==="rejected"&&s(i.reason);return u().catch(s)})},yt=""+new URL("g1-lEpS5USt.png",import.meta.url).href,jt=Object.freeze(Object.defineProperty({__proto__:null,default:yt},Symbol.toStringTag,{value:"Module"})),wt=""+new URL("g3-DnxGvOJP.png",import.meta.url).href,$t=Object.freeze(Object.defineProperty({__proto__:null,default:wt},Symbol.toStringTag,{value:"Module"})),kt=""+new URL("m1-CXl0nZy8.png",import.meta.url).href,Tt=Object.freeze(Object.defineProperty({__proto__:null,default:kt},Symbol.toStringTag,{value:"Module"})),Et=""+new URL("m3-CydBvMxV.png",import.meta.url).href,Pt=Object.freeze(Object.defineProperty({__proto__:null,default:Et},Symbol.toStringTag,{value:"Module"})),Ot=""+new URL("m4-D4rQSjze.png",import.meta.url).href,Lt=Object.freeze(Object.defineProperty({__proto__:null,default:Ot},Symbol.toStringTag,{value:"Module"})),xt={Badge:"你认为的的骑行友好是什么？"},Mt={class:"jn-conversations mt-5 position-relative",id:"Conversations"},It={class:"badge bg-purple jn-badge"},At={class:"row justify-content-evenly mt-5 mx-0"},Rt={class:"px-5 col-12"},Dt={key:0},St=["innerHTML"],Ht=["src"],Vt={__name:"Conversations",setup(f){const u=j(!1),_=Object.assign({"/contents/conversations/conv1.md":()=>p(()=>import("./conv1-Ch_cdQ9Y.js"),[],import.meta.url),"/contents/conversations/conv2.md":()=>p(()=>import("./conv2-BgujmBUp.js"),[],import.meta.url),"/contents/conversations/conv3.md":()=>p(()=>import("./conv3-3oQv9wiT.js"),[],import.meta.url),"/contents/conversations/conv4.md":()=>p(()=>import("./conv4-BSlUcIE-.js"),[],import.meta.url),"/contents/conversations/conv5.md":()=>p(()=>import("./conv5-ydBSFbe3.js"),[],import.meta.url)}),c=Object.assign({"/contents/conversations/images/g1.png":jt,"/contents/conversations/images/g3.png":$t,"/contents/conversations/images/m1.png":Tt,"/contents/conversations/images/m3.png":Pt,"/contents/conversations/images/m4.png":Lt}),e=A([]),s=async()=>{const i=Object.values(_).map(async m=>{const n=await m(),l=n.attributes,g=Object.keys(c).find(v=>v.includes(l.avatar)),o=g?c[g].default:null;return{html:d(n.html),attributes:{...l,avatar:o}}});e.push(...await Promise.all(i)),e.sort((m,n)=>n.attributes.date-m.attributes.date),u.value=!0},d=i=>i.toString().replace(/<li>/g,'<span class="badge bg-white text-purple">').replace(/<\/li>/g,"</span>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");return x(async()=>{await s()}),(i,m)=>(r(),a("div",Mt,[t("span",It,b(h(xt).Badge),1),t("div",At,[t("div",Rt,[u.value?(r(),a("div",Dt,[(r(!0),a(w,null,$(e,(n,l)=>(r(),a("div",{key:l,class:k(`row flex-nowrap align-items-start ${l%2===0?"":"flex-row-reverse"}`)},[t("div",{class:k(`conversation ${l%2===0?"conversation-right":"conversation-left"} col-8 col-md-9`),innerHTML:n.html},null,10,St),t("div",{class:k(["col-4 col-md-3",`jn-img-${l%2===0?"right":"left"}`])},[t("img",{src:n.attributes.avatar,alt:"avatar",class:"img-fluid rounded-circle jn-avatar"},null,8,Ht)],2)],2))),128))])):L("",!0)])])]))}},Ct=T(Vt,[["__scopeId","data-v-1395ae21"]]),V={Badge:"打怪游戏",Title:"2 个方向 3 个原则 8 大怪"},Bt=`<h2></h2>
</br>
<p><strong>🌍 共骑地图</strong>：与关心绿色出行的个人和组织共同定义“骑行友好”，从成都成华区出发，循序渐进探索共创成都骑行友好地图。</p>
<p><strong>🚲 集结行动</strong>：汇聚关注绿色出行（自行车和电动车）的人和组织，通过<strong>游戏化打「怪」</strong> 的方式，实践骑行友好理念与绿色出行生活方式。</p>
<hr>
<ul>
<li>同频队友：结识一群热情且富有创意的骑行伙伴，共同探索骑行友好的新方法和理念。</li>
<li>有趣骑行：通过充满趣味的骑行友好实验行动，让每一次骑行都是一场友好探索之旅。</li>
<li>一起共创：共同推动可持续生活 · 绿色出行 · 骑行友好的可持续生活网络生长。</li>
</ul>
<hr>
<p>无论你是骑行工作者、通勤者还是骑行爱好者，
无论骑自行车还是电动车，
都欢迎加入我们，一起行动：D🚪🚴‍♂️👽～</p>
`,Ft={class:"jn-abilities mt-5 position-relative",id:"Abilities"},Ut={class:"badge bg-success jn-badge"},zt={class:"row justify-content-evenly mt-5 mx-0"},Nt={class:"jn-left-panel mb-4 col-md-5 col-12"},Wt={class:"jn-h2"},Xt=["innerHTML"],Jt={key:0,class:"jn-right-panel col-md-7 col-12"},Yt={class:"card jn-card jn-abilities-card h-100 jn-animate-card"},Kt={key:0,class:"card-body"},Zt={class:"jn-icon"},qt={class:"card-title"},Gt=["innerHTML"],Qt={__name:"Abilities",setup(f){const u=j(!1),_=j(""),c=i=>i.toString().replace(/<li>/g,'<p><i class="bi bi-emoji-wink-fill text-success"></i> ').replace(/<\/li>/g,"</p>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");_.value=c(Bt);const e=Object.assign({"/contents/abilities/ability1.md":()=>p(()=>import("./ability1-CB-5wMun.js"),[],import.meta.url),"/contents/abilities/ability2.md":()=>p(()=>import("./ability2-DAypPt5Q.js"),[],import.meta.url),"/contents/abilities/ability3.md":()=>p(()=>import("./ability3-C3Bq8D15.js"),[],import.meta.url),"/contents/abilities/ability4.md":()=>p(()=>import("./ability4-BGrngq7H.js"),[],import.meta.url),"/contents/abilities/ability5.md":()=>p(()=>import("./ability5-BAOtfGq1.js"),[],import.meta.url),"/contents/abilities/ability6.md":()=>p(()=>import("./ability6-D76kuvwh.js"),[],import.meta.url),"/contents/abilities/ability7.md":()=>p(()=>import("./ability7-RZKe1TUb.js"),[],import.meta.url),"/contents/abilities/ability8.md":()=>p(()=>import("./ability8-CcZomymO.js"),[],import.meta.url)}),s=A([]),d=async()=>{const i=Object.values(e).map(m=>m().then(n=>({html:n.html,attributes:n.attributes})));s.push(...await Promise.all(i)),s.sort((m,n)=>m.attributes.date<n.attributes.date?1:-1),u.value=!0};return x(async()=>{await d()}),(i,m)=>(r(),a("div",Ft,[t("span",Ut,b(h(V).Badge),1),t("div",zt,[t("div",Nt,[t("h2",Wt,b(h(V).Title),1),t("div",{innerHTML:_.value},null,8,Xt)]),u.value?(r(),a("div",Jt,[(r(!0),a(w,null,$(Math.ceil(s.length/2),n=>(r(),a("div",{key:n,class:"row"},[(r(),a(w,null,$(2,l=>t("div",{key:l,class:"col-md-6 col-12 mb-5"},[t("div",Yt,[s[(n-1)*2+(l-1)]?(r(),a("div",Kt,[t("div",Zt,[t("i",{class:k(["bi",s[(n-1)*2+(l-1)].attributes.icon])},null,2)]),t("h5",qt,b(s[(n-1)*2+(l-1)].attributes.Title),1),t("div",{innerHTML:s[(n-1)*2+(l-1)].html,class:"jn-card-text"},null,8,Gt)])):L("",!0)])])),64))]))),128))])):L("",!0)])]))}},te=T(Qt,[["__scopeId","data-v-f18336b5"]]),C={Badge:"持续迭代",Title:"骑行友好工具包"},ee=`<p>骑行友好工具包旨在为你的骑行体验提供便利与安全保障。骑行不仅是一种可持续生活方式，还有助于减少碳足迹和享受大自然的美好。我们特别准备了这一工具包，希望能在你骑行的每一步中，提供你所需的支持和资源，包括：</p>
<ul>
<li>骑行友好公约</li>
<li>骑行运动小贴士</li>
<li>骑字与路书攻略</li>
<li>自行车维护指南</li>
<li>骑行拍摄技巧</li>
<li>更多由你补充</li>
</ul>
<p>骑行的乐趣不仅在于目的地，更在于旅途中的每一个瞬间。我们鼓励你积极探索、互相分享骑行经验，和其他同行者建立联系，一起享受这项美好的运动。</p>
`,se={class:"jn-jobs mt-5 position-relative",id:"Jobs"},oe={class:"badge bg-purple jn-badge"},ne={class:"row justify-content-evenly mt-5 mx-0"},ie={class:"jn-left-panel mb-4 col-md-5 col-12"},re={class:"jn-h2"},ae=["innerHTML"],le={key:0,class:"jn-right-panel col-md-7 col-12"},ce={class:"nav nav-underline mb-3 text-nowrap overflow-x-scroll flex-nowrap",id:"pills-tab",role:"tablist"},de=["onClick","id","aria-selected"],ue=["id","aria-labelledby"],_e={class:"fs-4"},me={class:"fw-bold"},pe=["href"],be={class:"badge bg-purple"},ge=["innerHTML"],ve={__name:"Jobs",setup(f){const u=M(),_=I(()=>u.isMobile),c=j(!1),e=j(0),s=j(""),d=Object.assign({"/contents/jobs/convention.md":()=>p(()=>import("./convention-B_WRc8qP.js"),[],import.meta.url),"/contents/jobs/exercise-tips.md":()=>p(()=>import("./exercise-tips-CujkX5Tn.js"),[],import.meta.url),"/contents/jobs/maintenance.md":()=>p(()=>import("./maintenance-B4BzFe2P.js"),[],import.meta.url),"/contents/jobs/more.md":()=>p(()=>import("./more-B93EMu1x.js"),[],import.meta.url),"/contents/jobs/rideshots.md":()=>p(()=>import("./rideshots-CTxaDeC4.js"),[],import.meta.url),"/contents/jobs/road-book.md":()=>p(()=>import("./road-book-NOwuxkxo.js"),[],import.meta.url)}),i=A([]),m=async()=>{const l=Object.values(d).map(g=>g().then(o=>({html:n(o.html,"bi-arrow-right-circle-fill"),attributes:o.attributes})));i.push(...await Promise.all(l)),i.sort((g,o)=>g.attributes.date<o.attributes.date?1:-1),c.value=!0},n=(l,g)=>l.toString().replace(/<li>/g,`<p><i class="bi text-purple ${g}"></i> `).replace(/<\/li>/g,"</p>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");return s.value=n(ee,"bi-emoji-expressionless-fill"),x(async()=>{await m()}),(l,g)=>(r(),a("div",se,[t("span",oe,b(h(C).Badge),1),t("div",ne,[t("div",ie,[t("h2",re,b(h(C).Title),1),t("div",{innerHTML:s.value},null,8,ae)]),c.value?(r(),a("div",le,[t("ul",ce,[(r(!0),a(w,null,$(i,(o,v)=>(r(),a("li",{class:"nav-item",role:"presentation",key:"nav-item-"+o.attributes.id},[t("button",{class:k(["nav-link",{active:e.value===v}]),onClick:y=>e.value=v,id:"pills-"+o.attributes.id+"-tab",type:"button",role:"tab","aria-selected":e.value===v},b(o.attributes.company),11,de)]))),128))]),t("div",{class:k(["tab-content jn-tab-content card jn-card mb-5",[_.value?"p-4 jn-jobs-content-mobile":"p-5"]]),id:"pills-tabContent"},[(r(!0),a(w,null,$(i,(o,v)=>(r(),a("div",{class:k(["tab-pane fade",{"show active":e.value===v}]),key:"tab-pane-"+o.attributes.id,id:"jobs-"+o.attributes.id,role:"tabpanel","aria-labelledby":"pills-"+o.attributes.id+"-tab",tabindex:"0"},[t("div",_e,[t("span",me,b(o.attributes.title),1),g[0]||(g[0]=P(" @ ")),t("a",{class:"text-decoration-none link-purple",href:o.attributes.url,target:"_blank",rel:"noopener noreferrer"},b(o.attributes.company),9,pe)]),t("div",be,b(o.attributes.range),1),t("div",{class:"mt-3 fw-light",innerHTML:o.html},null,8,ge)],10,ue))),128))],2)])):L("",!0)])]))}},he=T(ve,[["__scopeId","data-v-f022d29f"]]),fe=""+new URL("exhibition-ChCmVZfp.png",import.meta.url).href,ye=Object.freeze(Object.defineProperty({__proto__:null,default:fe},Symbol.toStringTag,{value:"Module"})),je=""+new URL("riders-ew5Z129j.jpeg",import.meta.url).href,we=Object.freeze(Object.defineProperty({__proto__:null,default:je},Symbol.toStringTag,{value:"Module"})),$e=""+new URL("riding-CcSygWKt.jpg",import.meta.url).href,ke=Object.freeze(Object.defineProperty({__proto__:null,default:$e},Symbol.toStringTag,{value:"Module"})),Te=""+new URL("workshop-44W0cObu.jpg",import.meta.url).href,Ee=Object.freeze(Object.defineProperty({__proto__:null,default:Te},Symbol.toStringTag,{value:"Module"})),B={Badge:"持续行动",Title:"ON THE WAY"},Pe=`<h4>自己很快，但一群人才骑得更远</h4>
<hr>
<div><img src="assets/riders-ew5Z129j.jpeg" width="416" height="666"/></div>
`,Oe={class:"jn-products mt-5 position-relative",id:"Products"},Le={class:"badge bg-dark jn-badge"},xe={class:"row justify-content-evenly mt-5 mx-0"},Me={class:"jn-left-panel mb-4 col-md-5 col-12"},Ie={class:"sticky-wrapper"},Ae={class:"jn-h2"},Re=["innerHTML"],De={key:0,class:"jn-right-panel col-md-7 col-12"},Se={class:"col-12 mb-5 jn-product-card"},He={class:"card jn-card"},Ve={class:"card-body"},Ce={class:"card-title"},Be=["href"],Fe={class:"card-title mt-3"},Ue={class:"row my-3 align-items-start"},ze=["innerHTML"],Ne={class:"col-md-4 col-12 pb-2"},We={class:"jn-cover-img"},Xe=["src","alt"],Je={__name:"Products",setup(f){const u=M(),_=I(()=>u.isMobile),c=j(!1),e=j(""),s=l=>l.toString().replace(/<li>/g,'<p><i class="bi bi-emoji-wink-fill text-success"></i> ').replace(/<\/li>/g,"</p>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");e.value=s(Pe);const d=Object.assign({"/contents/products/exhibition.md":()=>p(()=>import("./exhibition-DLinlJuX.js"),[],import.meta.url),"/contents/products/riding.md":()=>p(()=>import("./riding-CM5Q6Kvi.js"),[],import.meta.url),"/contents/products/workshop.md":()=>p(()=>import("./workshop-CtXwn-39.js"),[],import.meta.url)}),i=Object.assign({"/contents/products/images/exhibition.png":ye,"/contents/products/images/riders.jpeg":we,"/contents/products/images/riding.jpg":ke,"/contents/products/images/workshop.jpg":Ee}),m=A([]),n=async()=>{const l=Object.values(d).map(async g=>{const o=await g(),v=o.attributes,y=Object.keys(i).find(R=>R.includes(v.cover)),O=y?i[y].default:null;return{html:s(o.html),attributes:{...v,cover:O}}});m.push(...await Promise.all(l)),m.sort((g,o)=>g.attributes.date-o.attributes.date),c.value=!0};return x(async()=>{await n(),_.value||U(".sticky-wrapper",{stickyBitStickyOffset:100})}),(l,g)=>(r(),a("div",Oe,[t("span",Le,b(h(B).Badge),1),t("div",xe,[t("div",Me,[t("div",Ie,[t("h2",Ae,b(h(B).Title),1),t("div",{innerHTML:e.value},null,8,Re)])]),c.value?(r(),a("div",De,[(r(!0),a(w,null,$(m,(o,v)=>(r(),a("div",{key:o,class:"row justify-content-between"},[t("div",Se,[t("div",He,[t("div",Ve,[t("h5",Ce,[P(b(o.attributes.title)+" ",1),t("a",{class:"text-decoration-none link-dark",href:o.attributes.url,target:"_blank",rel:"noopener noreferrer"},g[0]||(g[0]=[t("i",{class:"bi bi-arrow-up-right-circle"},null,-1)]),8,Be)]),t("div",Fe,[(r(!0),a(w,null,$(o.attributes.tags,y=>(r(),a("span",{key:v,class:"badge bg-dark jn-tags me-2"},b(y),1))),128))]),t("div",Ue,[t("div",{innerHTML:o.html,class:"jn-card-text col-md-8 col-12 jn-products-text"},null,8,ze),t("div",Ne,[t("div",We,[t("img",{src:o.attributes.cover,class:"img-fluid",alt:o.attributes.title},null,8,Xe)])])])])])])]))),128))])):L("",!0)])]))}},Ye=T(Je,[["__scopeId","data-v-f4efe594"]]),Ke={Badge:"一起玩呀"},Ze="",qe={class:"jn-works mt-5 position-relative",id:"Works"},Ge={class:"badge bg-success jn-badge"},Qe={key:0,class:"row mt-5 mx-0 jn-works-row"},ts={class:"card jn-works-card h-100"},es={class:"card-body"},ss={class:"card-title"},os=["href"],ns={class:"card-title mt-3"},is=["innerHTML"],rs={__name:"Works",setup(f){const u=j(!1),_=j(""),c=i=>i.toString().replace(/<li>/g,'<p><i class="bi bi-emoji-wink-fill text-success"></i> ').replace(/<\/li>/g,"</p>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");_.value=c(Ze);const e=Object.assign({"/contents/works/0-1.md":()=>p(()=>import("./0-1-fwrGMQqF.js"),[],import.meta.url),"/contents/works/bike-story.md":()=>p(()=>import("./bike-story-D6QcGO9h.js"),[],import.meta.url),"/contents/works/biketowork.md":()=>p(()=>import("./biketowork-DAQhmUWX.js"),[],import.meta.url),"/contents/works/bottle-painting.md":()=>p(()=>import("./bottle-painting-t8DWTMiE.js"),[],import.meta.url),"/contents/works/cuowa.md":()=>p(()=>import("./cuowa-qAQQwwvY.js"),[],import.meta.url),"/contents/works/daguai.md":()=>p(()=>import("./daguai-B39kvVnT.js"),[],import.meta.url),"/contents/works/daka.md":()=>p(()=>import("./daka-CEUGFKY6.js"),[],import.meta.url),"/contents/works/debate.md":()=>p(()=>import("./debate-CJ3aA_0K.js"),[],import.meta.url),"/contents/works/nft.md":()=>p(()=>import("./nft-BUKUi7Wg.js"),[],import.meta.url),"/contents/works/pump.md":()=>p(()=>import("./pump-D2KpwpCf.js"),[],import.meta.url),"/contents/works/zaiye.md":()=>p(()=>import("./zaiye-yLzJo-Dl.js"),[],import.meta.url)}),s=A([]),d=async()=>{const i=Object.values(e).map(m=>m().then(n=>({html:n.html,attributes:n.attributes})));s.push(...await Promise.all(i)),s.sort((m,n)=>m.attributes.date<n.attributes.date?1:-1),u.value=!0};return x(async()=>{await d()}),(i,m)=>(r(),a("div",qe,[t("span",Ge,b(h(Ke).Badge),1),u.value?(r(),a("div",Qe,[(r(!0),a(w,null,$(Math.ceil(s.length/3),n=>(r(),a("div",{key:n,class:"row"},[(r(!0),a(w,null,$(s.slice((n-1)*3,n*3),(l,g)=>(r(),a("div",{key:l.id,class:"col-md-4 col-12 mb-5"},[t("div",ts,[t("div",es,[t("h5",ss,[P(b(l.attributes.title)+" ",1),t("a",{class:"text-decoration-none link-success",href:l.attributes.url,target:"_blank",rel:"noopener noreferrer"},m[0]||(m[0]=[t("i",{class:"bi bi-arrow-up-right-circle"},null,-1)]),8,os)]),t("div",ns,[(r(!0),a(w,null,$(l.attributes.tags,o=>(r(),a("span",{key:o,class:"badge bg-success jn-tags me-2"},b(o),1))),128))]),t("div",{innerHTML:l.html,class:"jn-card-text"},null,8,is)])])]))),128))]))),128))])):L("",!0)]))}},as=T(rs,[["__scopeId","data-v-677d43b6"]]),F={Badge:"共创 / 合作伙伴",Title:""},ls=`<p>成都市成华社区发展基金会、成都可持续社区串门计划、骑行友好共创小组、天星村、ebike100、城汇玩…</p>
<div><img src="XX" width="1400"/></div>
`,cs={class:"jn-Pricing mt-5 position-relative",id:"Pricing"},ds={class:"badge bg-dark jn-badge"},us={class:"row justify-content-evenly mt-5 mx-0"},_s={class:"jn-left-panel mb-4 col-md-5 col-12"},ms={class:"sticky-wrapper"},ps={class:"jn-h2"},bs=["innerHTML"],gs={key:0,class:"jn-right-panel col-md-7 col-12"},vs={class:"col-12 mb-5 jn-product-card"},hs={class:"card jn-card"},fs={class:"card-body"},ys={class:"card-title"},js=["href"],ws={class:"card-title mt-3"},$s={class:"row my-3 align-items-start"},ks=["innerHTML"],Ts={class:"col-md-4 col-12 pb-2"},Es={class:"jn-cover-img"},Ps=["src","alt"],Os={__name:"Pricing",setup(f){const u=M(),_=I(()=>u.isMobile),c=j(!1),e=j(""),s=l=>l.toString().replace(/<li>/g,'<p><i class="bi bi-emoji-wink-fill text-success"></i> ').replace(/<\/li>/g,"</p>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");e.value=s(ls);const d=Object.assign({}),i=Object.assign({}),m=A([]),n=async()=>{const l=Object.values(d).map(async g=>{const o=await g(),v=o.attributes,y=Object.keys(i).find(R=>R.includes(v.cover)),O=y?i[y].default:null;return{html:s(o.html),attributes:{...v,cover:O}}});m.push(...await Promise.all(l)),m.sort((g,o)=>g.attributes.date-o.attributes.date),c.value=!0};return x(async()=>{await n(),_.value||U(".sticky-wrapper",{stickyBitStickyOffset:100})}),(l,g)=>(r(),a("div",cs,[t("span",ds,b(h(F).Badge),1),t("div",us,[t("div",_s,[t("div",ms,[t("h2",ps,b(h(F).Title),1),t("div",{innerHTML:e.value},null,8,bs)])]),c.value?(r(),a("div",gs,[(r(!0),a(w,null,$(m,(o,v)=>(r(),a("div",{key:o,class:"row justify-content-between"},[t("div",vs,[t("div",hs,[t("div",fs,[t("h5",ys,[P(b(o.attributes.title)+" ",1),t("a",{class:"text-decoration-none link-dark",href:o.attributes.url,target:"_blank",rel:"noopener noreferrer"},g[0]||(g[0]=[t("i",{class:"bi bi-arrow-up-right-circle"},null,-1)]),8,js)]),t("div",ws,[(r(!0),a(w,null,$(o.attributes.tags,y=>(r(),a("span",{key:v,class:"badge bg-dark jn-tags me-2"},b(y),1))),128))]),t("div",$s,[t("div",{innerHTML:o.html,class:"jn-card-text col-md-8 col-12 jn-Pricing-text"},null,8,ks),t("div",Ts,[t("div",Es,[t("img",{src:o.attributes.cover,class:"img-fluid",alt:o.attributes.title},null,8,Ps)])])])])])])]))),128))])):L("",!0)])]))}},Ls=T(Os,[["__scopeId","data-v-682c38ac"]]),xs={Title:"🚴‍♀️ 串门骑行打怪 🚴‍♂️",Subtitle:"共识：骑行友好，践行可持续低碳的生活方式，自由发起、文明发挥、尽情 riding ♾️"},Ms={class:"jn-footer mt-5 position-relative",id:"Footer"},Is={class:"jn-footer-placeholder"},As={__name:"Footer",setup(f){const u=M();I(()=>u.isMobile);const _=new Date().getFullYear();return(c,e)=>(r(),a("div",Ms,[t("div",Is,[P(b(h(xs).Title)+" © "+b(h(_))+" By  ",1),e[0]||(e[0]=t("a",{href:"https://pages.github.com/"},"GitHub Pages",-1)),e[1]||(e[1]=P("   &  ")),e[2]||(e[2]=t("a",{href:"https://github.com/jason5ng32/EasyHomePage"},"EasyHomePage",-1)),e[3]||(e[3]=P(". All Original under  ")),e[4]||(e[4]=t("a",{href:"https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh"},"CC BY-NC-ND 4.0",-1)),e[5]||(e[5]=P(". "))])]))}},Rs=T(As,[["__scopeId","data-v-564e62e0"]]),Ds={id:"main-part",class:"container mt-2 px-0"},Ss={"data-bs-spy":"scroll","data-bs-target":"#navbar-top","data-bs-root-margin":"0px 0px -40%","data-bs-smooth-scroll":"true",class:"rounded-2",tabindex:"0"},Hs={__name:"App",setup(f){const u=M(),_=I(()=>u.isMobile),c=(s,d=200,i,m=!1)=>{J().reveal(s,{delay:d,duration:1e3,origin:i,distance:"100px",reset:m})};return(()=>{let s=document.getElementById("jn-loading");s&&(s.style.display="none")})(),x(()=>{c(".jn-introduce-bg",200,"bottom",!1),c(".jn-introduce-title",600,"top",!1),c(".jn-introduce-subtitle",600,"left",!1),c(".jn-introduce-doc",1600,"bottom",!1),setTimeout(()=>{c(".conversation-right",200,"right",!1),c(".conversation-left",200,"left",!1),c(".jn-animate-card",200,"bottom",!1)},1e3)}),(s,d)=>(r(),a(w,null,[E(dt),t("div",Ds,[t("div",Ss,[E(vt),t("div",{class:k([_.value?"jn-items-full-width":"jn-items"])},[E(Ct),E(te),E(he),E(Ye),E(as),E(Ls)],2)]),E(Rs)])],64))}},Vs=T(Hs,[["__scopeId","data-v-09be0a06"]]),z=Y(Vs),N=K();z.use(N);const Cs=M(N),Bs=Z({app:"MyIP",plugins:[q({measurementIds:["XXX"]})]});Bs.page();function W(){Cs.setIsMobile(window.innerWidth<768)}W();window.addEventListener("resize",W);z.mount("#app");

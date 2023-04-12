(this.webpackJsonpmyportfolio=this.webpackJsonpmyportfolio||[]).push([[0],{31:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(11),s=a(5),c=a(2),i=a(1),o=Object(c.createContext)(),r=function(e){var t=e.children,a=Object(c.useState)("light"),n=Object(s.a)(a,2),r=n[0],l=n[1];Object(c.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");l(e.matches?"dark":"light"),e.addEventListener("change",(function(e){l(e.matches?"dark":"light")}))}),[]);return Object(i.jsx)(o.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),l(e)}}],children:t})},l=a.p+"static/media/oxygen-shop.88865fe8.png",j=a.p+"static/media/hotel-miranda.f7276df5.png",d=a.p+"static/media/dashboard-hotel.7a849b3e.png",b=a.p+"static/media/photo-snap.50eb073e.png",h=a.p+"static/media/backen.2964e5f1.png",m="https://aritos20.github.io/myPortfolio",p="AG.",u="Aristidis Gianicopulos",x="Desarrollador Web Full-Stack",O="Hola, soy Aristidis Gianicopulos, Desarrollador Web Full-Stack. Me considero una persona con ganas de nunca parar de aprender y adaptarme a distintos entornos para as\xed poder enriquecerme en todos los aspectos. Tambi\xe9n me gusta el trabajo en equipo y poder formar parte de grupos de trabajo para as\xed poder aportar mi peque\xf1o grano de arena y que los dem\xe1s me aporten a mi sus conocimientos",g="https://drive.google.com/file/d/1qAS-YuxxWIuD9llmMd1i00-Qw_dmU-XN/view?usp=share_link",f={linkedin:"https://www.linkedin.com/in/agianico/",github:"https://github.com/aritos20"},v=[{name:"Hotel Miranda Web Page",description:"P\xe1gina web de un hotel lujoso, es una MPA con distintos apartados y hecha por un dise\xf1o a partir de FIGMA",previewImg:j,stack:["HTML","CSS","SASS","JavaScript"],sourceCode:"https://github.com/aritos20/hotel-miranda-web-page",livePreview:"https://aritos20.github.io/hotel-miranda-web-page/"},{name:"Hotel Miranda Dashboard",description:"P\xe1gina para poder gestionar el Back Office de un hotel desde las reservas hasta los empleados.",stack:["React","Redux","Styled Components"],previewImg:d,sourceCode:"https://github.com/aritos20/hotel-miranda-dashboard",livePreview:"https://aritos20.github.io/hotel-miranda-dashboard/"},{name:"Hotel Miranda Backend",description:"Es una API REST hecha con Node y Express para poder gestionar todos los datos y hacer la conexi\xf3n con el Dashboard",stack:["TypeScript","Node","Express","Mongo","JWT"],previewImg:h,sourceCode:"https://github.com/aritos20/hotel-miranda-backend"},{name:"PhotoSnap",description:"Aplicaci\xf3n Web para buscar y descargar imagenes de Stock. las im\xe1genes que se obtienen provienen de Unsplash mediante su API",stack:["React","Redux","MUI"],previewImg:b,sourceCode:"https://github.com/aritos20/photo-snap",livePreview:"https://aritos20.github.io/photo-snap/"},{name:"Oxygen Shop",description:"Landing Page b\xe1sica hecha con HTML, CSS, SASS y JavaScript, es 100% responsive",stack:["HTML","CSS","SASS","JavaScript"],previewImg:l,sourceCode:"https://github.com/aritos20/photo-snap",livePreview:"https://aritos20.github.io/photo-snap/"}],k=["HTML","CSS","SASS","JavaScript","TypeScript","React","Redux","NodeJS","Express","MongoDB","MySql","Git","Jest","Figma"],S="agianicopulos@gmail.com",N=a(18),_=a.n(N),w=a(16),y=a.n(w),C=a(20),M=a.n(C),P=a(19),A=a.n(P),I=(a(31),function(){var e=Object(c.useContext)(o),t=Object(s.a)(e,1)[0],a=t.themeName,n=t.toggleTheme,r=Object(c.useState)(!1),l=Object(s.a)(r,2),j=l[0],d=l[1],b=function(){return d(!j)};return Object(i.jsxs)("nav",{className:"center nav",children:[Object(i.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[v.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#projects",onClick:b,className:"link link--nav",children:"Proyectos"})}):null,k.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#skills",onClick:b,className:"link link--nav",children:"Skills"})}):null,S?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#contact",onClick:b,className:"link link--nav",children:"Contacto"})}):null]}),Object(i.jsx)("button",{type:"button",onClick:n,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===a?Object(i.jsx)(y.a,{}):Object(i.jsx)(_.a,{})}),Object(i.jsx)("button",{type:"button",onClick:b,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(i.jsx)(A.a,{}):Object(i.jsx)(M.a,{})})]})}),T=(a(35),function(){var e=m,t=p;return Object(i.jsxs)("header",{className:"header center",children:[Object(i.jsx)("h3",{children:e?Object(i.jsx)("a",{href:e,className:"link",children:t}):t}),Object(i.jsx)(I,{})]})}),E=a(13),J=a.n(E),H=a(21),R=a.n(H),L=(a(36),a.p+"static/media/foto_perfil_42-removebg-preview.9b66d32d.png"),q=function(){var e=u,t=x,a=O,n=g,s=f;return Object(i.jsxs)("div",{className:"about center",children:[e&&Object(i.jsxs)("h1",{children:["Hola, soy ",Object(i.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(i.jsxs)("h2",{className:"about__role",children:[t,"."]}),Object(i.jsx)("img",{src:L,style:{borderRadius:"35%",width:"325px",height:"375px",marginTop:"24px"}}),Object(i.jsx)("p",{className:"about__desc",children:a&&a}),Object(i.jsxs)("div",{className:"about__contact center",children:[n&&Object(i.jsx)("a",{href:n,children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Ver mi CV"})}),s&&Object(i.jsxs)(i.Fragment,{children:[s.github&&Object(i.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(i.jsx)(J.a,{})}),s.linkedin&&Object(i.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(i.jsx)(R.a,{})})]})]})]})},D=a(9),G=a.n(D),B=a(22),F=a.n(B),W=(a(38),function(e){var t=e.project;return Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("img",{src:t.previewImg,style:{width:"300px",marginBottom:"16px"}}),Object(i.jsx)("h3",{children:t.name}),Object(i.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(i.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(i.jsx)("li",{className:"project__stack-item",children:e},G()())}))}),t.sourceCode&&Object(i.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(i.jsx)(J.a,{})}),t.livePreview&&Object(i.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(i.jsx)(F.a,{})})]})}),U=(a(39),function(){return v.length?Object(i.jsxs)("section",{id:"projects",className:"section projects",children:[Object(i.jsx)("h2",{className:"section__title",children:"Proyectos"}),Object(i.jsx)("div",{className:"projects__grid",children:v.map((function(e){return Object(i.jsx)(W,{project:e},G()())}))})]}):null}),V=(a(40),a(23)),Y=a(3),z=[{name:"HTML",icon:Object(i.jsx)(V.a,{})},{name:"CSS",icon:Object(i.jsx)(Y.a,{})},{name:"SASS",icon:Object(i.jsx)(Y.l,{})},{name:"JavaScript",icon:Object(i.jsx)(Y.e,{})},{name:"TypeScript",icon:Object(i.jsx)(Y.m,{})},{name:"React",icon:Object(i.jsx)(Y.j,{})},{name:"Redux",icon:Object(i.jsx)(Y.k,{})},{name:"NodeJS",icon:Object(i.jsx)(Y.i,{})},{name:"Express",icon:Object(i.jsx)(Y.b,{})},{name:"MongoDB",icon:Object(i.jsx)(Y.g,{})},{name:"MySql",icon:Object(i.jsx)(Y.h,{})},{name:"Git",icon:Object(i.jsx)(Y.d,{})},{name:"Jest",icon:Object(i.jsx)(Y.f,{})},{name:"Figma",icon:Object(i.jsx)(Y.c,{})}],Q=function(){return k.length?Object(i.jsxs)("section",{className:"section skills",id:"skills",children:[Object(i.jsx)("h2",{className:"section__title",children:"Skills"}),Object(i.jsx)("ul",{className:"skills__list",children:z.map((function(e){return Object(i.jsxs)("li",{className:"skills__list-item btn btn--plain",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.icon,e.name]},G()())}))})]}):null},X=a(24),K=a.n(X),Z=(a(41),function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){var e=function(){return window.pageYOffset>500?n(!0):n(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),a?Object(i.jsx)("div",{className:"scroll-top",children:Object(i.jsx)("a",{href:"#top",children:Object(i.jsx)(K.a,{fontSize:"large"})})}):null}),$=(a(42),function(){return S?Object(i.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(i.jsx)("h2",{className:"section__title",children:"Contacto"}),Object(i.jsx)("a",{href:"mailto:".concat(S),children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Escr\xedbeme un mail"})})]}):null}),ee=(a(43),function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("a",{href:"https://github.com/aritos20",className:"link footer__link",children:"Aristidis Gianicopulos"})})}),te=(a(44),function(){var e=Object(c.useContext)(o),t=Object(s.a)(e,1)[0].themeName;return Object(i.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(i.jsx)(T,{}),Object(i.jsxs)("main",{children:[Object(i.jsx)(q,{}),Object(i.jsx)(U,{}),Object(i.jsx)(Q,{}),Object(i.jsx)($,{})]}),Object(i.jsx)(Z,{}),Object(i.jsx)(ee,{})]})});a(45);Object(n.render)(Object(i.jsx)(r,{children:Object(i.jsx)(te,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.43f296f0.chunk.js.map
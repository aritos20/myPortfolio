(this.webpackJsonpmyportfolio=this.webpackJsonpmyportfolio||[]).push([[0],{28:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var s=a(9),n=a(3),c=a(1),i=a(0),o=Object(c.createContext)(),r=function(e){var t=e.children,a=Object(c.useState)("light"),s=Object(n.a)(a,2),r=s[0],l=s[1];Object(c.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");l(e.matches?"dark":"light"),e.addEventListener("change",(function(e){l(e.matches?"dark":"light")}))}),[]);return Object(i.jsx)(o.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),l(e)}}],children:t})},l="https://aritos20.github.io/myPortfolio",d="AG.",j="Aristidis Gianicopulos",h="Desarrollador Web Full-Stack",b="Hola, soy Aristidis Gianicopulos, Desarrollador Web Full-Stack. Me considero una persona con ganas de nunca parar de aprender y adaptarme a distintos entornos para as\xed poder enriquecerme en todos los aspectos. Tambi\xe9n me gusta el trabajo en equipo y poder formar parte de grupos de trabajo para as\xed poder aportar mi peque\xf1o grano de arena y que los dem\xe1s me aporten a mi sus conocimientos",u="https://drive.google.com/file/d/1oVrLl7XtWjf9swpFqFMcoi1sWIQbDrxA/view?usp=share_link",p={linkedin:"https://www.linkedin.com/in/agianico/",github:"https://github.com/aritos20"},m=[{name:"Hotel Miranda Web Page",description:"P\xe1gina web de un hotel lujoso, es una MPA con distintos apartados y hecha por un dise\xf1o a partir de FIGMA",stack:["HTML","CSS","SASS","JavaScript"],sourceCode:"https://github.com/aritos20/hotel-miranda-web-page",livePreview:"https://aritos20.github.io/hotel-miranda-web-page/"},{name:"Hotel Miranda Dashboard",description:"P\xe1gina para poder gestionar el Back Office de un hotel desde las reservas hasta los empleados.",stack:["React","Redux","Styled Components"],sourceCode:"https://github.com/aritos20/hotel-miranda-dashboard",livePreview:"https://aritos20.github.io/hotel-miranda-dashboard/"},{name:"Hotel Miranda Backend",description:"Es una API REST hecha con Node y Express para poder gestionar todos los datos y hacer la conexi\xf3n con el Dashboard",stack:["TypeScript","Node","Express","Mongo","JWT"],sourceCode:"https://github.com/aritos20/hotel-miranda-backend"},{name:"PhotoSnap",description:"Aplicaci\xf3n Web para buscar y descargar imagenes de Stock. las im\xe1genes que se obtienen provienen de Unsplash mediante su API",stack:["React","Redux","MUI"],sourceCode:"https://github.com/aritos20/photo-snap",livePreview:"https://aritos20.github.io/photo-snap/"},{name:"Oxygen Shop",description:"Landing Page b\xe1sica hecha con HTML, CSS, SASS y JavaScript, es 100% responsive",stack:["HTML","CSS","SASS","JavaScript"],sourceCode:"https://github.com/aritos20/photo-snap",livePreview:"https://aritos20.github.io/photo-snap/"}],O=["HTML","CSS","SASS","JavaScript","TypeScript","React","Redux","NodeJS","Express","MongoDB","MySql","Git","Jest","Figma"],x="agianicopulos@gmail.com",g=a(16),f=a.n(g),k=a(14),v=a.n(k),N=a(18),S=a.n(N),_=a(17),y=a.n(_),w=(a(28),function(){var e=Object(c.useContext)(o),t=Object(n.a)(e,1)[0],a=t.themeName,s=t.toggleTheme,r=Object(c.useState)(!1),l=Object(n.a)(r,2),d=l[0],j=l[1],h=function(){return j(!d)};return Object(i.jsxs)("nav",{className:"center nav",children:[Object(i.jsxs)("ul",{style:{display:d?"flex":null},className:"nav__list",children:[m.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#projects",onClick:h,className:"link link--nav",children:"Proyectos"})}):null,O.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#skills",onClick:h,className:"link link--nav",children:"Skills"})}):null,x?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#contact",onClick:h,className:"link link--nav",children:"Contacto"})}):null]}),Object(i.jsx)("button",{type:"button",onClick:s,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===a?Object(i.jsx)(v.a,{}):Object(i.jsx)(f.a,{})}),Object(i.jsx)("button",{type:"button",onClick:h,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:d?Object(i.jsx)(y.a,{}):Object(i.jsx)(S.a,{})})]})}),C=(a(32),function(){var e=l,t=d;return Object(i.jsxs)("header",{className:"header center",children:[Object(i.jsx)("h3",{children:e?Object(i.jsx)("a",{href:e,className:"link",children:t}):t}),Object(i.jsx)(w,{})]})}),P=a(11),M=a.n(P),A=a(19),E=a.n(A),T=(a(33),function(){var e=j,t=h,a=b,s=u,n=p;return Object(i.jsxs)("div",{className:"about center",children:[e&&Object(i.jsxs)("h1",{children:["Hola, soy ",Object(i.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(i.jsxs)("h2",{className:"about__role",children:[t,"."]}),Object(i.jsx)("p",{className:"about__desc",children:a&&a}),Object(i.jsxs)("div",{className:"about__contact center",children:[s&&Object(i.jsx)("a",{href:s,children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Ver mi CV"})}),n&&Object(i.jsxs)(i.Fragment,{children:[n.github&&Object(i.jsx)("a",{href:n.github,"aria-label":"github",className:"link link--icon",children:Object(i.jsx)(M.a,{})}),n.linkedin&&Object(i.jsx)("a",{href:n.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(i.jsx)(E.a,{})})]})]})]})}),H=a(7),J=a.n(H),L=a(20),q=a.n(L),F=(a(35),function(e){var t=e.project;return Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("h3",{children:t.name}),Object(i.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(i.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(i.jsx)("li",{className:"project__stack-item",children:e},J()())}))}),t.sourceCode&&Object(i.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(i.jsx)(M.a,{})}),t.livePreview&&Object(i.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(i.jsx)(q.a,{})})]})}),I=(a(36),function(){return m.length?Object(i.jsxs)("section",{id:"projects",className:"section projects",children:[Object(i.jsx)("h2",{className:"section__title",children:"Proyectos"}),Object(i.jsx)("div",{className:"projects__grid",children:m.map((function(e){return Object(i.jsx)(F,{project:e},J()())}))})]}):null}),R=(a(37),function(){return O.length?Object(i.jsxs)("section",{className:"section skills",id:"skills",children:[Object(i.jsx)("h2",{className:"section__title",children:"Skills"}),Object(i.jsx)("ul",{className:"skills__list",children:O.map((function(e){return Object(i.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},J()())}))})]}):null}),W=a(21),D=a.n(W),G=(a(38),function(){var e=Object(c.useState)(!1),t=Object(n.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){var e=function(){return window.pageYOffset>500?s(!0):s(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),a?Object(i.jsx)("div",{className:"scroll-top",children:Object(i.jsx)("a",{href:"#top",children:Object(i.jsx)(D.a,{fontSize:"large"})})}):null}),B=(a(39),function(){return x?Object(i.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(i.jsx)("h2",{className:"section__title",children:"Contacto"}),Object(i.jsx)("a",{href:"mailto:".concat(x),children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Escr\xedbeme un mail"})})]}):null}),V=(a(40),function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("a",{href:"https://github.com/aritos20",className:"link footer__link",children:"Aristidis Gianicopulos"})})}),U=(a(41),function(){var e=Object(c.useContext)(o),t=Object(n.a)(e,1)[0].themeName;return Object(i.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(i.jsx)(C,{}),Object(i.jsxs)("main",{children:[Object(i.jsx)(T,{}),Object(i.jsx)(I,{}),Object(i.jsx)(R,{}),Object(i.jsx)(B,{})]}),Object(i.jsx)(G,{}),Object(i.jsx)(V,{})]})});a(42);Object(s.render)(Object(i.jsx)(r,{children:Object(i.jsx)(U,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.03bdc810.chunk.js.map
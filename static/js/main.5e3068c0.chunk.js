(this["webpackJsonpreact-shopping-cart"]=this["webpackJsonpreact-shopping-cart"]||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},26:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(17),i=n.n(c),l=n(19),u=n(6),o=a.a.createContext();function s(e){var t=Object(r.useState)([]),n=Object(u.a)(t,2),c=n[0],i=n[1],s=Object(r.useState)([]),m=Object(u.a)(s,2),d=m[0],f=m[1];Object(r.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then((function(e){return e.json()})).then((function(e){return i(e)}))}),[]);return console.log(d),a.a.createElement(o.Provider,{value:{pictures:c,likePicture:function(e){i((function(t){return t.map((function(t){return t.id===e&&(t.isLiked=!t.isLiked,console.log(t)),t}))}))},addRemoveFromCart:function(e){e.addedToCart?(e.addedToCart=!1,f((function(t){return t.filter((function(t){return t.id!==e.id}))}))):f((function(t){return e.addedToCart=!0,[].concat(Object(l.a)(t),[e])}))},cartItems:d}},e.children)}n(25);var m=n(8),d=n(1);n(26);var f=function(){var e=Object(r.useContext)(o).cartItems.length>0?"ri-shopping-cart-fill":"ri-shopping-cart-line";return a.a.createElement("header",null,a.a.createElement(m.b,{to:"/"},a.a.createElement("h1",null,"Clorify")),a.a.createElement(m.b,{to:"/cart"},a.a.createElement("i",{className:"".concat(e," ri-fq ri-2x")})))};var p=function(){var e=Object(r.useState)(),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(r.useRef)(null),i=function(){return a(!0)},l=function(){return a(!1)};return Object(r.useEffect)((function(){return c.current.addEventListener("mouseenter",i),c.current.addEventListener("mouseleave",l),function(){c.current.removeEventListener("mouseenter",i),c.current.removeEventListener("mouseleave",l)}}),[]),[n,c]};var v=function(e){var t=e.cartItem,n=p(),c=Object(u.a)(n,2),i=c[0],l=c[1],s=Object(r.useContext)(o).addRemoveFromCart,m=i&&"ri-delete-bin-line";return a.a.createElement("div",{class:"cart-item-container",ref:l},a.a.createElement("div",{class:"position-relative"},a.a.createElement("img",{alt:t.id,src:t.thumbnailUrl}),a.a.createElement("i",{className:"".concat(m," delete-from-cart"),onClick:function(){return s(t)}})),a.a.createElement("span",null," Rs 2 "))};var E=function(){var e=Object(r.useContext)(o).cartItems,t=e.map((function(e){return a.a.createElement(v,{key:e.id,cartItem:e})}));return a.a.createElement("div",null,t,a.a.createElement("hr",null),a.a.createElement("div",null," Total : Rs ",2*e.length," "))};var h=function(e){var t=e.picture,n=Object(r.useState)(!1),c=Object(u.a)(n,2),i=c[0],l=c[1],s=Object(r.useContext)(o),m=s.likePicture,d=s.addRemoveFromCart,f=t.isLiked?"ri-heart-fill":"ri-heart-line",p=t.addedToCart?"ri-shopping-cart-fill":"ri-shopping-cart-line",v=i&&a.a.createElement("i",{className:"".concat(f," like"),onClick:function(){return m(t.id)}}),E=i&&a.a.createElement("i",{className:"".concat(p," cart"),onClick:function(){return d(t)}});return a.a.createElement("div",{className:"image-container position-relative",onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)}},a.a.createElement("img",{src:t.thumbnailUrl,alt:"empty space"}),v," ",E)};var b=function(){var e=Object(r.useContext)(o).pictures.map((function(e){return a.a.createElement(h,{key:e.id,picture:e})}));return a.a.createElement("div",{id:"pictures-list"},e)};function j(){return a.a.createElement("div",{className:"App"},a.a.createElement(f,null),a.a.createElement(d.c,null,a.a.createElement(d.a,{exact:!0,path:"/"},a.a.createElement(b,null)),a.a.createElement(d.a,{path:"/cart"},a.a.createElement(E,null))))}var O=document.getElementById("root");i.a.render(a.a.createElement(s,null,a.a.createElement(m.a,null,a.a.createElement(j,null))),O)}},[[20,1,2]]]);
//# sourceMappingURL=main.5e3068c0.chunk.js.map
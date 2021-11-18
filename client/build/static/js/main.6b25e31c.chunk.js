(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{117:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),l=a.n(c),o=(a(85),a(11)),i=a(13),s=a(19),u=a(78),m=a(9),d=a(7);function p(e,t,a){return new Promise((function(n,r){var c,l,o,i=window.indexedDB.open("SalonMe",1);i.onupgradeneeded=function(e){var t=i.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},i.onerror=function(e){console.log("There was an error")},i.onsuccess=function(r){switch(c=i.result,l=c.transaction(e,"readwrite"),o=l.objectStore(e),c.onerror=function(e){console.log("error",e)},t){case"put":o.put(a),n(a);break;case"get":var s=o.getAll();s.onsuccess=function(){n(s.result)};break;case"delete":o.delete(a._id);break;default:console.log("No valid method")}l.oncomplete=function(){c.close()}}}))}var h=a(79),E=a(27),g=function(e,t){switch(t.type){case"UPDATE_PRODUCTS":return Object(d.a)(Object(d.a)({},e),{},{products:Object(E.a)(t.products)});case"ADD_TO_CART":return Object(d.a)(Object(d.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(E.a)(e.cart),[t.product])});case"ADD_MULTIPLE_TO_CART":return Object(d.a)(Object(d.a)({},e),{},{cart:[].concat(Object(E.a)(e.cart),Object(E.a)(t.products))});case"UPDATE_CART_QUANTITY":return Object(d.a)(Object(d.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case"REMOVE_FROM_CART":var a=e.cart.filter((function(e){return e._id!==t._id}));return Object(d.a)(Object(d.a)({},e),{},{cartOpen:a.length>0,cart:a});case"CLEAR_CART":return Object(d.a)(Object(d.a)({},e),{},{cartOpen:!1,cart:[]});case"TOGGLE_CART":return Object(d.a)(Object(d.a)({},e),{},{cartOpen:!e.cartOpen});case"UPDATE_CATEGORIES":return Object(d.a)(Object(d.a)({},e),{},{categories:Object(E.a)(t.categories)});case"UPDATE_CURRENT_CATEGORY":return Object(d.a)(Object(d.a)({},e),{},{currentCategory:t.currentCategory});default:return e}};var f=["value"],b=Object(n.createContext)(),v=b.Provider,y=function(e){e.value;var t,a=Object(h.a)(e,f),c=(t={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(n.useReducer)(g,t)),l=Object(m.a)(c,2),o=l[0],i=l[1];return r.a.createElement(v,Object.assign({value:[o,i]},a))},O=function(){return Object(n.useContext)(b)};var j,w,N,_,k,T=function(e){var t=O(),a=Object(m.a)(t,2),n=a[0],c=a[1],l=e.image,i=e.name,s=e._id,u=e.price,h=e.quantity,E=n.cart;return r.a.createElement("div",{className:"card px-1 py-1"},r.a.createElement(o.b,{to:"/products/".concat(s)},r.a.createElement("img",{className:"dragon",alt:i,src:"/images/".concat(l)}),r.a.createElement("p",null,i)),r.a.createElement("div",null,r.a.createElement("div",null,h," ",function(e,t){return 1===t?e:e+"s"}("item",h)," in stock"),r.a.createElement("span",null,"$",u)),r.a.createElement("button",{onClick:function(){var t=E.find((function(e){return e._id===s}));t?(c({type:"UPDATE_CART_QUANTITY",_id:s,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),p("cart","put",Object(d.a)(Object(d.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(c({type:"ADD_TO_CART",product:Object(d.a)(Object(d.a)({},e),{},{purchaseQuantity:1})}),p("cart","put",Object(d.a)(Object(d.a)({},e),{},{purchaseQuantity:1})))}},"Add to cart"))},C=a(17),x=a(28),A=a(25),S=Object(A.a)(j||(j=Object(x.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),R=Object(A.a)(w||(w=Object(x.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),D=(Object(A.a)(N||(N=Object(x.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(A.a)(_||(_=Object(x.a)(["\n{\n  categories {\n    _id\n    name\n  }\n}\n"])))),P=Object(A.a)(k||(k=Object(x.a)(["\n{\n  user {\n    firstName\n    lastName\n    orders {\n      _id\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        image\n      }\n    }\n  }\n}\n"]))),U=a(46),$=a.n(U);var I=function(){var e=O(),t=Object(m.a)(e,2),a=t[0],c=t[1],l=a.currentCategory,o=Object(C.c)(S),i=o.loading,s=o.data;return Object(n.useEffect)((function(){s?(c({type:"UPDATE_PRODUCTS",products:s.products}),s.products.forEach((function(e){p("products","put",e)}))):i||p("products","get").then((function(e){c({type:"UPDATE_PRODUCTS",products:e})}))}),[s,i,c]),r.a.createElement("div",{className:"my-2"},r.a.createElement("div",{className:"products"},r.a.createElement("h2",null,"Our Products:")),a.products.length?r.a.createElement("div",{className:"flex-row"},(l?a.products.filter((function(e){return e.category._id===l})):a.products).map((function(e){return r.a.createElement(T,{key:e._id,_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity})}))):r.a.createElement("h3",null,"You haven't added any products yet!"),i?r.a.createElement("img",{src:$.a,alt:"loading"}):null)};var Q=function(){var e=O(),t=Object(m.a)(e,2),a=t[0],c=t[1],l=a.categories,o=Object(C.c)(D),i=o.loading,s=o.data;return Object(n.useEffect)((function(){s?(c({type:"UPDATE_CATEGORIES",categories:s.categories}),s.categories.forEach((function(e){p("categories","put",e)}))):i||p("categories","get").then((function(e){c({type:"UPDATE_CATEGORIES",categories:e})}))}),[s,i,c]),r.a.createElement("div",{className:"category-menu"},l.map((function(e){return r.a.createElement("button",{key:e._id,onClick:function(){var t;t=e._id,c({type:"UPDATE_CURRENT_CATEGORY",currentCategory:t})}},e.name)})))},F=a(24),L=a.n(F),M=a(31),W=a(71),B=function(e){var t=e.item,a=O(),n=Object(m.a)(a,2)[1];return r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",null,r.a.createElement("img",{src:"/images/".concat(t.image),alt:""})),r.a.createElement("div",null,r.a.createElement("div",null,t.name,", $",t.price),r.a.createElement("div",null,r.a.createElement("span",null,"Qty:"),r.a.createElement("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var a=e.target.value;"0"===a?(n({type:"REMOVE_FROM_CART",_id:t._id}),p("cart","delete",Object(d.a)({},t))):(n({type:"UPDATE_CART_QUANTITY",_id:t._id,purchaseQuantity:parseInt(a)}),p("cart","put",Object(d.a)(Object(d.a)({},t),{},{purchaseQuantity:parseInt(a)})))}}),r.a.createElement("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){n({type:"REMOVE_FROM_CART",_id:e._id}),p("cart","delete",Object(d.a)({},e))}(t)}},"\ud83d\uddd1\ufe0f"))))},G=a(72),q=a(73),H=a(53),Y=a.n(H),J=new(function(){function e(){Object(G.a)(this,e)}return Object(q.a)(e,[{key:"getProfile",value:function(){return Y()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return Y()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),K=(a(94),Object(W.a)("pk_test_TYooMQauvdEDq54NiTphI7jx")),V=function(){var e=O(),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(C.a)(R),o=Object(m.a)(l,2),i=o[0],s=o[1].data;function u(){c({type:"TOGGLE_CART"})}return Object(n.useEffect)((function(){s&&K.then((function(e){e.redirectToCheckout({sessionId:s.checkout.session})}))}),[s]),Object(n.useEffect)((function(){function e(){return(e=Object(M.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("cart","get");case 2:t=e.sent,c({type:"ADD_MULTIPLE_TO_CART",products:Object(E.a)(t)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.cart.length||function(){e.apply(this,arguments)}()}),[a.cart.length,c]),a.cartOpen?r.a.createElement("div",{className:"cart"},r.a.createElement("div",{className:"close",onClick:u},"Close X"),r.a.createElement("h2",null,"Shopping Cart"),a.cart.length?r.a.createElement("div",null,a.cart.map((function(e){return r.a.createElement(B,{key:e._id,item:e})})),r.a.createElement("div",{className:"flex-row space-between"},r.a.createElement("strong",null,"Total: $",function(){var e=0;return a.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()),J.loggedIn()?r.a.createElement("button",{onClick:function(){var e=[];a.cart.forEach((function(t){for(var a=0;a<t.purchaseQuantity;a++)e.push(t._id)})),i({variables:{products:e}})}},"Checkout"):r.a.createElement("span",null,"Log in to check out"))):r.a.createElement("h3",null,r.a.createElement("span",{role:"img","aria-label":"shocked"},"\ud83d\ude31"),"You haven't added anything to your cart yet!")):r.a.createElement("div",{className:"cart-closed",onClick:u},r.a.createElement("span",{role:"img","aria-label":"trash"},"\ud83d\uded2"))},z=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(Q,null),r.a.createElement(I,null),r.a.createElement(V,null))};var X=function(){var e=O(),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(i.f)().id,s=Object(n.useState)({}),u=Object(m.a)(s,2),h=u[0],E=u[1],g=Object(C.c)(S),f=g.loading,b=g.data,v=a.products,y=a.cart;return Object(n.useEffect)((function(){v.length?E(v.find((function(e){return e._id===l}))):b?(c({type:"UPDATE_PRODUCTS",products:b.products}),b.products.forEach((function(e){p("products","put",e)}))):f||p("products","get").then((function(e){c({type:"UPDATE_PRODUCTS",products:e})}))}),[v,b,f,c,l]),r.a.createElement(r.a.Fragment,null,h&&y?r.a.createElement("div",{className:"container my-1"},r.a.createElement(o.b,{to:"/"},"\u2190 Back to Products"),r.a.createElement("h2",null,h.name),r.a.createElement("p",null,h.description),r.a.createElement("p",null,r.a.createElement("strong",null,"Price:"),"$",h.price," ",r.a.createElement("button",{onClick:function(){var e=y.find((function(e){return e._id===l}));e?(c({type:"UPDATE_CART_QUANTITY",_id:l,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),p("cart","put",Object(d.a)(Object(d.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1}))):(c({type:"ADD_TO_CART",product:Object(d.a)(Object(d.a)({},h),{},{purchaseQuantity:1})}),p("cart","put",Object(d.a)(Object(d.a)({},h),{},{purchaseQuantity:1})))}},"Add to Cart"),r.a.createElement("button",{disabled:!y.find((function(e){return e._id===h._id})),onClick:function(){c({type:"REMOVE_FROM_CART",_id:h._id}),p("cart","delete",Object(d.a)({},h))}},"Remove from Cart")),r.a.createElement("img",{src:"/images/".concat(h.image),alt:h.name})):null,f?r.a.createElement("img",{src:$.a,alt:"loading"}):null,r.a.createElement(V,null))};var Z,ee,te,ae=function(e){var t=e.children;return r.a.createElement("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"}},t)},ne=function(){return r.a.createElement("div",null,r.a.createElement(ae,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))},re=a(35),ce=Object(A.a)(Z||(Z=Object(x.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),le=Object(A.a)(ee||(ee=Object(x.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      } \n      }\n    }\n  }\n"]))),oe=Object(A.a)(te||(te=Object(x.a)(["\n  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {\n    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])));var ie=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(m.a)(t,2),c=a[0],l=a[1],i=Object(C.b)(ce),s=Object(m.a)(i,2),u=s[0],p=s[1].error,h=function(){var e=Object(M.a)(L.a.mark((function e(t){var a,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,u({variables:{email:c.email,password:c.password}});case 4:a=e.sent,n=a.data.login.token,J.login(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.target,a=t.name,n=t.value;l(Object(d.a)(Object(d.a)({},c),{},Object(re.a)({},a,n)))};return r.a.createElement("div",{className:"container my-1 login"},r.a.createElement(o.b,{to:"/signup"},"\u2190 Go to Signup"),r.a.createElement("h2",null,"Login"),r.a.createElement("form",{className:"login-form",onSubmit:h},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:E})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:E})),p?r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},"The provided credentials are incorrect")):null,r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var se=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(m.a)(t,2),c=a[0],l=a[1],i=Object(C.b)(oe),s=Object(m.a)(i,1)[0],u=function(){var e=Object(M.a)(L.a.mark((function e(t){var a,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,s({variables:{email:c.email,password:c.password,firstName:c.firstName,lastName:c.lastName}});case 3:a=e.sent,n=a.data.addUser.token,J.login(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.target,a=t.name,n=t.value;l(Object(d.a)(Object(d.a)({},c),{},Object(re.a)({},a,n)))};return r.a.createElement("div",{className:"container my-1 signup"},r.a.createElement(o.b,{to:"/login"},"\u2190 Go to Login"),r.a.createElement("h2",null,"Sign Up:"),r.a.createElement("form",{className:"signup-form",onSubmit:u},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"firstName"},"First Name:"),r.a.createElement("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:p})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name:"),r.a.createElement("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:p})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:p})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:p})),r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var ue=function(){return r.a.createElement("header",{className:"flex-row px-1"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,r.a.createElement(o.b,{to:"/"},"SalonMe"))),r.a.createElement("div",{className:"nav"},r.a.createElement("nav",null,J.loggedIn()?r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(o.b,{to:"/orderHistory"},"Order History")),r.a.createElement("li",{className:"mx-1"},r.a.createElement("a",{href:"/",onClick:function(){return J.logout()}},"Logout")),r.a.createElement("li",{className:"mx-1"},r.a.createElement(o.b,{to:"/about"},"About")),r.a.createElement("li",{className:"mx-1"},r.a.createElement(o.b,{to:"/appointments"},"Appointments")),r.a.createElement("li",{className:"mx-1"},r.a.createElement(o.b,{to:"/gallery"},"Gallery"))):r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(o.b,{to:"/signup"},"Signup")),r.a.createElement("li",{className:"mx-1"},r.a.createElement(o.b,{to:"/login"},"Login")),r.a.createElement("li",{className:"mx-1"},r.a.createElement(o.b,{to:"/about"},"About")),r.a.createElement("li",{className:"mx-1"},r.a.createElement(o.b,{to:"/appointments"},"Appointments")),r.a.createElement("li",{className:"mx-1"},r.a.createElement(o.b,{to:"/gallery"},"Gallery"))))))};var me=function(){var e=Object(C.b)(le),t=Object(m.a)(e,1)[0];return Object(n.useEffect)((function(){function e(){return(e=Object(M.a)(L.a.mark((function e(){var a,n,r,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("cart","get");case 2:if(a=e.sent,!(n=a.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:n}});case 7:r=e.sent,c=r.data,c.addOrder.products.forEach((function(e){p("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),3e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),r.a.createElement("div",null,r.a.createElement(ae,null,r.a.createElement("h1",null,"Success!"),r.a.createElement("h2",null,"Thank you for your purchase!"),r.a.createElement("h2",null,"You will now be redirected to the home page")))};var de=function(){var e,t=Object(C.c)(P).data;return t&&(e=t.user),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container my-1"},r.a.createElement(o.b,{to:"/"},"\u2190 Back to Products"),e?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Order History for ",e.firstName," ",e.lastName),e.orders.map((function(e){return r.a.createElement("div",{key:e._id,className:"my-2"},r.a.createElement("h3",null,new Date(parseInt(e.purchaseDate)).toLocaleDateString()),r.a.createElement("div",{className:"flex-row"},e.products.map((function(e,t){var a=e._id,n=e.image,c=e.name,l=e.price;return r.a.createElement("div",{key:t,className:"card px-1 py-1"},r.a.createElement(o.b,{to:"/products/".concat(a)},r.a.createElement("img",{alt:c,src:"/images/".concat(n)}),r.a.createElement("p",null,c)),r.a.createElement("div",null,r.a.createElement("span",null,"$",l)))}))))}))):null))},pe=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"about-title"},"About Us"),r.a.createElement("p",{className:"about"},"We are a real salon that exists. We do lots of cool stuff to people's hair that looks good."),r.a.createElement("h3",{className:"stylist-title"},"Meet our Stylists:"),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"stylist"},r.a.createElement("h1",{className:"stylist-name"},"Jolisna Yuhashi"),r.a.createElement("img",{src:"/images/jolisna.jpg",alt:"Jolisna Yuhashi",width:"500",height:"600"}),r.a.createElement("p",null,'Jolisna is one of our best hair stylists, who specializes in styling hair. She holds a degree from Southeastern North Dakota Community Beauty College where she graduated top of her class and patented her famousand popular "Flock of Golden Eagles" hairstyle. She also enjoys going on walks with her dog, Chinese food, and plotting world domination with her spouse and children.'))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"stylist"},r.a.createElement("h1",{className:"stylist-name"},"Kylie Roesbery"),r.a.createElement("img",{src:"/images/kylie.jpg",alt:"Kylie Roesbery",width:"500",height:"600"}),r.a.createElement("p",null,"Before working at SalonMe, Kylie worked as a stylist on various movie sets, most notably Star Wars, Top Gun, October Sky, Interstellar, and even had a cameo in Boogie Nights. She has also worked as a stylist for various U.S. Presidents. She decided to step down from these more prominent roles because she thinks this salon and everyone else who works there is so awesome. The stocked fridge full of salami was also difficult to turn down."))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"stylist"},r.a.createElement("h1",{className:"stylist-name"},"Mary Doutis"),r.a.createElement("img",{src:"/images/mary.jpg",alt:"Mary Doutis",width:"500",height:"600"}),r.a.createElement("p",null,'When Mary isn\'t working hard in the salon, she can be found at home writing. She has published several books, such as "Hairstyling for Dummies," "Particle Physics for Dummies," "How to Successfully Pull Off the Shoelace-Tying Prank Without Being Noticed," and she is currently working on a spinoff series loosely based on Frank Herbert\'s "Dune." She excels at hair color, and encourages everyone to dye their hair purple, her favorite color.'))))},he=function(){return r.a.createElement("div",{className:"container gallery"},r.a.createElement("h2",{className:"gallery-title"},"Check out some of the work we've done!"),r.a.createElement("img",{src:"/images/color-image1.jpg",alt:"red color",width:"500",height:"600"}),r.a.createElement("img",{src:"/images/color-image2.jpg",alt:"red color 2",width:"500",height:"600"}),r.a.createElement("img",{src:"/images/color-image3.jpg",alt:"kid cut and style",width:"500",height:"600"}),r.a.createElement("img",{src:"/images/color-image4.jpg",alt:"Ombre",width:"500",height:"600"}),r.a.createElement("img",{src:"/images/color-image5.jpg",alt:"green and blue",width:"500",height:"600"}),r.a.createElement("img",{src:"/images/color-image6.jpg",alt:"pink orange and purple",width:"500",height:"600"}))},Ee=a(56),ge=a(54),fe=a.n(ge),be=(a(96),a(77)),ve=a.n(be),ye=(a(64),Object(Ee.b)(fe.a)),Oe=[{title:"Haircut",start:new Date(2021,10,15,9,0,0),end:new Date(2021,10,15,9,0,0)}];var je=function(){var e=Object(n.useState)({title:"",start:"",end:""}),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(Oe),o=Object(m.a)(l,2),i=o[0],s=o[1];return r.a.createElement("div",null,r.a.createElement("h2",{className:"appointment-scheduler"},"Schedule an Appointment"),r.a.createElement("div",{className:"appointment-scheduler"},r.a.createElement("form",{action:"/action_page.php"},r.a.createElement("label",{for:"salon"},"Choose a service:"),r.a.createElement("div",null,r.a.createElement("select",{defaultvalue:a.title,onChange:function(e){return c(Object(d.a)(Object(d.a)({},a),{},{title:e.target.value}))}},r.a.createElement("option",{value:""},"Cuts"),r.a.createElement("option",{value:"Men's"},"Men's $20"),r.a.createElement("option",{value:"Women's Short"},"Women's Short $30"),r.a.createElement("option",{value:"Women's Long"},"Women's Long $35"),r.a.createElement("option",{value:"Blow Out"},"Blow Out $25"),r.a.createElement("option",{value:"Kids"},"Kids $20"))),r.a.createElement("div",null,r.a.createElement("select",{defaultvalue:a.title,onChange:function(e){return c(Object(d.a)(Object(d.a)({},a),{},{title:e.target.value}))}},r.a.createElement("option",{value:""},"Colors"),r.a.createElement("option",{value:"Partial Highlight"},"Partial Highlight $70"),r.a.createElement("option",{value:"Root Re-Touch"},"Root Re-Touch $70"),r.a.createElement("option",{value:"All Over"},"All Over From $80 and Up"),r.a.createElement("option",{value:"Balyage"},"Balyage from $100 and Up"),r.a.createElement("option",{value:"Highlights"},"Highlights $120"),r.a.createElement("option",{value:"Additional Color"},"Additional Color $10 Each"),r.a.createElement("option",{value:"Color Correction"},"Color Correction Starts at $100"))),r.a.createElement("div",null,r.a.createElement("select",{defaultvalue:a.title,onChange:function(e){return c(Object(d.a)(Object(d.a)({},a),{},{title:e.target.value}))}},r.a.createElement("option",{value:""},"Facial Wax"),r.a.createElement("option",{value:"EyeBrows"},"EyeBrows $12"),r.a.createElement("option",{value:"Lip"},"Lip $12")))),r.a.createElement(ve.a,{placeholderText:"Start Date",style:{marginRight:"10px"},selected:a.start,onChange:function(e){return c(Object(d.a)(Object(d.a)({},a),{},{start:e}))},value:a.start,className:"date-time-picker"}),r.a.createElement("button",{className:"schedule-btn",style:{marginTop:"10px"},onClick:function(){s([].concat(Object(E.a)(i),[a]))}},"Schedule")),r.a.createElement(Ee.a,{localizer:ye,events:i,startAccessor:"start",endAccessor:function(e){return fe()(e.start).add(1,"h")._d},style:{height:500,margin:"50px"},defaultView:"week",className:"calendar"}))},we=new u.a({request:function(e){var t=localStorage.getItem("id_token");e.setContext({headers:{authorization:t?"Bearer ".concat(t):""}})},uri:"/graphql"});var Ne=function(){return r.a.createElement(s.a,{client:we},r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(y,null,r.a.createElement(ue,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:z}),r.a.createElement(i.a,{exact:!0,path:"/login",component:ie}),r.a.createElement(i.a,{exact:!0,path:"/signup",component:se}),r.a.createElement(i.a,{exact:!0,path:"/success",component:me}),r.a.createElement(i.a,{exact:!0,path:"/orderHistory",component:de}),r.a.createElement(i.a,{exact:!0,path:"/products/:id",component:X}),r.a.createElement(i.a,{exact:!0,path:"/About",component:pe}),r.a.createElement(i.a,{exact:!0,path:"/Appointments",component:je}),r.a.createElement(i.a,{exact:!0,path:"/Gallery",component:he}),r.a.createElement(i.a,{component:ne}))))))},_e=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ke(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ne,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");_e?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ke(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ke(t,e)}))}}()},46:function(e,t,a){e.exports=a.p+"static/media/spinner.ab497855.gif"},80:function(e,t,a){e.exports=a(117)},85:function(e,t,a){},94:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.6b25e31c.chunk.js.map
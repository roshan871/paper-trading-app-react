(this["webpackJsonppaper-trading-app"]=this["webpackJsonppaper-trading-app"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(18),i=n.n(a),s=(n(26),n(6)),o=n(4),l=n(8),h=n(7),u=(n(27),n(28),n(0)),j=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).handleSubmit=function(t){t.preventDefault();var n=document.querySelector("[name=coin]").value,c=Number.parseInt(document.querySelector("[name=quantity]").value);alert("".concat(n," ").concat(c)),fetch("https://i3g96.sse.codesandbox.io/coins/new",{method:"POST",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:n,quantity:c})}).then(e.props.refreshPage)},e}return Object(o.a)(n,[{key:"handleKeypress",value:function(e){var t=e.key;if("Backspace"!==t){var n=Number(t);if(0!==n){if(e.currentTarget.value&&e.currentTarget.value.length)return;0===n&&e.preventDefault()}else e.preventDefault()}}},{key:"renderOptions",value:function(){return Object.keys(this.props.coins).map((function(e){return Object(u.jsx)("option",{children:e},e)}))}},{key:"render",value:function(){var e=this;return Object(u.jsx)("div",{className:"transaction__form",children:Object(u.jsxs)("form",{action:"https://i3g96.sse.codesandbox.io/coins/new",method:"POST",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(u.jsxs)("table",{className:"transaction__input",children:[Object(u.jsxs)("label",{children:["Coin:",Object(u.jsx)("select",{name:"coin",children:this.renderOptions()})]}),Object(u.jsxs)("label",{children:["Quantity:",Object(u.jsx)("input",{type:"number",name:"quantity",placeholder:"Quantity",required:"required",onKeyDown:this.handleKeypress})]})]}),Object(u.jsxs)("div",{className:"transaction__button",children:[Object(u.jsx)("button",{type:"submit",className:"trade__button buy",onClick:this.props.handleSubmit,children:"Buy"}),Object(u.jsx)("button",{type:"submit",className:"trade__button sell",onClick:this.props.handleSubmit,children:"Sell"})]})]})})}}]),n}(c.Component),d=(n(30),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={balance:{}},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://i3g96.sse.codesandbox.io/balance").then((function(e){return e.json()})).then((function(t){e.setState({balance:t}),console.log("REMAING BALANCE",t)}))}},{key:"renderBalance",value:function(){return Object.values(this.state.balance).map((function(e){return Object(u.jsxs)("li",{children:[Object(u.jsxs)("h5",{children:["Welcome !",e.name]}),Object(u.jsxs)("h5",{children:["Remaining balance:  $",e.amount.toFixed()]})]},e.name.toString())}))}},{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsx)("ul",{children:this.renderBalance()})})}}]),n}(c.Component)),b=(n(31),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={history:[]},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://i3g96.sse.codesandbox.io/history").then((function(e){return e.json()})).then((function(t){e.setState({history:t})}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"history",children:[Object(u.jsx)("h1",{children:"History"}),Object(u.jsxs)("div",{className:"history__table__head",children:[Object(u.jsx)("h4",{children:"Name"}),Object(u.jsx)("h4",{children:"Unit price"}),Object(u.jsx)("h4",{children:"Date"})]}),Object(u.jsx)("div",{className:"history__table",children:this.state.history.map((function(e){e.id;var t=e.name,n=e.quantity,c=e.unit_price,r=e.date;return Object(u.jsxs)("tr",{children:[Object(u.jsxs)("td",{children:[" ",t.replace("-"," "),Object(u.jsx)("br",{}),n," ",1===n|n<1?"token":"tokens"]}),Object(u.jsxs)("td",{children:["$",Math.round(c).toFixed(2)]}),Object(u.jsx)("td",{children:new Date(r).toLocaleDateString()})]},r)}))})]})}}]),n}(c.Component)),p=(n(32),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={portfolio:[]},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://i3g96.sse.codesandbox.io/portfolio").then((function(e){return e.json()})).then((function(t){e.setState({portfolio:t}),console.log("pofolio",t)}))}},{key:"render",value:function(){var e=this.state.portfolio.map((function(e){var t=e.CoinBalance,n=e.name;return Object(u.jsxs)("tr",{id:"myList",children:[Object(u.jsxs)("td",{children:[" ",n.replace("-"," ")]}),Object(u.jsx)("td",{children:t})]},n)})),t=document.createElement("div"),n=document.createTextNode(e);return t.appendChild(n),Object(u.jsxs)("div",{className:"portfolio",children:[Object(u.jsx)("h1",{className:"portfolio__heading__one",children:"Portfolio"}),Object(u.jsxs)("div",{className:"portfolio__table__head",children:[Object(u.jsx)("h4",{children:"Name"}),Object(u.jsx)("h4",{children:"Quantity"})]}),Object(u.jsx)("div",{className:"portfolio__table",children:e})]})}}]),n}(c.Component)),O=n(52),f=n(55),m=(n(33),Object(O.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}}}})));function x(){var e=m();return Object(u.jsx)("div",{className:e.root,children:Object(u.jsx)(f.a,{alt:"Remy Sharp",src:"https://media-exp1.licdn.com/dms/image/C5603AQGlJfPN0Wu88w/profile-displayphoto-shrink_400_400/0/1627602129072?e=1635984000&v=beta&t=O99s6JoeCNEA6l7-azw37DO30e3WIWsfXJqstKlImvI"})})}var v=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={coins:{},cryptos:{}},e.refreshPage=function(){fetch("https://i3g96.sse.codesandbox.io/coins").then((function(e){return e.json()})).then((function(t){e.setState({cryptos:t})}))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://i3g96.sse.codesandbox.io/cryptos").then((function(e){return e.json()})).then((function(t){e.setState({coins:t})}))}},{key:"renderOptions",value:function(){return Object.keys(this.state.coins).map((function(e){return Object(u.jsx)("option",{value:e.toString(),children:e})}))}},{key:"render",value:function(){var e=Object.entries(this.state.coins).map((function(e){var t;return t="number"===typeof e[1]?e[1].toFixed(2):e[1].unit_price.toFixed(2),console.log(e,t),Object(u.jsx)("tbody",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e[0].replace(/-/," ")}),Object(u.jsxs)("td",{children:["$",t]})]})},e.toString())}));return Object(u.jsx)("div",{className:"app",children:Object(u.jsxs)("div",{className:"app__container",children:[Object(u.jsxs)("div",{className:"app__left",children:[Object(u.jsx)("h1",{className:"app__heading",children:"Paper Trading App"}),Object(u.jsx)(x,{}),Object(u.jsx)(d,{}),Object(u.jsx)("h2",{children:"Cryptocurrencies "}),Object(u.jsxs)("div",{className:"app__table__head",children:[Object(u.jsx)("h4",{children:"Name"}),Object(u.jsx)("h4",{children:"Unit price"})]}),Object(u.jsx)("table",{className:"app__table",children:e}),Object(u.jsx)(j,{refreshPage:this.refreshPage,coins:this.state.coins})]}),Object(u.jsxs)("div",{className:"app__right",children:[Object(u.jsx)(p,{}),Object(u.jsx)(b,{})]})]})})}}]),n}(c.Component);i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.8c79240c.chunk.js.map
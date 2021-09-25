(this["webpackJsonppaper-trading-app"]=this["webpackJsonppaper-trading-app"]||[]).push([[0],{32:function(t,e,n){},33:function(t,e,n){},34:function(t,e,n){},36:function(t,e,n){},37:function(t,e,n){},38:function(t,e,n){},39:function(t,e,n){},48:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),i=n(24),r=n.n(i),s=(n(32),n(7)),o=n(4),l=n(9),h=n(8),d=(n(33),n(12)),u=(n(34),n(1)),j={coin:"",quantity:null,quantityError:null},b=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state=j,t.handleChange=function(e){var n="checkbox"===e.target.type;t.setState(Object(d.a)({},e.target.name,n?e.target.checked:e.target.value))},t.validate=function(){var e="";return"0"===t.state.quantity&&"-0"===t.state.quantity&&(e="Zero is not a valid quantity to trade"),!e||(t.setState({quantityError:e}),!1)},t.handleTransaction=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"buy";e.preventDefault();var a=t.validate();if(a){var c=document.querySelector("[name=coin]").value,i=Number.parseFloat(document.querySelector("[name=quantity]").value);"sell"===n&&(i*=-1),alert("".concat(c," ").concat(i)),fetch("https://i3g96.sse.codesandbox.io/coins/new",{method:"POST",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:c,quantity:i})}).then((function(t){return t.json()})).then(t.props.refreshPage),t.setState(j)}},t}return Object(o.a)(n,[{key:"handleSubmit",value:function(t){t.preventDefault()}},{key:"renderOptions",value:function(){return Object.keys(this.props.coins).map((function(t){return Object(u.jsx)("option",{children:t},t)}))}},{key:"render",value:function(){var t=this;return Object(u.jsx)("div",{className:"transaction__form",children:Object(u.jsxs)("form",{action:"https://i3g96.sse.codesandbox.io/coins/new",method:"POST",onSubmit:function(e){return t.handleSubmit(e)},children:[Object(u.jsxs)("table",{className:"transaction__input",children:[Object(u.jsxs)("label",{children:["Coin:",Object(u.jsx)("select",{name:"coin",value:this.state.coin,onChange:this.handleChange,children:this.renderOptions()})]}),Object(u.jsxs)("label",{children:["Quantity:",Object(u.jsx)("input",{type:"number",name:"quantity",value:this.state.quantity,onChange:this.handleChange,placeholder:"Quantity",required:"required"})]}),Object(u.jsx)("div",{style:{fontSize:12,color:"red"},children:this.state.quantityError})]}),Object(u.jsxs)("div",{className:"transaction__button",children:[Object(u.jsx)("button",{type:"submit",onClick:function(e){return t.handleTransaction(e,"buy")},className:"trade__button buy",children:"Buy"}),Object(u.jsx)("button",{type:"submit",onClick:function(e){return t.handleTransaction(e,"sell")},className:"trade__button sell",children:"Sell"})]})]})})}}]),n}(a.Component),p=(n(36),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={balance:{}},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://i3g96.sse.codesandbox.io/balance").then((function(t){return t.json()})).then((function(e){t.setState({balance:e})}))}},{key:"renderBalance",value:function(){return Object.values(this.state.balance).map((function(t){return Object(u.jsxs)("li",{children:[Object(u.jsxs)("h5",{children:["Welcome !",t.name]}),Object(u.jsxs)("h5",{children:["Remaining balance:  $",t.amount.toFixed()]})]},t.name.toString())}))}},{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsx)("ul",{children:this.renderBalance()})})}}]),n}(a.Component)),f=(n(37),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.loadHistory()}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"history",children:[Object(u.jsx)("h1",{children:"History"}),Object(u.jsx)("div",{className:"table-container",children:Object(u.jsxs)("table",{className:"history__table",children:[Object(u.jsxs)("tr",{className:"history__table__head",children:[Object(u.jsx)("th",{children:"Name"}),Object(u.jsx)("th",{children:"Unit price"}),Object(u.jsx)("th",{children:"Date"})]}),this.props.history.map((function(t){t.id;var e=t.name,n=t.quantity,a=t.unit_price,c=t.date;return Object(u.jsxs)("tr",{children:[Object(u.jsxs)("td",{children:[" ",e.replace("-"," "),Object(u.jsx)("br",{}),n," ",1===n|n<1?"token":"tokens"]}),Object(u.jsxs)("td",{children:["$",Number(a).toFixed(2)]}),Object(u.jsx)("td",{children:new Date(c).toLocaleDateString()})]},c)}))]})})]})}}]),n}(a.Component)),O=(n(38),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.loadPortfolio()}},{key:"render",value:function(){var t=this.props.portfolio.filter((function(t){return 0!==t.CoinBalance})).map((function(t){var e=t.CoinBalance,n=t.name;return Object(u.jsxs)("tr",{id:"myList",children:[Object(u.jsxs)("td",{children:[" ",n.replace("-"," ")]}),Object(u.jsx)("td",{children:e})]},n)}));return Object(u.jsxs)("div",{className:"portfolio",children:[Object(u.jsx)("h1",{className:"portfolio__heading__one",children:"Portfolio"}),Object(u.jsx)("div",{className:"portfolio__container",children:Object(u.jsxs)("table",{className:"portfolio__table",children:[Object(u.jsxs)("tr",{className:"portfolio__table__head",children:[Object(u.jsx)("th",{children:"Name"}),Object(u.jsx)("th",{children:"Quantity"})]}),t]})})]})}}]),n}(a.Component)),m=n(62),x=n(65),y=(n(39),Object(m.a)((function(t){return{root:{display:"flex","& > *":{margin:t.spacing(1)}}}})));function v(){var t=y();return Object(u.jsx)("div",{className:t.root,children:Object(u.jsx)(x.a,{src:"https://media-exp1.licdn.com/dms/image/C5603AQGlJfPN0Wu88w/profile-displayphoto-shrink_400_400/0/1627602129072?e=1635984000&v=beta&t=O99s6JoeCNEA6l7-azw37DO30e3WIWsfXJqstKlImvI",alt:"Remy Sharp"})})}var _=n(23),g=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={coins:{},history:[],portfolio:[]},t.loadPortfolio=function(){fetch("https://i3g96.sse.codesandbox.io/portfolio").then((function(t){return t.json()})).then((function(e){t.setState({portfolio:e})}))},t.loadHistory=function(){fetch("https://i3g96.sse.codesandbox.io/history").then((function(t){return t.json()})).then((function(e){t.setState({history:e})}))},t.refreshPage=function(){t.loadPortfolio(),t.loadHistory(),fetch("https://i3g96.sse.codesandbox.io/cryptos").then((function(t){return t.json()})).then((function(e){t.setState({coins:e})}))},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://i3g96.sse.codesandbox.io/cryptos").then((function(t){return t.json()})).then((function(e){t.setState({coins:e})}))}},{key:"renderOptions",value:function(){return Object.keys(this.state.coins).map((function(t){return Object(u.jsx)("option",{value:t,children:t},t)}))}},{key:"render",value:function(){var t=Object.entries(this.state.coins).map((function(t){var e;return e="number"===typeof t[1]?t[1]:t[1].unit_price,console.log(t,e),Object(u.jsx)("tbody",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t[0].replace(/-/," ")}),Object(u.jsxs)("td",{children:["$",e]})]})},t.toString())}));return Object(u.jsx)("div",{className:"app",children:Object(u.jsxs)("div",{className:"app__container",children:[Object(u.jsxs)("div",{className:"app__left",children:[Object(u.jsxs)("h1",{className:"app__heading",children:["Paper ",Object(u.jsx)("span",{className:"trading",children:"Trading"})," App"]}),Object(u.jsx)("p",{className:"note",children:"\u26a0\ufe0f Temporarily the server side code is in codesandbox.So we need to run the sever side code first to get fully loaded application"}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(p,{}),Object(u.jsx)(_.a,{children:Object(u.jsx)(_.b,{target:"_blank",to:{pathname:"https://codesandbox.io/s/zen-hamilton-i3g96?file=/src/index.js"},children:Object(u.jsx)("button",{className:"server__button",children:"Run Server"})})})]}),Object(u.jsx)(v,{}),Object(u.jsx)("h2",{children:"Cryptocurrencies "}),Object(u.jsxs)("table",{className:"app__table",children:[Object(u.jsxs)("tr",{className:"app__table__head",children:[Object(u.jsx)("th",{children:"Name"}),Object(u.jsx)("th",{children:"Quantity"})]}),t]}),Object(u.jsx)(b,{refreshPage:this.refreshPage,coins:this.state.coins})]}),Object(u.jsxs)("div",{className:"app__right",children:[Object(u.jsx)(O,{portfolio:this.state.portfolio,loadPortfolio:this.loadPortfolio}),Object(u.jsx)(f,{history:this.state.history,loadHistory:this.loadHistory})]})]})})}}]),n}(a.Component);r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.9175d34a.chunk.js.map
(this.webpackJsonpgoodie=this.webpackJsonpgoodie||[]).push([[4],{83:function(e,t,a){"use strict";a.r(t);var r=a(36),c=a(11),n=a(12),o=a(14),s=a(13),l=a(0),i=a.n(l),d=a(15),u=a.n(d),p=a(34),h=a(37),m=a(17),b=a(35),f=a(5),v="ed17032dee115bf17bfeb5bb5aea6381",E=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={recipes:null,query:"",loader:!1,redirect:!1,error:!1},e.searchHandler=function(t){e.setState({query:t});var a=t.toLowerCase();""!==a&&(e.setState({loader:!0}),u.a.get("https://api.edamam.com/search?q=".concat(a,"&app_id=").concat("da74e8ed","&app_key=").concat(v,"&from=0&to=30")).then((function(t){var a=t.data.hits.map((function(e,t){return Object(r.a)({},e,{price:Math.floor(10*Math.random())+10,addToCart:!1})}));e.setState({recipes:a,loader:!1})})).catch((function(t){e.setState({error:!0,loader:!1})})))},e}return Object(n.a)(a,[{key:"render",value:function(){var e=null,t=this.state.loader?i.a.createElement(m.a,null):null;return this.state.recipes&&(e=i.a.createElement(h.a,{recipes:this.state.recipes})),this.state.error&&(e=i.a.createElement("p",{className:"text-center"},"!Recipes Not Found")),i.a.createElement(f.a,null,i.a.createElement("div",{className:"d-block mb-3"},i.a.createElement(p.a,{clicked:this.searchHandler}),t,e),i.a.createElement(b.a,null))}}]),a}(l.Component);t.default=E}}]);
//# sourceMappingURL=4.21b21e0d.chunk.js.map
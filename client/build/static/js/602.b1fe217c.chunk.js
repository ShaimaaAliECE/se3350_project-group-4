"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[602],{6602:function(e,s,a){a.r(s),a.d(s,{default:function(){return D}});var n=a(2982),t=a(885),i=a(2791),l=a(5671),r=a(3144),c=a(136),o=a(4062),d=a(1523),h=a(1626),m=a(184),u=function(e){(0,c.Z)(a,e);var s=(0,o.Z)(a);function a(){var e;(0,l.Z)(this,a);for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];return(e=s.call.apply(s,[this].concat(t))).state={searchText:""},e.handleChange=function(s){var a=s.target.value;e.setState({searchText:a}),e.props.search(a)},e.clearSearchText=function(){e.setState({searchText:""}),e.props.search("")},e}return(0,r.Z)(a,[{key:"render",value:function(){return(0,m.jsxs)("div",{className:"tool-box mb-3",children:[(0,m.jsxs)("div",{className:"logo-text",children:[(0,m.jsx)("i",{className:"fas fa-chart-bar"})," Analytics"]}),(0,m.jsx)(h.f,{animationIn:"bounceInDown",animationOut:"bounce",isVisible:!0,children:(0,m.jsx)("div",{className:"search-box",children:(0,m.jsxs)("div",{className:"field has-addons",children:[(0,m.jsx)("div",{className:"control",children:(0,m.jsx)("input",{type:"text",className:"input search-input",placeholder:"Search for a user by their username..",value:this.state.searchText,onChange:this.handleChange})}),(0,m.jsx)("div",{className:"control",children:(0,m.jsx)("button",{className:"button is-danger",onClick:this.clearSearchText,children:(0,m.jsx)("i",{className:"fas fa-eraser"})})})]})})}),(0,m.jsx)("div",{children:(0,m.jsx)("div",{className:"button is-primary is-outlined hvr-grow ",onClick:this.props.handleShowChart,children:!0===this.props.showChart?(0,m.jsxs)("div",{children:[(0,m.jsx)("span",{className:"icon is-small",children:(0,m.jsx)("i",{className:"fa-solid fa-eye"})}),(0,m.jsx)("strong",{children:"Chart: Visible"})]}):(0,m.jsxs)("div",{children:[(0,m.jsx)("span",{className:"icon is-small",children:(0,m.jsx)("i",{className:"fa-solid fa-eye-slash"})}),(0,m.jsx)("strong",{children:"Chart: Hidden"})]})})}),(0,m.jsxs)("div",{className:"dropdown is-hoverable ",children:[(0,m.jsx)("div",{className:"dropdown-trigger",children:(0,m.jsxs)("button",{className:"button is-outlined is-primary","aria-haspopup":"true","aria-controls":"dropdown-menu",children:[(0,m.jsx)("strong",{children:"Sort By"}),(0,m.jsx)("span",{className:"icon is-small",children:(0,m.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),(0,m.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu4",role:"menu",children:(0,m.jsxs)("div",{className:"dropdown-content",children:[(0,m.jsx)("button",{className:"dropdown-item button",onClick:this.props.sortName,children:(0,m.jsxs)("p",{className:"label",children:["Username ( a ","--\x3e"," z )"]})}),(0,m.jsx)("button",{className:"dropdown-item button",onClick:this.props.sortTime,children:(0,m.jsxs)("p",{className:"label",children:["Time ( fast ","--\x3e"," slow )"]})}),(0,m.jsx)("button",{className:"dropdown-item button",onClick:this.props.sortAccuracy,children:(0,m.jsxs)("p",{className:"label",children:["Accuracy ( high ","--\x3e"," low )"]})}),(0,m.jsx)("button",{className:"dropdown-item button",onClick:this.props.sortDate,children:(0,m.jsxs)("p",{className:"label",children:["Date ( new ","--\x3e"," old )"]})})]})})]}),(0,m.jsxs)(d.rU,{to:"/ms/edit",className:"quit-box hvr-skew-forward",children:[(0,m.jsx)("span",{className:"cart-num",children:"Back"}),(0,m.jsx)("i",{className:"fas fa-sign-out-alt"})]})]})}}]),a}(i.Component),x=u;function v(e){return e.toString().padStart(2,"0")}var j=function(e){var s=Math.floor(e/1e3),a=Math.floor(s/60),n=Math.floor(a/60);return s%=60,a%=60,"".concat(v(n%=24),":").concat(v(a),":").concat(v(s))},p=function(e){return 0===e||"0"===e?0:1===e||"1"===e?33:2===e||"2"===e?66:3===e||"3"===e?100:void 0},f=function(e){var s=e.item||{},a=s.id,n=s.time,t=s.accuracy,i=s.username,l=s.complete_date;return(0,m.jsxs)("div",{className:"columns is-vcentered item-wrapper has-text-centered",children:[(0,m.jsx)("div",{className:"column",children:(0,m.jsx)("span",{className:"rank",children:a})}),(0,m.jsx)("div",{className:"column a-item-name",children:i}),(0,m.jsx)("div",{className:"column",children:(0,m.jsx)("span",{className:"a-item-time",children:j(n)})}),(0,m.jsx)("div",{className:"column",children:(0,m.jsxs)("span",{className:"a-item-time",children:[p(t),"%"]})}),(0,m.jsx)("div",{className:"column",children:(0,m.jsx)("span",{className:"a-item-date",children:l})})]})},N=a(802),b=a(9295),y=a(577),g=a(9731),w=a(9913),C=a(5163),k=a(466),Z=a(2891),S=a(2839),A=a(5201),T=a(2955),D=function(){var e=(0,i.useState)([]),s=(0,t.Z)(e,2),a=s[0],l=s[1],r=(0,i.useState)(0),c=(0,t.Z)(r,2),o=c[0],d=c[1],u=(0,i.useState)(0),v=(0,t.Z)(u,2),D=v[0],O=v[1],I=(0,i.useState)([]),L=(0,t.Z)(I,2),z=L[0],K=L[1],M=(0,i.useState)(!1),U=(0,t.Z)(M,2),B=U[0],V=U[1],_=function(){return(0,m.jsx)(h.f,{animationIn:"fadeInLeft",animationOut:"rubberBand",isVisible:!0,children:(0,m.jsxs)("div",{className:"recharts-wrapper",children:[(0,m.jsx)(w.h,{width:"50%",height:250,className:"hvr-grow",children:(0,m.jsxs)(C.T,{data:F,margin:{top:20,right:20,left:5,bottom:20},children:[(0,m.jsx)("defs",{children:(0,m.jsxs)("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,m.jsx)("stop",{offset:"5%",stopColor:"rgb(64, 223, 159)",stopOpacity:.8}),(0,m.jsx)("stop",{offset:"95%",stopColor:"rgb(64, 223, 159)",stopOpacity:0})]})}),(0,m.jsx)(k.K,{dataKey:"username"}),(0,m.jsx)(Z.B,{}),(0,m.jsx)(S.q,{strokeDasharray:"3 3"}),(0,m.jsx)(A.u,{}),(0,m.jsx)(T.u,{type:"monotone",dataKey:"accuracy",stroke:"rgb(64, 223, 159)",fillOpacity:1,fill:"url(#colorUv)"})]})}),(0,m.jsx)(w.h,{width:"50%",height:250,className:"hvr-grow",children:(0,m.jsxs)(C.T,{data:F,margin:{top:20,right:5,left:20,bottom:20},children:[(0,m.jsx)("defs",{children:(0,m.jsxs)("linearGradient",{id:"colorPv",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,m.jsx)("stop",{offset:"5%",stopColor:"rgb(194, 79, 79)",stopOpacity:.8}),(0,m.jsx)("stop",{offset:"95%",stopColor:"rgb(194, 79, 79)",stopOpacity:0})]})}),(0,m.jsx)(k.K,{dataKey:"username"}),(0,m.jsx)(Z.B,{}),(0,m.jsx)(S.q,{strokeDasharray:"3 3"}),(0,m.jsx)(A.u,{}),(0,m.jsx)(T.u,{type:"monotone",dataKey:"time",stroke:"rgb(194, 79, 79)",fillOpacity:1,fill:"url(#colorPv)"})]})})]})})},q=function(e){"level1"===e?g.Z.get("/level1").then((function(e){l(e.data),K(e.data),d(1),O(e.data.length)})):"level2"===e?g.Z.get("/level2").then((function(e){l(e.data),K(e.data),d(2),O(e.data.length)})):"level3"===e?g.Z.get("/level3").then((function(e){l(e.data),K(e.data),d(3),O(e.data.length)})):"level4"===e?g.Z.get("/level4").then((function(e){l(e.data),K(e.data),d(4),O(e.data.length)})):"level5"===e?g.Z.get("/level5").then((function(e){l(e.data),K(e.data),d(5),O(e.data.length)})):"custom"===e&&g.Z.get("/custom").then((function(e){l(e.data),K(e.data),d("Custom"),O(e.data.length)}))},F=(0,n.Z)(a);return(0,m.jsxs)("div",{children:[(0,m.jsx)(x,{search:function(e){var s=(0,n.Z)(z);s=s.filter((function(s){return!!s.username.match(new RegExp(e,"gi"))})),l(s)},sortTime:function(){var e=(0,n.Z)(z);e=e.sort((function(e,s){return e.time<s.time?-1:e.time>s.time?1:0})),l(e),y.Am.success("Data is now sorted by time")},sortAccuracy:function(){var e=(0,n.Z)(z);e=e.sort((function(e,s){return e.accuracy<s.accuracy?1:e.accuracy>s.accuracy?-1:0})),l(e),y.Am.success("Data is now sorted by accuracy")},sortName:function(){var e=(0,n.Z)(z);e=e.sort((function(e,s){return e.username<s.username?-1:e.username>s.username?1:0})),l(e),y.Am.success("Data is now sorted by username")},sortDate:function(){var e=(0,n.Z)(z);e=e.sort((function(e,s){return e.complete_date<s.complete_date?1:e.complete_date>s.complete_date?-1:0})),l(e),y.Am.success("Data is now sorted by date")},showChart:B,handleShowChart:function(){V(!0!==B)}}),(0,m.jsxs)("div",{className:"analytics-wrapper",children:[(0,m.jsx)(h.f,{animationIn:"flipInX",animationOut:"bounce",isVisible:!0,children:(0,m.jsx)("div",{className:"level-container",children:(0,m.jsxs)("div",{className:"columns",children:[(0,m.jsx)("div",{className:"column is-2",children:(0,m.jsx)("div",{className:"level-btn button is-primary is-outlined hvr-underline-from-left",onClick:function(){return q("level1")},children:"Level 1"})}),(0,m.jsx)("div",{className:"column is-2",children:(0,m.jsx)("div",{className:"level-btn  button is-primary is-outlined hvr-underline-from-left",onClick:function(){return q("level2")},children:"Level 2"})}),(0,m.jsx)("div",{className:"column is-2",children:(0,m.jsx)("div",{className:"level-btn button is-primary is-outlined hvr-underline-from-left",onClick:function(){return q("level3")},children:"Level 3"})}),(0,m.jsx)("div",{className:"column is-2",children:(0,m.jsx)("div",{className:"level-btn button is-primary is-outlined hvr-underline-from-left",onClick:function(){return q("level4")},children:"Level 4"})}),(0,m.jsx)("div",{className:"column is-2",children:(0,m.jsx)("div",{className:"level-btn button is-primary is-outlined hvr-underline-from-left",onClick:function(){return q("level5")},children:"Level 5"})}),(0,m.jsx)("div",{className:"column is-2",children:(0,m.jsx)("div",{className:"level-btn  button is-primary is-outlined hvr-underline-from-left",onClick:function(){return q("custom")},children:"Custom"})})]})})}),(0,m.jsxs)("nav",{className:"level mt-5 has-text-light",children:[(0,m.jsx)("div",{className:"level-item has-text-centered",children:(0,m.jsxs)("div",{className:"hvr-wobble-horizontal",children:[(0,m.jsx)("p",{className:"heading",children:"Level"}),(0,m.jsx)("p",{className:"title a-stat ",children:o})]})}),(0,m.jsx)("div",{className:"level-item has-text-centered",children:(0,m.jsxs)("div",{className:"hvr-wobble-horizontal",children:[(0,m.jsx)("p",{className:"heading",children:"Total Entry"}),(0,m.jsx)("p",{className:"title a-stat",children:D})]})}),(0,m.jsx)("div",{className:"level-item has-text-centered",children:(0,m.jsxs)("div",{className:"hvr-wobble-horizontal",children:[(0,m.jsx)("p",{className:"heading",children:"Fastest Time"}),(0,m.jsx)("p",{className:"title a-stat",children:function(){var e=a.map((function(e){return e.time})),s=Math.min.apply(null,e);return j(s)}()})]})}),(0,m.jsx)("div",{className:"level-item has-text-centered",children:(0,m.jsxs)("div",{className:"hvr-wobble-horizontal",children:[(0,m.jsx)("p",{className:"heading",children:"Average Accuracy"}),(0,m.jsxs)("p",{className:"title a-stat",children:[parseFloat(a.map((function(e){return p(e.accuracy)})).reduce((function(e,s){return e+s}),0)/D).toFixed(2),"%"]})]})})]}),B?(0,m.jsx)(_,{}):null,(0,m.jsx)(h.f,{animationIn:"fadeInRight",animationOut:"bounce",isVisible:!0,children:(0,m.jsxs)("div",{className:"items-list mt-4",children:[(0,m.jsxs)("div",{className:"columns is-vcentered has-text-dark has-background-primary has-text-centered",children:[(0,m.jsx)("div",{className:"column",children:(0,m.jsx)("strong",{children:"ID"})}),(0,m.jsx)("div",{className:"column",children:(0,m.jsx)("strong",{children:"Username"})}),(0,m.jsx)("div",{className:"column",children:(0,m.jsx)("strong",{children:"HH:MM:SS"})}),(0,m.jsx)("div",{className:"column",children:(0,m.jsx)("strong",{children:"Accuracy"})}),(0,m.jsx)("div",{className:"column",children:(0,m.jsx)("strong",{children:"Activity Date"})})]}),(0,m.jsx)(N.Z,{component:null,children:a.map((function(e){return(0,m.jsx)(b.Z,{classNames:"analytics-fade",timeout:300,children:(0,m.jsx)(f,{item:e},e.id)},e.id)}))})]})})]})]})}},9731:function(e,s,a){var n,t=a(4569),i=a.n(t);s.Z=i().create({baseURL:n||"https://server-nnvlywaty-zhenxiao-yu.vercel.app/",timeout:1500})}}]);
//# sourceMappingURL=602.b1fe217c.chunk.js.map
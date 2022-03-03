"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[881],{227:function(e,s,a){var n=a(1413),l=a(5671),t=a(3144),i=a(136),c=a(4062),r=a(2791),o=a(4164),d=a(184),u=function(e){(0,i.Z)(a,e);var s=(0,c.Z)(a);function a(){var e;(0,l.Z)(this,a);for(var t=arguments.length,i=new Array(t),c=0;c<t;c++)i[c]=arguments[c];return(e=s.call.apply(s,[this].concat(i))).state={active:!1,component:null,callback:function(){}},e.open=function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{props:{},component:null,callback:function(){}},a=s.props,l=s.component,t=s.callback,i=(new Date).getTime(),c=r.createElement(l,(0,n.Z)((0,n.Z)({},a),{},{close:e.close,restart:e.restart,key:i}));e.setState({active:!0,component:c,callback:t})},e.close=function(s){e.setState({active:!1}),e.state.callback(s)},e.restart=function(){window.location.reload(!1)},e}return(0,t.Z)(a,[{key:"render",value:function(){var e=this;return(0,d.jsxs)("div",{className:{true:"panel-wrapper active",false:"panel-wrapper"}[this.state.active],children:[(0,d.jsx)("div",{className:"over-layer",onClick:function(){e.close()}}),(0,d.jsx)("div",{className:"window",children:(0,d.jsxs)("div",{className:"head",children:[(0,d.jsx)("span",{className:"close",onClick:function(){e.close()},children:"\xd7"}),this.state.component]})})]})}}]),a}(r.Component),h=document.createElement("div");document.body.appendChild(h);var m=(0,o.render)((0,d.jsx)(u,{}),h);s.Z=m},881:function(e,s,a){a.r(s),a.d(s,{default:function(){return d}});var n=a(2791),l=a(577),t=a(9271),i=a(227),c=a(184);function r(e){return(0,c.jsxs)("div",{className:"form-content",children:[(0,c.jsx)("p",{className:"title has-text-centered has-text-light",children:"User Profile"}),(0,c.jsxs)("fieldset",{disabled:!0,children:[(0,c.jsx)("div",{className:"field",children:(0,c.jsxs)("div",{className:"control",children:[(0,c.jsx)("label",{className:"label has-text-left has-text-light",children:"Username"}),(0,c.jsx)("input",{className:"input",type:"text",defaultValue:e.user.username})]})}),(0,c.jsx)("div",{className:"field",children:(0,c.jsxs)("div",{className:"control",children:[(0,c.jsx)("label",{className:"label has-text-left has-text-light",children:"Admin Privileges"}),(0,c.jsx)("input",{className:"input",type:"text",defaultValue:1===e.user.type?"Yes":"No"})]})})]}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsxs)("div",{className:"field is-grouped is-grouped-centered",children:[(0,c.jsx)("div",{className:"control",children:(0,c.jsx)("button",{className:"button is-danger is-medium",type:"button",onClick:function(){a.g.auth.logout(),e.close("logout")},children:"Logout"})}),(0,c.jsx)("div",{className:"control",children:(0,c.jsx)("button",{className:"button is-medium",type:"button",onClick:function(){e.close()},children:"Cancel"})})]})]})}var o=(0,t.EN)((function(e){var s=e.user.username.charAt(0).toUpperCase();return(0,c.jsx)("div",{className:"user-header",children:(0,c.jsxs)("div",{className:"grid",children:[(0,c.jsx)("div",{className:"start"}),(0,c.jsx)("div",{className:"end",children:(0,c.jsxs)("div",{className:"user-profile-group",children:[(0,c.jsx)("div",{className:"button user-icon is-primary",children:(0,c.jsx)("span",{className:"user-initial",children:s})}),(0,c.jsx)("span",{className:"profile",onClick:function(){i.Z.open({component:r,props:{user:e.user},callback:function(s){"logout"===s&&(l.Am.success("Logout Successful."),e.history.push("/"))}})},children:"Profile"})]})})]})})})),d=function(e){var s=(0,n.useMemo)((function(){return a.g.auth.getUser()||{}}),[]),l=(0,t.k6)();return(0,c.jsxs)("div",{children:[(0,c.jsx)(o,{user:s}),(0,c.jsx)("div",{className:"alg-wrapper",children:(0,c.jsxs)("div",{className:"section",children:[(0,c.jsxs)("div",{className:"title label has-text-light",children:[(0,c.jsx)("span",{children:"Hello "}),(0,c.jsx)("span",{className:"has-text-primary hvr-rotate",children:s.username}),",",(0,c.jsx)("div",{children:"Choose an algorithm to begin..."})]}),(0,c.jsxs)("div",{className:"dropdown is-hoverable",children:[(0,c.jsx)("div",{className:"dropdown-trigger",children:(0,c.jsxs)("button",{className:"button is-large is-rounded has-background-primary","aria-haspopup":"true","aria-controls":"dropdown-menu",children:[(0,c.jsx)("span",{className:"has-text-weight-semibold",children:"Select from dropdown"}),(0,c.jsx)("span",{className:"icon is-small is-justify-content-flex-end",children:(0,c.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),(0,c.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:(0,c.jsxs)("div",{className:"dropdown-content ",children:[(0,c.jsx)("div",{className:"dropdown-item",onClick:function(){1===s.type?l.push("/ms/edit"):l.push("/ms/select")},children:(0,c.jsx)("span",{className:"dropdown-text ",children:"Merge Sort"})}),(0,c.jsx)("hr",{className:"dropdown-divider"}),(0,c.jsx)("div",{className:"dropdown-item",children:(0,c.jsx)("span",{className:"dropdown-text",children:"Quick Sort"})}),(0,c.jsx)("hr",{className:"dropdown-divider"}),(0,c.jsx)("div",{className:"dropdown-item",children:(0,c.jsx)("span",{className:"dropdown-text",children:"..."})})]})})]})]})})]})}}}]);
//# sourceMappingURL=881.6860f908.chunk.js.map
"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[205],{227:function(e,s,a){var n=a(1413),t=a(5671),l=a(3144),i=a(136),r=a(4062),c=a(2791),o=a(4164),h=a(184),d=function(e){(0,i.Z)(a,e);var s=(0,r.Z)(a);function a(){var e;(0,t.Z)(this,a);for(var l=arguments.length,i=new Array(l),r=0;r<l;r++)i[r]=arguments[r];return(e=s.call.apply(s,[this].concat(i))).state={active:!1,component:null,callback:function(){}},e.open=function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{props:{},component:null,callback:function(){}},a=s.props,t=s.component,l=s.callback,i=(new Date).getTime(),r=c.createElement(t,(0,n.Z)((0,n.Z)({},a),{},{close:e.close,restart:e.restart,key:i}));e.setState({active:!0,component:r,callback:l})},e.close=function(s){e.setState({active:!1}),e.state.callback(s)},e}return(0,l.Z)(a,[{key:"render",value:function(){var e=this;return(0,h.jsxs)("div",{className:{true:"panel-wrapper active",false:"panel-wrapper"}[this.state.active],children:[(0,h.jsx)("div",{className:"over-layer",onClick:function(){e.close("resume")}}),(0,h.jsx)("div",{className:"window",children:(0,h.jsxs)("div",{className:"head",children:[(0,h.jsx)("span",{className:"close",onClick:function(){e.close("resume")},children:"\xd7"}),this.state.component]})})]})}}]),a}(c.Component),u=document.createElement("div");document.body.appendChild(u);var m=(0,o.render)((0,h.jsx)(d,{}),u);s.Z=m},7205:function(e,s,a){a.r(s),a.d(s,{default:function(){return w}});var n=a(2791),t=a(1523),l=a(227),i=a(4942),r=a(5671),c=a(3144),o=a(136),h=a(4062),d=a(184),u=function(e){(0,o.Z)(a,e);var s=(0,h.Z)(a);function a(){var e;(0,r.Z)(this,a);for(var n=arguments.length,t=new Array(n),l=0;l<n;l++)t[l]=arguments[l];return(e=s.call.apply(s,[this].concat(t))).state={boxCount:"10",upperRange:"20",lowerRange:"1"},e.handleChange=function(s){var a=s.target.value,n=s.target.name;e.setState((0,i.Z)({},n,a))},e.submit=function(e){e.preventDefault()},e}return(0,c.Z)(a,[{key:"render",value:function(){var e=this;return(0,d.jsxs)("div",{className:"form-content",children:[(0,d.jsxs)("div",{className:"title section has-text-centered",children:[(0,d.jsx)("h2",{className:"subtitle is-3 has-text-light",children:"Editing"}),(0,d.jsx)("h1",{className:"title is-2 has-text-primary",children:"Level 1"})]}),(0,d.jsxs)("form",{onSubmit:this.submit,children:[(0,d.jsx)("div",{className:"field mb-5",children:(0,d.jsxs)("div",{className:"control",children:[(0,d.jsx)("label",{className:"label has-text-left has-text-light",children:"Number of Boxes"}),(0,d.jsx)("input",{type:"number",className:"input",name:"boxCount",value:this.state.boxCount,onChange:this.handleChange})]})}),(0,d.jsx)("div",{className:"field mb-5",children:(0,d.jsxs)("div",{className:"control",children:[(0,d.jsx)("label",{className:"label has-text-left has-text-light",children:"Lower Range"}),(0,d.jsx)("input",{type:"number",className:"input",name:"lowerRange",value:this.state.lowerRange,onChange:this.handleChange})]})}),(0,d.jsx)("div",{className:"field mb-5",children:(0,d.jsxs)("div",{className:"control",children:[(0,d.jsx)("label",{className:"label has-text-left has-text-light",children:"Upper Range"}),(0,d.jsx)("input",{type:"number",className:"input",name:"upperRange",value:this.state.upperRange,onChange:this.handleChange})]})}),(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),(0,d.jsxs)("div",{className:"field is-grouped is-grouped-centered",children:[(0,d.jsx)("div",{className:"control",children:(0,d.jsx)("button",{className:"button is-primary is-medium",children:(0,d.jsx)("strong",{children:"Save"})})}),(0,d.jsx)("div",{className:"control",children:(0,d.jsx)("button",{className:"button is-medium",type:"button",onClick:function(){e.props.close()},children:(0,d.jsx)("strong",{children:"Back"})})})]})]})]})}}]),a}(n.Component),m=u,x=a(1413),p=a(577),b=function(e){(0,o.Z)(a,e);var s=(0,h.Z)(a);function a(){var e;(0,r.Z)(this,a);for(var n=arguments.length,t=new Array(n),l=0;l<n;l++)t[l]=arguments[l];return(e=s.call.apply(s,[this].concat(t))).state={boxCount:"10",upperRange:"20",lowerRange:"1"},e.handleChange=function(s){var a=s.target.value,n=s.target.name;e.setState((0,i.Z)({},n,a))},e.submit=function(s){s.preventDefault();var a=(0,x.Z)({},e.state);if(""!==e.state.boxCount||""!==e.state.upperRange||""!==e.lowerRange)e.props.close(a);else{p.Am.error("Oops, you forgot to define custom parameters!")}},e}return(0,c.Z)(a,[{key:"render",value:function(){var e=this;return(0,d.jsxs)("div",{className:"form-content",children:[(0,d.jsxs)("div",{className:"title section has-text-centered",children:[(0,d.jsx)("h2",{className:"subtitle is-3 has-text-light",children:"Editing"}),(0,d.jsx)("h1",{className:"title is-2 has-text-primary",children:"Level 2"})]}),(0,d.jsxs)("form",{onSubmit:this.submit,children:[(0,d.jsx)("div",{className:"field mb-5",children:(0,d.jsxs)("div",{className:"control",children:[(0,d.jsx)("label",{className:"label has-text-left has-text-light",children:"Number of Boxes"}),(0,d.jsx)("input",{type:"number",className:"input",name:"boxCount",value:this.state.boxCount,onChange:this.handleChange})]})}),(0,d.jsx)("div",{className:"field mb-5",children:(0,d.jsxs)("div",{className:"control",children:[(0,d.jsx)("label",{className:"label has-text-left has-text-light",children:"Lower Range"}),(0,d.jsx)("input",{type:"number",className:"input",name:"lowerRange",value:this.state.lowerRange,onChange:this.handleChange})]})}),(0,d.jsx)("div",{className:"field mb-5",children:(0,d.jsxs)("div",{className:"control",children:[(0,d.jsx)("label",{className:"label has-text-left has-text-light",children:"Upper Range"}),(0,d.jsx)("input",{type:"number",className:"input",name:"upperRange",value:this.state.upperRange,onChange:this.handleChange})]})}),(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),(0,d.jsxs)("div",{className:"field is-grouped is-grouped-centered",children:[(0,d.jsx)("div",{className:"control",children:(0,d.jsx)("button",{className:"button is-primary is-medium",children:(0,d.jsx)("strong",{children:"Save"})})}),(0,d.jsx)("div",{className:"control",children:(0,d.jsx)("button",{className:"button is-medium",type:"button",onClick:function(){e.props.close()},children:(0,d.jsx)("strong",{children:"Back"})})})]})]})]})}}]),a}(n.Component),v=b,j=function(e){(0,o.Z)(a,e);var s=(0,h.Z)(a);function a(){var e;(0,r.Z)(this,a);for(var n=arguments.length,t=new Array(n),l=0;l<n;l++)t[l]=arguments[l];return(e=s.call.apply(s,[this].concat(t))).state={boxCount:"10",upperRange:"20",lowerRange:"1"},e.handleChange=function(s){var a=s.target.value,n=s.target.name;e.setState((0,i.Z)({},n,a))},e.submit=function(e){e.preventDefault()},e}return(0,c.Z)(a,[{key:"render",value:function(){var e=this;return(0,d.jsxs)("div",{className:"form-content",children:[(0,d.jsxs)("div",{className:"title section has-text-centered",children:[(0,d.jsx)("h2",{className:"subtitle is-3 has-text-light",children:"Editing"}),(0,d.jsx)("h1",{className:"title is-2 has-text-primary",children:"Level 3"})]}),(0,d.jsxs)("form",{onSubmit:this.submit,children:[(0,d.jsx)("div",{className:"field mb-5",children:(0,d.jsxs)("div",{className:"control",children:[(0,d.jsx)("label",{className:"label has-text-left has-text-light",children:"Number of Boxes"}),(0,d.jsx)("input",{type:"number",className:"input",name:"boxCount",value:this.state.boxCount,onChange:this.handleChange})]})}),(0,d.jsx)("div",{className:"field mb-5",children:(0,d.jsxs)("div",{className:"control",children:[(0,d.jsx)("label",{className:"label has-text-left has-text-light",children:"Lower Range"}),(0,d.jsx)("input",{type:"number",className:"input",name:"lowerRange",value:this.state.lowerRange,onChange:this.handleChange})]})}),(0,d.jsx)("div",{className:"field mb-5",children:(0,d.jsxs)("div",{className:"control",children:[(0,d.jsx)("label",{className:"label has-text-left has-text-light",children:"Upper Range"}),(0,d.jsx)("input",{type:"number",className:"input",name:"upperRange",value:this.state.upperRange,onChange:this.handleChange})]})}),(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),(0,d.jsxs)("div",{className:"field is-grouped is-grouped-centered",children:[(0,d.jsx)("div",{className:"control",children:(0,d.jsx)("button",{className:"button is-primary is-medium",children:(0,d.jsx)("strong",{children:"Save"})})}),(0,d.jsx)("div",{className:"control",children:(0,d.jsx)("button",{className:"button is-medium",type:"button",onClick:function(){e.props.close()},children:(0,d.jsx)("strong",{children:"Back"})})})]})]})]})}}]),a}(n.Component),g=j,N=function(e){(0,o.Z)(a,e);var s=(0,h.Z)(a);function a(){var e;(0,r.Z)(this,a);for(var n=arguments.length,t=new Array(n),l=0;l<n;l++)t[l]=arguments[l];return(e=s.call.apply(s,[this].concat(t))).state={boxCount:"20",upperRange:"50",lowerRange:"1"},e.handleChange=function(s){var a=s.target.value,n=s.target.name;e.setState((0,i.Z)({},n,a))},e.submit=function(e){e.preventDefault()},e}return(0,c.Z)(a,[{key:"render",value:function(){var e=this;return(0,d.jsxs)("div",{className:"form-content",children:[(0,d.jsxs)("div",{className:"title section has-text-centered",children:[(0,d.jsx)("h2",{className:"subtitle is-3 has-text-light",children:"Editing"}),(0,d.jsx)("h1",{className:"title is-2 has-text-primary",children:"Level 4"})]}),(0,d.jsxs)("form",{onSubmit:this.submit,children:[(0,d.jsx)("div",{className:"field mb-5",children:(0,d.jsxs)("div",{className:"control",children:[(0,d.jsx)("label",{className:"label has-text-left has-text-light",children:"Number of Boxes"}),(0,d.jsx)("input",{type:"number",className:"input",name:"boxCount",value:this.state.boxCount,onChange:this.handleChange})]})}),(0,d.jsx)("div",{className:"field mb-5",children:(0,d.jsxs)("div",{className:"control",children:[(0,d.jsx)("label",{className:"label has-text-left has-text-light",children:"Lower Range"}),(0,d.jsx)("input",{type:"number",className:"input",name:"lowerRange",value:this.state.lowerRange,onChange:this.handleChange})]})}),(0,d.jsx)("div",{className:"field mb-5",children:(0,d.jsxs)("div",{className:"control",children:[(0,d.jsx)("label",{className:"label has-text-left has-text-light",children:"Upper Range"}),(0,d.jsx)("input",{type:"number",className:"input",name:"upperRange",value:this.state.upperRange,onChange:this.handleChange})]})}),(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),(0,d.jsxs)("div",{className:"field is-grouped is-grouped-centered",children:[(0,d.jsx)("div",{className:"control",children:(0,d.jsx)("button",{className:"button is-primary is-medium",children:(0,d.jsx)("strong",{children:"Save"})})}),(0,d.jsx)("div",{className:"control",children:(0,d.jsx)("button",{className:"button is-medium",type:"button",onClick:function(){e.props.close()},children:(0,d.jsx)("strong",{children:"Back"})})})]})]})]})}}]),a}(n.Component),f=N,C=function(e){(0,o.Z)(a,e);var s=(0,h.Z)(a);function a(){var e;(0,r.Z)(this,a);for(var n=arguments.length,t=new Array(n),l=0;l<n;l++)t[l]=arguments[l];return(e=s.call.apply(s,[this].concat(t))).state={boxCount:"50",upperRange:"100",lowerRange:"1"},e.handleChange=function(s){var a=s.target.value,n=s.target.name;e.setState((0,i.Z)({},n,a))},e.submit=function(e){e.preventDefault()},e}return(0,c.Z)(a,[{key:"render",value:function(){var e=this;return(0,d.jsxs)("div",{className:"form-content",children:[(0,d.jsxs)("div",{className:"title section has-text-centered",children:[(0,d.jsx)("h2",{className:"subtitle is-3 has-text-light",children:"Editing"}),(0,d.jsx)("h1",{className:"title is-2 has-text-primary",children:"Level 5"})]}),(0,d.jsxs)("form",{onSubmit:this.submit,children:[(0,d.jsx)("div",{className:"field mb-5",children:(0,d.jsxs)("div",{className:"control",children:[(0,d.jsx)("label",{className:"label has-text-left has-text-light",children:"Number of Boxes"}),(0,d.jsx)("input",{type:"number",className:"input",name:"boxCount",value:this.state.boxCount,onChange:this.handleChange})]})}),(0,d.jsx)("div",{className:"field mb-5",children:(0,d.jsxs)("div",{className:"control",children:[(0,d.jsx)("label",{className:"label has-text-left has-text-light",children:"Lower Range"}),(0,d.jsx)("input",{type:"number",className:"input",name:"lowerRange",value:this.state.lowerRange,onChange:this.handleChange})]})}),(0,d.jsx)("div",{className:"field mb-5",children:(0,d.jsxs)("div",{className:"control",children:[(0,d.jsx)("label",{className:"label has-text-left has-text-light",children:"Upper Range"}),(0,d.jsx)("input",{type:"number",className:"input",name:"upperRange",value:this.state.upperRange,onChange:this.handleChange})]})}),(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),(0,d.jsxs)("div",{className:"field is-grouped is-grouped-centered",children:[(0,d.jsx)("div",{className:"control",children:(0,d.jsx)("button",{className:"button is-primary is-medium",children:(0,d.jsx)("strong",{children:"Save"})})}),(0,d.jsx)("div",{className:"control",children:(0,d.jsx)("button",{className:"button is-medium",type:"button",onClick:function(){e.props.close()},children:(0,d.jsx)("strong",{children:"Back"})})})]})]})]})}}]),a}(n.Component),y=C,k=a(1626),w=function(e){return(0,d.jsx)("div",{className:"select-wrapper",children:(0,d.jsxs)("div",{className:"select-box",children:[(0,d.jsx)(k.f,{animationIn:"bounceInLeft",animationOut:"bounceOut",isVisible:!0,children:(0,d.jsxs)("div",{className:"title section",children:[(0,d.jsx)("h2",{className:"subtitle is-3 has-text-light",children:"Start Editing"}),(0,d.jsx)("h1",{className:"title is-1 has-text-primary",children:"Merge Sort"})]})}),(0,d.jsxs)("div",{className:"columns is-multiline buttons are-large",children:[(0,d.jsx)("div",{className:"column is-half",children:(0,d.jsxs)("button",{className:"lv-btn button is-rounded has-background-primary hvr-icon-forward hvr-pulse-shrink",onClick:function(){l.Z.open({component:m,callback:function(e){}})},children:[(0,d.jsx)("span",{className:"btn-text",children:"Edit Level 1"}),(0,d.jsx)("i",{className:"fa-solid fa-pen-to-square hvr-icon"})]})}),(0,d.jsx)("div",{className:"column is-half",children:(0,d.jsxs)("button",{className:"lv-btn button is-rounded has-background-primary hvr-icon-forward hvr-pulse-shrink",onClick:function(){l.Z.open({component:v,callback:function(e){console.log(e)}})},children:[(0,d.jsx)("span",{className:"btn-text",children:"Edit Level 2"}),(0,d.jsx)("i",{className:"fa-solid fa-pen-to-square hvr-icon"})]})}),(0,d.jsx)("div",{className:"column is-half",children:(0,d.jsxs)("button",{className:"lv-btn button is-rounded has-background-primary hvr-icon-forward hvr-pulse-shrink",onClick:function(){l.Z.open({component:g,callback:function(e){}})},children:[(0,d.jsx)("span",{className:"btn-text",children:"Edit Level 3"}),(0,d.jsx)("i",{className:"fa-solid fa-pen-to-square hvr-icon"})]})}),(0,d.jsx)("div",{className:"column is-half",children:(0,d.jsxs)("button",{className:"lv-btn button is-rounded has-background-primary hvr-icon-forward hvr-pulse-shrink",onClick:function(){l.Z.open({component:f,callback:function(e){}})},children:[(0,d.jsx)("span",{className:"btn-text",children:"Edit Level 4"}),(0,d.jsx)("i",{className:"fa-solid fa-pen-to-square hvr-icon"})]})}),(0,d.jsx)("div",{className:"column is-half",children:(0,d.jsxs)("button",{className:"lv-btn button is-rounded has-background-primary hvr-icon-forward hvr-pulse-shrink",onClick:function(){l.Z.open({component:y,callback:function(e){}})},children:[(0,d.jsx)("span",{className:"btn-text",children:"Edit Level 5"}),(0,d.jsx)("i",{className:"fa-solid fa-pen-to-square hvr-icon"})]})}),(0,d.jsx)("div",{className:"column is-half",children:(0,d.jsxs)(t.rU,{to:"/ms/analytics",className:"lv-btn button is-rounded has-background-primary hvr-icon-drop hvr-pulse-shrink",children:[(0,d.jsx)("span",{className:"btn-text",children:"View Analytics"}),(0,d.jsx)("i",{className:"fa-solid fa-eye hvr-icon"})]})}),(0,d.jsx)("div",{className:"column is-full-width",children:(0,d.jsx)(t.rU,{to:"/alg",className:"long-btn button is-rounded has-background-light hvr-hang",children:(0,d.jsx)("span",{className:"btn-text",children:"Back"})})})]})]})})}}}]);
//# sourceMappingURL=205.f1b07f05.chunk.js.map
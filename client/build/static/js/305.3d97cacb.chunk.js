"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[305],{8037:function(e,t,a){var i=a(2982),n=a(885),s=a(2791),l=a(577),r=(a(5462),a(1626)),o=a(84),h=a(7418),d=a(184),c=!1;var u=0;t.Z=function e(t){var m=[],p=[],v="",g=t.array,f=(0,s.useState)(!1),x=(0,n.Z)(f,2),S=x[0],j=x[1],b=(0,s.useState)(!1),y=(0,n.Z)(b,2),N=y[0],w=y[1],O=(0,s.useState)(),C=(0,n.Z)(O,2),Z=C[0],A=C[1],M=(0,s.useState)(1===g?g:[]),T=(0,n.Z)(M,2),k=T[0],E=T[1],G=(0,s.useState)(!1),I=(0,n.Z)(G,2),L=I[0],z=I[1],R=(0,s.useState)(!1),D=(0,n.Z)(R,2),B=D[0],H=D[1],W=(0,s.useState)(!1),Q=(0,n.Z)(W,2),P=Q[0],U=Q[1];function _(e){var t=!1,a=g;if(a.sort((function(e,t){return e-t})),0===k.length)for(var n=0;n<g.length;n++)e>parseInt(g[n])&&(console.log("L"),t=!0);else if(0!==k.length){var s=k.length-1;parseInt(e)===parseInt(a[s+1])?console.log("correct"):t=!0}return!1===t&&(E([].concat((0,i.Z)(k),[e])),console.log("fuck")),t}function Y(){c||(l.Am.clearWaitingQueue(),l.Am.success("CORRECT !",{autoClose:300,closeButton:!1,closeOnClick:!0,position:l.Am.POSITION.BOTTOM_CENTER,onOpen:function(e){return q()}}),c=!0)}function F(e){c=!1;var i=e.target.getAttribute("value"),n=t.pushToMerged(i);n?n&&(c||(l.Am.clearWaitingQueue(),l.Am.error("INCORRECT !",{autoClose:300,closeButton:!1,position:l.Am.POSITION.BOTTOM_CENTER,closeOnClick:!0,onOpen:function(e){return J()}}),c=!0,a.g.auth.getCurrentHealth()>0?a.g.auth.decreaseHealth():t.handleGameover())):(e.target.style.display="none",Y())}function V(e){v.toString()===e?j(!0):g.length!==t.initialSize&&void 0!==t.initialSize&&t.evaluateOtherSplit&&t.evaluateOtherSplit(e)}(0,s.useEffect)((function(){t.nextStep()}),[k]);var q=function(){new Audio(o).play()},J=function(){new Audio(h).play()};function K(){if(k.length===parseInt(t.initialSize)){H(B),z(!L);for(var e=!0,a=0;a<k.length-1;a++)parseInt(k[a])>parseInt(k[a+1])&&(e=!1);console.log(e),function(e){e&&(l.Am.success("WINNER"),t.handleEnd(),U(!P))}(e)}}if(L){for(var X=0;X<k.length;X++)m.push([(0,d.jsx)("button",{className:"level-block button is-light is-outlined is-focused",onClick:F,value:k[X],children:k[X]},k[X])]);K()}if(!L)for(var $=0;$<g.length;$++){var ee=!0;1===g.length&&(ee=!1),m.push([(0,d.jsx)("button",{className:"level-block button is-light is-outlined is-focused",disabled:ee,onClick:F,value:g[$],children:g[$]},g[$])])}return B||void 0!==Z&&(p=(0,d.jsxs)("div",{className:"split",children:[(0,d.jsx)("div",{className:"left",children:(0,d.jsx)(e,{array:Z.leftArray,label:"Left Array",order:t.order,pushToMerged:_,evaluateOtherSplit:V,setButtonState:S,nextStep:t.nextStep,handleGameover:t.handleGameover,initialSize:t.initialSize})}),(0,d.jsx)("div",{className:"right",children:(0,d.jsx)(e,{array:Z.rightArray,label:"Right Array",order:t.order,pushToMerged:_,evaluateOtherSplit:V,parentButton:S,nextStep:t.nextStep,handleGameover:t.handleGameover,initialSize:t.initialSize})})]})),(0,d.jsx)(r.f,{animationIn:"fadeInDown",animationOut:"bounceOut",children:(0,d.jsxs)("div",{className:"initial",children:[(0,d.jsx)("div",{className:"".concat(N?"disappear":null," + \n          ").concat(g.length>1?null:"disappear"," +\n          ").concat(function(e){return!!t.parentButton||function(e){return-1!==e.toString().indexOf(t.order[u])||(console.log(t.initialSize),e.length!==t.initialSize&&void 0!==t.initialSize&&t.evaluateOtherSplit&&t.evaluateOtherSplit(t.order[u]),!1)}(e)}(g)?null:"disappear"),children:(0,d.jsxs)("div",{className:"button is-primary is-small is-outlined hvr-grow hvr-bubble-bottom",onClick:function(){console.log("handleSplit"),c=!1,w(!N),u++;var e=Math.floor(g.length/2),a=g.slice(0,e),i=g.slice(e,g.length);1===a.length&&i.length>1&&t.nextStep(),v=i,A({leftArray:a,rightArray:i}),z(!0),K(),Y()},children:[(0,d.jsx)("span",{className:"icon is-small",children:(0,d.jsx)("i",{className:"fa-solid fa-scissors"})}),(0,d.jsx)("span",{className:"has-text-weight-semibold",children:"SPLIT"})]})}),(0,d.jsx)("div",{children:m}),(0,d.jsx)("br",{}),(0,d.jsx)("div",{children:p},p)]})})}},7039:function(e,t,a){a(2791);var i=a(1523),n=a(1626),s=a(184);t.Z=function(e){var t=e.handleStart,a=e.title,l=e.body,r=e.lowerLimit,o=e.upperLimit,h=e.boxCount;return(0,s.jsx)("div",{className:"modal-overlay",children:(0,s.jsx)(n.f,{animationIn:"bounceInUp",animationOut:"bounceOut",isVisible:!0,children:(0,s.jsxs)("div",{className:"modal-container",children:[(0,s.jsx)("div",{className:"modal-title",children:(0,s.jsxs)("h2",{className:"title is-2 has-text-primary",children:["Welcome to Level ",a]})}),(0,s.jsx)("div",{className:"modal-body ",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{className:"has-text-primary",children:"Level Description:"}),(0,s.jsx)("span",{className:"has-text-light mt-3 ml-5",children:(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:["A set of"," ",(0,s.jsx)("span",{className:"has-text-primary",children:h})," numbers are randomly generated out of the range (",(0,s.jsx)("span",{className:"has-text-primary",children:r})," -"," ",(0,s.jsx)("span",{className:"has-text-primary",children:o}),")"]}),l]})})]})}),(0,s.jsx)("p",{className:"tag is-danger is-align-self-center hvr-buzz",children:"Note: A timer will start when you press Start !"}),(0,s.jsxs)("div",{className:"modal-footer",children:[(0,s.jsx)(i.rU,{to:"/ms/select",children:(0,s.jsx)("button",{className:"modal-btn button is-primary hvr-sweep-to-left",children:"Select Another Level"})}),(0,s.jsx)("button",{className:"modal-btn button is-primary hvr-pulse hvr-sweep-to-right",onClick:t,children:"Begin Now!"})]})]})})})}},8348:function(e,t,a){a.r(t);var i=a(5671),n=a(3144),s=a(7326),l=a(136),r=a(4062),o=a(2791),h=a(9310),d=a(5667),c=(a(3770),a(9271)),u=a(8037),m=a(7039),p=a(6439),v=a(2670),g=a(577),f=a(9731),x=a(184),S=function(e){(0,l.Z)(o,e);var t=(0,r.Z)(o);function o(e){var n;return(0,i.Z)(this,o),(n=t.call(this,e)).logGameData=function(){var e,t=new Date,i=String(t.getDate()).padStart(2,"0"),s=String(t.getMonth()+1).padStart(2,"0"),l=t.getFullYear();t=l+"-"+s+"-"+i,f.Z.get("/level4").then((function(t){e=t.data.length+1}));var r={id:e,time:n.state.time,accuracy:a.g.auth.getCurrentHealth(),username:a.g.auth.getUser().username,complete_date:t};f.Z.post("/level4",r).then((function(e){g.Am.success("Your data was recorded successfully!")}))},n.startTimer=function(){n.setState({timerOn:!0,time:n.state.time,timerStart:Date.now()-n.state.time}),n.timer=setInterval((function(){n.setState({time:Date.now()-n.state.timerStart})}),10)},n.stopTimer=function(){n.setState({timerOn:!1}),clearInterval(n.timer)},a.g.auth.setCurrentHealth(3),n.state={initialArr:[],splitting:!0,step:0,instructions:[],order:[],splitOrder:[],win:!1,showModal:!0,showStartModal:!0,showEndModal:!1,showGameoverModal:!1,level:4,lives:a.g.auth.getCurrentHealth(),time:0,timerOn:!1,timerStart:0,lowerLimit:1,upperLimit:50,boxCount:20},n.generateArray=n.generateArray.bind((0,s.Z)(n)),n.handleNextStep=n.handleNextStep.bind((0,s.Z)(n)),n.handleReset=n.handleReset.bind((0,s.Z)(n)),n.handleMerge=n.handleMerge.bind((0,s.Z)(n)),n.handleStart=n.handleStart.bind((0,s.Z)(n)),n.handleEnd=n.handleEnd.bind((0,s.Z)(n)),n.handleGameover=n.handleGameover.bind((0,s.Z)(n)),n.checkCorrect=n.checkCorrect.bind((0,s.Z)(n)),n.stopTimer=n.stopTimer.bind((0,s.Z)(n)),n.logGameData=n.logGameData.bind((0,s.Z)(n)),n}return(0,n.Z)(o,[{key:"handleStart",value:function(){this.generateArray(),this.setState({showModal:!1,showStartModal:!1}),a.g.auth.setCurrentLevel("4"),this.startTimer()}},{key:"handleEnd",value:function(){g.Am.clearWaitingQueue(),this.stopTimer(),this.setState({showModal:!0,showEndModal:!0,showGameoverModal:!1}),this.logGameData()}},{key:"handleGameover",value:function(){g.Am.clearWaitingQueue(),this.stopTimer(),this.setState({showModal:!0,showEndModal:!1,showGameoverModal:!0}),this.logGameData()}},{key:"renderModal",value:function(){var e=function(){return(0,x.jsx)("div",{children:(0,x.jsx)("li",{children:"The user is to decide what needs to be done at every step"})})},t=function(){return(0,x.jsxs)("div",{children:[(0,x.jsx)("a",{href:"/ms/level1",className:"dropdown-item",children:(0,x.jsxs)("span",{className:"label has-text-centered",children:["Start Level 1 ",(0,x.jsx)("i",{className:"fa-solid fa-play"})]})}),(0,x.jsx)("a",{href:"/ms/level2",className:"dropdown-item",children:(0,x.jsxs)("span",{className:"label has-text-centered",children:["Start Level 2 ",(0,x.jsx)("i",{className:"fa-solid fa-play"})]})}),(0,x.jsx)("a",{href:"/ms/level3",className:"dropdown-item",children:(0,x.jsxs)("span",{className:"label has-text-centered",children:["Start Level 3 ",(0,x.jsx)("i",{className:"fa-solid fa-play"})]})})]})};return this.state.showStartModal?(0,x.jsx)(m.Z,{handleStart:this.handleStart,title:this.state.level,body:(0,x.jsx)(e,{}),lowerLimit:this.state.lowerLimit,upperLimit:this.state.upperLimit,boxCount:this.state.boxCount}):this.state.showEndModal&&!this.state.showGameoverModal?(0,x.jsx)(v.Z,{title:this.state.level,life:a.g.auth.getCurrentHealth(),time:this.state.time,next:"Level 5"}):this.state.showGameoverModal&&!this.state.showEndModal?(0,x.jsx)(p.Z,{title:this.state.level,time:this.state.time,dropdownItems:(0,x.jsx)(t,{})}):void 0}},{key:"generateArray",value:function(){var e=[],t=[],a=new d.Z(1,50,20);a.sort(a.getArray(),e,t,[],[],!1),this.setState({initialArr:a.getArray(),order:e,splitOrder:t})}},{key:"setOrder",value:function(e){this.setState({order:e})}},{key:"handleReset",value:function(e){this.setState({step:0,lineOne:null,lineTwo:null,lineThree:null})}},{key:"handleNextStep",value:function(e){var t=this.state.step;t++,this.setState({step:t,lineOne:this.state.instructions[t-1],lineTwo:this.state.instructions[t],lineThree:this.state.instructions[t+1]})}},{key:"checkCorrect",value:function(e){}},{key:"handleMerge",value:function(){console.log("merge")}},{key:"handleSplit",value:function(){console.log("split")}},{key:"render",value:function(){return(0,x.jsx)("div",{children:this.state.showModal?this.renderModal():(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{className:"header mb-6",children:(0,x.jsx)(h.Z,{level:"4",startTimer:this.startTimer,stopTimer:this.stopTimer,lives:a.g.auth.getCurrentHealth()})}),(0,x.jsx)("div",{children:(0,x.jsx)(u.Z,{array:this.state.initialArr,label:"initial",order:this.state.splitOrder,nextStep:this.handleNextStep,initialSize:this.state.boxCount,handleGameover:this.handleGameover,handleEnd:this.handleEnd})})]})})}}]),o}(o.Component);t.default=(0,c.EN)(S)},84:function(e,t,a){e.exports=a.p+"static/media/RightSound.94c45fa7080eec45a3dd.mp3"},7418:function(e,t,a){e.exports=a.p+"static/media/WrongSound.1b58fea34f452bbee7c5.mp3"}}]);
//# sourceMappingURL=305.3d97cacb.chunk.js.map
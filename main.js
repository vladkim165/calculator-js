!function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.previousOperandTextElement=e,this.currentOperandTextElement=n,this.clear()}var n,r;return n=t,(r=[{key:"clear",value:function(){this.currentOperand="",this.previousOperand="",this.operation=void 0}},{key:"delete",value:function(){this.currentOperand=this.currentOperand.toString().slice(0,-1)}},{key:"appendNumber",value:function(e){"."===e&&this.currentOperand.includes(".")||(this.currentOperand="".concat(this.currentOperand).concat(e))}},{key:"chooseOperation",value:function(e){""!==this.currentOperand&&(""!==this.previousOperand&&this.compute(),this.operation=e,this.previousOperand=this.currentOperand,this.currentOperand="")}},{key:"compute",value:function(){var e,t=parseFloat(this.previousOperand),n=parseFloat(this.currentOperand);if(!isNaN(t)&&!isNaN(n)){switch(this.operation){case"+":e=t+n;break;case"-":e=t-n;break;case"*":e=t*n;break;case"÷":e=t/n;break;default:return}if(e.toString().split("").includes(".")){var r=e.toString().split(".")[0],i=e.toString().split(".")[1];return this.currentOperand="".concat(r,".").concat(i.slice(0,8)),this.operation=void 0,void(this.previousOperand="")}this.currentOperand=e,this.operation=void 0,this.previousOperand=""}}},{key:"changePreviousOperation",value:function(e){this.currentOperand?this.compute():(this.operation=e,this.currentOperand="")}},{key:"sqrt",value:function(){this.currentOperand=u.textContent;var e=Number(Math.sqrt(this.currentOperand).toString().split("").slice(0,10).join(""));this.currentOperandTextElement.textContent=e,this.currentOperand=e,this.operation=void 0,this.previousOperand=""}},{key:"square",value:function(){this.currentOperand=u.textContent;var e=Number(Math.pow(this.currentOperand,2).toString().split("").slice(0,10).join(""));this.currentOperandTextElement.textContent=e,this.currentOperand=e,this.operation=void 0,this.previousOperand=""}},{key:"updateDisplay",value:function(){this.currentOperandTextElement.textContent=this.currentOperand,null!=this.operation?this.previousOperandTextElement.textContent="".concat(this.previousOperand," ").concat(this.operation):this.previousOperandTextElement.textContent=""}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(),n=document.querySelectorAll(".number"),r=document.querySelectorAll(".operation"),i=document.querySelector(".equals"),o=document.querySelector(".delete"),a=document.querySelector(".all-clear"),c=document.querySelector(".previous-operand"),u=document.querySelector(".current-operand"),s=document.querySelector(".square"),p=document.querySelector(".sqrt"),d=new t(c,u);n.forEach((function(e){e.addEventListener("click",(function(){d.appendNumber(e.textContent),d.updateDisplay()}))})),r.forEach((function(e){e.addEventListener("click",(function(){void 0!==d.operation&&d.changePreviousOperation(e.textContent),d.chooseOperation(e.textContent),d.updateDisplay()}))})),i.addEventListener("click",(function(e){d.compute(),d.updateDisplay()})),a.addEventListener("click",(function(e){d.clear(),d.updateDisplay()})),o.addEventListener("click",(function(e){d.delete(),d.updateDisplay()})),s.addEventListener("click",(function(e){d.square()})),p.addEventListener("click",(function(e){d.sqrt()}))}();
!function(){function e(e){var o=e.position,n=e.delay,t=Math.random()>.3;new Promise((function(e,a){setTimeout((function(){t?e(console.log("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))):a(console.log("❌ Rejected promise ".concat(o," in ").concat(n,"ms")))}),n)}))}document.querySelector(".form").addEventListener("submit",(function(o){o.preventDefault();for(var n=o.target.elements,t=Number(n.amount.value),a=Number(n.delay.value),c=Number(n.step.value),i=0;i<t;i+=1){var u={};u.position=i+1,u.delay=a+c*i,e(u)}}))}();
//# sourceMappingURL=03-promises.793f01e6.js.map
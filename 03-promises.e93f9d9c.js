!function(){function e(e,n){var o=Math.random()>.3;new Promise((function(t,c){setTimeout((function(){o?t(console.log("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms"))):c(console.log("❌ Rejected promise ".concat(e," in ").concat(n,"ms")))}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();for(var o=n.target.elements,t=Number(o.amount.value),c=Number(o.delay.value),u=Number(o.step.value),a=1;a<=t;a+=1)e(a,c),c+=u}))}();
//# sourceMappingURL=03-promises.e93f9d9c.js.map

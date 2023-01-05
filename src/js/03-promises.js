const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onClickSubmit);

function onClickSubmit(e) {
  e.preventDefault();

  const formElements = e.target.elements;
  const formAmount = Number(formElements.amount.value);
  let formDelay = Number(formElements.delay.value);
  const formStep = Number(formElements.step.value);

  for (let i = 1; i <= formAmount; i += 1) {
    createPromise(i, formDelay);
    formDelay += formStep;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  new Promise((Fulfill, Reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        Fulfill(console.log(`✅ Fulfilled promise ${position} in ${delay}ms`));
      } else {
        Reject(console.log(`❌ Rejected promise ${position} in ${delay}ms`));
      }
    }, delay);
  });
}

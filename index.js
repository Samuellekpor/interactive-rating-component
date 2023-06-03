const submit = document.querySelector('#submit-button');
const rating_state = document.querySelector('.rating-state');
const thank_you_state = document.querySelector('.thank-you-state');

submit.addEventListener('click', ()=>{
  rating_state.style.display = 'none';
  thank_you_state.style.display = 'block';
})
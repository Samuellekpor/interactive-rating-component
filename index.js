const submit = document.querySelector('#submit-button');
const rating_state = document.querySelector('.rating-state');
const thank_you_state = document.querySelector('.thank-you-state');
const result = document.getElementById('result');
const ratings = document.querySelectorAll('.btn');

submit.addEventListener('click', () => {
  rating_state.style.display = 'none';
  thank_you_state.style.display = 'block';
})

ratings.forEach((rate) => {
  rate.addEventListener('click', () => {
    result.innerHTML = rate.innerHTML;
  })
})
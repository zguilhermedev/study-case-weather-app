
const weatherForm = document.querySelector('form');
const searchInput = document.querySelector('input');
const messageOne = document.querySelector('#message-one');
const messageTwo = document.querySelector('#message-two');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = searchInput.value;
    messageOne.textContent = 'loading...';
    messageTwo.textContent = '';

    fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
        if(data.error) {
            messageOne.textContent = data.error;
            messageTwo.textContent = '';
        } else {
            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecastData;
        }
        
    })
})
});



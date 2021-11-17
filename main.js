const button = document.querySelector('button');
const displayJoke = document.querySelector('.joke');

button.addEventListener('click', () => getJoke());

async function getJoke() {  
    try {
        const options = { 
            method: 'GET', // specify this is a GET request, not a PUT or POST
            headers: {
                "Accept" : "application/json" // request the response in JSON format
            }
        }
        // the final fetch request
        let joke = await fetch("https://icanhazdadjoke.com/", options);
        let jokeJSON = await joke.json();
        displayJoke.innerText = jokeJSON.joke;
    }
    catch (error) {
        console.log(error);
    }
}
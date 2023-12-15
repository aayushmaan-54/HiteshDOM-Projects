const url = 'https://api.chucknorris.io/jokes/random';

const btn = document.getElementById('getJoke');
const joke_area = document.getElementById('display-joke');


btn.addEventListener('click', function() {
    const getJoke = new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                if(!response.ok) {
                    throw new Error("⛔ Failed to get Joke, Refresh Page or Try to click button again ⛔");
                }
                return response.json();
            })
            .then((data) => {
                resolve(data);
            })
    
            .catch((error) => {
                reject(error.message);
            });
    });


    getJoke
    .then((jokeData) => {
        console.log(jokeData);
        joke_area.textContent = jokeData.value;
    })

    .catch((error) => {
        console.error(error);
        joke_area.textContent = error;
    })
});
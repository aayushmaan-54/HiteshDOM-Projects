const url = 'https://api.thecatapi.com/v1/images/search';

const btn = document.querySelector('.btn');
const catImg = document.querySelector('.cats');

btn.addEventListener('click', function() {
    const getCatImg = new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                if(!response.ok) {
                    throw new Error("⛔ Failed to get image, Refresh Page or Try to click button again ⛔");
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


    getCatImg
        .then((catImgData) => {
            console.log(catImgData[0].url);
            catImg.innerHTML = `<img src="${catImgData[0].url}" alt="">`;
        })

        .catch((error) => {
            console.error(error);
            catImg.textContent = error;
        })
});
const fetchData = () => {
    const url = `https://jsonplaceholder.typicode.com/photos`
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
}
fetchData();
const displayData = data => {
    const cardContainer = document.getElementById('card_container');
    for (const singleData of data) {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.style.width = '18rem';
        cardDiv.innerHTML = `
        <img src="${singleData.thumbnailUrl}&limit=100" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${singleData.title}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's
                content.</p>
            <a target="_blank" href="${singleData.url}" class="btn btn-primary">Get the full picture</a>
        </div>
        `
        cardContainer.appendChild(cardDiv);
    }
}
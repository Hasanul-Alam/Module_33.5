const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}
const toggleResult = displayStyle => {
    document.getElementById('meal_container').style.display = displayStyle;
}
const fetchingData = () => {
    const searchField = document.getElementById('input_field');
    const searchText = searchField.value;
    if (searchText == '') {
        alert("Please give some input otherwise you will see some default meals of our website");
    }
    toggleSpinner('block');
    toggleResult('none');
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    //clear url
    searchField.value = '';

    fetch(url)
        .then(res => res.json())
        .then(data => loadingData(data.meals))
}
const loadingData = data => {
    const mealContainer = document.getElementById('meal_container');
    mealContainer.textContent = '';
    if (data === null || data === undefined) {
        alert("No result found");
    }
    else {
        for (const meal of data) {
            const div = document.createElement('div');
            div.innerHTML = `
            <h2 style= "margin: 10px; padding: 10px;" class="text-center">${meal.strMeal}</h2>
        `
            mealContainer.appendChild(div);
        }

    }

    toggleSpinner('none');
    toggleResult('block');
}

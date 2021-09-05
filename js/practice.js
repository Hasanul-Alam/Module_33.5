const object = {
    name: {
        first: 'Nisat',
        last: 'Afifa'
    },
    age: 22,
    isMarried: false,
    favouriteFood: ['soup', 'noodles', 'chicken-gril', 'nun'],
    fullName: function () {
        return console.log(this.name.first + ' ' + this.name.last);
    }
}

const templateString = () => {
    const listContainer = document.getElementById('list_container');
    for (const food of object.favouriteFood) {
        console.log(food);
    }
    listContainer.innerHTML = `
        <li>${object.favouriteFood[0]}</li>
        <li>${object.favouriteFood[1]}</li>
        <li>${object.favouriteFood[2]}</li>
        <li>${object.favouriteFood[3]}</li>
        <li>Is married: ${object.isMarried}</li>
    `

}
templateString();

//Declaring no parameter arrow function
const noParameter = () => 89;
console.log(noParameter());

//Single parameter arrow function
const singleParameter = parameter => parameter / 7;
console.log(singleParameter(22));

//Two parameter arrow function
const twoPrameter = (parameter1, parameter2) => (parameter1 + parameter2) / 7;
console.log(twoPrameter(4, 18));

//Multiline arrow function with two parameter
const multiLine = (parameter1, parameter2) => {
    const result = (parameter1 + 7) + (parameter2 + 7);
    return result;
}
console.log(multiLine(7, 7));

//An array with number elements
const array = [7, 21, 35, 49, 63];
const newArray = array.map(function (number) {
    const result = number / 7;
    return result
});
console.log(newArray);

//Filter
const ages = [22, 23, 14, 16, 28, 35];
const checkElder = (age) => {
    const elder = age > 18;
    return elder;
};
const elders = ages.filter(checkElder);
console.log(elders);

//Find (I am using the ages arrow up there)
const checkYounger = age => {
    const younger = age <= 18;
    return younger;
}
const younger = ages.find(checkYounger);
console.log(younger);

//ForEach (I am using the ages arrow up there)
const forEach = ages.forEach(age => {
    console.log(age);
});
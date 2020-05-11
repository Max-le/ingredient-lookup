
const search = document.getElementById('search')
const matchList = document.getElementById('match-list')

//Creates an event that will be triggered every keystroke on the search element 
search.addEventListener('input', () => {
    if (search.value.length > 2){
        searchIngredients(search.value)
    }
    else {
        matchList.innerHTML = "";//Hide the list
        }})

//fetch() returns a promise, so I label the function with 'async'
const searchIngredients = async query => {

    //Forming the query URL
    const API_KEY = '4f71e502d5984be5b42b9253a9d685af';
    let numberResults = 6
    const url = 'https://api.spoonacular.com/food/ingredients/autocomplete?'+ 
                'apiKey='+ API_KEY + 
                '&query='+ query +
                '&number=' + numberResults

    //Sending request
    const response = await fetch(url);
    const ingredientResults = await response.json();//convert response to JSON
    outputHTML(ingredientResults);
}

//Generates HTML code and insert it to the HTML page
const outputHTML = ingredients => {
    if (ingredients.length > 0){
        const htmlCode = ingredients.map(ingredient =>

            `<div class="card card-body mb-1">${ingredient.name}
            <img src="${getImageOfIngredientUrl(ingredient.image)}" 
             alt="Ingredient image"  height="100" width="100">
            </div>
            
            `).join('');

            //Add generated HTML code to match-list element
            matchList.innerHTML = htmlCode;
    }
}


const getImageOfIngredientUrl = imageName => {
    //https://spoonacular.com/food-api/docs#Show-Images

    //Creates an enum
    const size = Object.freeze({"small":"100x100", "medium":"250x250", "large":"500x500"});

    const imageUrl = `https://spoonacular.com/cdn/ingredients_${size.small}/`+imageName;
    console.log(imageUrl);
    return imageUrl;
    


}

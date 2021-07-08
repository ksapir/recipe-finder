
// Hides recipe page on page load -- K
var welcomePageEl = document.getElementById("welcome-page")
var recipePageEl = document.getElementById("recipe-page")
// recipePageEl.style.display = 'none'; <= Had to hide the "hide" temporarily -DL

let recipeNameSave;
let recipeURLSave;

// API CALL, RESPONSE, AND PROPAGATION OF RECIPE SECTION
$( "form" ).on( "submit", function(event) {
    event.preventDefault();
    loadRecipe()
})

function loadRecipe(){
    // Clear previous recipe data
    $("#rSummary").text("");
    $("#rIngredients").text("");
    $("#rInstructions").text("");
    // Takes form input and prepares it for insertion into URL
    let tags = $( this ).serialize();
    let foodFetchURL = `https://api.spoonacular.com/recipes/random?apiKey=3d1be3d4b7f847238cad30d1b21563cd&number=1&${tags}`
    fetch(foodFetchURL)
    .then(function (response) {
        return response.json()
        .then(function (data) {
        recipeNameSave = data.recipes[0].title;
        recipeURLSave = data.recipes[0].spoonacularSourceUrl;
        //Diplay name, time, source, and score
        let recipeName = data.recipes[0].title;   
            $("#rName").text(recipeName);
        let timeRequired = data.recipes[0].readyInMinutes;
            $("#rTime").text(`Time: ${timeRequired} minutes`);
        let sourceName = data.recipes[0].sourceName;
            $("#rSource").text(`From: ${sourceName}`);
        let rating = data.recipes[0].spoonacularScore;
            $("#rRating").text(`Score: ${rating}/100`);
        // Identify image link and set image source
        let imageLink = data.recipes[0].image;
            $("#rImage").attr("src", imageLink);
        // Display summary paragraph
        let summary = data.recipes[0].summary;
            $("#rSummary").append(summary);
        // Loop through ingredients
        let ingredientsList = data.recipes[0].extendedIngredients
        for (i = 0; i < ingredientsList.length; i++) {
            let ingredientName = ingredientsList[i].original
            $("#rIngredients").append(`<li>${ingredientName}</li>`)
        }
        // Display instructions
        let instructions = data.recipes[0].instructions;
            $("#rInstructions").append(instructions);
        // Unhide labels
        let hiddenLabels = document.getElementsByClassName("hidden-label")
            $(hiddenLabels).css('visibility','visible')
         if (document.querySelector('#accept:checked') !== null) {
            loadCocktail()
            
        }
            
})})}

function loadCocktail(){
            let randomCocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
            fetch(randomCocktailURL, {mode:'cors'})
            .then(function (response) {
                return response.json()
                .then(function (data) {
                    // Populate drink name
                    let drinkName = data.drinks[0].strDrink
                    $("#cName").append(`<strong>Paired with a(n): </strong>${drinkName}`)
                    // Display ingredients (this is messy because of the way the API returns the data)
                        let ingredient1 = data.drinks[0].strIngredient1
                        let ingredient1measure = data.drinks[0].strMeasure1
                            if (ingredient1 !== null){
                            $("#cIngredients").append(`<li>${ingredient1measure} ${ingredient1}</li>`)}
                        let ingredient2 = data.drinks[0].strIngredient2
                        let ingredient2measure = data.drinks[0].strMeasure2
                            if (ingredient2 !== null){
                            $("#cIngredients").append(`<li>${ingredient2measure} ${ingredient2}</li>`)}
                        let ingredient3 = data.drinks[0].strIngredient3
                        let ingredient3measure = data.drinks[0].strMeasure3
                            if (ingredient3 !== null){
                            $("#cIngredients").append(`<li>${ingredient3measure} ${ingredient3}</li>`)}
                        let ingredient4 = data.drinks[0].strIngredient4
                        let ingredient4measure = data.drinks[0].strMeasure4
                            if (ingredient4 !== null){
                            $("#cIngredients").append(`<li>${ingredient4measure} ${ingredient4}</li>`)}
                        let ingredient5 = data.drinks[0].strIngredient5
                        let ingredient5measure = data.drinks[0].strMeasure5
                            if (ingredient5 !== null){
                            $("#cIngredients").append(`<li>${ingredient5measure} ${ingredient5}</li>`)}
                        let ingredient6 = data.drinks[0].strIngredient6
                        let ingredient6measure = data.drinks[0].strMeasure6
                            if (ingredient6 !== null){
                            $("#cIngredients").append(`<li>${ingredient6measure} ${ingredient6}</li>`)}
                        let ingredient7 = data.drinks[0].strIngredient7
                        let ingredient7measure = data.drinks[0].strMeasure7
                            if (ingredient7 !== null){
                            $("#cIngredients").append(`<li>${ingredient7measure} ${ingredient7}</li>`)}                
                        let ingredient8 = data.drinks[0].strIngredient8
                        let ingredient8measure = data.drinks[0].strMeasure8
                            if (ingredient8 !== null){
                            $("#cIngredients").append(`<li>${ingredient8measure} ${ingredient8}</li>`)}                
                        let ingredient9 = data.drinks[0].strIngredient9
                        let ingredient9measure = data.drinks[0].strMeasure9
                            if (ingredient9 !== null){
                            $("#cIngredients").append(`<li>${ingredient9measure} ${ingredient9}</li>`)}                
                        let ingredient10 = data.drinks[0].strIngredient10
                        let ingredient10measure = data.drinks[0].strMeasure10
                            if (ingredient10 !== null){
                            $("#cIngredients").append(`<li>${ingredient10measure} ${ingredient10}</li>`)}                           
                        
                    //Display cocktail instructions
                        let instructions = data.drinks[0].strInstructions
                        $("#cInstructions").append(instructions)                           
                    })
})

// *END* API CALL, RESPONSE, AND PROPAGATION OF RECIPE SECTION



//This is from some testing I was doing, it logs user input, saves it to local storage, and then prints the saved content to a <p>
//

//TODO: lines 5-8 are commented out to avoid console errors while page is in progress
// var subBtn = document.getElementById(`submit`); //will change once we implement a 'save' button


// subBtn.addEventListener(`click`, submit); //will change once we implement a 'save' button

//TODO: when the user clicks 'save', add an element to the 'saved recipes' list and populate it with the data for that recipe
function createSavedRecipe() {
    //create anchor element
    let newRecipe = document.createElement("a");
    
    //create textnode for the anchor element - is this necessary with the .title method?
    let newLink = document.createTextNode("recipe name")//needs a variable to hold the recipe name for the link

    //appends the textnode to the anchor element
    newRecipe.appendChild(newLink);

    //sets the title for the link element
    newRecipe.title("recipe name");//needs a variable to hold the recipe name for the link

    //sets the href for the link element
    newRecipe.href = "link for recipe"//needs a variable to hold link for the recipe

    //add the new element to the 'Saved Recipes' list
    //this might work?  otherwise we have to go through the DOM tree the long way
    let links = document.getElementById("saved-recipes") //we need an id tag for the <ul>
    links.appendChild(newRecipe);
}


//this changes the <p> with id=saved to the last item in local storage
//TODO: instead of replacing the <p> content we need to add a new list element and add new content to it
function submit () {
    // Hides welcome page, displays recipe page -- K
    welcomePageEl.style.display = 'none'
    recipePageEl.style.display = 'block'
    // let content = document.getElementById(`text`).value;
    
    // console.log(`you clicked submit`);
    // console.log(content)
    // localStorage.setItem(`content`, content);
    // console.log(localStorage);
    
    // let savedContent = localStorage.getItem(`content`);
    // console.log(savedContent);

    // let saved = document.getElementByIsaved`);
    // console.log(`saved element `+saved)
    
    // saved.textContent = savedContent;
}
}

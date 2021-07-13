
// Hides recipe page on page load -- K
var welcomePageEl = document.getElementById("welcome-page")
var recipePageEl = document.getElementById("recipe-page")
recipePageEl.style.display = 'none'; 

//variable to keep track of the number of saved recipes
var numberSaved = 1;


let recipeNameSave;
let recipeURLSave;


// API CALL, RESPONSE, AND PROPAGATION OF RECIPE SECTION
$( "form" ).on( "submit", function(event) {
    event.preventDefault();
    loadRecipe()
})


// loadSaved();
onload = function() {
    loadSaved()
}
//TODO: adds links to the saved recipes section 
$("#save").click(function() {
    addLI();
    }
)

//clear saved recipes
$("#clear-saved").click(function() {
    localStorage.clear();
    $("#saved-recipes").empty();
    
})

//TODO: =============================
function addLI(){
    let linkId = "new-recipe" + numberSaved;
    $("#saved-recipes").append(`<li><a id=${linkId} href=${recipeURLSave}>${recipeNameSave}</a></li>`);
    console.log(`num saved: ${numberSaved}`)

    
    let link = {
        linkName: recipeNameSave,
        linkId: linkId,
        linkHref: recipeURLSave
    }

    //localStorage to save
    let stringified = JSON.stringify(link);
    localStorage.setItem(`link${numberSaved}`, stringified);
    console.log(JSON.parse(localStorage.getItem(`link${numberSaved}`)));
    numberSaved++;
    
}

function loadSaved() {
    let linkLength = localStorage.length;
    console.log(linkLength)
    for (let  i=0; i<linkLength; i++) {
        if (localStorage) {
            let savedLink = JSON.parse(localStorage.getItem(`link${i}`));
            let linkName = savedLink.linkName;
            let linkId = savedLink.linkId;
            let linkHref = savedLink.linkHref;
            $("#saved-recipes").append(`<li><a id=${linkId} href=${linkHref}>${linkName}</a></li>`);
        }       
    }
    numberSaved = linkLength;
}

//TODO: ^^^^^^^^^^

function loadRecipe(){
    welcomePageEl.style.display ='none';
    recipePageEl.style.display = 'block';
    // Clear previous recipe data
    $("#rSummary").text("");
    $("#rIngredients").text("");
    $("#rInstructions").text("");
    // Takes form input and prepares it for insertion into URL
    let tags = $("#mainForm").serialize();
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
                       let hiddenLabelC = document.getElementsByClassName("hidden-label-c")
            $(hiddenLabelC).css('visibility','visible')
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
}



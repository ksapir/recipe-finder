


// API CALL, RESPONSE, AND PROPAGATION OF RECIPE SECTION
$( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    // Takes form input and prepares it for insertion into URL
    let tags = $( this ).serialize();
    let foodFetchURL = `https://api.spoonacular.com/recipes/random?apiKey=3d1be3d4b7f847238cad30d1b21563cd&number=1&${tags}`
    fetch(foodFetchURL)
    .then(function (response) {
        return response.json()
        .then(function (data) {
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
})})})
// *END* API CALL, RESPONSE, AND PROPAGATION OF RECIPE SECTION

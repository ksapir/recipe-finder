// Hides recipe page on page load -- K
var welcomePageEl = document.getElementById("welcome-page")
var recipePageEl = document.getElementById("recipe-page")
recipePageEl.style.display = 'none';


//This is from some testing I was doing, it logs user input, saves it to local storage, and then prints the saved content to a <p>
//

//TODO: lines 5-8 are commented out to avoid console errors while page is in progress
var subBtn = document.getElementById(`submit`); //will change once we implement a 'save' button


subBtn.addEventListener(`click`, submit); //will change once we implement a 'save' button

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


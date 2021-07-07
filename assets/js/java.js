//This is from some testing I was doing, it logs user input, saves it to local storage, and then prints the saved content to a <p>
//

var subBtn = document.getElementById(`submit`);


subBtn.addEventListener(`click`, submit);


//this changes the <p> with id=saved to the last item in local storage
//TODO: instead of replacing the <p> content we need to add a new list element and add new content to it
function submit () {
    let content = document.getElementById(`text`).value;
    
    console.log(`you clicked submit`);
    console.log(content)
    localStorage.setItem(`content`, content);
    console.log(localStorage);
    
    let savedContent = localStorage.getItem(`content`);
    console.log(savedContent);

    let saved = document.getElementById(`saved`);
    console.log(`saved element `+saved)
    
    saved.textContent = savedContent;
}


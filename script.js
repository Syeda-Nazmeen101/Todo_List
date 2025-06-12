//event bubbling

// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let li = document.querySelector("li");

// div.addEventListener("click" , function(event){
//     event.stopPropagation();
//     console.log("div was clicked");
// });

// ul.addEventListener("click" , function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// });

// li.addEventListener("click" , function(event){
//     event.stopPropagation();
//     console.log("li was clicked");
// });

//toto list


let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click" , function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let Delbtn = document.createElement("button");
    Delbtn.innerText = "Delete";
    Delbtn.classList.add("delete");

     // Add delete event listener to the button
     Delbtn.addEventListener("click", function() {
        item.remove(); // Removes the entire list item
    });

    item.appendChild(Delbtn);
    ul.appendChild(item);
    inp.value = "";

    //event deligation

    


});

ul.addEventListener("click" , function(event){
    // console.log(event.target);
    // console.log("button clicked");

    // console.dir(event.target.nodeName);

    if(event.target.nodeName == "BUTTON"){
        let item = event.target.parentElement;
        item.remove();
    }
});

// let Delbtns = document.querySelectorAll(".delete");
// for(Delbtn of Delbtns){
//     Delbtn.addEventListener("click" , function(){
//         // console.log("element is deleted");
//         let par = this.parentElement;
//         par.remove();
//     });
// }
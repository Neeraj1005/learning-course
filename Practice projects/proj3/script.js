const courses = [
    {
        name: "Complete ReactJs course",
        price: "450",
    },
    {
        name: "Complete MEARN course",
        price: "600",
    },
    {
        name: "Complete Angular course",
        price: "250",
    },
    {
        name: "Complete Laravel course",
        price: "100",
    },
    {
        name: "Complete C course",
        price: "750",
    },
];

// <ul class="list-group">
//         <!-- <li class="list-group-item">
//           Javascript course<span class="float-right">$2.1</span>
//         </li> -->
// </ul>

function generateLIST() {

    const ul = document.querySelector(".list-group");

    ul.innerHTML = "";  // for reset the ul elements when sort button clicked
    
    courses.forEach((course) => {
        const li = document.createElement("li"); // createElement will create a tag element
        li.classList.add("list-group-item");
        const name = document.createTextNode(course.name);
        //inject in li tag
        li.appendChild(name);
        
        //span create stendalone
        const span = document.createElement("span");
        span.classList.add("float-right");        
        const price = document.createTextNode("$ " + course.price);
        span.appendChild(price);

        //add span in li
        li.appendChild(span);

        //add li in ul tag
        ul.appendChild(li);
    } );
}


// generateLIST();

window.addEventListener("load", generateLIST);


const button1 = document.querySelector(".sort-btn");
const button2 = document.querySelector(".sort-btn2");
  
button1.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price);
    generateLIST();
});
button2.addEventListener("click", () => {
    courses.sort((a, b) => b.price - a.price);
    generateLIST();
});
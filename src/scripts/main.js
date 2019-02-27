console.log("linked main.js");


/*
    This code will only return the first section component
    even though there are three components with the same
    class
*/
// const sectionEl = document.querySelector(".article__section");
// console.log("Contents of variable sectionEL", sectionEl);

/*
    This code will only return the third section component
*/
// const footerEl = document.querySelector(".article__footer");
// console.log(footerEl);

/*
    Get reference to the section with the class of `smallText`
    and remove that class. Then add a new class of `largeText`
*/
const smallTextEl = document.querySelector(".smallText");
console.log('before', smallTextEl);
smallTextEl.classList.remove("smallText");
smallTextEl.classList.add("largeText");
console.log('after', smallTextEl);

smallTextEl.textContent = "NEW TEXT";

/*
    This code will return all section components
*/
const sectionEl = document.querySelectorAll("section");
console.log("all elements with class article_section", sectionEl);

sectionEl[0].classList.add("new_class");


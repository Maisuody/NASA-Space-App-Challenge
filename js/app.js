/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const unorder1= document.querySelector('.navbar__menu ul');
const AllSection = document.querySelectorAll('section');
const htt= document.querySelector('html');
//to make smooth scroll using css style 
htt.style.cssText = " scroll-behavior: smooth;";
//const header = document.querySelector('.navbar__menu')
console.log(AllSection.length);
for(let i=0; i< AllSection.length; i++)
{
	//Create list, then adding link 
	const newLink = document.createElement('li');
	const newL = document.createElement('a');
  
	let R= 1+i; //to add section number
	
	// Scroll to section on link click
	newL.setAttribute("href", `#section${R}`);
	//add attribute to add all style
	newL.setAttribute("class", "current");
  var x= AllSection[i].getAttribute("name");

	newL.textContent= x;
  newL.setAttribute("class", "menu__link");

	newLink.appendChild(newL);
	
	unorder1.appendChild(newLink);
}


//Add class to the target element
const add_class = (element, class_name) => {
  const section = document.querySelector(element.hash);
  section.classList.add(class_name);
};

//remove class from a list of elements
const remove_class = (class_name) => {
  const sections = document.querySelectorAll("section");
  for (section of sections) {
    section.classList.remove(class_name);
  }
};

//find the position in y axis coordinates of the section element and return its value
const element_Position = (element)=>{
  let body_element = document.body.getBoundingClientRect().top;
  let element_section = element.getBoundingClientRect().top;
  let position = element_section - body_element;
  return position; 
};

//show active links while scrolling 
const section_Position_scrolling = ()=>{
  const section_elements = document.querySelectorAll("section");
  const section_points = [];
  for (section_element of section_elements){
    section_points.push(element_Position(section_element));
  }
  return section_points;
};

//this function work to make the link interact with the user 
const interactive_on_nav_link = (evt)=>{
  if(evt.target.className == "menu__link"){
    const section_element = document.querySelector(evt.target.hash)
    const section_on = element_Position(section_element);
    window.scrollTo({top:section_on, behavior: "smooth"});
    remove_class("your-active-class");
    add_class(evt.target, "your-active-class");
}};

//add some styles to highlight it and remove style according to this element is active ot note
const interactive_active_links = ()=>{
  const section_points = section_Position_scrolling();
  for(let i = 0; i < section_points.length; i++){
    const link_num = document.querySelectorAll(".menu__link");
    if(window.scrollY >= section_points[i] && !(window.scrollY > section_points[i+1])){
      link_num[i].style.cssText = "background-color: darkturquoise;";
    }else{
      link_num[i].style.cssText = "color: white;";
    }
  }
};
 
// Scroll to section on link click
document.addEventListener('click', interactive_on_nav_link);
//listen for a scroll event
window.addEventListener("scroll", interactive_active_links);

var x= document.getElementById("login");
var y= document.getElementById("register");
var z= document.getElementById("btn");

function register(){
  x.style.right = "-400px";
  y.style.right = "50";
  z.style.right= "110px";
};

function login(){
   x.style.right = "50px";
  y.style.right = "450";
  z.style.right= "0";
};



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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
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
    var ul = document.getElementById("navbar__list");
    var li = document.createElement("li");
    var anc = document.createElement("a");
    anc.setAttribute("href","#section1");
    anc.appendChild(document.createTextNode("Section 1"));
    li.appendChild(anc);
    ul.appendChild(li);
   
    var li = document.createElement("li");
    var anc = document.createElement("a");
    anc.setAttribute("href","#section2");
    li.appendChild(anc);
    anc.appendChild(document.createTextNode("Section 2"));
    ul.appendChild(li);

    var li = document.createElement("li");
    var anc = document.createElement("a");
    anc.setAttribute("href","#section3");
    li.appendChild(anc);
    anc.appendChild(document.createTextNode("Section 3"));
    ul.appendChild(li);

    var li = document.createElement("li");
    var anc = document.createElement("a");
    anc.setAttribute("href","#section4");
    li.appendChild(anc);
    anc.appendChild(document.createTextNode("Section 4"));
    ul.appendChild(li);

    var li = document.createElement("li");
    var anc = document.createElement("a");
    anc.setAttribute("href","#section5");
    li.appendChild(anc);
    anc.appendChild(document.createTextNode("Section 5"));
    ul.appendChild(li);




// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


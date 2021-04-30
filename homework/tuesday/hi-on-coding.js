function createAnchor(url, text, css){

    var anchor = document.createElement('a');
    anchor.setAttribute('class', css);
    anchor.setAttribute('href', url);
    anchor.textContent = text;

    return anchor
    
}

// grab an element that already exists

var container = document.querySelector('.container');


// create 2 anchor tags 

var homeAnchor = createAnchor("#", "Home", "nav-link active");
var categoriesAnchor = createAnchor("#", "Categories", "nav-link");


// homeAnchor.textContent = "Home"
// homeAnchor.setAttribute('class', "nav-link active");

// var categoriesAnchor = document.createElement('a');
// categoriesAnchor.textContent = "Categories";
// categoriesAnchor.setAttribute('class', 'nav-link');


// create nav bar

var nav = document.createElement('nav');
nav.setAttribute('class', "navbar navbar-expand-lg bg-blue")

nav.append(homeAnchor);
nav.append(categoriesAnchor);

container.append(nav);


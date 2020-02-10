const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav bar links
let navBar = document.querySelectorAll('nav a');
let navLinks = Object.values(siteContent['nav']);
for (let i =0; i < navBar.length; i++) {
  navBar[i].textContent = navLinks[i]
}

//heading 
let heading = document.querySelector('h1');
heading.textContent = siteContent['cta']['h1'];

//button
let btn = document.querySelector('button');
btn.textContent = siteContent['cta']['button'];

//header image
let headerImg = document.querySelector('#cta-img');
headerImg.src = siteContent['cta']['img-src'];

//upper content
let subHeadings = document.querySelectorAll('.text-content h4');
let subContent = document.querySelectorAll('.text-content p');

subHeadings[0].textContent = siteContent['main-content']['features-h4'];
subContent[0].textContent = siteContent['main-content']['features-content'];

subHeadings[1].textContent = siteContent['main-content']['about-h4']
subContent[1].textContent = siteContent['main-content']['about-content'];

//middle image
let middleImg = document.querySelector('.middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

//lower content 
subHeadings[2].textContent = siteContent['main-content']['services-h4'];
subContent[2].textContent = siteContent['main-content']['services-content'];

subHeadings[3].textContent = siteContent['main-content']['product-h4'];
subContent[3].textContent = siteContent['main-content']['product-content'];

subHeadings[4].textContent = siteContent['main-content']['vision-h4'];
subContent[4].textContent = siteContent['main-content']['vision-content'];

//contact section
let contactHeading = document.querySelector('.contact h4');
contactHeading.textContent = siteContent['contact']['contact-h4'];

let contactContent = document.querySelectorAll('.contact p');
let contactValues = Object.values(siteContent['contact']);

contactContent[0].textContent = contactValues[1];
contactContent[1].textContent = contactValues[2];
contactContent[2].textContent = contactValues[3];

//footer 
let footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];

//nav text to green
for (let i = 0; i < navBar.length; i++) {
  navBar[i].style.color = '#34EBAE';
}

//adding links to navBar
const portfolio = document.createElement('a');
portfolio.textContent = 'Portfolio';
portfolio.style.color = '#34EBAE';
const parent = document.querySelector('nav');
portfolio.href = 'https://jscheuble.github.io';

const twitter = document.createElement('a');
twitter.textContent = 'Twitter';
twitter.style.color = '#34EBAE';
twitter.href= 'https://twitter.com';

parent.appendChild(portfolio);
parent.prepend(twitter);

//stretch goal

heading.style.color = '#05079e';

let heads = document.querySelectorAll('h4');
for (let i = 0; i < heads.length; i++) {
  heads[i].style.color = '#05079e';
}

let hover = document.querySelector('.cta button:hover');
hover.style.background = '#05079e';

let container = document.querySelector('.container');
container.style.background = '#e4e4eb';
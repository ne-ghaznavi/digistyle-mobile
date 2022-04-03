// select element
let webstyle = document.getElementById('webstyle');


let hamburgerButton = document.getElementsByClassName('hamburger')[0];
let menuListCloseBtn = document.getElementsByClassName('menu-list-close-btn')[0];
let menuSection = document.getElementsByClassName('menu-section')[0];
let searchButton = document.getElementsByClassName('search-btn')[0];
let searchSection = document.getElementsByClassName('search-section')[0];
let searchSectionCloseBtn = document.getElementsByClassName('search-section-close-btn')[0];

let womanMenuButton = document.getElementById('woman-menu');
let manMenuButton = document.getElementById('man-menu');
let childMenuButton = document.getElementById('child-menu');
let beautyMenuButton = document.getElementById('beauty-menu');

let mainMenuList = document.getElementById('main-menu-list');
let womanMenuList = document.getElementById('woman-menu-list');
let manMenuList = document.getElementById('man-menu-list');
let childMenuList = document.getElementById('child-menu-list');
let beautyMenuList = document.getElementById('beauty-menu-list');

let womanTitleArrow = document.getElementById('woman-title-arrow');
let manTitleArrow = document.getElementById('man-title-arrow');
let childTitleArrow = document.getElementById('child-title-arrow');
let beautyTitleArrow = document.getElementById('beauty-title-arrow');

let womanSubMenuButton = document.getElementsByClassName('woman-menu-list-item');
let womanSubMenu = document.getElementsByClassName('woman-submenu-list');
let womanSubmenuTitleButton = document.getElementsByClassName('woman-submenu-title');

let manSubMenuButton = document.getElementsByClassName('man-menu-list-item');
let manSubMenu = document.getElementsByClassName('man-submenu-list');
let manSubmenuTitleButton = document.getElementsByClassName('man-submenu-title');

let childSubMenuButton = document.getElementsByClassName('child-menu-list-item');
let childSubMenu = document.getElementsByClassName('child-submenu-list');
let childSubmenuTitleButton = document.getElementsByClassName('child-submenu-title');

let beautySubMenuButton = document.getElementsByClassName('beauty-menu-list-item');
let beautySubMenu = document.getElementsByClassName('beauty-submenu-list');
let beautySubmenuTitleButton = document.getElementsByClassName('beauty-submenu-title');

let womanSub_SubMenuButton = document.getElementsByClassName('woman-submenu-list-item');

//footer-story-btn
// let footerStoryContent = document.querySelector('.footer-story-content');
// let footerStoryBtn = document.querySelector('.footer-story-btn');
// let footerStoryBtnText = footerStoryBtn.nextElementSibling;

// add event
hamburgerButton.addEventListener('click', showMenuSection);
menuListCloseBtn.addEventListener('click', hideMenuSection);
searchButton.addEventListener('click', showSearchSection);
searchSectionCloseBtn.addEventListener('click', hideSearchSection);

womanMenuButton.addEventListener('click', showWomanMenuList);
manMenuButton.addEventListener('click', showManMenuList);
childMenuButton.addEventListener('click', showChildMenuList);
beautyMenuButton.addEventListener('click', showBeautyMenuList);

womanTitleArrow.addEventListener('click', hideWomanMenuList);
manTitleArrow.addEventListener('click', hidemanMenuList);
childTitleArrow.addEventListener('click', hideChildMenuList);
beautyTitleArrow.addEventListener('click', hideBeautydMenuList);

// footerStoryBtn.addEventListener('click', () => {
//     footerStoryContent.classList.toggle('show-story-content');
// });

// woman summenu itarate
for (let i = 1; i < womanSubMenuButton.length; i++) {
    womanSubMenuButton[i].addEventListener('click', () => {
        womanSubMenu[i-1].classList.add('show-woman-sub-menu');
    });
}

// woman summenu Button itarate
for (let i = 0; i < womanSubmenuTitleButton.length; i++) {
    womanSubmenuTitleButton[i].firstElementChild.addEventListener('click', () => {
        womanSubMenu[i].classList.remove('show-woman-sub-menu');
    });
}

// man summenu itarate
for (let i = 1; i < manSubMenuButton.length; i++) {
    manSubMenuButton[i].addEventListener('click', () => {
        manSubMenu[i-1].classList.add('show-man-sub-menu');
    });
}

// man summenu Button itarate
for (let i = 0; i < manSubmenuTitleButton.length; i++) {
    manSubmenuTitleButton[i].firstElementChild.addEventListener('click', () => {
        manSubMenu[i].classList.remove('show-man-sub-menu');
    });
}

// child summenu itarate
for (let i = 1; i < childSubMenuButton.length; i++) {
    childSubMenuButton[i].addEventListener('click', () => {
        childSubMenu[i-1].classList.add('show-child-sub-menu');
    });
}

// child summenu Button itarate
for (let i = 0; i < childSubmenuTitleButton.length; i++) {
    childSubmenuTitleButton[i].firstElementChild.addEventListener('click', () => {
        childSubMenu[i].classList.remove('show-child-sub-menu');
    });
}

// beauty summenu itarate
for (let i = 1; i < beautySubMenuButton.length; i++) {
    beautySubMenuButton[i].addEventListener('click', () => {
        beautySubMenu[i-1].classList.add('show-beauty-sub-menu');
    });
}

// child summenu Button itarate
for (let i = 0; i < beautySubmenuTitleButton.length; i++) {
    beautySubmenuTitleButton[i].firstElementChild.addEventListener('click', () => {
        beautySubMenu[i].classList.remove('show-beauty-sub-menu');
    });
}

// woman sub_submenu itarate
for (let i = 1; i < womanSub_SubMenuButton.length; i++) {
    womanSub_SubMenuButton[i].addEventListener('click', () => {
        console.log(womanSub_SubMenuButton[i]);
    });
}

// function
function showMenuSection() {
    menuSection.classList.add('show-menu-section');

}

function hideMenuSection() {
    menuSection.classList.remove('show-menu-section');

}

function showSearchSection() {
    searchSection.classList.add('show-search-Section');
}

function hideSearchSection() {
    searchSection.classList.remove('show-search-Section');
}

function showWomanMenuList() {
    womanMenuList.classList.add('show-woman-menu-list');
    mainMenuList.classList.add('hide-main-menu-list');
}

function hideWomanMenuList() {
    womanMenuList.classList.remove('show-woman-menu-list');
    mainMenuList.classList.remove('hide-main-menu-list');
}

function showManMenuList() {
    manMenuList.classList.add('show-man-menu-list');
    mainMenuList.classList.add('hide-main-menu-list');
}

function hidemanMenuList() {
    manMenuList.classList.remove('show-man-menu-list');
    mainMenuList.classList.remove('hide-main-menu-list');
}

function showChildMenuList() {
    childMenuList.classList.add('show-child-menu-list');
    mainMenuList.classList.add('hide-main-menu-list');
}

function hideChildMenuList() {
    childMenuList.classList.remove('show-child-menu-list');
    mainMenuList.classList.remove('hide-main-menu-list');
}

function showBeautyMenuList() {
    beautyMenuList.classList.add('show-child-menu-list');
    mainMenuList.classList.add('hide-main-menu-list');
}

function hideBeautydMenuList() {
    beautyMenuList.classList.remove('show-child-menu-list');
    mainMenuList.classList.remove('hide-main-menu-list');
}
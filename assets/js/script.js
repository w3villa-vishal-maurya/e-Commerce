// Add header html file to landing Page
async function addHeaderInIndex() {
    try {
        let response = await fetch("./header.html");
        let data = await response.text();
        document.getElementById('headerPartInIndex').innerHTML = data;
        loadJS("./assets/js/login.js");
        loadJS("./assets/js/index.js")
        loadJS("./assets/js/searchPage.js") 
        loadJS("./assets/js/addToCart.js")
        loadJS("./assets/js/wishList.js")
    }
    catch { error => console.error('Error fetching content:', error) };
}

addHeaderInIndex();

// Add footer html file to landing Page
async function addFooterInIndex() {
    try {
        let response = await fetch("./footer.html");
        let data = await response.text();
        document.getElementById('indexFooter').innerHTML = data;
    }
    catch { error => console.error('Error fetching content:', error) };
}

addFooterInIndex();

function loadJS(FILE_URL, async = true) {
    let scriptEle = document.createElement("script");

    scriptEle.setAttribute("src", FILE_URL);
    scriptEle.setAttribute("type", "text/javascript");
    scriptEle.setAttribute("async", async);

    document.body.appendChild(scriptEle);

    // success event 
    scriptEle.addEventListener("load", () => {
        console.log("File loaded")
    });

    // error event
    scriptEle.addEventListener("error", (ev) => {
        console.log("Error on loading file", ev);
    });
}

// *******************************************Script of Search Page
// Add header html file to search Page
async function addHeaderInSearch() {
    try {
        let response = await fetch("./header.html");
        let data = await response.text();
        document.getElementById('headerPartInSearch').innerHTML = data;
        loadJS("./assets/js/login.js");
        loadJS("./assets/js/searchPage.js")
        loadJS("./assets/js/addToCart.js")
        loadJS("./assets/js/wishList.js")
        openCart();
        openWishlist();
    }
    catch { error => console.error('Error fetching content:', error) };
}


addHeaderInSearch();

// Add footer html file to search Page
async function addFooterInSearch() {
    try {
        let response = await fetch("./footer.html");
        let data = await response.text();
        document.getElementById('searchFooter').innerHTML = data;
    }
    catch { error => console.error('Error fetching content:', error) };
}

addFooterInSearch();




// ***************************************************************************Script for Product page
async function addHeaderInProduct() {
    try {
        let response = await fetch("./header.html");
        let data = await response.text();
        document.getElementById('headerPartInProduct').innerHTML = data;
        loadJS("./assets/js/login.js");
        loadJS("./assets/js/searchPage.js")
        loadJS("./assets/js/addToCart.js")
        loadJS("./assets/js/wishList.js")
        openCart();
        openWishlist();
    }
    catch { error => console.error('Error fetching content:', error) };
}

addHeaderInProduct();

// Add footer html file to product Page
async function addFooterInProduct() {
    try {
        let response = await fetch("./footer.html");
        let data = await response.text();
        document.getElementById('productFooter').innerHTML = data;
    }
    catch { error => console.error('Error fetching content:', error) };
}

addFooterInProduct();

var aboutProduct = {
    "Description": "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sapient Hello how ",
    "Specification": "Specification Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sapient Hello how ",
    "reviews": "reviews Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sapient Hello how ",
    "Custom Tabs": "Custom Tabs Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sapient Hello how ",
}

var aboutProductTab = document.getElementsByClassName("overview_slide");

for (let i = 0; i < aboutProductTab.length; i++) {
    aboutProductTab[i].onclick = function () {
        var clickedValue = this.innerHTML;
        document.getElementById("truncate").innerHTML = aboutProduct[clickedValue];

        for (var j = 0; j < aboutProductTab.length; j++) {
            aboutProductTab[j].style["border-bottom"] = "0px";
            aboutProductTab[j].style["color"] = "gray";
        }

        this.style["border-bottom"] = "2px solid orange";
        this.style["color"] = "black";

    }
}

let sapmleImg = [
    "./assets/images/camera1.avif",
    "./assets/images/campng.png",
    "./assets/images/computer.avif",
    "./assets/images/mobile2.avif",
    "./assets/images/mobile3.avif",
    "./assets/images/mobile1.avif"
]

let sampleImgTab = document.getElementsByClassName("sample_img");

for (let i = 0; i < sampleImgTab.length; i++) {
    sampleImgTab[i].onclick = function () {
        var clickedImg = this.innerHTML;
        document.getElementById("appleproduct").src = sapmleImg[i];
    }
}


// **************************************************************Add to cart Script
async function addHeaderInAddtoCart() {
    try {
        let response = await fetch("./header.html");
        let data = await response.text();
        document.getElementById('headerPartInAddToCart').innerHTML = data;
        loadJS("./assets/js/login.js");
        loadJS("./assets/js/searchPage.js")
        loadJS("./assets/js/wishList.js")
        loadJS("./assets/js/addToCart.js")
        searchInput();
        openWishlist();
    }
    catch { error => console.error('Error fetching content:', error) };
}

addHeaderInAddtoCart();

// Add footer html file to addToCart Page
async function addFooterInaddToCart() {
    try {
        let response = await fetch("./footer.html");
        let data = await response.text();
        document.getElementById('addToCartFooter').innerHTML = data;
    }
    catch { error => console.error('Error fetching content:', error) };
}

addFooterInaddToCart();



function openCart() {
    let cartBtn = document.querySelector("#cartbtn");
    cartBtn.addEventListener("click", () => {
        gotoAddToCart("addToCart.html");
    })
}

let gotoAddToCart = (link) => {
    window.location.href = link;
}

// Switch to productPage *********
// *********************************
function switchToProductPage(className) {
    let seeProductBtn = document.getElementsByClassName(className);
    if (seeProductBtn) {
        for (let j = 0; j < seeProductBtn.length; j++) {
            seeProductBtn[j].addEventListener("click", () => {
                let seeProduct = seeProductBtn[j].parentElement.id;
                gotoProductPage("productPage.html")
            })
        }
    }
    else{
        console.log("switchToProductPage error..");
    }

    let gotoProductPage = (link) => {
        window.location.href = link;
    }
}

// ***********************************************************************Wishlist Page
async function addHeaderInWishlist() {
    try {
        let response = await fetch("./header.html");
        let data = await response.text();
        document.getElementById('headerPartInWishlist').innerHTML = data;
        loadJS("./assets/js/login.js");
        loadJS("./assets/js/searchPage.js")
        loadJS("./assets/js/wishList.js")
        loadJS("./assets/js/addToCart.js")
        searchInput();
    }
    catch { error => console.error('Error fetching content:', error) };
}

addHeaderInWishlist();

// Add footer html file to addToCart Page
async function addFooterInWishlist() {
    try {
        let response = await fetch("./footer.html");
        let data = await response.text();
        document.getElementById('addWishlistFooter').innerHTML = data;
    }
    catch { error => console.error('Error fetching content:', error) };
}

addFooterInWishlist();

function openWishlist() {
    let wishlistBtn = document.querySelector("#wishList");
    wishlistBtn.addEventListener("click", () => {
        gotoWishList("wishlist.html");
    })
}

let gotoWishList = (link) => {
    window.location.href = link;
}




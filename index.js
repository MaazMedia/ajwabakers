// Add JavaScript to toggle the active class on the nav-menu
document.querySelector(".nav-toggle").addEventListener("click", function () {
  document.querySelector(".nav-menu").classList.toggle("active");
});
// AJWA BAKERS, SWEETS & RESTAURANT KHARIAN
// ADDRESS: NEAR PIA OFFICE G.T,ROAD KHARIAN CANTT
// PHONE NO: 053-7611002 | 0333-3331029

// AJWA BAKERS, SWEETS & RESTAURANT JHELUM
// ADDRESS: CHOWANI CHOWK G.T,ROAD JHELUM CANTT
// PHONE NO: 0544627474,75 | 0343-5990092

// AJWA BAKERS, SWEETS & RESTAURANT GUJRAT
// ADDRESS: NEAR ZAMEENDARA COLLEGE BHIMBER ROAD GUJRAT
// PHONE NO: 053-3600699 | 0333-3336957-8

// AJWA BAKERS, SWEETS & RESTAURANT LALAMUSA
// ADDRESS: CITY MALL G.T,ROAD LALAMUSA
// PHONE NO: 053-7516786 | 0333-3331027

// AJWA BAKERS, SWEETS & RESTAURANT MANDI BAHUDDIN
// ADDRESS: NEAR CHEEMA CHOWK PHALIA ROAD MANDI BAHUDDIN
// PHONE NO: 054-6515300 | 0333-0009145

// AJWA BAKERS, SWEETS & RESTAURANT WAZIRABAD
// ADDRESS: KACHEHRI CHOWK SIALKOT ROAD WAZIRABAD
// PHONE NO: 055-6600355 | 0333-3336951

// AJWA BAKERS, SWEETS & RESTAURANT GUJRAT
// ADDRESS: KACHARI CHOWK, JALAPUR GATTAN ROAD, GUJRAT
// PHONE NO: 053-3600696 | 0333-3336952

// AJWA BAKERS, SWEETS & RESTAURANT MIRPUR
// ADDRESS: ALLAMA IQBAL ROAD,NEAR GIRLS COLLEGE ,KALYAL MIRPUR
// PHONE NO: 05827-545959 | 0317-7357772-73

// AJWA BAKERS, SWEETS & RESTAURANT SAMBRIAL
// ADDRESS: AJWA BAKERS AND SWEETS SAMBRIAL, SIALKOT – WAZIRABAD DUAL CARRIAGEWAY, SAMBRIAL, SIALKOT, PUNJAB
// PHONE NO: 0333 3339561
document.getElementById("about-us-text").innerHTML = `
Welcome to Ajwa Fine Dining, home of authentic South Asian cuisine. We are proud to serve the best Pakistani cuisine with a delectable menu that offers authentic traditional flavors.
                Our extended menu provides a variety of food ranging from traditional, Barbeque, fast food, and kid-friendly items. We ensure to prepare our food with quality ingredients and zabiha halal meat. With a variety of menu choices, we are also known as the premium caterers in the Midwest with out-of-state catering options available.
`;
var mainSection = document.querySelector("main");
var menuSection = document.querySelector(".menu-section");
var contactSection = document.querySelector(".contact-section");
var aboutSection = document.querySelector(".about-section");
var menuButton = document.getElementById("menuButton");
var contactButton = document.getElementById("contactButton");
var aboutButton = document.getElementById("aboutButton");
function onMenuClick() {
  resetClick();

  mainSection.classList.add("slide-out-to-right");

  var menuSection = document.getElementById("menu-section");
  menuSection.classList.add("slide-out-to-left");
  menuSection.classList.add("menu-section-now");

  var contactButton = document.getElementById("contactButton");
  // var menuHeading = document.getElementById("menuHeading");

  // Show the transformed heading

  // Swap positions of the menu and contact buttons
  menuButton.classList.add("hidden");
  menuSection.classList.remove("hidden");
  // menuHeading.classList.remove("hidden");
  // menuHeading.classList.add("heading-menu");
  contactButton.classList.remove("hidden");
}

function resetClick() {
  var menuSection = document.querySelector(".menu-section");
  var aboutButton = document.getElementById("aboutButton");
  var contactButton = document.getElementById("contactButton");
  var aboutSection = document.querySelector(".about-section");
  var contactSection = document.querySelector(".contact-section");

  menuSection.classList.remove("menu-section-now");
  mainSection.classList.remove("slide-out-to-left");
  aboutSection.classList.remove("slide-out-to-left");
  contactSection.classList.remove("slide-out-to-left");

  mainSection.classList.remove("slide-out-to-right");
  menuButton.classList.remove("hidden");
  aboutButton.classList.remove("hidden");
  contactButton.classList.remove("hidden");

  contactSection.classList.add("hidden");
  aboutSection.classList.add("hidden");

  // Also hide any heading elements you might have
  // document.getElementById("menuHeading").classList.add("hidden");
  menuSection.classList.add("hidden");
  menuSection.classList.remove("slide-out-to-left");
  // document.getElementById("aboutHeading").classList.add("hidden");
  // document.getElementById("contactHeading").classList.add("hidden");
  distributeMenuItems();
}

function onHomeClick() {
  resetClick();
  mainSection.classList.add("slide-out-to-left");
}

function onAboutClick() {
  resetClick();

  mainSection.classList.add("slide-out-to-right");

  var aboutSection = document.getElementById("about-section");
  aboutSection.classList.add("slide-out-to-left");
  aboutSection.classList.add("menu-section-now");

  var aboutButton = document.getElementById("aboutButton");
  // var aboutHeading = document.getElementById("aboutHeading");

  // Show the transformed heading
  // aboutHeading.classList.remove("hidden");
  // aboutHeading.classList.add("heading-menu");

  // Swap positions of the menu and about buttons
  aboutButton.classList.add("hidden");
  aboutSection.classList.remove("hidden");
  document.getElementById("contactButton").classList.remove("hidden");
}

function onContactClick() {
  resetClick();

  mainSection.classList.add("slide-out-to-right");

  var contactSection = document.getElementById("contact-section");
  contactSection.classList.add("slide-out-to-left");
  contactSection.classList.add("menu-section-now");

  var contactButton = document.getElementById("contactButton");
  // var contactHeading = document.getElementById("contactHeading");

  // Show the transformed heading
  // contactHeading.classList.remove("hidden");
  // contactHeading.classList.add("heading-menu");

  // Swap positions of the menu and contact buttons
  contactButton.classList.add("hidden");
  contactSection.classList.remove("hidden");
  document.getElementById("aboutButton").classList.remove("hidden"); // Fixed: Show the aboutButton instead of contactButton
}
async function addLocation(imageSrc, mapSrc, address, phone, locationName) {
  // Create elements
  var Locations = await document.getElementById("OUR-LOCATIONS");

  var locationContainer = document.createElement("div");
  locationContainer.classList.add("LocationContainer");

  var locationImage = document.createElement("img");
  locationImage.src = imageSrc;
  locationImage.alt = "Restaurant Image";
  locationImage.id = "locationImage";

  var locationNameElement = document.createElement("p");
  locationNameElement.id = "locationName";
  locationNameElement.textContent = locationName;

  var locationAddress = document.createElement("p");
  locationAddress.id = "locationAddress";
  locationAddress.textContent = "ADDRESS: " + address;

  var locationPhone = document.createElement("p");
  locationPhone.id = "locationPhone";
  locationPhone.textContent = "PHONE NO: " + phone;

  var locationGetButton = document.createElement("div");
  locationGetButton.classList.add("LocationGetButton");

  var buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttons");

  var getButton = document.createElement("button");
  getButton.classList.add("blob-btn");

  getButton.textContent = "Call Now";
  if (getButton) {
    // Generate a unique ID using a more reliable method
    const num = "button_" + Date.now() + "_" + Math.floor(Math.random() * 1000);
    getButton.setAttribute("id", num);

    // Retrieve the button using the generated ID
    const buttonid = document.getElementById(num);

    if (buttonid) {
      buttonid.addEventListener("click", function () {
        // Assuming 'phone' is defined somewhere in your code
        const nums = phone.split(" ")[2];
        window.open(`tel:${nums}`);
      });
    }
  }
  var innerBlob = document.createElement("span");
  innerBlob.classList.add("blob-btn__inner");

  var blobsContainer = document.createElement("span");
  blobsContainer.classList.add("blob-btn__blobs");

  for (let i = 0; i < 4; i++) {
    var blob = document.createElement("span");
    blob.classList.add("blob-btn__blob");
    blobsContainer.appendChild(blob);
  }

  // Append elements
  innerBlob.appendChild(blobsContainer);
  getButton.appendChild(innerBlob);
  buttonsContainer.appendChild(getButton);
  buttonsContainer.innerHTML +=
    "<br/><svg xmlns='http://www.w3.org/2000/svg' version='1.1'><defs><filter id='goo'><feGaussianBlur in='SourceGraphic' result='blur' stdDeviation='10'></feGaussianBlur><feColorMatrix in='blur' mode='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7' result='goo'></feColorMatrix><feBlend in2='goo' in='SourceGraphic' result='mix'></feBlend></filter></defs></svg>";

  locationGetButton.appendChild(buttonsContainer);
  var glowLine = document.createElement("div");
  glowLine.classList.add("glow-line");
  Locations.appendChild(glowLine);
  Locations.appendChild(locationImage);
  Locations.appendChild(locationNameElement);
  Locations.appendChild(locationAddress);
  Locations.appendChild(locationPhone);
  Locations.appendChild(locationGetButton);

  // Append the new location section to the container
  document.getElementById("OUR-LOCATIONS").appendChild(locationContainer);
}
// Example usage:

addLocation(
  "./assets/Ajwa-kharian.jpg",
  "https://maps.app.goo.gl/vcfUZSxYvLGwq7LJ7",
  "Near PIA Office G.T, Road Kharian Cantt",
  "053-7611002 | 0333-3331029",
  "AJWA BAKERS, SWEETS & RESTAURANT KHARIAN"
);

addLocation(
  "./assets/Ajwa-jehlum.jpg",
  "https://maps.app.goo.gl/vcfUZSxYvLGwq7LJ7",
  "Chowani Chowk G.T, Road Jhelum Cantt",
  "0544627474,75 | 0343-5990092",
  "AJWA BAKERS, SWEETS & RESTAURANT JHELUM"
);

addLocation(
  "assets/Ajwa-Gujrat-Kchahry.jpeg",
  "https://maps.app.goo.gl/vcfUZSxYvLGwq7LJ7",
  "Near Zameendara College Bhimber Road Gujrat",
  "053-3600699 | 0333-3336957-8",
  "AJWA BAKERS, SWEETS & RESTAURANT GUJRAT"
);

addLocation(
  "./assets/Ajwa-Lalamusa-jpg.jpg",
  "https://maps.app.goo.gl/vcfUZSxYvLGwq7LJ7",
  "City Mall G.T, Road Lalamusa",
  "053-7516786 | 0333-3331027",
  "AJWA BAKERS, SWEETS & RESTAURANT LALAMUSA"
);

addLocation(
  "./assets/Mandi-Ajwa.jpg",
  "https://maps.app.goo.gl/vcfUZSxYvLGwq7LJ7",
  "Near Cheema Chowk Phalia Road Mandi Bahuddin",
  "054-6515300 | 0333-0009145",
  "AJWA BAKERS, SWEETS & RESTAURANT MANDI BAHUDDIN"
);

addLocation(
  "assets/Ajwa-Sambrial.jpeg",
  "https://maps.app.goo.gl/vcfUZSxYvLGwq7LJ7",
  "Kachehri Chowk Sialkot Road Wazirabad",
  "055-6600355 | 0333-3336951",
  "AJWA BAKERS, SWEETS & RESTAURANT WAZIRABAD"
);

addLocation(
  "assets/Ajwa-jehlum.jpg",
  "https://maps.app.goo.gl/vcfUZSxYvLGwq7LJ7",
  "Kachari Chowk, Jalapur Gattan Road, Gujrat",
  "053-3600696 | 0333-3336952",
  "AJWA BAKERS, SWEETS & RESTAURANT GUJRAT"
);

addLocation(
  "./assets/Ajwa-mirpur.jpg",
  "https://maps.app.goo.gl/vcfUZSxYvLGwq7LJ7",
  "Allama Iqbal Road, Near Girls College, Kalyal Mirpur",
  "05827-545959 | 0317-7357772-73",
  "AJWA BAKERS, SWEETS & RESTAURANT MIRPUR"
);

addLocation(
  "./assets/Ajwa-Sambrial.jpeg",
  "https://maps.app.goo.gl/vcfUZSxYvLGwq7LJ7",
  "Ajwa Bakers and Sweets Sambrial, Sialkot – Wazirabad Dual Carriageway, Sambrial, Sialkot, Punjab",
  "0333 3339561",
  "AJWA BAKERS, SWEETS & RESTAURANT SAMBRIAL"
);
document.getElementById("theme-btn").addEventListener("click", function () {
  var body = document.body;
  body.classList.toggle("light-mode");
});

function distributeMenuItems() {
  // Get all menu items
  console.log("started");
  const menuContainer = document.getElementById("show-menu");
  menuContainer.innerHTML = `
  <div id="show-menu" class="show-menu-container">
  <div class="row menu-container">

    <div class="col-lg-6 menu-item filter-starters">
      <div class="menu-content">
        <a href="#">Lobster Bisque</a><span>$5.95</span>
      </div>
      <div class="menu-ingredients">
        Lorem, deren, trataro, filede, nerada
      </div>
    </div>

    <div class="col-lg-6 menu-item filter-specialty">
      <div class="menu-content">
        <a href="#">Bread barrel</a><span>$6.95</span>
      </div>
      <div class="menu-ingredients">
        Lorem, deren, trataro, filede, nerada
      </div>
    </div>

    <div class="col-lg-6 menu-item filter-starters">
      <div class="menu-content">
        <a href="#">Crab Cake</a><span>$7.95</span>
      </div>
      <div class="menu-ingredients">
        A delicate crab cake served on a toasted roll with lettuce and tartar sauce
      </div>
    </div>

    <div class="col-lg-6 menu-item filter-salads">
      <div class="menu-content">
        <a href="#">Caesar Selections</a><span>$8.95</span>
      </div>
      <div class="menu-ingredients">
        Lorem, deren, trataro, filede, nerada
      </div>
    </div>

    <div class="col-lg-6 menu-item filter-specialty">
      <div class="menu-content">
        <a href="#">Tuscan Grilled</a><span>$9.95</span>
      </div>
      <div class="menu-ingredients">
        Grilled chicken with provolone, artichoke hearts, and roasted red pesto
      </div>
    </div>

    <div class="col-lg-6 menu-item filter-starters">
      <div class="menu-content">
        <a href="#">Mozzarella Stick</a><span>$4.95</span>
      </div>
      <div class="menu-ingredients">
        Lorem, deren, trataro, filede, nerada
      </div>
    </div>

    <div class="col-lg-6 menu-item filter-salads">
      <div class="menu-content">
        <a href="#">Greek Salad</a><span>$9.95</span>
      </div>
      <div class="menu-ingredients">
        Fresh spinach, crisp romaine, tomatoes, and Greek olives
      </div>
    </div>

    <div class="col-lg-6 menu-item filter-salads">
      <div class="menu-content">
        <a href="#">Spinach Salad</a><span>$9.95</span>
      </div>
      <div class="menu-ingredients">
        Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette
      </div>
    </div>

    <div class="col-lg-6 menu-item filter-specialty">
      <div class="menu-content">
        <a href="#">Lobster Roll</a><span>$12.95</span>
      </div>
      <div class="menu-ingredients">
        Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll
      </div>
    </div>
  `;
  const menuItems = document.querySelectorAll(".menu-item");

  // Create an object to store menu items based on categories
  const categories = {};
  console.log(menuItems);
  // Iterate through each menu item and categorize them
  menuItems.forEach((item) => {
    // Get the category of the menu item
    const category = item.classList.contains("filter-starters")
      ? "starters"
      : item.classList.contains("filter-specialty")
      ? "specialty"
      : item.classList.contains("filter-salads")
      ? "salads"
      : "other";
    console.log(category);
    // Add the menu item to the corresponding category
    if (!categories[category]) {
      categories[category] = [];
    }

    categories[category].push(item.outerHTML);
  });

  // Get the menu container element

  // Clear the current content of the menu container
  menuContainer.innerHTML = "";

  // Append the menu items back to the menu container based on categories
  Object.keys(categories).forEach((category) => {
    // Create a div for each category
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category-container");
    categoryDiv.innerHTML = `<h2>${
      category.charAt(0).toUpperCase() + category.slice(1)
    }</h2>`;
    console.log(categoryDiv);

    // Append menu items of the category to the category div
    categories[category].forEach((menuItem) => {
      categoryDiv.innerHTML += menuItem;
    });
    // Append the category div to the menu container
    menuContainer.appendChild(categoryDiv);
    console.log(menuContainer);
  });
}
function distributeStarterItems() {
  // Get all menu items
  const menuContainer = document.getElementById("show-menu");
  menuContainer.innerHTML = `
  <div id="show-menu" class="show-menu-container">
  <div class="row menu-container">

    <div class="col-lg-6 menu-item filter-starters">
      <div class="menu-content">
        <a href="#">Lobster Bisque</a><span>$5.95</span>
      </div>
      <div class="menu-ingredients">
        Lorem, deren, trataro, filede, nerada
      </div>
    </div>

    <div class="col-lg-6 menu-item filter-specialty">
      <div class="menu-content">
        <a href="#">Bread barrel</a><span>$6.95</span>
      </div>
      <div class="menu-ingredients">
        Lorem, deren, trataro, filede, nerada
      </div>
    </div>

    <div class="col-lg-6 menu-item filter-starters">
      <div class="menu-content">
        <a href="#">Crab Cake</a><span>$7.95</span>
      </div>
      <div class="menu-ingredients">
        A delicate crab cake served on a toasted roll with lettuce and tartar sauce
      </div>
    </div>

    <div class="col-lg-6 menu-item filter-salads">
      <div class="menu-content">
        <a href="#">Caesar Selections</a><span>$8.95</span>
      </div>
      <div class="menu-ingredients">
        Lorem, deren, trataro, filede, nerada
      </div>
    </div>

    <div class="col-lg-6 menu-item filter-specialty">
      <div class="menu-content">
        <a href="#">Tuscan Grilled</a><span>$9.95</span>
      </div>
      <div class="menu-ingredients">
        Grilled chicken with provolone, artichoke hearts, and roasted red pesto
      </div>
    </div>

    <div class="col-lg-6 menu-item filter-starters">
      <div class="menu-content">
        <a href="#">Mozzarella Stick</a><span>$4.95</span>
      </div>
      <div class="menu-ingredients">
        Lorem, deren, trataro, filede, nerada
      </div>
    </div>

    <div class="col-lg-6 menu-item filter-salads">
      <div class="menu-content">
        <a href="#">Greek Salad</a><span>$9.95</span>
      </div>
      <div class="menu-ingredients">
        Fresh spinach, crisp romaine, tomatoes, and Greek olives
      </div>
    </div>

    <div class="col-lg-6 menu-item filter-salads">
      <div class="menu-content">
        <a href="#">Spinach Salad</a><span>$9.95</span>
      </div>
      <div class="menu-ingredients">
        Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette
      </div>
    </div>

    <div class="col-lg-6 menu-item filter-specialty">
      <div class="menu-content">
        <a href="#">Lobster Roll</a><span>$12.95</span>
      </div>
      <div class="menu-ingredients">
        Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll
      </div>
    </div>
  `;
  console.log("started");
  const menuItems = document.querySelectorAll(".menu-item");

  // Create an object to store menu items based on categories
  const categories = {};
  console.log(menuItems);
  // Iterate through each menu item and categorize them
  menuItems.forEach((item) => {
    // Get the category of the menu item
    const category = item.classList.contains("filter-starters")
      ? "starters"
      : "other";
    console.log(category);
    // Add the menu item to the corresponding category
    if (!categories[category]) {
      categories[category] = [];
    }

    categories[category].push(item.outerHTML);
  });

  // Get the menu container element
  // Clear the current content of the menu container
  menuContainer.innerHTML = "";

  // Append the menu items back to the menu container based on categories
  Object.keys(categories).forEach((category) => {
    // Create a div for each category
    if (category == "starters") {
      const categoryDiv = document.createElement("div");
      categoryDiv.classList.add("category-container");
      categoryDiv.innerHTML = `<h2>${
        category.charAt(0).toUpperCase() + category.slice(1)
      }</h2>`;
      console.log(categoryDiv);

      // Append menu items of the category to the category div
      categories[category].forEach((menuItem) => {
        categoryDiv.innerHTML += menuItem;
      });
      // Append the category div to the menu container
      menuContainer.appendChild(categoryDiv);
      console.log(menuContainer);
    }
  });
}

function distributeSpecialityItems() {
  // Get all menu items
  console.log("started");
  const menuContainer = document.getElementById("show-menu");
  menuContainer.innerHTML = `
  <div id="show-menu" class="show-menu-container">
  <div class="row menu-container">

    <div class="col-lg-6 menu-item filter-starters">
      <div class="menu-content">
        <a href="#">Lobster Bisque</a><span>$5.95</span>
      </div>
      <div class="menu-ingredients">
        Lorem, deren, trataro, filede, nerada
      </div>
    </div>

    <div class="col-lg-6 menu-item filter-specialty">
      <div class="menu-content">
        <a href="#">Bread barrel</a><span>$6.95</span>
      </div>
      <div class="menu-ingredients">
        Lorem, deren, trataro, filede, nerada
      </div>
    </div>

    <div class="col-lg-6 menu-item filter-starters">
      <div class="menu-content">
        <a href="#">Crab Cake</a><span>$7.95</span>
      </div>
      <div class="menu-ingredients">
        A delicate crab cake served on a toasted roll with lettuce and tartar sauce
      </div>
    </div>

    <div class="col-lg-6 menu-item filter-salads">
      <div class="menu-content">
        <a href="#">Caesar Selections</a><span>$8.95</span>
      </div>
      <div class="menu-ingredients">
        Lorem, deren, trataro, filede, nerada
      </div>
    </div>

    <div class="col-lg-6 menu-item filter-specialty">
      <div class="menu-content">
        <a href="#">Tuscan Grilled</a><span>$9.95</span>
      </div>
      <div class="menu-ingredients">
        Grilled chicken with provolone, artichoke hearts, and roasted red pesto
      </div>
    </div>

    <div class="col-lg-6 menu-item filter-starters">
      <div class="menu-content">
        <a href="#">Mozzarella Stick</a><span>$4.95</span>
      </div>
      <div class="menu-ingredients">
        Lorem, deren, trataro, filede, nerada
      </div>
    </div>

    <div class="col-lg-6 menu-item filter-salads">
      <div class="menu-content">
        <a href="#">Greek Salad</a><span>$9.95</span>
      </div>
      <div class="menu-ingredients">
        Fresh spinach, crisp romaine, tomatoes, and Greek olives
      </div>
    </div>

    <div class="col-lg-6 menu-item filter-salads">
      <div class="menu-content">
        <a href="#">Spinach Salad</a><span>$9.95</span>
      </div>
      <div class="menu-ingredients">
        Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette
      </div>
    </div>

    <div class="col-lg-6 menu-item filter-specialty">
      <div class="menu-content">
        <a href="#">Lobster Roll</a><span>$12.95</span>
      </div>
      <div class="menu-ingredients">
        Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll
      </div>
    </div>
  `;
  // Create an object to store menu items based on categories
  const categories = {};
  const menuItems = document.querySelectorAll(".menu-item");
  console.log(menuItems);
  // Iterate through each menu item and categorize them
  menuItems.forEach((item) => {
    // Get the category of the menu item
    const category = item.classList.contains("filter-specialty")
      ? "speciality"
      : "false";
    console.log(category);
    // Add the menu item to the corresponding category
    if (!categories[category]) {
      categories[category] = [];
    }

    categories[category].push(item.outerHTML);
  });

  // Get the menu container element

  // Clear the current content of the menu container
  menuContainer.innerHTML = "";

  // Append the menu items back to the menu container based on categories
  Object.keys(categories).forEach((category) => {
    if (category == "speciality") {
      // Create a div for each category
      const categoryDiv = document.createElement("div");
      categoryDiv.classList.add("category-container");
      categoryDiv.innerHTML = `<h2>${
        category.charAt(0).toUpperCase() + category.slice(1)
      }</h2>`;
      console.log(categoryDiv);

      // Append menu items of the category to the category div
      categories["speciality"].forEach((menuItem) => {
        categoryDiv.innerHTML += menuItem;
      });
      // Append the category div to the menu container
      menuContainer.appendChild(categoryDiv);
      console.log(menuContainer);
    }
  });
}
function distributeSaladItems() {
  // Get all menu items
  console.log("started");
  const menuContainer = document.getElementById("show-menu");
  menuContainer.innerHTML = `
  <div id="show-menu" class="show-menu-container">
  <div class="row menu-container">

    <div class="col-lg-6 menu-item filter-starters">
      <div class="menu-content">
        <a href="#">Lobster Bisque</a><span>$5.95</span>
      </div>
      <div class="menu-ingredients">
        Lorem, deren, trataro, filede, nerada
      </div>
    </div>

    <div class="col-lg-6 menu-item filter-specialty">
      <div class="menu-content">
        <a href="#">Bread barrel</a><span>$6.95</span>
      </div>
      <div class="menu-ingredients">
        Lorem, deren, trataro, filede, nerada
      </div>
    </div>

    <div class="col-lg-6 menu-item filter-starters">
      <div class="menu-content">
        <a href="#">Crab Cake</a><span>$7.95</span>
      </div>
      <div class="menu-ingredients">
        A delicate crab cake served on a toasted roll with lettuce and tartar sauce
      </div>
    </div>

    <div class="col-lg-6 menu-item filter-salads">
      <div class="menu-content">
        <a href="#">Caesar Selections</a><span>$8.95</span>
      </div>
      <div class="menu-ingredients">
        Lorem, deren, trataro, filede, nerada
      </div>
    </div>

    <div class="col-lg-6 menu-item filter-specialty">
      <div class="menu-content">
        <a href="#">Tuscan Grilled</a><span>$9.95</span>
      </div>
      <div class="menu-ingredients">
        Grilled chicken with provolone, artichoke hearts, and roasted red pesto
      </div>
    </div>

    <div class="col-lg-6 menu-item filter-starters">
      <div class="menu-content">
        <a href="#">Mozzarella Stick</a><span>$4.95</span>
      </div>
      <div class="menu-ingredients">
        Lorem, deren, trataro, filede, nerada
      </div>
    </div>

    <div class="col-lg-6 menu-item filter-salads">
      <div class="menu-content">
        <a href="#">Greek Salad</a><span>$9.95</span>
      </div>
      <div class="menu-ingredients">
        Fresh spinach, crisp romaine, tomatoes, and Greek olives
      </div>
    </div>

    <div class="col-lg-6 menu-item filter-salads">
      <div class="menu-content">
        <a href="#">Spinach Salad</a><span>$9.95</span>
      </div>
      <div class="menu-ingredients">
        Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette
      </div>
    </div>

    <div class="col-lg-6 menu-item filter-specialty">
      <div class="menu-content">
        <a href="#">Lobster Roll</a><span>$12.95</span>
      </div>
      <div class="menu-ingredients">
        Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll
      </div>
    </div>
  `;
  const menuItems = document.querySelectorAll(".menu-item");

  // Create an object to store menu items based on categories
  const categories = {};
  console.log(menuItems);
  // Iterate through each menu item and categorize them
  menuItems.forEach((item) => {
    // Get the category of the menu item
    const category = item.classList.contains("filter-salads")
      ? "salads"
      : "other";
    console.log(category);
    // Add the menu item to the corresponding category
    if (!categories[category]) {
      categories[category] = [];
    }

    categories[category].push(item.outerHTML);
  });

  // Get the menu container element

  // Clear the current content of the menu container
  menuContainer.innerHTML = "";

  // Append the menu items back to the menu container based on categories
  Object.keys(categories).forEach((category) => {
    // Create a div for each category
    if (category == "salads") {
      const categoryDiv = document.createElement("div");
      categoryDiv.classList.add("category-container");
      categoryDiv.innerHTML = `<h2>${
        category.charAt(0).toUpperCase() + category.slice(1)
      }</h2>`;
      console.log(categoryDiv);

      // Append menu items of the category to the category div
      categories[category].forEach((menuItem) => {
        categoryDiv.innerHTML += menuItem;
      });
      // Append the category div to the menu container
      menuContainer.appendChild(categoryDiv);
      console.log(menuContainer);
    }
  });
}

// Call the function to distribute menu items

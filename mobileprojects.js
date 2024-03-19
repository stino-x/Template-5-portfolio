// Select the container element using querySelector
var projectsContainer = document.querySelector(".section-2");

// The HTML content you want to insert
var htmlContent = `
<div class="projects"><h2 >Projects</h2></div>
<div class="project-items-1">
    <img src="images.svg/Rectangle 21 (19).svg" class="project-image" alt="">
    <div class="languages">
        <h2>Project name goes here</h2>
        <ul class="H-R-J">
            <li class="Html-css">HTML/CSS</li>
            <li class="Ruby">RUBY ON RAILS</li>
            <li class="Javascript">JAVASCRIPT</li>
        </ul>
        <button class="see-this-project">
            See this project
            <img src="images.svg/Union (7).svg" alt="" class="arrow">
        </button>
    </div>
</div>
<div class="project-items-2">
    <img src="images.svg/Rectangle 21 (19).svg" class="project-image" alt="">
    <div class="languages">
        <h2>Project name goes here</h2>
        <ul class="H-R-J">
            <li class="Html-css">HTML/CSS</li>
            <li class="Ruby">RUBY ON RAILS</li>
            <li class="Javascript">JAVASCRIPT</li>
        </ul>
        <button class="see-this-project">
            See this project
            <img src="images.svg/Union (7).svg" alt="" class="arrow">
        </button>
    </div>
</div>
<div class="project-items-3">
    <img src="images.svg/Rectangle 21 (19).svg" class="project-image" alt="">
    <div class="languages">
        <h2>Project name goes here</h2>
        <ul class="H-R-J">
            <li class="Html-css">HTML/CSS</li>
            <li class="Ruby">RUBY ON RAILS</li>
            <li class="Javascript">JAVASCRIPT</li>
        </ul>
        <button class="see-this-project">
            See this project
            <img src="images.svg/Union (7).svg" alt="" class="arrow">
        </button>
    </div>
</div>
<div class="project-items-4">
    <img src="images.svg/Rectangle 21 (19).svg" class="project-image" alt="">
    <div class="languages">
        <h2>Project name goes here</h2>
        <ul class="H-R-J">
            <li class="Html-css">HTML/CSS</li>
            <li class="Ruby">RUBY ON RAILS</li>
            <li class="Javascript">JAVASCRIPT</li>
        </ul>
        <button class="see-this-project">
            See this project
            <img src="images.svg/Union (7).svg" alt="" class="arrow">
        </button>
    </div>
</div>
<div class="project-items-5">
    <img src="images.svg/Rectangle 21 (19).svg" class="project-image" alt="">
    <div class="languages">
        <h2>Project name goes here</h2>
        <ul class="H-R-J">
            <li class="Html-css">HTML/CSS</li>
            <li class="Ruby">RUBY ON RAILS</li>
            <li class="Javascript">JAVASCRIPT</li>
        </ul>
        <button class="see-this-project">
            See this project
            <img src="images.svg/Union (7).svg" alt="" class="arrow">
        </button>
    </div>
</div>
<div class="project-items-6">
    <img src="images.svg/Rectangle 21 (19).svg" class="project-image" alt="">
    <div class="languages">
        <h2>Project name goes here</h2>
        <ul class="H-R-J">
            <li class="Html-css">HTML/CSS</li>
            <li class="Ruby">RUBY ON RAILS</li>
            <li class="Javascript">JAVASCRIPT</li>
        </ul>
        <button class="see-this-project">
            See this project
            <img src="images.svg/Union (7).svg" alt="" class="arrow">
        </button>
    </div>
</div>
`;

// Insert the HTML content into the container element
projectsContainer.innerHTML = htmlContent;

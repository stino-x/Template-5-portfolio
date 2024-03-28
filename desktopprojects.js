// script.js

// Function to insert the second set of content
function insertSecondContent() {
    var secondContentContainer = document.querySelector(".grid");

    var htmlContent = `
        <div class="grid-1">    
            <div class="project-grid"></div>
            <div class="dots"></div>
        </div>
        <div class="grid-2">
            <div class="grid-2-grid-1"><img src="images.svg/Rectangle 21 (19).svg" alt=""></div>
            <div class="grid-2-grid-2">
                <div class="languages-desktop">
                    <h2>Project name goes here</h2>
                    <ul class="H-R-J-desktop">
                        <li class="Html-css">HTML/CSS</li>
                        <li class="Ruby">RUBY ON RAILS</li>
                        <li class="Javascript">JAVASCRIPT</li>
                    </ul>
                    <button class="see-this-project">
                    <a href="carouseltest.html">
                        See this project
                        <img src="images.svg/Union (8).svg" alt="">
                     </a>   
                    </button>
                </div>
            </div>
        </div>
        <div class="grid-3"><a href="carouseltest.html"><img src="images.svg/Rectangle 46.svg" alt=""></a></div>
        <div class="grid-4"></div>
        <div class="grid-5">
            <div class="grid-5-image"><img src="images.svg/Rectangle 25.svg" alt=""></div>
            <div class="banner">
                <div class="language-desktop">
                    <h2>Project name goes ...</h2>
                    <ul class="H-R-J-desktop">
                        <li class="Html-css">HTML/CSS</li>
                        <li class="Ruby">RUBY ON RAILS</li>
                        <li class="plus-one">+1</li>
                    </ul>
                    <button class="see-this-project">
                    <a href="carouseltest.html">
                        See this project
                        <img src="images.svg/Union (8).svg" alt="">
                    </a>    
                    </button>
                </div>
            </div>
            <div class="grid-5-image-2"><a href="carouseltest.html"><img src="images.svg/Rectangle 26.svg" alt=""></a></div>  
        </div>
        <div class="grid-6"><a href="carouseltest.html"><img src="images.svg/Rectangle 27 (2).svg" alt=""></a></div>
        <div class="grid-7"></div>
        <div class="grid-8"></div>
        <div class="grid-9"></div>
        <div class="grid-10"><a href="carouseltest.html"><img src="images.svg/Rectangle 47.svg" alt=""></a></div>
    `;

    // Insert the HTML content into the container element
    secondContentContainer.innerHTML = htmlContent;
}

// Call the function to insert the second set of content
insertSecondContent();

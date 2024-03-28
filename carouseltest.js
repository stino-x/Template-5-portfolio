var number_of_images = 12;
var images_folder = './images';
var thisimage = '';

// Creates the thumbnail images inside filmstrip.
for (i = 1; i <= number_of_images; i++) {
    thisimage = images_folder + '/img' + ('0' + i.toString()).slice(-2) + ".jpg";
    document.getElementById('slideshow').style.backgroundImage = "url('" + thisimage + "')";
    document.getElementById('filmstrip').innerHTML += "<img src='" + thisimage + "' onclick='show(" + i + ")'>"
    //Go to first image
    show(1);
}

//Calls the show function when a left or right scrolling arrow is clicked.
function slide(x) {
    //Determing the number of the image currently showing (before they clicked a scroll arrow)
    var currentimage = document.getElementById('slideshow').style.backgroundImage.split('.jpg');
    var i = parseInt(currentimage[0].slice(-2)) + x;
    //If they tried to scroll past the last image, loop around to the first.
    i = i > number_of_images ? 1 : i;
    //If they tried to scroll past the first image, loop around to the last.
    i = i < 1 ? number_of_images : i;
    show(i);
}

//Show the image (the i indicates the XX in the imgXX.jpg file name.)
function show(i) {
    thisimage = images_folder + '/img' + ('0' + i.toString()).slice(-2) + ".jpg";
    console.log(images_folder)
    document.getElementById('slideshow').style.backgroundImage = "url('" + thisimage + "')"
    //Loop through thumbnail images, border only the current one.
    var filmstrip = document.getElementById("filmstrip");
    var thumbs = filmstrip.getElementsByTagName("img");
    // for (x = 0; x < thumbs.length; x++) {
    //     if (x == i - 1) {
    //         thumbs[x].className = 'bordered';
    //     } else {
    //         thumbs[x].className = '';
    //     }
    // }
    //Decide which third of the thumbnails to show based on position of current pic.
    filmstrip.style.justifyContent = 'center';
    if (i <= number_of_images / 3) {
        filmstrip.style.justifyContent = 'flex-start';
    }
    if (i >= number_of_images - (number_of_images / 3)) {
        filmstrip.style.justifyContent = 'flex-end';
    }
}

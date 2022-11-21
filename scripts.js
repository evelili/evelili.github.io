// modal stuff from https://www.w3schools.com/howto/howto_css_modal_images.asp
var modal = document.getElementById("modal-div");
var img = document.getElementById("modal-img");

// assign click function to each image on the page
const pageimgs = document.querySelectorAll("img.img-clickable");
for (let i = 0; i < pageimgs.length; i++) {
    pageimgs[i].onclick = function() {
        modal.style.display = "flex";
        img.src = this.src;
    }
}

// make child image eat the click
img.onclick = function() {
    event.stopPropagation();
}

// close when click outside image
modal.onclick = function() {
    modal.style.display = "none";
}

// resize subpage header to fit
window.onload = resizeHeader;
window.onresize = resizeHeader;

function resizeHeader() {
    let subhead = document.querySelector(".subpage-header h2");
    let banner = document.querySelector(".banner-pic");
    if (subhead != null) {
        subhead.style.fontSize = "56px";
        let width = subhead.offsetWidth;
        // console.log("width: " + width);
        // console.log("banner: " + banner.offsetWidth);
        let maxwidth = Math.min(775.0, banner.offsetWidth * 0.86);
        if (width > maxwidth) {
            subhead.style.fontSize = ((maxwidth/width) * 56.0).toString() + "px";
        } else if (width > banner.offsetWidth) {
            // subhead.style.fontSize = ((banner.offsetWidth/width) * 72.0).toString() + "px";
        } else {
            // 
        }
    }
}


window.onscroll = function() {
    var header = document.getElementById("main-header");
    if (window.pageYOffset > 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
};

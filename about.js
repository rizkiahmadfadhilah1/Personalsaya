document.addEventListener("DOMContentLoaded", function () {
    var boxes = document.querySelectorAll(".col .contents .box");

    function checkScroll() {
        boxes.forEach(function (box) {
            var boxPosition = box.getBoundingClientRect().top;
            var screenPosition = window.innerHeight / 1.3;

            if (boxPosition < screenPosition) {
                box.classList.add("animate");
            } else {
                box.classList.remove("animate");
            }
        });
    }


    checkScroll();

    window.addEventListener("scroll", checkScroll);
});

const headers = document.querySelectorAll(".accordion-header");

headers.forEach((header) => {
    header.addEventListener("click", () => {
        const body = header.nextElementSibling;
        if (header.classList.contains("active")) {
            header.classList.remove("active");
            header.lastElementChild.src = "./assets/images/icon-plus.svg";
        } else {
            header.classList.add("active");
            header.lastElementChild.src = "./assets/images/icon-minus.svg";
        }
        body.classList.toggle("show");
    });
})
const indicator = document.querySelector(".indicator");
const scrollTop = document.getElementById("scrollTop");

document.addEventListener("scroll", () => {
    // WEB SAHIFANING ASL BALANDLIGI
    const pageMaxHeight = document.body.scrollHeight - window.innerHeight;
    indicator.style.width = (window.scrollY / pageMaxHeight * 103) + '%';

    // 
    if(document.scrollingElement.scrollTop > 250){
        scrollTop.style.opacity = 1;
        scrollTop.style.bottom = '1.5rem';
    } else {
        scrollTop.style.opacity = 0;
        scrollTop.style.bottom = '30rem';
    }
});

scrollTop.addEventListener("click", () => document.scrollingElement.scrollTop = 0);

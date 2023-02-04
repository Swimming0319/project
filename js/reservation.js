// swiper
let mySwiper = new Swiper ('.swiper', {
    loop: true, // 循環模式選項
    autoplay: true,
    }) 

//頁面展開
let target = document.getElementById("choose_date");
let target2 = document.getElementById("choose_time");
let target3 = document.getElementById("information");
let target4 = document.getElementById("taipei");
let button = document.getElementById("choose");

button.addEventListener("click", function (event) {
    target.classList.toggle("choose_date_active");
    target2.classList.toggle("choose_time_active");
    target3.classList.toggle("information_active");
    target4.classList.toggle("reservation_bar_taipei_active");
});


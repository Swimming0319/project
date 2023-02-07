document.addEventListener('DOMContentLoaded',function(){

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

    button.addEventListener("click", function (e) {
        target.classList.toggle("choose_date_active");
        target2.classList.toggle("choose_time_active");
        target3.classList.toggle("information_active");
        target4.classList.toggle("reservation_bar_taipei_active");
    });

    let time_el = document.getElementsByClassName('time')[0];
    let time_el2 = document.getElementsByClassName('time')[1];
    let time_el3 = document.getElementsByClassName('time')[2];
    let time_el4 = document.getElementsByClassName('time')[3];

    time_el.addEventListener('click',function(e){
        // this.style.backgroundColor = "#194448";
        // this.style.color = "white";
        time_el.classList.add('-on');
        time_el2.classList.remove('-on');
        time_el3.classList.remove('-on');
        time_el4.classList.remove('-on');
        });
    time_el2.addEventListener('click',function(e){
        time_el2.classList.add('-on');
        time_el.classList.remove('-on');
        time_el3.classList.remove('-on');
        time_el4.classList.remove('-on');
        });
    time_el3.addEventListener('click',function(e){
        time_el3.classList.add('-on');
        time_el.classList.remove('-on');
        time_el2.classList.remove('-on');
        time_el4.classList.remove('-on');
        });
    time_el4.addEventListener('click',function(e){
        time_el4.classList.add('-on');
        time_el.classList.remove('-on');
        time_el2.classList.remove('-on');
        time_el3.classList.remove('-on');
        });


    // let reservation_el = document.getElementById('reservation');
    // reservation_el.addEventListener('click',function(){
    //     confirm('預約成功');
    // });



    // 預約按鈕

    let lightbox_el = document.getElementById("lightbox");

  
    let btn_mode = document.getElementsByClassName("btn_mode")[0];
    btn_mode.addEventListener("click", function(){
      lightbox_el.classList.remove("none");
    });


    let btn_mode_close = document.getElementsByClassName("btn_mode_close")[0];
    btn_mode_close.addEventListener("click", function(){
        confirm('預約成功');
        lightbox_el.classList.add("none");
    });

    lightbox_el.addEventListener("click", function(){
    this.classList.add("none");
    });

    // 點擊 lightbox 中的白色區域，不會關掉 modal
    lightbox_el.querySelector("article").addEventListener("click", function(e){
    e.stopPropagation();
    });

    //contact 彈窗
    let contactbox_el = document.getElementById("contactbox");
    let btn_modal = document.getElementsByClassName("btn_modal")[0];
    btn_modal.addEventListener("click", function(){
        contactbox_el.classList.remove("none");
    });
    let btn_modal_close = document.getElementsByClassName("btn_modal_close")[0];
    btn_modal_close.addEventListener("click", function(){
        confirm('發送成功');
        contactbox_el.classList.add("none");
    }); 
    contactbox_el.addEventListener("click", function(){
        this.classList.add("none");
    });
    // 點擊 contactbox 中的白色區域，不會關掉 modal
    contactbox_el.querySelector("article").addEventListener("click", function(e){
        e.stopPropagation();
    });
    

    //日曆 顯示目前可選擇日期



 });
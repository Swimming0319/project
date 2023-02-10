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
    


    // 預約按鈕, 點擊出現彈窗, 顯示使用者所選預約資料
    let lightbox_el = document.getElementById("lightbox"); 
    let btn_mode = document.getElementsByClassName("btn_mode")[0];
    btn_mode.addEventListener("click", function(){
        lightbox_el.classList.remove("none"); //彈窗顯示
        let ui_state_active = document.getElementsByClassName('ui-state-active')[0];//取得所選日期的標籤
        console.log(ui_state_active);
        let date = ui_state_active.getAttribute('data-date');
        //console.log(date); //取得所選的日期的數字
        let ui_datepicker_month = document.getElementsByClassName('ui-datepicker-month')[0];//取的月份的標籤
        //console.log(ui_datepicker_month);
        let month =  ui_datepicker_month.innerHTML; //取得所選的月份標籤的內容
        console.log(month);
        let time_on = document.getElementsByClassName('time -on')[0]; //取得所選的時間
        //console.log(time_on);

        //如果沒選時間, 提醒並關閉彈窗
        if(time_on === undefined){
            alert('請選擇時間');
            lightbox_el.classList.add("none");    
        }else{
            let time = time_on.innerHTML; //取得所選的時間標籤的內容
            console.log(time);

            //更改lightbox元素的內容為新取的值
            let submit_month = document.getElementById('submit_month'); //取得lightbox裡的<span id="submit_month">
            //console.log(submit_month);
            submit_month.innerHTML = month;
            // console.log(month);
            let submit_date = document.getElementById('submit_date'); //取得<span id="submit_date">
            submit_date.innerHTML = date;
            // console.log(date);
            let submit_time = document.getElementById('submit_time'); //取得<span id="submit_time">
            submit_time.innerHTML = time;
            // console.log(time);
        }
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


    //日曆 顯示目前可選擇日期

    $( function(){
        $( "#datepicker" ).datepicker({ 
            minDate: 0, 
            maxDate: "+1M",
            dayNamesMin: ['日','一','二','三','四','五','六'],
            monthNames: ['1月','2月','3月','4月','5月','6月',
            '7月','8月','9月','10月','11月','12月']
        });
    });

 });
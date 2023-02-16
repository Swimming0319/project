document.addEventListener('DOMContentLoaded',function(){

    //menu顯示子選單
    let menu_btn = document.getElementById('menu-btn');
    menu_btn.addEventListener('click', function(){
        let products_menu = document.getElementsByClassName('products_menu')[0];
        // let all_product = products_menu.querySelector('a');
        products_menu.style.textAlign = 'center';

        let span_el = document.getElementsByTagName('span');
        for(let i = 0; i < span_el.length; i++){
            span_el[i].style.display = 'inline-block';
        }

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


    // email和password input的focus 事件和 blur事件觸發
    let email_el = document.getElementById('mail');
    let password_el = document.getElementById('password');
    let alert_block_em = document.getElementById('alert_block_em');
    let alert_block_pw = document.getElementById('alert_block_pw');

    email_el.addEventListener('focus', function(){ //輸入焦點點擊欄位 focus觸發
        this.classList.add('-on'); //邊框改顏色
    });
    email_el.addEventListener('blur', function(){ //輸入焦點離開欄位 blur觸發
        this.classList.remove('-on'); 
        //如果欄位空值顯示此欄未必填
        if(email_el.value == ''){
            alert_block_em.style.display = 'block'; //顯示此欄位必填
        }
        
    });

    password_el.addEventListener('focus', function(){ 
        this.classList.add('-on'); //邊框改顏色
    });
    password_el.addEventListener('blur', function(){ 
        this.classList.remove('-on'); 
        if(password_el.value == ''){
            alert_block_pw.style.display = 'block';
        }
    });


    //表單驗證


    //submit (驗證成功才送出資料)













});
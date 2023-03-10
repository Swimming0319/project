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


    //==== email和password input的focus 事件和 blur事件觸發 ======
    let name_el = document.getElementById('name');
    let email_el = document.getElementById('mail');
    let password_el = document.getElementById('password');
    let alert_block_nm = document.getElementById('alert_block_nm');
    let alert_block_em = document.getElementById('alert_block_em');
    let alert_block_pw = document.getElementById('alert_block_pw');

    name_el.addEventListener('focus', function(){ //輸入焦點點擊欄位 focus觸發
        this.classList.add('-on'); //邊框改顏色
    });
    name_el.addEventListener('blur', function(){ //輸入焦點離開欄位 blur觸發
        this.classList.remove('-on'); 
        //如果欄位空值顯示此欄未必填
        if(name_el.value == ''){
            alert_block_nm.style.display = 'block'; //顯示此欄位必填
        }
        
    });


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


    //====================== 表單驗證 ================================
    let the_form_el = document.getElementById('the_form');

    //submit (驗證成功才送出資料)
    the_form_el.addEventListener('submit',function(e){
        // e.preventDefault(); //先設定表單送出取消

        let send_data = true;


        //========= 使用者名稱驗證 ===============

        //不能是空格 空字串
        if( name_el.value == '' ){
            name_el.classList.add('-error');  //先假設email驗證不通過 加上紅框class屬性
            send_data = false; 
            alert('此欄未必填並請勿使用空格');
            // let str = '此欄未必填並請勿使用空格';
            // alert_block_nm.innerHTML = str;
        }else{
            name_el.classList.remove('-error'); //通過拿掉紅框class屬性
            alert_block_nm.style.display = 'none';
            
        }

        //不能是特殊字符
        if (name_el.value.match(/[^a-zA-Z\d]/)) {

            name_el.classList.add('-error'); 
            send_data = false; 
            alert('請勿使用特殊字符');
            // let str = '請勿使用特殊字符';
            // alert_block_nm.innerHTML = str;
        }else{
            name_el.classList.remove('-error'); //通過拿掉紅框class屬性
            alert_block_nm.style.display = 'none';
            
        }


        //========== email驗證用套件 is js ===========
        if( is.email(email_el.value) ){
            email_el.classList.remove('-error'); //通過拿掉紅框class屬性
            alert_block_em.style.display = 'none';
        }else{
            email_el.classList.add('-error');  //先假設email驗證不通過 加上紅框class屬性
            send_data = false; 
            let str = '請輸入完整E-mail';
            alert_block_em.innerHTML = str;

            }

        //========== 密碼驗證 ===========
        let strength = 0;
        let tips = "";
        let tips2 = "";
        let tips3 = "";
        // Check password length 密碼長度不能少於 8 個字符
        if (password_el.value.length < 8) {
            // console.log(password_el.value.length);
            tips += '密碼長度不能少於 8 個字符';
            alert(tips);
            password_el.classList.add('-error');  
            send_data = false; 
        } else {
            password_el.classList.remove('-error');
            alert_block_pw.style.display = 'none';
            strength += 1;
        }
    
        // Check for mixed case 如果密碼同時包含大寫和小寫字符。
        if (password_el.value.match(/[a-z]/) && password_el.value.match(/[A-Z]/)) {
            password_el.classList.remove('-error');
            alert_block_pw.style.display = 'none';
            strength += 1;
        } else {
            tips2 += '密碼請同時包含大寫和小寫字符';
            alert(tips2);
            password_el.classList.add('-error'); 
            send_data = false; 
        }

        // Check for numbers 如果密碼包含數字。
        if (password_el.value.match(/\d/)) {
            password_el.classList.remove('-error');
            alert_block_pw.style.display = 'none';
            strength += 1;
        } else {
            tips3 += '密碼請至少包含1個數字';
            alert(tips3);
            password_el.classList.add('-error'); 
            send_data = false; 
        }

        if(!send_data){  //!是反轉 這邊變false  如果資料是錯的進入大括號 資料不會送出 email和密碼驗證都過才送出
            e.preventDefault(); 
        }

        
    });




});
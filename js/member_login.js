document.addEventListener('DOMContentLoaded',function(){



    //表單
    let the_form_el = document.getElementById('the_form');
    // console.log(the_form_el);

    //submit (驗證成功才送出資料)
    the_form_el.addEventListener('submit',function(e){
        e.preventDefault(); //先設定表單送出取消

        let email_el = document.getElementById('mail');
        let password_el = document.getElementById('password');

        console.log(email_el.value);

        let send_data = true;
        //email驗證用套件 is js
        if( is.email(email_el.value) ){
            email_el.classList.remove('-error'); //通過拿掉紅框class屬性
        }else{
            email_el.classList.add('-error');  //先假設email驗證不通過 加上紅框class屬性
            send_data = false; 
            }

        //密碼驗證
        // if( is.password(password_el.value) ){
        //     password_el.classList.remove('-error'); //通過拿掉紅框class屬性
        // }else{
        //     password_el.classList.add('-error');  //先假設email驗證不通過 加上紅框class屬性
        //     send_data = false; 
        //     }

        checkPasswordStrength(password);

    


        if(!send_data){  //!是反轉 這邊變false  如果資料是錯的進入大括號 資料不會送出
            e.preventDefault(); 
            }

    });

    function checkPasswordStrength(password) {
        // Initialize variables
       var strength = 0;
       var tips = "";

       // Check password length
       if (password.length < 8) {
           tips += "Make the password longer. ";
           alert(tips);
       } else {
           strength += 1;
       }
   }





});
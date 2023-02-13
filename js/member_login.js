document.addEventListener('DOMContentLoaded',function(){


    // email和password input的focus 事件和 blur事件觸發
    let email_el = document.getElementById('mail');
    let password_el = document.getElementById('password');

    email_el.addEventListener('focus', function(){ //輸入焦點點擊欄位 focus觸發
        this.classList.add('-on'); //邊框改顏色
    })
    email_el.addEventListener('blur', function(){ //輸入焦點離開欄位 blur觸發
        this.classList.remove('-on'); 
    })

    password_el.addEventListener('focus', function(){ //輸入焦點點擊欄位 focus觸發
        this.classList.add('-on'); //邊框改顏色
    })
    password_el.addEventListener('blur', function(){ //輸入焦點離開欄位 blur觸發
        this.classList.remove('-on'); 
    })



    //表單
    let the_form_el = document.getElementById('the_form');
    // console.log(the_form_el);

    //submit (驗證成功才送出資料)
    the_form_el.addEventListener('submit',function(e){
        // e.preventDefault(); //先設定表單送出取消

        let email_el = document.getElementById('mail');
        let password_el = document.getElementById('password');
        let alert_block = document.getElementById('alert_block');

        let send_data = true;
        //email驗證用套件 is js
        if( is.email(email_el.value) ){
            email_el.classList.remove('-error'); //通過拿掉紅框class屬性
        }else{
            email_el.classList.add('-error');  //先假設email驗證不通過 加上紅框class屬性
            send_data = false; 
            // let str = '請輸入完整E-mail';
            // console.log(str);
            // alert_block.innerHTML = str;
            alert('請輸入完整E-mail');
            }

        // 密碼驗證 沒有這用法
        // if( is.password(password_el.value) ){
        //     password_el.classList.remove('-error'); //通過拿掉紅框class屬性
        // }else{
        //     password_el.classList.add('-error');  //先假設email驗證不通過 加上紅框class屬性
        //     send_data = false; 
        //     }

        let strength = 0;
        let tips = "";
        // Check password length 密碼長度不能少於 8 個字符
        if (password_el.value.length < 8) {
            // console.log(password_el.value.length);
            tips += '密碼長度不能少於 8 個字符';
            alert(tips);
            password_el.classList.add('-error');  
            send_data = false; 
        } else {
            password_el.classList.remove('-error');
            strength += 1;
        }
    
        // Check for mixed case 如果密碼同時包含大寫和小寫字符。
        if (password_el.value.match(/[a-z]/) && password_el.value.match(/[A-Z]/)) {
            strength += 1;
        } else {
            tips += '密碼請同時包含大寫和小寫字符';
            alert(tips);
            password_el.classList.add('-error'); 
            send_data = false; 
        }

        // Check for numbers 如果密碼包含數字。
        if (password_el.match(/\d/)) {
            strength += 1;
        } else {
            tips += '密碼請至少包含1個數字';
            alert(tips);
            password_el.classList.add('-error'); 
            send_data = false; 
        }

         // Check for special characters 如果密碼包含特殊字符。
        if (password_el.match(/[^a-zA-Z\d]/)) {
            strength += 1;
        } else {
            tips += "密碼請至少包含1個特殊字符 ";
            alert(tips);
            password_el.classList.add('-error'); 
            send_data = false; 
        }


        // function checkPasswordStrength(password_el) {
        //     // Initialize variables
        //     var strength = 0;
        //     var tips = "";
          
        //     // Check password length
        //     if (password_el.value.length < 8) {
        //       tips += "Make the password longer. ";
        //     } else {
        //       strength += 1;
        //     }
          
        //     // Check for mixed case
        //     if (password_el.value.match(/[a-z]/) && password_el.value.match(/[A-Z]/)) {
        //       strength += 1;
        //     } else {
        //       tips += "Use both lowercase and uppercase letters. ";
        //     }
          
        //     // Check for numbers
        //     if (password_el.value.match(/\d/)) {
        //       strength += 1;
        //     } else {
        //       tips += "Include at least one number. ";
        //     }
          
        //     // Check for special characters
        //     if (password_el.value.match(/[^a-zA-Z\d]/)) {
        //       strength += 1;
        //     } else {
        //       tips += "Include at least one special character. ";
        //     }
          
        //     // Return results
        //     if (strength < 2) {
        //       return "Easy to guess. " + tips;
        //     } else if (strength === 2) {
        //       return "Medium difficulty. " + tips;
        //     } else if (strength === 3) {
        //       return "Difficult. " + tips;
        //     } else {
        //       return "Extremely difficult. " + tips;
        //     }
        //   }


        if(!send_data){  //!是反轉 這邊變false  如果資料是錯的進入大括號 資料不會送出
            e.preventDefault(); 
            }

    });







});
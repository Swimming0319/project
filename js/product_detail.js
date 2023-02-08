document.addEventListener('DOMContentLoaded',function(){
    let mySwiper = new Swiper ('.swiper', {
        loop: true, // 循環模式選項
        autoplay: true,
        // 如果需要前進後退按钮
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    }) 

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


    //點擊圖片互換
    let pic_el = document.getElementsByClassName('change');
    let pic_main = document.getElementById('pic_main');
    for(let i = 0; i < pic_el.length; i++){
        pic_el[i].addEventListener('click', function(){
            console.log(i);
            if(i === 0){
                pic_main.src="img/product_detail/left_1.jpg";
            }else{
                if(i === 1){
                    pic_main.src="img/product_detail/left_2.jpg";
                }else{
                    pic_main.src="img/product_detail/left_3.jpg";
                }
            }
            
        });
    }
    

    //限制欄位只能輸入數字 中文也不能
    let number_el = document.getElementById('number');
    number_el.addEventListener("keydown", function(e){
        // console.log(e.which);
        if( (e.which >= 48 && e.which <= 57) || e.which == 8 ){ // 8 是刪除鍵
            
        }else{
           e.preventDefault(); // 停止預設行為(在欄位上出現所打的文字)
        }
    });

    number_el.addEventListener('keyup',function(e){
        // console.log(e.target.value); //欄位輸123 出現123
        let str = (e.target.value).replace(/\D/g,'');  //replace找到某個字 用別的字串取代;正規式用兩個 / 字元; \D 表示非數字 +g是global 表示找到的全部的非數字都會轉空字串
        e.target.value = str; //新的資料再放回欄位上
    });
    //使用者有填資料才送出 沒填不送出form
    // let quantity_form_el = document.getElementById('quantity_form');
    // quantity_form_el.addEventListener('submit',function(e){
    //     // console.log(number_el_el.value); //印出使用者所填欄位送出的資料;沒打字就是空字串
    //     if(number_el.value == ''){
    //         e.preventDefault(); //使用者沒打字 進入此區 停止表單預設資料送出行為
    //         alert('請輸入輸量');//提醒使用者輸入數量
    //     }
    // });


    //數量按鈕新增減少 當鍵盤重輸數字就失效?
    let btn_plus = document.getElementById('btn_plus');
    btn_plus.addEventListener('click', function(){
        // console.log(number_el.value);
        // +'number_el.value';
        // console.log(typeof( +'number_el.value') ); //型態是數字
        // console.log(+'number_el.value'); //但印出是NaN ?

        //將input標籤裡資料型態轉數字
        let value1 = parseInt(number_el.value);
        // console.log(value1);
        // console.log(typeof(value1));

        //規定上限200, setAttribute後加屬性名和屬性值
        if(value1 <= 199){
            // number_el.setAttribute('value', ++value);
            value1 += 1;
            // console.log(value1);
            number_el.setAttribute('value', value1);
        }
    });

    let btn_minus = document.getElementById('btn_minus');
    btn_minus.addEventListener('click', function(){
        let value2 = parseInt(number_el.value);
        //規定>1 才能減少
        if(value2 > 1){
            value2 -= 1;
            number_el.setAttribute('value', value2);
        }
    });



    //加入購物車按鈕 點擊彈出數量

    let cart_btn = document.getElementById('cart_btn');
    let cart_qty = document.getElementsByClassName('cart_qty')[0];
    cart_btn.addEventListener('click', function(e){
        if(number_el.value == ''){
            e.preventDefault(); //使用者沒打字 進入此區 停止表單預設資料送出行為
            alert('請輸入輸量');//提醒使用者輸入數量
        }else{
            cart_qty.style.opacity = '1';
            // innerHTML取得元素的內容
            let value3 = parseInt(cart_qty.innerHTML);
            // console.log(typeof(value3));
            let value4 = parseInt(number_el.value);
            // console.log(typeof(value4));
            // console.log(value4);
            value3 += value4;
            //更改元素的內容為新計算的值
            cart_qty.innerHTML = value3;
            if(value3 > 200){
                cart_qty.style.opacity = '0';
                cart_qty.innerHTML = 0;
                alert('請直接聯繫客服03-3333333，將由專員為您服務');
            }
        }
    });

    //滑鼠滑過購物車顯示清單  若再新增商品內容 position會跑掉?
    let cartbox = document.getElementById('cartbox');
    let cart_icon = document.getElementsByClassName('cart_icon')[0];
    cart_icon.addEventListener('mouseenter', function(){
        cartbox.classList.remove('cart_none');
    });
    cart_icon.addEventListener('mouseleave', function(){
        cartbox.classList.add("cart_none");
    });
    cartbox.querySelector("article").addEventListener('mouseenter', function(){
        cartbox.classList.remove('cart_none');
    });
    cartbox.querySelector("article").addEventListener('mouseleave', function(){
        cartbox.classList.add("cart_none");
    });


});
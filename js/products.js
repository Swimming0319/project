function get_cartVal() {
    const cart_val = document.querySelector('#cart_val')
    const MemoryCart = localStorage.getItem('MemoryCart')
    let cart_qty = document.getElementsByClassName('cart_qty')[0];
    //FOR RWD
    const cart_val_rwd = document.querySelector('#cart_val_rwd')
    let cart_qty_rwd = document.getElementsByClassName('cart_qty_rwd')[0];
    if(MemoryCart){
        cart_val.textContent = MemoryCart;
        cart_val_rwd.textContent = MemoryCart;
        cart_qty.style.opacity = '1';
        cart_qty_rwd.style.opacity = '1'; //RWD版

        /* ======== 重整後點擊購物車按鈕要再顯示彈窗 ============ */
        


    }
}

get_cartVal();   



document.addEventListener('DOMContentLoaded',function(){

    //分類下拉選單&按鈕翻轉
    let dropdown = document.getElementsByClassName("dropdown-btn");
    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let icon = this.firstElementChild;
            console.log(icon);
            let dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
                icon.style.transform = 'rotate(0deg)';
            } else {
                dropdownContent.style.display = "block";
                icon.style.transform = 'rotate(180deg)';
            }
        });
    }


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


    //menu顯示子選單
    let products_menu = document.getElementsByClassName('products_menu')[0];
    products_menu.style.textAlign = 'center';
    let menu_btn = document.getElementById('menu-btn');
    menu_btn.addEventListener('click', function(){
        
        let span_el = document.getElementsByTagName('span');
        for(let i = 0; i < span_el.length; i++){
            span_el[i].style.display = 'inline-block';
        }

    });

    
    //失敗 重複點及所有商品連結 a標籤印出來很怪?
    // let all_product = document.getElementById('all_product');
    // console.log(all_product);
    // all_product.addEventListener('click', function(){
    //     let cart = document.getElementsByClassName('cart');
    //     console.log(cart);
    //     for(let i = 0; i < cart.length; i++){
    //         let str = '<i class="fa-solid fa-cart-shopping"></i>';
    //         cart[i].innerHTML = str;
    //     }

    // });
    
    //假設點所有商品連結true

    // if(all_product.click){
    //     let cart = document.getElementsByClassName('cart');
    //     console.log(cart);
    //     for(let i = 0; i < cart.length; i++){
    //         let str = '<i class="fa-solid fa-cart-shopping"></i>';
    //         cart[i].innerHTML = str;
    //     }
    // }



});
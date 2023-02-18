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
        

    }
}

get_cartVal();   



//會員icon更換
function userIcon_change() {
    const user_icon = document.querySelector('#user_icon')
    const user_icon_rwd = document.querySelector('#user_icon_rwd')
    const MemoryIcon = localStorage.getItem('MemoryIcon')
    let str = '<i class="fa-solid fa-user-check"></i>';

    user_icon.innerHTML = str;
    user_icon_rwd.innerHTML = str;

}
if(localStorage.getItem('MemoryIcon') == '<i class="fa-solid fa-user-check"></i>'){ //假設localstorage裡資料 正確才呼叫
userIcon_change();

}





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

    




});
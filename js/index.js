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





});
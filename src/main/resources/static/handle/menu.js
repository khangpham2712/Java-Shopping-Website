function loadmenu(){
var token = localStorage.getItem("token");
var key = localStorage.getItem("keyrandom");
var ran = randomKeys()
if(key == null || key == 'null' || key == ""){
    window.localStorage.setItem('keyrandom', ran);
}
var authen = '<li class="hmi"><a style="text-decoration: none" href="login"><span class="hmiu"><span class="hmia">Đăng nhập</span></span></a></li>'
if(token != null){
    authen = `<li class="dropdown ctgd hmi"><a style="text-decoration: none" href="#"><span class="hmiu"><span class="hmia">Tài khoản <span class="caret"></span></span></span></a>
                <ul class="dropdown-menu">
                    <li><a href="taikhoan">Cập nhật thông tin</a></li>
                    <li><a href="lichsudat">Lịch sử đặt hàng</a></li>
                    <li><a href="#" onclick="logout()" style="cursor: pointer;">Đăng xuất</a></li>
                </ul>
            </li>`
}
var menu = 
`<div class="right-scroll">
<div class="right-cart right-btn" href="">
    <div class="right-dot"></div>
    <a class="right-cart-icon" href="cart"><span class="glyphicon glyphicon-shopping-cart"></span></a>
    <div id="here2"><cr id="slspcart" style="font-size: 10px;font-weight: bold;color: white;background: #772239;border-radius: 100%;padding: 1px 5px;">10</cr></div>
</div>
<div class="right-account right-btn mtso" id="right-account">
    <div class="right-dot"></div>
    <a href="taikhoan"><span class="glyphicon glyphicon-user account-icon"></span></a>
</div>
<div class="right-search right-btn mtso" id="right-search">
    <div class="right-dot"></div>
    <span class="glyphicon glyphicon-search right-search-icon"></span>
</div>
<div class="back-to-top right-btn mtso" id="back-to-top">
    <div class="right-dot"></div>
    <span class="glyphicon glyphicon-arrow-up back-to-top-icon"></span>
</div>
<div class="search-bar sbr" id="sbr">
    <div class="close-sbr">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
            <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
    </div>
    <form action="listsp" id="form-sbr">
        <input class="sbri" id="sbri" type="text" placeholder="Nhập tên sản phẩm" name="search">
    </form>
</div>
</div>
<div class="sticky" style="background: url('image/bg-top.jpg');background-size: 100% 500px;position: fixed;width: 100%;    z-index: 1000;top: 0">
<div class="">
    <div class="header">
        <div class="logo">
            <a href=""><img src="image/logo_ss.png" style="width: 150px;" title="logoshop" /></a>
        </div>
        <div class="search-bar">
            <form action="listsp">
                <input type="text" placeholder="Nhập tên sản phẩm" name="search"><input id="searchHome" type="submit"
                    value="Tìm kiếm" />
            </form>
        </div>
        <div class="clear"></div>
        <div class="header-top-nav ">
            <ul style="background-color:#fff">
                <li id="here"><a href="cart"><span style="color:red">Giỏ hàng </span><span class="glyphicon glyphicon-shopping-cart"></span></a><span class="cartmenu" id="soluongspcart">3</span></li>
            </ul>
        </div>
        <div class="clear"></div>
    </div>
</div>
<div class="clear"></div>
<div class="top-header">
    <div class="">
        <div class="top-nav" style="display: flex;">
            <ul >
                <li class="hmi"><a style="text-decoration: none"  href="index"><span class="hmiu"><span class="hmia">Trang chủ</span></span></a></li>
                <li class="dropdown ctgd hmi"><a style="text-decoration: none" href="#"><span class="hmiu"><span class="hmia">Danh mục <span class="caret"></span></span></span></a>
                    <ul class="dropdown-menu" id="danhmuc">
                        <li><a href="listsp">Bình tài lộc</a></li>
                        <li><a href="listsp">Bình gốm</a></li>
                    </ul>
                </li>
                <li class="hmi"><a style="text-decoration: none" href="vanchuyen"><span class="hmiu"><span class="hmia">Vận chuyển</span></span></a></li>
                <li class="hmi"><a style="text-decoration: none" href="chinhsach"><span class="hmiu"><span class="hmia">Chính sách đổi trả hàng</span></span></a></li>
                <li class="hmi"><a style="text-decoration: none" href="lienhe"><span class="hmiu"><span class="hmia">Liên hệ</span></span></a></li>
                <li class="hmi"><a style="text-decoration: none" href="baiviet"><span class="hmiu"><span class="hmia">Bài viết</span></span></a></li>
               ${authen}
            </ul>
        </div>
        <div class="clear"></div>
    </div>
</div>
</div>`
document.getElementById("menu").innerHTML = menu
getCategory();
menuright();
calNumBer();



var footer = 
`<div class="wrap">
<div style="padding: 30px;padding-bottom: 50px;" class="section group">
    <div class="col_1_of_4 span_1_of_4">
        <div class="logo-footer">
            <a href=""><img
                src="image/logo_ss_white.png" style="width: 130px;" title="logoshop" /></a>
            <p style="color: rgb(208, 208, 208);margin-top: 10px;">268 Lý Thường Kiệt</p>
            <p style="color: rgb(208, 208, 208);padding: 0 !important;">Phường 4, Quận 10, TP.HCM</p>
            <div style="display: flex;color: rgb(208, 208, 208);font-family: verdana, arial, helvetica, helve, sans-serif;margin-top: 12px;
            background: #9b3651;padding: 6px 10px;border-radius: 50px;width: 145px;"><ion-icon style="font-size: 25px;margin-bottom: -2px;" name="call"></ion-icon><p style="font-size: 14px;padding: 0;margin-top: 1px;margin-left: 4px;"> 0359136520</p></div>
        </div>
    </div>
    <div class="col_1_of_4 span_1_of_4">
        <b style="color: #fff;">THÔNG TIN CHUNG</b>
        <ul class="uk-list uk-list-bullet ftil" style="list-style-type: none;">
            <li class="spi"><a class="spa" style="color: rgb(208, 208, 208);" rel="nofollow" href="#"><span class="spl">Giới thiệu</span></a></li>
            <li class="spi"><a class="spa" style="color: rgb(208, 208, 208);" rel="nofollow" href="#"><span class="spl">Câu hỏi thường gặp</span></a></li>
            <li class="spi"><a class="spa" style="color: rgb(208, 208, 208);" rel="nofollow" href="#"><span class="spl">Báo chí nói về chúng tôi</span></a></li>
            <li class="spi"><a class="spa" style="color: rgb(208, 208, 208);" rel="nofollow" href="#"><span class="spl">Tuyển dụng</span></a></li>
            <li class="spi"><a class="spa" style="color: rgb(208, 208, 208);" rel="nofollow" href="#"><span class="spl">Liên hệ</span></a></li>
        </ul>
    </div>
    <div class="col_1_of_4 span_1_of_4" style="list-style: inside;">
        <b style="color: #fff">HỖ TRỢ KHÁCH HÀNG</b>
        <ul class="uk-list uk-list-bullet ftil" style="list-style-type: none;">
            <li class="spi"><a class="spa" style="color: rgb(208, 208, 208);" rel="nofollow" href="#"><span class="spl">Gửi yêu cầu hỗ trợ</span></a></li>
            <li class="spi"><a class="spa" style="color: rgb(208, 208, 208);" rel="nofollow" href="#"><span class="spl">Hình
                    thức thanh toán</span></a></li>
            <li class="spi"><a class="spa" style="color: rgb(208, 208, 208);" rel="nofollow" href="#"><span class="spl">Chính
                    sách vận chuyển</span></a></li>
            <li class="spi"><a class="spa" style="color: rgb(208, 208, 208);" rel="nofollow" href="#"><span class="spl">Bảo
                    hành đổi trả</span></a></li>
        </ul>
    </div>
    <div class="col_1_of_4 span_1_of_4 footer-lastgrid social">
        <b style="color: #fff">MẠNG XÃ HỘI</b>
        <ul class="social-list">
            <li class="spi spis"><a class="spa" style="color: rgb(0, 0, 0);padding-right: 2px;" rel="nofollow" href="#"><span class="spls"><ion-icon class="social-icon" name="logo-twitter"></ion-icon>Twitter </span></a></li>
            <li style="margin-left: 10px;" class="spi spis"><a class="spa" style="color: rgb(0, 0, 0);padding-right: 2px;" rel="nofollow" href="#"><span class="spls"><ion-icon class="social-icon" name="logo-facebook"></ion-icon>Facebook </span></a></li>
            <li class="spi spis"><a class="spa" style="color: rgb(0, 0, 0);padding-right: 2px;" rel="nofollow" href="#"><span class="spls"><ion-icon class="social-icon" name="logo-instagram"></ion-icon>Instagram </span></a></li>
        </ul>
    </div>
</div>
</div>`
try {
    document.getElementById("footer").innerHTML = footer
} catch (error) {
    
}
}

async function logout(){
    localStorage.removeItem("token");
    window.location.replace("login")
}

function randomKeys(){
    var str = 'qwert1yui2op3as4dfg5hj6klzx7cvb8nmQ9WE0RTYUIOPASDFGHJKLZXCVBNM';
    var len = str.length-1;
    var s = '';
    for(i=0; i<13; i++){
        var ints = parseInt((Math.random()*len));
        var ran = str[ints];
        s += ran;
    }
    return s;
}

async function getCategory() {
    var url = 'http://localhost:8080/api/public/allcategory';
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var listcategory = await response.json();
    console.log(listcategory)
    var mains = '';
    for (i = 0; i < listcategory.length; i++) {
        mains += '<li><a class="dropdown-item" href="listsp?category='+listcategory[i].id+'">'+listcategory[i].name+'</a></li>'
    }
    document.getElementById("danhmuc").innerHTML = mains
}

function calNumBer(){
    var list = JSON.parse(localStorage.getItem("cartswshop"));
    var total = Number(0);
    if(listcart != null){
        for(i=0; i< list.length; i++){
            total += Number(list[i].quantity);
        }
    }
    document.getElementById("soluongspcart").innerText = total
    document.getElementById("slspcart").innerText = total
}

async function getCategory() {
    var url = 'http://localhost:8080/api/public/allcategory';
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var listcategory = await response.json();
    console.log(listcategory)
    var mains = '';
    for (i = 0; i < listcategory.length; i++) {
        mains += '<li><a class="dropdown-item" href="listsp?category='+listcategory[i].id+'">'+listcategory[i].name+'</a></li>'
    }
    document.getElementById("danhmuc").innerHTML = mains
}

function menuright(){
    const rightSearch = document.getElementById("right-search");
const sbr = document.querySelector("#sbr");
const sbri = document.querySelector("#sbri");
const rightSearchDot = document.querySelector(".right-search > .right-dot");
const rightSearchIcon = document.querySelector(".right-search-icon");
const closeSbr = document.querySelector(".close-sbr");

rightSearch.addEventListener("click", function () {
  sbr.style.visibility = "visible";
  sbr.style.opacity = "1";
  sbr.style.width = "250px";
  rightSearchIcon.style.color = "#9b3651";
  rightSearchDot.style.background = "#9b3651";
  rightSearchDot.style.border = "#9b3651 1px solid";
  rightSearch.style.border = "#9b3651 1px solid";
  rightSearch.style.zIndex = "886";
  //   sbr.style.animation = "sbrit 0.5s";
});
closeSbr.addEventListener("click", function () {
  sbr.style.visibility = "hidden";
  sbr.style.opacity = "0";
  sbr.style.width = "0";
  rightSearchIcon.style.color = "rgb(41, 41, 41)";
  rightSearchDot.style.background = "#fff";
  rightSearchDot.style.border = "rgb(188, 188, 188) 1px solid";
  rightSearch.style.border = "rgb(188, 188, 188) 1px solid";
  //   sbr.style.animation = "sbrit 0.5s";
});

var scrollTopBtn = $("#back-to-top");
scrollTopBtn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "2000");
  //   sbr.style.visibility = "hidden";
  //   sbr.style.opacity = "0";
});

}

function formatmoney(money) {
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    return VND.format(money);
}
  
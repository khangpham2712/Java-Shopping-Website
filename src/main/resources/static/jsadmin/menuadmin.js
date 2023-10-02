function loadMenuAdmin(){
    var main = '<nav class="nav nav-dark ">'+
    '<div> '+
        '<div class="nav_list"> '+
            '<a href="index" class="nav_link"> '+
                '<i class="fa fa-home"></i> <span class="nav_name">Trang chủ</span> '+
            '</a> '+
            '<a href="user" class="nav_link"> '+
                '<i class="bx bx-user nav_icon"></i> <span class="nav_name">Người dùng</span> '+
            '</a> '+
            '<a href="sanpham" class="nav_link"> '+
                '<i class="fas fa-tshirt"></i> <span class="nav_name">Sản phẩm</span> '+
            '</a> '+
            '<a href="nhaphang" class="nav_link"> '+
                '<i class="fas fa-file"></i> <span class="nav_name">Nhập hàng</span> '+
            '</a> '+
            '<a href="wallet" class="nav_link"> '+
                '<i class="bx bx-bar-chart-alt-2 nav_icon"></i> <span class="nav_name">Doanh thu</span> '+
            '</a> '+
            '<a href="donhang" class="nav_link"> '+
                '<i class="fa fa-shopping-cart"></i> <span class="nav_name">Đơn hàng</span> '+
            '</a> '+
            '<a href="category" class="nav_link"> '+
                '<i class="fa fa-list-alt"></i> <span class="nav_name">Danh mục sản phẩm</span> '+
            '</a> '+
            '<a href="trademark" class="nav_link"> '+
                '<i class="fa fa-list-alt"></i> <span class="nav_name">Nguồn gốc xuất xứ</span> '+
            '</a> '+
            '<a href="blogadmin" class="nav_link"> '+
                '<i class="fa fa-list-alt"></i> <span class="nav_name">Bài viết</span> '+
            '</a> '+
        '</div>'+
    '</div> '+
    '<a onclick="logoutadmin()" style="cursor: pointer" class="nav_link"> '+
        '<i class="bx bx-log-out nav_icon"></i> <span class="nav_name">SignOut</span> '+
    '</a>'+
'</nav>'

document.getElementById("nav-bar").innerHTML = main;
demLienHe();
checkroleAdmin();
}


async function demLienHe() {
    var token = localStorage.getItem("token");
    var url = 'http://localhost:8080/api/admin/demChuaXem';
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    var dem = await response.text();
    if(dem > 0){
        document.getElementById("here").innerHTML = '<i class="fa fa-bell"></i>('+dem+') Liên hệ mới</a>'
    }
}

async function checkroleAdmin(){
    var token = localStorage.getItem("token");
    var url = 'http://localhost:8080/api/admin/checkroleadmin';
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    if(response.status > 300){
        window.location.replace('../login')
    }
}

async function logoutadmin(){
    localStorage.removeItem("token");
    window.location.replace("../logout")
}





document.addEventListener("DOMContentLoaded", function(event) {

    var headers = 
    `<div class="header_toggle"> <i class='bx bx-menu' id="header-toggle"></i> </div>
    <div class="topnav-right">
        <ul class="listmenus" style="display: flex;">
        <li><a id="here" style="color: #dbbc0b; font-weight: bold;" href="lienhe"><i class="fa fa-bell"></i>(0) Liên hệ mới</a></li>
        <li><a href=""><i class="fa fa-user"></i>Xin chào: Admin</a></li>
        <li onclick="logoutadmin()"><a style="cursor: pointer"><i class="fas fa-sign-out-alt"></i>Đăng xuất</a></li>
        </ul>
    </div>`
    document.getElementById("header").innerHTML = headers;
   
    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    nav.classList.toggle('show')
    // change icon
    toggle.classList.toggle('bx-x')
    // add padding to body
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
    toggle.addEventListener('click', ()=>{
        // show navbar
        nav.classList.toggle('show')
        // change icon
        toggle.classList.toggle('bx-x')
        // add padding to body
        bodypd.classList.toggle('body-pd')
        // add padding to header
        headerpd.classList.toggle('body-pd')
    })
    }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header')
    
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
     // Your code to run since DOM is loaded and ready
     
    });


var size = 4;
var key = localStorage.getItem("keyrandom");
async function loadProductByCategory(page) {
    var id = window.location.search.split('category=')[1];
    var search = window.location.search.split('search=')[1];
    var url = 'http://localhost:8080/api/public/productBycategoryId?size='+size +'&page='+page +'&cateId='+id;
    if(search != null){
        url = 'http://localhost:8080/api/public/searchProByParam?size='+size +'&page='+page +'&search='+search+'&key='+key;
    }
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var listpro = await response.json();
    console.log(listpro)
    var list = listpro.content;
    var totalPage = listpro.totalPages 
    var totalElements = listpro.totalElements
    var main = '';
    for (i = 0; i < list.length; i++) {
        main += `<div class="images_1_of_4 products-info col-md-3">
                    <div class="bdr">
                    <a href="chitietsp?id=${list[i].id}"><div class="product-img"><img src="${list[i].imageBanner}"></div>
                    <h3 class="namepro"><span>${list[i].name}</span></h3><hr>
                    <h3 class="pricepro">${formatmoney(list[i].price)}</h3></a>
                    <button onclick="addCart(${list[i].id}, 1)" class="btnaddcart"><i class="fa fa-shopping-cart"></i> Giỏ hàng</button>
                    </div>
                </div>`
    }
    document.getElementById("listsp").innerHTML = main

    var mainpage = ''
    for(i=1; i<= totalPage; i++){
        mainpage += '<li onclick="loadProductByCategory('+(Number(i)-1)+')" class="page-item"><a class="page-link" href="#listsp">'+i+'</a></li>'
    }
    document.getElementById("listpage").innerHTML = mainpage
    document.getElementById("soluongsp").innerHTML = list.length
    document.getElementById("tongsl").innerHTML = totalElements
}

var token = localStorage.getItem("token");

async function chitietsp() {
    if(token == null){
        document.getElementById("mycomment").style.display = 'none'
    }
    var id = window.location.search.split('=')[1];
    var url = 'http://localhost:8080/api/public/prodetail?id='+id +'&key='+key;
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var pro = await response.json();
    console.log(pro)
    document.getElementById("name-detail").innerHTML = pro.name
    document.getElementById("price-detail").innerHTML = formatmoney(pro.price)
    document.getElementById("hangsx").innerHTML = pro.tradeMark.name
    document.getElementById("motasp").innerHTML = pro.description
    document.getElementById("img-detail").src = pro.imageBanner

    var url = 'http://localhost:8080/api/public/imageProByPro?id='+id ;
    const res = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var listimage = await res.json();
    var main = ''
    for(i=0; i<listimage.length; i++){
        main += ` <div class="singel-img-detail">
                    <img class="list-img-detail" src="${listimage[i].link}">
                </div>`
    }
    document.getElementById("list-image-detail").innerHTML = main

    document.getElementById("themgiohang").onclick = function(){
        var num = document.getElementById("soluongdetail").value
        if(num < 1){
            alert("sỐ lượng không được nhỏ hơn 1");
            return;
        }
        addCart(id, num)
    }
    

    var url = 'http://localhost:8080/api/public/comments?id='+id ;
    const resp = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    var list = await resp.json();
    console.log(list)
    var mains = ''
    for(i=0; i<list.length; i++){
        var del = '<i onclick="deleteComment('+list[i].id+')" class="fa fa-trash xoabl"></i>'
        if(list[i].myComment != 1){
            del = ''
        }
        mains += `<div class="col-md-12" style="padding: 0;">
                    <div class="row">
                        <div class="col-sm-1">
                            <img class="thumbnail" src="image/user.png">
                        </div>
                        <div class="col-sm-5">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <strong>${list[i].user.fullname}</strong> <span class="text-muted"> ${list[i].createdDate}</span>
                                    ${del}
                                </div>
                                <div class="panel-body">${list[i].content} </div>
                            </div>
                        </div>
                    </div>
                </div>`
    }
    document.getElementById("listbinhluan").innerHTML = mains



    var url = 'http://localhost:8080/api/public/productByCateLimit?id='+id ;
    const respo = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var listpros = await respo.json();
    console
    var main = ''
    for(i=0; i<listpros.length; i++){
        main += `<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 signle-item">
                    <a href="chitietsp?id=${listpros[i].id}"><img class="img-item" src="${listpros[i].imageBanner}"></a>
                    <div class="content-item-signle">
                        <a href="chitietsp?id=${listpros[i].id}">
                            <p class="name-signle-item">${listpros[i].name}</p>
                            <p class="price-item">${formatmoney(listpros[i].price)}</p>
                        </a>
                        <button onclick="addCart(${listpros[i].id}, 1)" class="btnaddcart"><i class="fa fa-shopping-cart"></i> Giỏ hàng</button>
                    </div>
                </div>`
    }
    document.getElementById("spcungdanhmuc").innerHTML = main
}

async function loaddmandhang() {
    var url = 'http://localhost:8080/api/public/allcategory';
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var list = await response.json();
    var main = '<option value="-1">Tất cả danh mục</option>'
    for(i=0; i< list.length; i++){
        main += '<option value="'+list[i].id+'">'+list[i].name+'</option>'
    }
    document.getElementById("danhmucsearch").innerHTML = main

    var url = 'http://localhost:8080/api/public/alltrademark';
    const res = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var list = await res.json();
    var main = '<option value="-1">Tất cả</option>'
    for(i=0; i< list.length; i++){
        main += '<option value="'+list[i].id+'">'+list[i].name+'</option>'
    }
    document.getElementById("hangsx").innerHTML = main
}

async function loadDmIndex() {
    var url = 'http://localhost:8080/api/public/allcategory';
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var list = await response.json();
    var main = ''
    for(i=0; i< list.length; i++){
        main += ' <li><a style="text-decoration: none" href="listsp?category='+list[i].id+'"><img alt="" src="image/iconmenu.png" style="color: red"> <span style=" font-size: 15px; font-weight: 900;margin-left:2px"><span>'+list[i].name+'</span></span></a></li>'
    }
    document.getElementById("danhmucsearch").innerHTML = main
}

async function searchFull(page) {
    var khoanggia = document.getElementById("khoanggia").value.split("-");
    var small = khoanggia[0];
    var large = khoanggia[1];
    var hangsx = document.getElementById("hangsx").value;
    var danhmucsearch = document.getElementById("danhmucsearch").value;
    var search = {
        "small":small,
        "large":large,
        "hang":hangsx,
        "danhmuc":danhmucsearch
    }
    var url = 'http://localhost:8080/api/public/searchFull?size='+size +'&page='+page
    const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(search)
    });
    var listpro = await response.json();
    console.log(listpro)
    var list = listpro.content;
    var totalPage = listpro.totalPages 
    var totalElements = listpro.totalElements 
    var main = '';
    for (i = 0; i < list.length; i++) {
        main += `<div class="images_1_of_4 products-info col-md-3">
                    <div class="bdr">
                    <a href="chitietsp?id=${list[i].id}"><div class="product-img"><img src="${list[i].imageBanner}"></div>
                    <h3 class="namepro"><span>${list[i].name}</span></h3><hr>
                    <h3 class="pricepro">${formatmoney(list[i].price)}</h3></a>
                    <button onclick="addCart(${list[i].id}, 1)" class="btnaddcart"><i class="fa fa-shopping-cart"></i> Giỏ hàng</button>
                    </div>
                </div>`
    }
    document.getElementById("listsp").innerHTML = main

    var mainpage = ''
    for(i=1; i<= totalPage; i++){
        mainpage += '<li onclick="searchFull('+(Number(i)-1)+')" class="page-item"><a class="page-link" href="#listsp">'+i+'</a></li>'
    }
    document.getElementById("listpage").innerHTML = mainpage
    document.getElementById("soluongsp").innerHTML = list.length
    document.getElementById("tongsl").innerHTML = totalElements

}

async function loadIndexPage() {
    var url = 'http://localhost:8080/api/public/productIndex?size='+size +'&key='+key;
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var list = await response.json();
    var main = '';
    for (i = 0; i < list.length; i++) {
        main += `<div class="images_1_of_4 products-info col-md-3">
                    <div class="bdr">
                    <a href="chitietsp?id=${list[i].id}"><div class="product-img"><img src="${list[i].imageBanner}"></div>
                    <h3 class="namepro"><span>${list[i].name}</span></h3><hr>
                    <h3 class="pricepro">${formatmoney(list[i].price)}</h3></a>
                    <button onclick="addCart(${list[i].id}, 1)" class="btnaddcart"><i class="fa fa-shopping-cart"></i> Giỏ hàng</button>
                    </div>
                </div>`
    }
    document.getElementById("productIndex").innerHTML = main
}

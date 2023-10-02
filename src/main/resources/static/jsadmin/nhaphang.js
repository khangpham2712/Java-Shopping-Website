var token = localStorage.getItem("token");

async function loadAllNhapHang(start, end, idsp) {
    var url = 'http://localhost:8080/api/public/allImportOrder';
    if(idsp != ""){
        url = 'http://localhost:8080/api/public/searchImportOrder?sanpham='+idsp;
    }
    if(start != "" && end != ""){
        url += '&start='+start+"&end="+end
    }
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var list = await response.json();
    var main = '';
    for (i = 0; i < list.length; i++) {
        main += '<tr>'+
                    '<td>'+list[i].id+'</td>'+
                    '<td>'+list[i].product.name+'</td>'+
                    '<td>'+list[i].quantity+'</td>'+
                    '<td>'+list[i].importPrice+'</td>'+
                    '<td>'+list[i].importDate+'</td>'+
                    '<td>'+list[i].distributor+'</td>'+
                    '<td>'+list[i].phone+'</td>'+
                    '<td>'+list[i].address+'</td>'+
                    '<td><button onclick="deleteDonnhap('+list[i].id+')" class="btn btn-danger"><i class="fa fa-trash"></i> Xóa</button></td>'+
                    '<td><a href="adddonnhap?id='+list[i].id+'" class="btn btn-success"><i class="fa fa-edit"></i> Sửa</a></td>'+
                '</tr>'
    }
    document.getElementById("listnh").innerHTML = main
    $('#example').DataTable();
}

async function search(){
    var start = document.getElementById("start").value
    var end = document.getElementById("end").value
    var idsp = document.getElementById("sanpham").value
    loadAllNhapHang(start, end, idsp)
}

async function loadproduct() {
    var url = 'http://localhost:8080/api/allproduct';
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var list = await response.json();
    var main = '';
    for (i = 0; i < list.length; i++) {
        main += '<option value="'+list[i].id+'" data-tokens="'+list[i].id+'">'+list[i].name+'</option>'
    }
    document.getElementById("sanpham").innerHTML = main
    document.getElementById("sanpham").classList.add("selectpicker");
    $('.selectpicker').selectpicker();
}

async function loadAllsproduct() {
    var url = 'http://localhost:8080/api/allproduct';
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var list = await response.json();
    var main = '<option value="-1">tất cả sản phẩm</option>';
    for (i = 0; i < list.length; i++) {
        main += '<option value="'+list[i].id+'">'+list[i].name+'</option>'
    }
    document.getElementById("sanpham").innerHTML = main
    document.getElementById("sanpham").classList.add("selectpicker");
    $('.selectpicker').selectpicker();
}

async function loadANhapHang() {
    var id = window.location.search.split('=')[1];
    if(id != null){
        var url = 'http://localhost:8080/api/public/ImportOrderById?id='+id;
        const response = await fetch(url, {
            method: 'GET',
            headers: new Headers({
            })
        });
        var nhaphang = await response.json();
        document.getElementById("ngaynhap").value = nhaphang.importDate
        document.getElementById("soluong").value = nhaphang.quantity
        document.getElementById("gianhap").value = nhaphang.importPrice
        document.getElementById("sanpham").value = nhaphang.product.id
        document.getElementById("nhapp").value = nhaphang.distributor
        document.getElementById("diachi").value = nhaphang.address
        document.getElementById("sdt").value = nhaphang.phone

    }
}

async function loadADonNhap() {
    var id = window.location.search.split('=')[1];
    if(id != null){
        var url = 'http://localhost:8080/api/public/blogById?id='+id;
        const response = await fetch(url, {
            method: 'GET',
            headers: new Headers({
            })
        });
        var blog = await response.json();
        document.getElementById("tieude").value = blog.title
        document.getElementById("mota").value = blog.description
        document.getElementById("imgblog").src = blog.imageBanner
        tinyMCE.get('editor').setContent(blog.content)

    }
}

async function saveDonNhap() {
    var id = window.location.search.split('=')[1];
    var url = 'http://localhost:8080/api/admin/addOrUpdateImportOrder';

    var ngaynhap = document.getElementById("ngaynhap").value
    var soluong = document.getElementById("soluong").value
    var gianhap = document.getElementById("gianhap").value
    var sanpham = document.getElementById("sanpham").value
    var nhapp = document.getElementById("nhapp").value
    var diachi = document.getElementById("diachi").value
    var sdt = document.getElementById("sdt").value

    var importOrder = {
        "id": id,
        "quantity": soluong,
        "importPrice":gianhap,
        "distributor":nhapp,
        "phone":sdt,
        "address":diachi,
        "importDate":ngaynhap,
        "product":{
            "id":sanpham
        }
    }

    const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(importOrder)
    });
    if(response.status < 300){
        swal({
            title: "Thông báo", 
            text: "thêm/sửa đơn nhập thành công!", 
            type: "success"
          },
        function(){ 
            window.location.replace('nhaphang')
        });
    }
    else{
        swal({
            title: "Thông báo", 
            text: "thêm/sửa đơn nhâp thất bại!", 
            type: "error"
          },
        function(){ 
        });
    }
}

async function deleteDonnhap(id) {
    var url = 'http://localhost:8080/api/admin/deleteImportOrder?id=' + id;
    const response = await fetch(url, {
        method: 'DELETE',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    if (response.status < 300) {
        swal({
            title: "Thông báo", 
            text: "xóa đơn nhập thành công!", 
            type: "success"
          },
        function(){ 
            window.location.reload();
        });
    }
    else {
        swal({
            title: "Thông báo", 
            text: "không thể xóa đơn nhập", 
            type: "error"
          },
        function(){ 
            window.location.reload();
        });
    }
}
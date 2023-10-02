var token = localStorage.getItem("token");
var idtrangthai = 5
var dangcho = 1
async function loadAllInvoice() {
    var url = 'http://localhost:8080/api/admin/allInvoice';
    const res = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    var list = await res.json();
    var main = ''
    for(i=0; i< list.length; i++){
        var col = ''
        var tt = 'đã thanh toán qua momo'
        var huydon = ''
        if(list[i].payType == 0){
            tt = 'thanh toán khi nhận hàng'
        }
        if(list[i].statusIn.id == dangcho){
            col = 'style="color:red; font-weight: bold;"'
            huydon = '<button onclick="setIdHuy('+list[i].id+')" data-bs-toggle="modal" data-bs-target="#huydon" class="btn btn-danger">Hủy</button>'
        }
        main += `<tr>
                    <td>#${list[i].id}</td>
                    <td>${list[i].createdDate}</td>
                    <td ${col}>${list[i].statusIn.name}</td>
                    <td>${formatmoney(list[i].totalAmount)}</td>
                    <td>${tt}</td>
                    <td>${list[i].note}</td>
                    <td>${list[i].fullname}</td>
                    <td>${list[i].address}</td>
                    <td><button onclick="loadEdit(${list[i].id},${list[i].statusIn.id})" data-bs-toggle="modal" data-bs-target="#capnhatdonhang" class="btn btn-primary"><i class="fa fa-edit"></i> edit</button></td>
                    <td><button onclick="loadChiTiet(${list[i].id})" data-bs-toggle="modal" data-bs-target="#chitietdonhang" class="btn btn-success"><i class="fa fa-list"></i> xem</button></td>
                    <td>${huydon}</td>
                </tr>`
    }
    document.getElementById("listinvoice").innerHTML = main
    $('#example').DataTable({ "bSort" : false });
    document.getElementById("tongdh").innerHTML = list.length
}


async function filterInvoice() {
    var url = 'http://localhost:8080/api/admin/allInvoiceFilter';
    var start = document.getElementById("start").value
    var end = document.getElementById("end").value
    var type = document.getElementById("type").value
    var trangthai = document.getElementById("trangthai").value
    var search = {
        "start":start,
        "end":end,
        "type":type,
        "statusIn":trangthai
    }
    const res = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(search)
    });
    var list = await res.json();
    var main = ''
    for(i=0; i< list.length; i++){
        var col = ''
        var tt = 'đã thanh toán qua momo'
        var huydon = ''
        if(list[i].payType == 0){
            tt = 'thanh toán khi nhận hàng'
        }
        if(list[i].statusIn.id == dangcho){
            col = 'style="color:red; font-weight: bold;"'
            huydon = '<button onclick="setIdHuy('+list[i].id+')" data-bs-toggle="modal" data-bs-target="#huydon" class="btn btn-danger">Hủy</button>'
        }
        main += `<tr>
                    <td>#${list[i].id}</td>
                    <td>${list[i].createdDate}</td>
                    <td ${col}>${list[i].statusIn.name}</td>
                    <td>${formatmoney(list[i].totalAmount)}</td>
                    <td>${tt}</td>
                    <td>${list[i].note}</td>
                    <td>${list[i].fullname}</td>
                    <td>${list[i].address}</td>
                    <td><button onclick="loadEdit(${list[i].id},${list[i].statusIn.id})" data-bs-toggle="modal" data-bs-target="#capnhatdonhang" class="btn btn-primary"><i class="fa fa-edit"></i> edit</button></td>
                    <td><button onclick="loadChiTiet(${list[i].id})" data-bs-toggle="modal" data-bs-target="#chitietdonhang" class="btn btn-success"><i class="fa fa-list"></i> xem</button></td>
                    <td>${huydon}</td>
                </tr>`
    }
    document.getElementById("listinvoice").innerHTML = main
    $('#example').DataTable();
    document.getElementById("tongdh").innerHTML = list.length
}

function loadEdit(idinvoice, idtrangthai){
    document.getElementById("trangthaiupdate").value = idtrangthai
    document.getElementById("iddonhangupdate").value = idinvoice
}

function formatmoney(money) {
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      });
    return VND.format(money);
}

async function loadAllTrangThai() {
    var url = 'http://localhost:8080/api/public/allstatus';
    const res = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    var list = await res.json();
    var main = '<option value="-1">--- Tất cả ---</option>'
    for(i=0; i< list.length; i++){
        main += '<option value="'+list[i].id+'">'+list[i].name+'</option>';
    }
    document.getElementById("trangthai").innerHTML = main
}

async function findByAdminUpdate() {
    var url = 'http://localhost:8080/api/public/allstatusUpdate';
    const res = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var list = await res.json();
    var main = ''
    for(i=0; i< list.length; i++){
        main += '<option value="'+list[i].id+'">'+list[i].name+'</option>';
    }
    document.getElementById("trangthaiupdate").innerHTML = main
}

async function loadChiTiet(id) {
    var url = 'http://localhost:8080/api/detailinvoiceByInvoice?id='+id;
    const res = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    var list = await res.json();
    var main = ''
    for(i=0; i< list.length; i++){
        main += `<tr>
                    <td><img src="${list[i].product.imageBanner}" class="img-invoice-detail"></td>
                    <td>${list[i].product.name}</td>
                    <td>${list[i].quantity}</td>
                    <td>${formatmoney(list[i].product.price)}</td>
                </tr>`
    }
    document.getElementById("listchitiet").innerHTML = main
    if(list[0].invoice.noteAdmin != null || list[0].invoice.noteAdmin != ""){
        document.getElementById("contenthuy").innerHTML = list[0].invoice.noteAdmin
        document.getElementById("lydohuy").style.display = 'block'
    }
}

function setIdHuy(id){
    document.getElementById("iddonhang").value = id
}

async function huydon() {
    var id = document.getElementById("iddonhang").value
    var content = tinyMCE.get('editor').getContent()
    var url = 'http://localhost:8080/api/admin/huydonAdmin?id='+id;
    const res = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        }),
        body: content
    });
    if(res.status < 300){
        swal({
            title: "Thông báo", 
            text: "Hủy đơn hàng thành công!", 
            type: "success"
        },
        function(){ 
            window.location.reload()
        });
    }
    if(res.status > 300){
        swal({
            title: "Thông báo", 
            text: "Hủy đơn hàng thất bại!", 
            type: "error"
            },
        function(){ 
        });
    } 
}

async function updateDon() {
    var idtrangthai= document.getElementById("trangthaiupdate").value
    var idinvoice= document.getElementById("iddonhangupdate").value
    var url = 'http://localhost:8080/api/admin/updateTrangThai?id='+idinvoice+'&tt='+idtrangthai;
    const res = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    if(res.status < 300){
        swal({
            title: "Thông báo", 
            text: "Cập nhật trạng thái đơn hàng thành công!", 
            type: "success"
        },
        function(){ 
            window.location.reload()
        });
    }
    if(res.status > 300){
        swal({
            title: "Thông báo", 
            text: "Cập nhật trạng thái đơn hàng thất bại!", 
            type: "error"
            },
        function(){ 
        });
    } 
}
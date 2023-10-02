var token = localStorage.getItem("token");

var idtrangthai = 2

async function myInvoice() {
    var url = 'http://localhost:8080/api/user/myInvoice';
    const res = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    var list = await res.json();
    var main = ''
    for(i=0; i< list.length; i++){
        var tt = 'đã thanh toán qua momo'
        var huydon = '<button onclick="huydon('+list[i].id+')" class="btn btn-danger">Hủy đơn</button>'
        if(list[i].payType == 0){
            tt = 'thanh toán khi nhận hàng'
        }
        if(list[i].statusIn.id > idtrangthai || list[i].payType == 1){
            huydon = ''
        }
        main += `<tr>
                    <td>#${list[i].id}</td>
                    <td>${formatmoneyCart(list[i].totalAmount)}</td>
                    <td>${list[i].createdDate}</td>
                    <td>${tt}</td>
                    <td><p class="dangcho">${list[i].statusIn.name}</p></td>
                    <td><button onclick="loadChiTiet(${list[i].id})" class="xemchitiet-dh" data-toggle="modal" data-target=".bd-example-modal-lg">Xem chi tiết</button></td>
                    <td>${huydon}</td>
                </tr>`
    }
    document.getElementById("listinvoice").innerHTML = main
}


async function filterdonhang() {
    var url = 'http://localhost:8080/api/user/myInvoiceFilter';
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
        var tt = 'đã thanh toán qua momo'
        var huydon = '<button onclick="huydon('+list[i].id+')" class="btn btn-danger">Hủy đơn</button>'
        if(list[i].payType == 0){
            tt = 'thanh toán khi nhận hàng'
        }
        if(list[i].statusIn.id > idtrangthai){
            huydon = ''
        }
        main += `<tr>
                    <td>#${list[i].id}</td>
                    <td>${formatmoneyCart(list[i].totalAmount)}</td>
                    <td>${list[i].createdDate}</td>
                    <td>${tt}</td>
                    <td><p class="dangcho">${list[i].statusIn.name}</p></td>
                    <td><button onclick="loadChiTiet(${list[i].id})" class="xemchitiet-dh" data-toggle="modal" data-target=".bd-example-modal-lg">Xem chi tiết</button></td>
                    <td>${huydon}</td>
                </tr>`
    }
    document.getElementById("listinvoice").innerHTML = main
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
                    <td>${formatmoneyCart(list[i].product.price)}</td>
                </tr>`
    }
    document.getElementById("listchitiet").innerHTML = main
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

async function huydon(id) {
    var result = confirm("xác nhận hủy đơn hàng này");
    if (result) {
        var url = 'http://localhost:8080/api/user/huydon?id='+id;
        const res = await fetch(url, {
            method: 'DELETE',
            headers: new Headers({
                'Authorization': 'Bearer ' + token
            })
        });
        if(res.status < 300){
            swal({
                title: "Thông báo", 
                text: "Hủy đơn hàng thành công thành công!", 
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
}
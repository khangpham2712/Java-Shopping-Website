var token = localStorage.getItem("token");

async function loadAllTrademark() {
    var url = 'http://localhost:8080/api/public/alltrademark';
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var list = await response.json();
    var main = '';
    for (i = 0; i < list.length; i++) {
        main += '<tr>'+
                    '<td>#'+list[i].id+'</td>'+
                    '<td>'+list[i].name+'</td>'+
                    '<td>'+list[i].address+'</td>'+
                    '<td><button onclick="deleteTradeMark('+list[i].id+')" class="btn btn-danger"><i class="fa fa-trash"></i> Xóa</button></td>'+
                    '<td><button onclick="loadATradeMark('+list[i].id+')" data-bs-toggle="modal" data-bs-target="#themthuonghieu" class="btn btn-success"><i class="fa fa-edit"></i> Sửa</button></td>'+
                '</tr>'
    }
    document.getElementById("listcategory").innerHTML = main
    $('#example').DataTable();
}

function clearInput(){
    document.getElementById("idtrade").value = ''
    document.getElementById("trademarkname").value = ''
}

async function loadATradeMark(id) {
    var url = 'http://localhost:8080/api/public/TradeMarkById?id='+id;
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var obj = await response.json();
    document.getElementById("idtrade").value = obj.id
    document.getElementById("trademarkname").value = obj.name
    document.getElementById("address").value = obj.address
}

async function saveTradeMark() {
    var url = 'http://localhost:8080/api/admin/addOrUpdateTradeMark';
    var idtrade = document.getElementById("idtrade").value
    var trademarkname = document.getElementById("trademarkname").value
    var address = document.getElementById("address").value
    obj = {
        "id": idtrade,
        "name": trademarkname,
        "address": address
    }

    const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(obj)
    });
    if (response.status < 300) {
        swal({
            title: "Thông báo", 
            text: "thêm/sửa thương hiệu thành công!", 
            type: "success"
          },
        function(){ 
            window.location.reload();
        });
    }
    else {
        swal({
            title: "Thông báo", 
            text: "thêm/sửa thương hiệu thất bại, Tên thương hiệu đã tồn tại", 
            type: "error"
          },
        function(){ 
        });
    }
}

async function deleteTradeMark(id) {
    var url = 'http://localhost:8080/api/admin/deleteTradeMark?id=' + id;
    const response = await fetch(url, {
        method: 'DELETE',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    if (response.status < 300) {
        swal({
            title: "Thông báo", 
            text: "xóa thương hiệu thành công!", 
            type: "success"
          },
        function(){ 
            window.location.reload();
        });
    }
    else {
        swal({
            title: "Thông báo", 
            text: "không thể xóa thương hiệu mục này", 
            type: "error"
          },
        function(){ 
        });
    }
}


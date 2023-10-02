var token = localStorage.getItem("token");

async function loadAllCategory() {
    var url = 'http://localhost:8080/api/public/allcategory';
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
                    '<td><button onclick="deleteCategory('+list[i].id+')" class="btn btn-danger"><i class="fa fa-trash"></i> Xóa</button></td>'+
                    '<td><button onclick="loadACategory('+list[i].id+')" data-bs-toggle="modal" data-bs-target="#themdanhmuc" class="btn btn-success"><i class="fa fa-edit"></i> Sửa</button></td>'+
                '</tr>'
    }
    document.getElementById("listcategory").innerHTML = main
    $('#example').DataTable();
}

function clearInput(){
    document.getElementById("idcate").value = ''
    document.getElementById("catename").value = ''
}

async function loadACategory(id) {
    var url = 'http://localhost:8080/api/public/categoryById?id='+id;
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var obj = await response.json();
    document.getElementById("idcate").value = obj.id
    document.getElementById("catename").value = obj.name
}

async function saveCategory() {
    var url = 'http://localhost:8080/api/admin/addOrUpdateCategory';
    var idcate = document.getElementById("idcate").value
    var catename = document.getElementById("catename").value
    obj = {
        "id": idcate,
        "name": catename
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
            text: "thêm/sửa danh mục thành công!", 
            type: "success"
          },
        function(){ 
            window.location.reload();
        });
    }
    else {
        swal({
            title: "Thông báo", 
            text: "thêm/sửa danh mục thất bại, Tên danh mục đã tồn tại", 
            type: "error"
          },
        function(){ 
        });
    }
}

async function deleteCategory(id) {
    var url = 'http://localhost:8080/api/admin/deleteCategory?id=' + id;
    const response = await fetch(url, {
        method: 'DELETE',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    if (response.status < 300) {
        swal({
            title: "Thông báo", 
            text: "xóa danh mục thành công!", 
            type: "success"
          },
        function(){ 
            window.location.reload();
        });
    }
    else {
        swal({
            title: "Thông báo", 
            text: "không thể xóa danh mục này", 
            type: "error"
          },
        function(){ 
        });
    }
}


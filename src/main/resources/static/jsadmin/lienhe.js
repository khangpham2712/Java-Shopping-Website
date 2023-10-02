var token = localStorage.getItem("token");

async function loadAllContact() {
    var url = 'http://localhost:8080/api/admin/contact';
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    var list = await response.json();
    var main = '';
    for (i = 0; i < list.length; i++) {
        var col = ''
        if(list[i].daXem == 0){
            col = 'style="color:red"'
        }
        main += `<tr ${col}>
                    <td>${list[i].email}</td>
                    <td>${list[i].createdDate}</td>
                    <td>${list[i].content}</td>
                    <td><button class="btn btn-success"><i class="fa fa-trash"></i> Xóa</button></td>
                </tr>`
    }
    document.getElementById("listcontact").innerHTML = main
    $('#example').DataTable();
}
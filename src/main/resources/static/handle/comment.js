var token = localStorage.getItem("token");
async function saveComment() {
    var id = window.location.search.split('=')[1];
    var url = 'http://localhost:8080/api/user/saveCommnet';
    var noidungbl = document.getElementById("noidungbl").value

    if(noidungbl == ""){
        alert("bạn chưa nhập nội dung")
        return;
    }
    var comment = {
        "content": noidungbl,
        "product":{
            "id":id
        }
    }
    const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(comment)
    });
    if (response.status < 300) {
        swal({title: "Thông báo", text: "đã đăng bình luận của bạn!", type: "success"},
        function(){ 
            window.location.reload()
        });
    }
    else {
        swal({title: "Thông báo", text: "không thể bình luận!",type: "error"},
        function(){ });
    }
}

async function deleteComment(id){
    var url = 'http://localhost:8080/api/user/deletcomments?id='+id;
    const response = await fetch(url, {
        method: 'DELETE',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    if (response.status < 300) {
        swal({title: "Thông báo", text: "đã xóa bình luận của bạn!", type: "success"},
        function(){ 
            window.location.reload()
        });
    }
    else {
        swal({title: "Thông báo", text: "không thể xóa bình luận!",type: "error"},
        function(){ });
    }
}

async function createLienHe() {
    var url = 'http://localhost:8080/api/public/createContact';
    var email = document.getElementById("email").value
    var content = document.getElementById("content").value
    if(email == "" || content== ""){
        return;
    }
    var contact = {
        "email":email,
        "content":content
    }
    
    const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(contact)
    });
    if (response.status < 300) {
        swal({
            title: "Thông báo", 
            text: "Cảm ơn bạn đã liên hệ đến chúng tôi, chúng tôi sẽ trả lời sớm nhất cho bạn!", 
            type: "success"
          },
        function(){ 
            window.location.reload()
        });
    }
    else {
        swal({
            title: "Thông báo", 
            text: "Có lỗi xảy ra", 
            type: "error"
          },
        function(){ });
    }
}

async function loadUser() {
    var token = localStorage.getItem("token");
    if(token == null){
        return;
    }
    var url = 'http://localhost:8080/api/userlogged';
    const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    var user = await response.json();
    console.log(user)
    document.getElementById("email").value = user.email
}
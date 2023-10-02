var token = localStorage.getItem("token");

async function loadCheckout() {
    var list = JSON.parse(localStorage.getItem("cartswshop"));
    if(list == null){
        alert("bạn chưa có sản phẩm nào trong giỏ hàng");
        window.location.replace('cart');
    }
    if(list.length == 0){
        alert("bạn chưa có sản phẩm nào trong giỏ hàng");
        window.location.replace('cart');
    }
    var tongtien = 0;
    var tongsl = 0;
	for(i=0; i<list.length; i++){
		tongtien += list[i].price*list[i].quantity;
        tongsl += list[i].quantity
	}
    if(token == null){
        alert("bạn chưa đăng nhập")
        window.location.replace("login")
    }
    var url = 'http://localhost:8080/api/userlogged';
    const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    var user = await response.json();
    document.getElementById("hotencheck").innerHTML = user.fullname
    document.getElementById("sdtcheck").innerHTML = user.phone
    document.getElementById("listdcnhanhang").innerHTML = `<label id="diachinhan" class="radio-custom">Địa chỉ: ${user.diaChi}
                                                            <input type="radio" name="radio" checked="checked">
                                                            <span class="checkmark"></span>
                                                        </label>`
    document.getElementById("tongtien").innerHTML = formatmoneyCart(tongtien)
    document.getElementById("tongsl").innerHTML = tongsl +" sản phẩm"
}

async function requestPayMentMomo(){
    var ghichu = document.getElementById("ghichudonhang").value;
    window.localStorage.setItem('ghichudonhang', ghichu);
    var list = JSON.parse(localStorage.getItem("cartswshop"));
    var tongtien = 0;
	for(i=0; i<list.length; i++){
		tongtien += list[i].price*list[i].quantity;
	}
    var returnurl = 'http://localhost:8080/thanhcong';

    var urlinit = 'http://localhost:8080/api/urlpayment';
    var paymentDto = {
        "amount":tongtien,
        "content":"thanh toán đơn hàng swshop",
        "returnUrl":returnurl,
        "notifyUrl":returnurl
    }
    console.log(paymentDto)
    const res = await fetch(urlinit, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(paymentDto)
    });
    var urlReturn = await res.json();
    window.open(urlReturn.url, '_blank');

}

async function checkPayment() {
    var list = JSON.parse(localStorage.getItem("cartswshop"));
    var uls = new URL(document.URL)
    var orderId = uls.searchParams.get("orderId");
    var requestId = uls.searchParams.get("requestId");
    var note =  window.localStorage.getItem("ghichudonhang");
    var productdto = [];
    for(i=0; i<list.length; i++){
        var pro = {
            "id":list[i].id,
            "quantity":list[i].quantity,
            "price":list[i].price
        }
        productdto.push(pro)
    }
    var orderDto = {
        "orderId":orderId,
        "requestId":requestId,
        "note":note,
        "productOrderDtos":productdto
    }

    var url = 'http://localhost:8080/api/checkPayment';
    var token = localStorage.getItem("token");
    const res = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(orderDto)
    });
    var result = await res.text();
    if(result == 0){
        document.getElementById("thatbai").style.display = 'block'
        document.getElementById("thanhcong").style.display = 'none'
    }
    if(result == 1){
        document.getElementById("thanhcong").style.display = 'block'
    }
}


async function thanhtoanoff() {
    var list = JSON.parse(localStorage.getItem("cartswshop"));
    var note =  document.getElementById("ghichudonhang").value;
    var productdto = [];
    for(i=0; i<list.length; i++){
        var pro = {
            "id":list[i].id,
            "quantity":list[i].quantity,
            "price":list[i].price
        }
        productdto.push(pro)
    }
    var orderDto = {
        "note":note,
        "productOrderDtos":productdto
    }

    var url = 'http://localhost:8080/api/user/createInvoice';
    var token = localStorage.getItem("token");
    const res = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(orderDto)
    });
    if(res.status < 300){
        swal({
            title: "Thông báo", 
            text: "Đặt hàng thành công!", 
            type: "success"
          },
        function(){ 
            window.location.replace("thanhcongoff")
        });
    }
}

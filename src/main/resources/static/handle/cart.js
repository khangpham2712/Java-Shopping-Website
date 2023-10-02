var listcart = localStorage.getItem("cartswshop");

async function addCart(id, numbers){
    var url = 'http://localhost:8080/api/productByID?id='+id;
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var data = await response.json();
   
    if(numbers == "" ){return;}
    if(Number(numbers) < Number(1) ){
        swal({title: "Thông báo", text: "số lượng sản phẩm phải lớn hơn hoặc bằng 1!", type: "error"},
        function(){ });return;
    }
    if(Number(numbers) > Number(data.quantity)){
        swal({title: "Thông báo", text: "số lượng sản phẩm không được quá: "+data.quantity, type: "error"},
        function(){  });return;
    }
    var product = {
		"id": data.id,
		"name":data.name,
		"image":data.imageBanner,
		"price": data.price,
		"quantity": numbers
	};
    if (localStorage.getItem("cartswshop") === null) {
    	var listproduct = [];
    	listproduct.push(product);
    	window.localStorage.setItem('cartswshop', JSON.stringify(listproduct));
	}
    else{
        var list = JSON.parse(localStorage.getItem("cartswshop"));
        var check = 0;
		for(i=0; i<list.length; i++){
			if(list[i].id === data.id){
				list[i].quantity = Number(numbers)+Number(list[i].quantity);
				check = 1;
			}
		}
		if(check === 0){
			list.push(product);
		}
		window.localStorage.setItem('cartswshop', JSON.stringify(list));
    }

    if(response.status < 300){
        swal({title: "Thông báo", text: "thêm giỏ hàng thành công!", type: "success"},
        function(){ 
            window.location.reload()
        });
    }
}

function showAllCart(){
	var list = JSON.parse(localStorage.getItem("cartswshop"));
    console.log(list)
	var main = '';
    var tongtien = 0;
    var tongsl = 0;
	for(i=0; i<list.length; i++){
		tongtien += list[i].price*list[i].quantity;
		main += 
        `<tr class="cart_line">
            <td>${Number(i)+1}</td>
            <td><img src="${list[i].image}" style="width: 150px" class="cart-img"></td>
            <td style="text-align: center;">
                <p class="cart_ten"><a href="chitietsp?id=${list[i].id}"><span>${list[i].name}</span></a></p>
                <p class="cart_masanpham">Mã sản phẩm: <span>${list[i].id}</span></p>
                <p class="">Bảo hành: 12 tháng</p>
            </td>
            <td class="covertPriceProduct">${formatmoneyCart(list[i].price)}</td>
            <td>
                <i onclick="updateQuantity(${list[i].id}, -1)" class="fa fa-minus changquantity" style="display: inline;"></i>
                <input readonly style="display: inline;" id="soLuongSp8" class="input_num_cart" type="number" value="${list[i].quantity}">
                <i onclick="updateQuantity(${list[i].id}, 1)" style="display: inline;" class="fa fa-plus changquantity"></i>
            </td>
            <td><b><span class="total" id="item8_total" name="total_price">${formatmoneyCart(list[i].price * list[i].quantity)}</span></b></td>
            <td class="cart-img"><span onclick="remove(${list[i].id})" class="glyphicon glyphicon-trash btn btn-danger"></span></td>
        </tr>`
	}

	document.getElementById("list-cart").innerHTML = main;
    document.getElementById("tongdonhang").innerText = formatmoneyCart(tongtien)
}

async function updateQuantity(id, sl){
    var list = JSON.parse(localStorage.getItem("cartswshop"));
    var url = 'http://localhost:8080/api/productByID?id='+id;
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var data = await response.json();
    var numbers = 0;
    for(i=0; i<list.length; i++){
        if(list[i].id == id){
            numbers = list[i].quantity + sl
        }
    }
    if(Number(numbers) > Number(data.quantity)){
        swal({title: "Thông báo", text: "số lượng sản phẩm không được quá: "+data.quantity, type: "error"},
        function(){  });return;
    }
    for(i=0; i<list.length; i++){
        if(list[i].id == id){
            list[i].quantity = Number(list[i].quantity) + sl
        }
        if(Number(list[i].quantity) < Number(1)){
            var remainingArr = list.filter(data => data.id != list[i].id);
	        window.localStorage.setItem('cartswshop', JSON.stringify(remainingArr));
        }
        else{
            window.localStorage.setItem('cartswshop', JSON.stringify(list));
        }
    }
    showAllCart();
    calNumBer();
}

function remove(id){
	var list = JSON.parse(localStorage.getItem("cartswshop"));
	var remainingArr = list.filter(data => data.id != id);
	window.localStorage.setItem('cartswshop', JSON.stringify(remainingArr));
    swal({title: "Thông báo", text: "đã xóa sản phẩm khỏi giỏ hàng!", type: "success"},
    function(){ 
        window.location.reload()
    });
}


function formatmoneyCart(money) {
    var VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    return VND.format(money);
}


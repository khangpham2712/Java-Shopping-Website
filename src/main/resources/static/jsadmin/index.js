function formatDollar(num) {
    var p = num.toFixed(2).split(".");
    return p[0].split("").reverse().reduce(function (acc, num, i, orig) {
        return num + (num != "-" && i && !(i % 3) ? "," : "") + acc;
    }, "") + "." + p[1];
}
function getDateTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();//
    var a = 0;
    //
    if (month.toString().length == 1) {
        month = '0' + month;
    }
    if (day.toString().length == 1) {
        day = '0' + day;
    }
    if (hour.toString().length == 1) {
        hour = '0' + hour;
    }
    if (minute.toString().length == 1) {
        minute = '0' + minute;
    }
    if (second.toString().length == 1) {
        second = '0' + second;
    }
    var dateTime = year + '/' + month + '/' + day + ' ' + hour + ':'
        + minute + ':' + second;
    return dateTime;
}
setInterval(function () {
    currentTime = getDateTime();
    document.getElementById("digital-clock").innerHTML = currentTime;
}, 1000);

var date = new Date();

var current_day = date.getDay();

var day_name = '';

switch (current_day) {
    case 0:
        day_name = "Chủ nhật";
        break;
    case 1:
        day_name = "Thứ hai";
        break;
    case 2:
        day_name = "Thứ ba";
        break;
    case 3:
        day_name = "Thứ tư";
        break;
    case 4:
        day_name = "Thứ năm";
        break;
    case 5:
        day_name = "Thứ sáu";
        break;
    case 6:
        day_name = "Thứ bảy";
}
// setInterval(
//     function () {
//         $("#here").load(window.location.href + " #here");
//         $("#lienHeMoi").load(window.location.href + " #lienHeMoi");
//         $("#donHangMoi")
//             .load(window.location.href + " #donHangMoi");
//         if (parseInt(document.getElementById("list").innerHTML) < parseInt(document
//             .getElementById("listCurrent").innerHTML)) {
//             Swal.fire('Bạn có thông báo mới!', 'Nhấn "Ok" để hủy',
//                 'warning')
//             $("#here1").load(window.location.href + " #here1");
//
//         }
//
//     }, 10000);
var token = localStorage.getItem('token');
const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

function formatmoney(money) {
    return VND.format(money);
}

async function thongKe(){
    var url = "http://localhost:8080/api/admin/doanhThuThangNay";
    const r = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    var result = await r.text();
    document.getElementById("doanhThu").innerText = formatmoney(result);

    url = "http://localhost:8080/api/admin/soLuongQuanTri";
    const re = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    var result = await re.text();
    document.getElementById("soLuongNV").innerText = result;


    url = "http://localhost:8080/api/admin/soLuongMatHang";
    const res = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    var result = await res.text();
    document.getElementById("soLuongMH").innerText = result;


    url = "http://localhost:8080/api/admin/doanhThuTrongNgay";
    const resp = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    var result = await resp.text();
    document.getElementById("doanhThuNgay").innerText = formatmoney(result)


    url = "http://localhost:8080/api/admin/soDonHoanThanhNgay";
    const respo = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    var result = await respo.text();
    document.getElementById("donhoanthanh").innerText = result


    url = "http://localhost:8080/api/admin/avgPriceProduct";
    const respon = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    var result = await respon.text();
    document.getElementById("avg").innerText = formatmoney(result);


    url = "http://localhost:8080/api/admin/minAmountInvoice";
    const respons = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    var result = await respons.text();
    document.getElementById("min").innerText = formatmoney(result);

    url = "http://localhost:8080/api/admin/maxAmountInvoice";
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    var result = await response.text();
    document.getElementById("max").innerText = formatmoney(result);
}


// async function checkLienHe() {
//     var token = localStorage.getItem("token");
//     var url = 'http://localhost:8080/api/admin/demChuaXem';
//     const response = await fetch(url, {
//         method: 'GET',
//         headers: new Headers({
//             'Authorization': 'Bearer ' + token
//         })
//     });
//     var dem = await response.text();
//     if(dem > 0){
//         document.getElementById("soluonglienhe").innerHTML = dem;
//     }
// }
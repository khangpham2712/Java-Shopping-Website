var token = localStorage.getItem("token");
async function tinhdoanhthu(nam) {
    if(nam < 2000){
        nam = new Date().getFullYear()
    }
    var url = 'http://localhost:8080/api/admin/doanhthu?nam='+nam;
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    var list = await response.json();
    console.log(list)
    var main = '';
    for (i = 0; i < list.length; i++) {
        if(list[i] == null){
            list[i] = 0
        }
    }


    var lb = 'doanh thu năm '+nam ;
    const ctx = document.getElementById("chart").getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["tháng 1", "tháng 2", "tháng 3", "tháng 4",
                "tháng 5", "tháng 6","tháng 7","tháng 8","tháng 9","tháng 10","tháng 11","tháng 12"],
            datasets: [{
                label: lb,
                backgroundColor: 'rgba(161, 198, 247, 1)',
                borderColor: 'rgb(47, 128, 237)',
                data: list,
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        callback: function (value) {
                            return formatmoney(value);
                        }
                    }
                }]
            }
        },
    });
}

function loadByNam(){
    var nam = document.getElementById("nams").value;
    tinhdoanhthu(nam);
}

const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

function formatmoney(money) {
    return VND.format(money);
}


async function loadSta(ngay) {
    var url = 'http://localhost:8080/api/admin/thongkengay?date='+ngay;
    if(ngay == null){
        url = 'http://localhost:8080/api/admin/thongkengay';
    }
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    var list = await response.json();
    var main = ''
    var total = 0;
    var tongtien = 0;
    for(i=0; i<list.length; i++){
        total = Number(total) + list[i].quantity
        tongtien = Number(tongtien) + list[i].quantity*list[i].price
        main += `<tr>
                  <td style="border: 1px solid black;border-collapse: collapse;padding:5px">${Number(i)+Number(1)}</td>
                  <td style="border: 1px solid black;border-collapse: collapse;padding:5px">${list[i].fullname}</td>
                  <td style="border: 1px solid black;border-collapse: collapse;padding:5px">${list[i].idinvoice}</td>
                  <td style="border: 1px solid black;border-collapse: collapse;padding:5px">${list[i].createdDate}</td>
                  <td style="border: 1px solid black;border-collapse: collapse;padding:5px">${list[i].idpro}</td>
                  <td style="border: 1px solid black;border-collapse: collapse;padding:5px">${list[i].name}</td>
                  <td style="border: 1px solid black;border-collapse: collapse;padding:5px">${list[i].quantity}</td>
                  <td style="border: 1px solid black;border-collapse: collapse;padding:5px">${formatmoney(list[i].price)}</td>
                  <td style="border: 1px solid black;border-collapse: collapse;padding:5px">${formatmoney(list[i].price*list[i].quantity)}</td>
              </tr>`
    }
    main += `<tr>
            <td colspan="6" style="text-align: right;">Tổng cộng:</td>
            <td>${total}</td>
            <td></td>
            <td>${formatmoney(tongtien)}</td>
          </tr>`
    document.getElementById("listi").innerHTML = main

    document.getElementById("ngaychon").innerHTML = ngay
    if(ngay == null){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        document.getElementById("ngaychon").innerHTML = today
        document.getElementById("ngaylap").innerHTML = today
    }
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    document.getElementById("ngaylap").innerHTML = today
}

async function loc(){
    var dates = document.getElementById("ngay").value
    loadSta(dates);
}

function PrintElem()
{
    var mywindow = window.open('', 'PRINT', 'height=400,width=600');

    mywindow.document.write('<html><head>');
    mywindow.document.write('<link rel="stylesheet" media="print" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">');
    mywindow.document.write('</head><body>');
    mywindow.document.write(document.getElementById("noidungin").innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();

    return true;
}
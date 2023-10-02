async function loadAllBlog() {
    var url = 'http://localhost:8080/api/public/allBlog';
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var list = await response.json();
    var main = '';
    for (i = 0; i < list.length; i++) {
        main += `<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 blogs">
                    <div class="blog-single">
                        <img src="${list[i].imageBanner}">
                        <p class="time-blog">${list[i].createdDate}</p>
                        <p class="ten-blog">${list[i].title}</p>
                        <p class="mota-blog">
                            ${list[i].description}!</p>
                        <a class="xemthem-blog" href="ctblog?id=${list[i].id}">Xem thêm ></a>
                    </div>
                </div>`
    }
    document.getElementById("blog-list").innerHTML = main
}

async function loadABlog() {
    var id = window.location.search.split('=')[1];
    if(id != null){
        var url = 'http://localhost:8080/api/public/blogById?id='+id;
        const response = await fetch(url, {
            method: 'GET',
            headers: new Headers({
            })
        });
        var blog = await response.json();
        document.getElementById("blog-detail-name").innerHTML = blog.title
        document.getElementById("contentblog").innerHTML = blog.content
        document.getElementById("updateat").innerHTML = blog.createdDate

    }
}
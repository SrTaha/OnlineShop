$(document).ready(function() {
    let BrandsStatus = 0;
    let html = ``;
    let BrandsApi = 0;
    let BrandList = [];

    fetch("https://fakestoreapi.in/api/products?limit=150/")
        .then((res) => res.json())
        .then((data) => {
            data["products"].forEach((element) => {
                BrandList.push(element["brand"].toLowerCase());
                BrandList.sort();
            });
        });

    $("#BrandsMenuItem").hover(function() {
        $("#SubMenu>ul").html("");
        BrandList.forEach((element) => {
            if (!document.getElementById(element)) {
                console.log(true);

                html += `<li id="${element}" class="my-1 text-lg text-[#E1D7B7] cursor-pointer hover:bg-white hover:text-black w-full flex justify-center">${element}</li>`;
                $("#SubMenu>ul").html(html);
            }
        });

        $("#SubMenu").removeClass("hidden");
        $("#SubMenu").addClass("flex");
    });

    $("#SubMenu").hover(
        function() {
            BrandsStatus = 1;
        },
        function() {
            BrandsStatus = 0;
            $(this).removeClass("flex");
            $(this).addClass("hidden");
        }
    );
    $(document.body).hover(function() {
        if (BrandsStatus != 1) {
            $("#SubMenu").removeClass("flex");
            $("#SubMenu").addClass("hidden");
        }
    });
});
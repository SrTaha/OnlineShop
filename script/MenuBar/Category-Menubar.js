$(document).ready(function() {
    let CategoryStatus = 0;
    let html = ``;
    let CategoryApi = 0;
    let ProductsList = [];

    fetch("https://fakestoreapi.in/api/products?limit=150/")
        .then((res) => res.json())
        .then((data) => {
            data["products"].forEach((element) => {
                ProductsList.push(element["category"].toLowerCase());
                ProductsList.sort();
            });
        });


    $("#CategoryMenuItem").hover(function() {
        $("#SubMenu>ul").html("");


        ProductsList.forEach((element) => {
            if (!document.getElementById(element)) {
                html += `<li id="${element}" class="my-1 text-lg text-[#E1D7B7] cursor-pointer hover:bg-white hover:text-black w-full flex justify-center">${element}</li>`;
                $("#SubMenu>ul").html(html);
            }
        });

        $("#SubMenu").removeClass("hidden");
        $("#SubMenu").addClass("flex");
    });

    $("#SubMenu").hover(
        function() {
            CategoryStatus = 1;
        },
        function() {
            CategoryStatus = 0;
            $(this).removeClass("flex");
            $(this).addClass("hidden");
        }
    );
    $(document.body).hover(function() {
        if (CategoryStatus != 1) {
            $("#SubMenu").removeClass("flex");
            $("#SubMenu").addClass("hidden");
        }
    });
});
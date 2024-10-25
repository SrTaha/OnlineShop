$(document).ready(function() {
    let status = 0;
    let html = ``;
    let apistatus = 0;
    let ProductsList = [];

    $("#BrandsMenuItem").hover(function() {
        if (apistatus == 0) {
            fetch("https://fakestoreapi.in/api/products?limit=150/")
                .then((res) => res.json())
                .then((data) => {
                    data["products"].forEach((element) => {
                        ProductsList.push(element["brand"].toLowerCase());
                        ProductsList.sort();
                    });
                    ProductsList.forEach((element) => {
                        if (!document.getElementById(element)) {
                            html += `<li id="${element}" class="my-1 text-lg text-[#E1D7B7] cursor-pointer hover:bg-white hover:text-black w-full flex justify-center">${element}</li>`;
                            $("#SubMenu>ul").html(html);
                        }
                    });
                });

            apistatus = 1;
        }
        $("#SubMenu").removeClass("hidden");
        $("#SubMenu").addClass("flex");
    });

    $("#SubMenu").hover(
        function() {
            status = 1;
        },
        function() {
            status = 0;
            $(this).removeClass("flex");
            $(this).addClass("hidden");
        }
    );

    $(document.body).hover(function() {
        if (status != 1) {
            $("#SubMenu").removeClass("flex");
            $("#SubMenu").addClass("hidden");
        }
    });
});
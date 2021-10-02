function updatecar1() {
    var size = document.forms["car1"]["agent_size"].value;
    var quality = document.forms["car1"]["agent_quality"].value;
    try {
        var quality2 = document.forms["cart2"]["agent_quality2"].value;
    } finally {
        quality = parseFloat(quality);
        quality2 = parseFloat(quality2);
        let cart1 = quality * 10000;
        let cart2 = quality2 * 20000;
        let sum = cart1 + cart2;
        if (size == 1) {
            document.getElementsByClassName("size1")[0].innerHTML = "Size S";
            document.getElementsByClassName("size1-bill")[0].innerHTML = "S";
        } else
        if (size == 2) {
            document.getElementsByClassName("size1")[0].innerHTML = "Size M";
            document.getElementsByClassName("size1-bill")[0].innerHTML = "M";
        } else
        if (size == 3) {
            document.getElementsByClassName("size1")[0].innerHTML = "Size L";
            document.getElementsByClassName("size1-bill")[0].innerHTML = "L";
        } else
        if (size == 4) {
            document.getElementsByClassName("size1")[0].innerHTML = "Size Xl";
            document.getElementsByClassName("size1-bill")[0].innerHTML = "XL";
        }
        //Quality
        if (quality == 1) {
            document.getElementsByClassName("quality1")[0].innerHTML = "Quality : 01";
            document.getElementsByClassName("quality1-bill")[0].innerHTML = "01";
        } else
        if (quality == 2) {
            document.getElementsByClassName("quality1")[0].innerHTML = "Quality : 02";
            document.getElementsByClassName("quality1-bill")[0].innerHTML = "02";
        } else
        if (quality == 3) {
            document.getElementsByClassName("quality1")[0].innerHTML = "Quality : 03";
            document.getElementsByClassName("quality1-bill")[0].innerHTML = "03";
        } else
        if (quality == 4) {
            document.getElementsByClassName("quality1")[0].innerHTML = "Quality : 04";
            document.getElementsByClassName("quality1-bill")[0].innerHTML = "04";
        }
        document.querySelector("#cart1").innerHTML = cart1 + "$";
        document.querySelector(".toal1").innerHTML = "Toal : " + cart1 + "$";
        document.querySelector("#toal").innerHTML = sum + "$";
    }
}

function updatecart2() {
    var size = document.forms["cart2"]["agent_size2"].value;
    var quality2 = document.forms["cart2"]["agent_quality2"].value;
    try {
        var quality = document.forms["car1"]["agent_quality"].value;
    } finally {
        quality = parseFloat(quality);
        quality2 = parseFloat(quality2);
        let cart1 = quality * 10000;
        let cart2 = quality2 * 20000;
        let sum = cart1 + cart2;
        if (size == 1) {
            document.getElementsByClassName("size2")[0].innerHTML = "Size S";
            document.getElementsByClassName("size2-bill")[0].innerHTML = "S";
        } else
        if (size == 2) {
            document.getElementsByClassName("size2")[0].innerHTML = "Size M";
            document.getElementsByClassName("size2-bill")[0].innerHTML = "M";
        } else
        if (size == 3) {
            document.getElementsByClassName("size2")[0].innerHTML = "Size L";
            document.getElementsByClassName("size2-bill")[0].innerHTML = "L";
        } else
        if (size == 4) {
            document.getElementsByClassName("size2")[0].innerHTML = "Size Xl";
            document.getElementsByClassName("size2-bill")[0].innerHTML = "XL";
        }
        //Quality
        if (quality2 == 1) {
            document.getElementsByClassName("quality2")[0].innerHTML = "Quality : 01";
            document.getElementsByClassName("quality2-bill")[0].innerHTML = "01";
        } else
        if (quality2 == 2) {
            document.getElementsByClassName("quality2")[0].innerHTML = "Quality : 02";
            document.getElementsByClassName("quality2-bill")[0].innerHTML = "02";
        } else
        if (quality2 == 3) {
            document.getElementsByClassName("quality2")[0].innerHTML = "Quality : 03";
            document.getElementsByClassName("quality2-bill")[0].innerHTML = "03";
        } else
        if (quality2 == 4) {
            document.getElementsByClassName("quality2")[0].innerHTML = "Quality : 04";
            document.getElementsByClassName("quality2-bill")[0].innerHTML = "04";
        }
        document.querySelector(".toal2").innerHTML = "Toal : " + cart2 + "$";
        document.querySelector("#cart2").innerHTML = cart2 + "$";
        document.querySelector("#toal").innerHTML = sum + "$";
    }
}

function removeCart() {
    let btnremove = document.getElementsByClassName("cartProduct")[0];
    let btnbill = document.getElementById("tab-bill");
    let btnbillToal = document.getElementById("Tab-toal-bill");
    btnremove.remove();
    btnbill.remove();
    btnbillToal.remove();
}

function removeCart2() {
    let btnremove = document.getElementsByClassName("cartProduct02")[0];
    let btnbill = document.getElementById("tab-bill2");
    let btnbillToal = document.getElementById("Tab-toal-bill");
    btnremove.remove();
    btnbill.remove();
    btnbillToal.remove();
}

function Confirm() {
    alert("Buy Succes, Thank you");
}
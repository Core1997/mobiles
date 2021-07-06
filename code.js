//LOAD DATA FROM JSON TO HTML

fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log(err);
    });


function appendData(data) {

    //Nav Bar Data
    dataForNavBar(data);
    dataForCarousel(data);
    dataForPhoneArrival(data);
    dataForPhoneSales(data);
    dataForUserReviews(data);
    dataForNewsletter(data);
    dataForFooter(data);
    dataForLoadAll(data);

}

function dataForNavBar(data) {

    var logoImg = document.querySelector(".logo-image");

    var heading1 = document.querySelector(".json-nav-1");
    var heading2 = document.querySelector(".json-nav-2");
    var heading3 = document.querySelector(".json-nav-3");
    var heading4 = document.querySelector(".json-nav-4");
    var heading5 = document.querySelector(".json-nav-5");

    logoImg.src = data.navigation["nav-img-path"];
    logoImg.alt = data.navigation["logo-alt-image"];


    heading1.innerHTML = data.navigation["nav-item1"];
    heading2.innerHTML = data.navigation["nav-item2"];
    heading3.innerHTML = data.navigation["nav-item3"];
    heading4.innerHTML = data.navigation["nav-item4"];
    heading5.innerHTML = data.navigation["nav-item5"];
}

function dataForCarousel(data) {

    var carouselImage = document.querySelectorAll(".carousel-image");
    var h3CarouselHeading = document.querySelector(".carousel-h3-json");
    var h2CarouselHeading = document.querySelector(".carousel-h2-json");
    var pCarouselText = document.querySelector(".carousel-p-json");
    var buttonCarousel = document.querySelector(".carousel-button-json");

    h3CarouselHeading.innerHTML = data.carousel["carousel-H3Title"];
    h2CarouselHeading.innerHTML = data.carousel["carousel-H2Desc"];
    pCarouselText.innerHTML = data.carousel["carousel-PDesc"];
    buttonCarousel.innerHTML = data.carousel["carousel-Button"];

    for (var i = 0; i < carouselImage.length; i++) {
        carouselImage[i].src = data.carousel["carousel-img-path"];
        carouselImage[i].alt = data.carousel["carousel-image-alt"];
    }

}

function dataForPhoneArrival(data) {

    var headingWhite = document.querySelector(".arrival-white-heading-json");
    var arrivalDescription = document.querySelector(".arrival-description-json");
    var loadAllText = document.querySelector(".load-all-json");

    var cart = document.querySelectorAll(".json-cart");
    var wishlist = document.querySelectorAll(".card-body-features-whishlist");

    var arrivalPhone1Img = document.querySelector(".phone1-json-arrival");
    var arrivalPhone1Desc = document.querySelector(".phone1-json-arrival-desc");

    var arrivalPhone2Img = document.querySelector(".phone2-json-arrival");
    var arrivalPhone2Desc = document.querySelector(".phone2-json-arrival-desc");

    var arrivalPhone3Img = document.querySelector(".phone3-json-arrival");
    var arrivalPhone3Desc = document.querySelector(".phone3-json-arrival-desc");

    var arrivalPhone4Img = document.querySelector(".phone4-json-arrival");


    headingWhite.innerHTML = data.phonesArrivals["whiteHeading"];
    arrivalDescription.innerHTML = data.phonesArrivals["arrivalDescription"];
    loadAllText.innerHTML = data.phonesArrivals["loadAllText"];

    arrivalPhone1Img.src = data.phonesArrivals.phone1["img-Path"];
    arrivalPhone1Img.alt = data.phonesArrivals.phone1["img-Alt"];
    arrivalPhone1Desc.innerHTML = data.phonesArrivals.phone1["desc"];

    arrivalPhone2Img.src = data.phonesArrivals.phone2["img-Path"];
    arrivalPhone2Img.alt = data.phonesArrivals.phone2["img-Alt"];
    arrivalPhone2Desc.innerHTML = data.phonesArrivals.phone2["desc"];

    arrivalPhone3Img.src = data.phonesArrivals.phone3["img-Path"];
    arrivalPhone3Img.alt = data.phonesArrivals.phone3["img-Alt"];
    arrivalPhone3Desc.innerHTML = data.phonesArrivals.phone3["desc"];

    arrivalPhone4Img.src = data.phonesArrivals.phone4["img-Path"];
    arrivalPhone4Img.alt = data.phonesArrivals.phone4["img-Alt"];


    for (var i = 0; i < 3; i++) {
        cart[i].src = data.phonesArrivals.cart["img"];
        cart[i].alt = data.phonesArrivals.cart["alt"];
        wishlist[i].src = data.phonesArrivals.wishlist["img"];
        wishlist[i].src = data.phonesArrivals.wishlist["img"];
    }

}

function dataForPhoneSales(data) {

    var headingWhite = document.querySelector(".sales-white-heading-json");
    var salesDescription = document.querySelector(".sales-description-json");

    var salesPhone1Img = document.querySelector(".phone1-json-sales");
    var salesPhone1Desc = document.querySelector(".phone1-json-sales-desc");

    var salesPhone2Img = document.querySelector(".phone2-json-sales");
    var salesPhone2Desc = document.querySelector(".phone2-json-sales-desc");

    var salesPhone3Img = document.querySelector(".phone3-json-sales");
    var salesPhone3Desc = document.querySelector(".phone3-json-sales-desc");

    var atcText = document.querySelectorAll(".atc-text");
    var atcImage = document.querySelectorAll(".atc-image");

    headingWhite.innerHTML = data.phonesSales["whiteHeading"];
    salesDescription.innerHTML = data.phonesSales["SalesDescription"];

    salesPhone1Img.src = data.phonesSales.salesPhone1["img-Path"];
    salesPhone1Img.alt = data.phonesSales.salesPhone1["img-Alt"];
    salesPhone1Desc.innerHTML = data.phonesSales.salesPhone1["desc"];

    salesPhone2Img.src = data.phonesSales.salesPhone2["img-Path"];
    salesPhone2Img.alt = data.phonesSales.salesPhone2["img-Alt"];
    salesPhone2Desc.innerHTML = data.phonesSales.salesPhone2["desc"];

    salesPhone3Img.src = data.phonesSales.salesPhone3["img-Path"];
    salesPhone3Img.alt = data.phonesSales.salesPhone3["img-Alt"];
    salesPhone3Desc.innerHTML = data.phonesSales.salesPhone3["desc"];

    for (var i = 0; i < 3; i++) {
        atcText[i].innerHTML = data.phonesSales.atc["text"];
        atcImage[i].src = data.phonesSales.atc["img"];
        atcImage[i].alt = data.phonesSales.atc["imgAlt"];
    }
}

function dataForUserReviews(data) {

    var headingWhite = document.querySelector(".reviews-white-heading-json");
    var salesDescription = document.querySelector(".reviews-description-json");

    var reviewPhone1Img = document.querySelector(".phone1-json-reviews");
    var reviewPhone2Img = document.querySelector(".phone2-json-reviews");
    var reviewPhone3Img = document.querySelector(".phone3-json-reviews");

    var reviewDesc = document.querySelectorAll(".json-reviews-desc");

    headingWhite.innerHTML = data.userReviews["whiteHeading"];
    salesDescription.innerHTML = data.userReviews["SalesDescription"];

    reviewPhone1Img.src = data.userReviews.reviewPhone1["img-Path"];
    reviewPhone1Img.alt = data.userReviews.reviewPhone1["img-Alt"];

    reviewPhone2Img.src = data.userReviews.reviewPhone2["img-Path"];
    reviewPhone2Img.alt = data.userReviews.reviewPhone2["img-Alt"];

    reviewPhone3Img.src = data.userReviews.reviewPhone3["img-Path"];
    reviewPhone3Img.alt = data.userReviews.reviewPhone3["img-Alt"];

    for (var i = 0; i < 3; i++) {
        reviewDesc[i].innerHTML = data.userReviews["desc"];
    }



}

function dataForNewsletter(data) {
    var headingWhite = document.querySelector(".newsletter-heading");
    var email = document.querySelector(".newsletter-email");
    var emailText = document.querySelector(".newsletter-email-text");
    var buttonText = document.querySelector(".newsletter-button");

    headingWhite.innerHTML = data.newsletter["heading"];
    email.src = data.newsletter.email["img"];
    email.alt = data.newsletter.email["alt"];
    emailText.innerHTML = data.newsletter.email["text"];
    buttonText.innerHTML = data.newsletter["buttonText"];
}

function dataForFooter(data) {

    var link1 = document.querySelector(".link11");
    var link2 = document.querySelector(".link12");
    var link3 = document.querySelector(".link13");
    var link4 = document.querySelector(".link14");
    var link5 = document.querySelector(".link15");
    var link6 = document.querySelector(".link16");
    var link7 = document.querySelector(".link17");
    var link8 = document.querySelector(".link18");
    var link9 = document.querySelector(".link19");

    var paymentText = document.querySelector(".payment-text");
    var paymentImg = document.querySelector(".payment-options-image");

    link1.innerHTML = data.footer.links["link1"];
    link2.innerHTML = data.footer.links["link2"];
    link3.innerHTML = data.footer.links["link3"];
    link4.innerHTML = data.footer.links["link4"];
    link5.innerHTML = data.footer.links["link5"];
    link6.innerHTML = data.footer.links["link6"];
    link7.innerHTML = data.footer.links["link7"];
    link8.innerHTML = data.footer.links["link8"];
    link9.innerHTML = data.footer.links["link9"];

    paymentText.innerHTML = data.footer.payment["text"];
    paymentImg.src = data.footer.payment["img"];
    paymentImg.alt = data.footer.payment["alt"];

}

function dataForLoadAll(data){

    var phone1 = document.querySelector(".phone1");
    var text1 = document.querySelector(".text1");
    var phone2 = document.querySelector(".phone2");
    var text2 = document.querySelector(".text2");
    var phone3 = document.querySelector(".phone3");
    var text3 = document.querySelector(".text3");
    var phone4 = document.querySelector(".phone4");
    var text4 = document.querySelector(".text4");
    var escInfo = document.querySelector(".esc-info");

    phone1.src = data.phonesArrivals.phone1["img-Path"];
    phone1.alt = data.phonesArrivals.phone1["img-Alt"];
    text1.innerHTML = data.phonesArrivals.phone1["desc"];

    phone2.src = data.phonesArrivals.phone2["img-Path"];
    phone2.alt = data.phonesArrivals.phone2["img-Alt"];
    text2.innerHTML = data.phonesArrivals.phone2["desc"];

    phone3.src = data.phonesArrivals.phone3["img-Path"];
    phone3.alt = data.phonesArrivals.phone3["img-Alt"];
    text3.innerHTML = data.phonesArrivals.phone3["desc"];

    phone4.src = data.phonesArrivals.phone4["img-Path"];
    phone4.alt = data.phonesArrivals.phone4["img-Alt"];
    text4.innerHTML = data.phonesArrivals.phone4["desc"];

    escInfo.innerHTML=data["esc-key-text"];
}


//POPUP-LOGIC

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(image, description) {
    fullImgBox.style.display = "flex";
    document.getElementById("ImgDesc").innerHTML = description;
    fullImg.src = image;
    document.body.style.overflow = "hidden";
}

function closeFullImg() {
    fullImgBox.style.display = "none";
    document.body.style.overflow = "visible";
}

window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        fullImgBox.style.display = "none";
        document.body.style.overflow = "visible";
        loadAll.style.display = "none";
        document.body.style.overflow = "visible";
    }
});

//LOAD ALL-LOGIC

var loadAll = document.getElementById("loadAll");

function loadAllPhones() {
    loadAll.style.display = "grid";
    document.body.style.overflow = "hidden";
}

function closeLoadAllPhones() {
    loadAll.style.display = "none";
    document.body.style.overflow = "visible";

}
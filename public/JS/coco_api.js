$.getJSON('http://localhost:8080/api/products', function (data) {

    $("#apiContainer1").append(`<img id="onepic" src="${data[0].url[0]}" style="width:100%;">`);
    $("#apiContainer2").append(`<img id="twopic" src="${data[1].url}" style="width:100%;">`);
    $("#apiContainer3").append(`<img id="threepic" src="${data[2].url}" style="width:100%;">`);
    $("#apiContainer4").append(`<img id="threepic" src="${data[3].url}" style="width:100%;">`);

    $("#firstPic").append(`<img src="${data[5].url[0]}"
    onmouseover="this.src='${data[5].url[1]}'"
    onmouseout="this.src='${data[5].url[0]}'"
    alt="Image 1" />
    <div class="tops-price" style="font-family:'run_wildregular'; text-align: center;font-size: 22px;">
    ${data[5].name} $${data[5].price}
    </div>`);

    $("#secondPic").append(`<img src="${data[4].url[0]}"
    onmouseover="this.src='${data[4].url[1]}'"
    onmouseout="this.src='${data[4].url[0]}'"
    alt="Image 2" />
    <div class="tops-price" style="font-family:'run_wildregular'; text-align: center;font-size: 22px;">
    ${data[4].name} $${data[4].price}</div>
    `);

    $("#thirdPic").append(`<img src="${data[6].url[0]}"
    onmouseover="this.src='${data[6].url[1]}'"
    onmouseout="this.src='${data[6].url[0]}'"
    alt="Image 3" />
    <div class="tops-price" style="font-family:'run_wildregular'; text-align: center;font-size: 22px;">
    ${data[6].name} $${data[6].price}</div>
    `);

    $("#fourthPic").append(`<img src="${data[7].url[0]}"
    onmouseover="this.src='${data[7].url[1]}'"
    onmouseout="this.src='${data[7].url[0]}'"
    alt="Image 4" />
    <div class="tops-price" style="font-family:'run_wildregular'; text-align: center;font-size: 22px;">
    ${data[7].name} $${data[7].price}</div>
    `);

    $("#fifthPic").append(`<img src="${data[8].url[0]}"
    onmouseover="this.src='${data[8].url[1]}'"
    onmouseout="this.src='${data[8].url[0]}'"
    alt="Image 5" />
    <div class="tops-price" style="font-family:'run_wildregular'; text-align: center;font-size: 22px;">
    ${data[8].name} $${data[8].price}</div>
    `);

    $("#sixthPic").append(`<img src="${data[9].url[0]}"
    onmouseover="this.src='${data[9].url[1]}'"
    onmouseout="this.src='${data[9].url[0]}'"
    alt="Image 6" />
    <div class="tops-price" style="font-family:'run_wildregular'; text-align: center;font-size: 22px;">
    ${data[9].name} $${data[9].price}</div>
    `);

    $("#seventhPic").append(`<img src="${data[10].url[0]}"
    onmouseover="this.src='${data[10].url[1]}'"
    onmouseout="this.src='${data[10].url[0]}'"
    alt="Image 7" />
    <div class="tops-price" style="font-family:'run_wildregular'; text-align: center;font-size: 22px;">
    ${data[10].name} $${data[10].price}</div>
    `);

    $("#eighthPic").append(`<img src="${data[11].url[0]}"
    onmouseover="this.src='${data[11].url[1]}'"
    onmouseout="this.src='${data[11].url[0]}'"
    alt="Image 8" />
    <div class="tops-price" style="font-family:'run_wildregular'; text-align: center;font-size: 22px;">
    ${data[11].name} $${data[11].price}</div>
    `);

    $("#ninthPic").append(`<img src="${data[12].url[0]}"
    onmouseover="this.src='${data[12].url[1]}'"
    onmouseout="this.src='${data[12].url[0]}'"
    alt="Image 9" />
    <div class="tops-price" style="font-family:'run_wildregular'; text-align: center;font-size: 22px;">
    ${data[12].name} $${data[12].price}</div>
    `);

    $("#tenthPic").append(`<img src="${data[13].url[0]}"
    onmouseover="this.src='${data[13].url[1]}'"
    onmouseout="this.src='${data[13].url[0]}'"
    alt="Image 10" />
    <div class="tops-price" style="font-family:'run_wildregular'; text-align: center;font-size: 22px;">
    ${data[13].name} $${data[13].price}</div>
    `);

    $("#eleventhPic").append(`<img src="${data[14].url[0]}"
    onmouseover="this.src='${data[14].url[1]}'"
    onmouseout="this.src='${data[14].url[0]}'"
    alt="Image 11" />
    <div class="tops-price" style="font-family:'run_wildregular'; text-align: center;font-size: 22px;">
    ${data[14].name} $${data[14].price}</div>
    `);

    $("#twelfthPic").append(`<img src="${data[15].url[0]}"
    onmouseover="this.src='${data[15].url[1]}'"
    onmouseout="this.src='${data[15].url[0]}'"
    alt="Image 12" />
    <div class="tops-price" style="font-family:'run_wildregular'; text-align: center;font-size: 22px;">
    ${data[15].name} $${data[15].price}</div>
    `);

});

$.getJSON('http://localhost:8080/api/events', function (data) {

    $("#farmers").append(`<img class="ev1" src="${data[0].url}" height="225px;"> <div style="font-size: 20px;" class="centered">the island farmers and art market</br>·
    june 8th ·</br>corpus christi, tx</div>`);
    $("#swimweek").append(`<img class="ev1" src="${data[1].url}" height="225px;"><div style="font-size: 20px;" class="centered">miami swim week</br>· july 16th ·</br>miami,
    fl</div>`);
    $("#localslist").append(`<img class="ev1" src="${data[2].url}" height="225px;"><div style="font-size: 20px;" class="centered">the locals list party</br>· tbd ·</br>corpus
    christi, tx</div>`);

});

function getUserProfile() {

    if (localStorage.authToken) {

        $.getJSON('http://localhost:8080/api/users', function (data) {
            for (let i = 0; i < data.length; i++) {
                if (localStorage.username === data[i].username) {
                    $(".user-profile").append(`<pre><b>First Name:</b> ${data[i].firstName}</pre>`);
                    $(".user-profile").append(`<pre><b>Last Name:</b> ${data[i].lastName}</pre>`);
                    $(".user-profile").append(`<pre><b>Address:</b> ${data[i].address}</pre>`);
                    $(".user-profile").append(`<pre><b>City:</b> ${data[i].city}</pre>`);
                    $(".user-profile").append(`<pre><b>State:</b> ${data[i].state}</pre>`);
                    $(".user-profile").append(`<pre><b>Country:</b> ${data[i].country}</pre>`);
                    $(".user-profile").append(`<pre><b>Top Size:</b> ${data[i].topSize}</pre>`);
                    $(".user-profile").append(`<pre><b>Bottom Size:</b> ${data[i].bottomSize}</pre>`);
                }
            }
        })
    } else return;
}

$(function () {
    if (localStorage.authToken) {
        $('#login').css('display', 'none');
        $('#sign-up').css('display', 'none');
    } else {
        $('#my-account').css('display', 'none');
        $('#logout').css('display', 'none');
    }
});

function handleSignUp() {
    $(".signup-form").submit(event => {
        event.preventDefault();

        let $form = $(".signup-form");

        let userData = {
            username: $form.find('[name=username]').val(),
            password: $form.find('[name=password]').val(),
            firstName: $form.find('[name=firstName]').val(),
            lastName: $form.find('[name=lastName]').val(),
            password2: $form.find('[name=password2]').val(),
            address: $form.find('[name=address]').val(),
            city: $form.find('[name=city]').val(),
            state: $form.find('[name=state]').val(),
            zipcode: $form.find('[name=zipCode]').val(),
            country: $form.find('[name=country]').val(),
            topSize: $form.find('[name=topSize]').val(),
            bottomSize: $form.find('[name=bottomSize]').val()
        }

        console.log(JSON.stringify(userData));

        let password = $form.find('[name=password]').val();
        let password2 = $form.find('[name=password2]').val();
        if (password !== password2 || password.length < 6) {
            alert('Passwords must match and have more than 5 characters')
            return;
        }

        $.ajax({
            type: 'POST',
            url: '/api/users',
            data: JSON.stringify(userData),
            success: function (res) {
                localStorage.setItem('authToken', res.authToken);
                localStorage.setItem('userId', res.userId);
                localStorage.setItem('username', res.username);
                location.href = "myAccount.html";
            },
            error: function (res) {
                alert("FALIED!");
            },
            dataType: 'json',
            contentType: 'application/json'
        });
    });
}

function handleLogin() {
    $('.login-form').submit(event => {
        event.preventDefault();

        let $form = $(".login-form");

        let userData = {
            username: $form.find('[name=username]').val(),
            password: $form.find('[name=password]').val()
        }

        console.log(JSON.stringify(userData));

        $.ajax({
            type: 'POST',
            url: '/api/auth/login',
            data: JSON.stringify(userData),
            success: function (res) {
                console.log(res);
                localStorage.setItem('authToken', res.authToken);
                localStorage.setItem('userId', res.userId);
                localStorage.setItem('username', userData.username);
                location.href = "myAccount.html";
            },
            error: function (xhr, status, error) {
                console.log(xhr.status);
                console.log(xhr.responseText);
                alert("Username or Password is incorrect");
            },
            dataType: 'json',
            contentType: 'application/json'
        });
    });
}

function uploadProfileEditor() {

    $.getJSON('http://localhost:8080/api/users', function (data) {
        debugger;
        for (let i = 0; i < data.length; i++) {
            if (localStorage.username === data[i].username) {
                return `
            <form action="#" class="signup-form">
            <input id="firstName" type='text' name="firstName" value="${data[i].firstName}">
            <input id="lastName" type="text" name="lastName" value="${data[i].lasttName}">
            <input id="address" type="text" name="address" value="${data[i].address}">
            <input id="city" type="text" name="city" value="${data[i].city}">
            <input id="state" type="text" name="state" value="${data[i].state}">
            <input id="zipCode" type="number" name="zipCode" pattern="[0-9]{5}" value="${data[i].zipcode}">
            <input id="country" type="text" name="country" value="${data[i].country}">
            <input id="topSize" type="text" name="topSize" value="${data[i].topSize}">
            <input id="bottomSize" type="text" name="bottomSize" value="${data[i].bottomSize}">
            <button id="editAccount">Save Profile Changes</button>
            </form>
    `
            }
        }
    });
};

function editProfile() {
    $("#profile-button").click(function () {
        $("#profile-button").css('display', 'none');
        $(".user-profile").css('display', 'none');
        $(".profile-container").append(uploadProfileEditor());
    });
}

function handleLogout() {
    $("#logout").click(function () {
        localStorage.clear();
        location.href = "index.html";
    });
};

function handleNewsLetter() {
    $(".email-button").click(function () {
        let email = $(".email").val();
        if (email.length > 0) {
            alert('Thank you for joining our Newsletter! -Lauren, creator of Cocokini');
        } else {
            alert('Please enter your email first, thank you!');
        }
    });
}

function handleProductsClick() {
    $(".cd-gallery li").click(function (event) {
        var target = event.target;
        var altImage = target.alt;
        var alteredAlt = altImage.replace(/[^0-9\.]+/g, "");
        var picOrder = Number(alteredAlt);

        $(".cd-gallery").css('display', 'none');
        $(".cd-tab-filter-wrapper").css('display', 'none');

        $.getJSON('http://localhost:8080/api/products', function (data) {

            for (let i = 0; i < data.length; i++) {
                if (picOrder === data[i].order) {

                    $(".bikini-product-page").append(` 

        <div class="bikini-product-container">
            <div class="bikini-grid1">
                <div class="bikini-img-container">
                    <img id="bikini-display1" src="${data[i].url[0]}">
                    <img id="bikini-display2" src="${data[i].url[1]}">
                    <img id="bikini-display3" src="${data[i].url[2]}">
                    <img id="bikini-display4" src="${data[i].url[3]}">
                </div>
        
                <div class="bikini-thumbnail">
                    <img id="clickMe1" class="bikini-thumbnails" src="${data[i].url[0]}">
                    <img id="clickMe2" class="bikini-thumbnails" src="${data[i].url[1]}">
                    <img id="clickMe3" class="bikini-thumbnails" src="${data[i].url[2]}">
                    <img id="clickMe4" class="bikini-thumbnails" src="${data[i].url[3]}">
                </div>
            </div>

            <div class="bikini-grid2">
                <div class="bikini-buy-details">
                    <div class="product-details" style="font-family:'run_wildregular'; font-size: 28px;">${data[i].name}</div>
                    <p class="price" style="font-size: 15px;">$${data[i].price}</p>
                    <hr>
                    <div class="product-details" style=" font-size: 15px;">fabric</div>
                    <div class="colors">
                        <div class="color-item1">
                            <img class="img1" src="https://c1.staticflickr.com/1/944/42169965352_a0bc1fef3a_o.jpg"
                                height="50px;">
                            <div class="fabric-name1">
                                <div class="fn1" style="font-family:'run_wildregular';">palmalicious</div>
                            </div>
                        </div>
                        <div class="color-item2">
                            <img class="img2" src="https://c1.staticflickr.com/1/974/27370825057_cdaf041d60_o.png"
                                height="50px;">
                            <div class="fabric-name2">
                                <div class="fn2" style="font-family:'run_wildregular';color:aliceblue;">palmalicious</div>
                            </div>
                        </div>
                        <div class="color-item3">
                            <img class="img3" src="https://c1.staticflickr.com/1/944/42169965352_a0bc1fef3a_o.jpg"
                                height="50px;">
                            <div class="fabric-name3">
                                <div class="fn3" style="font-family:'run_wildregular';">palmalicious</div>
                            </div>
                        </div>
                        <div class="color-item4">
                            <img class="img4" src="https://c1.staticflickr.com/1/974/27370825057_cdaf041d60_o.png"
                                height="50px;">
                            <div class="fabric-name4">
                                <div class="fn4" style="font-family:'run_wildregular';color:aliceblue;">palmalicious</div>
                            </div>
                        </div>
                        <div class="color-item5">
                            <img class="img5" src="https://c1.staticflickr.com/1/944/42169965352_a0bc1fef3a_o.jpg"
                                height="50px;">
                            <div class="fabric-name5">
                                <div class="fn5" style="font-family:'run_wildregular';">palmalicious</div>
                            </div>
                        </div>
                        <div class="color-item6">
                            <img class="img6" src="https://c1.staticflickr.com/1/974/27370825057_cdaf041d60_o.png"
                                height="50px;">
                            <div class="fabric-name6">
                                <div class="fn6" style="font-family:'run_wildregular';color:aliceblue;">palmalicious</div>
                            </div>
                        </div>
                        <div class="color-item7">
                            <img class="img7" src="https://c1.staticflickr.com/1/944/42169965352_a0bc1fef3a_o.jpg"
                                height="50px;">
                            <div class="fabric-name7">
                                <div class="fn7" style="font-family:'run_wildregular';">palmalicious</div>
                            </div>
                        </div>
                        <div class="color-item8">
                            <img class="img8" src="https://c1.staticflickr.com/1/974/27370825057_cdaf041d60_o.png"
                                height="50px;">
                            <div class="fabric-name8">
                                <div class="fn8" style="font-family:'run_wildregular';color:aliceblue;">palmalicious</div>
                            </div>
                        </div>
                        <div class="color-item9">
                            <img class="img9" src="https://c1.staticflickr.com/1/944/42169965352_a0bc1fef3a_o.jpg"
                                height="50px;">
                            <div class="fabric-name9">
                                <div class="fn9" style="font-family:'run_wildregular';">palmalicious</div>
                            </div>
                        </div>
                        <div class="color-item10">
                            <img class="img10" src="https://c1.staticflickr.com/1/944/42169965352_a0bc1fef3a_o.jpg"
                                height="50px;">
                            <div class="fabric-name10">
                                <div class="fn10" style="font-family:'run_wildregular';">palmalicious</div>
                            </div>
                        </div>
                        <div class="color-item11">
                            <img class="img11" src="https://c1.staticflickr.com/1/944/42169965352_a0bc1fef3a_o.jpg"
                                height="50px;">
                            <div class="fabric-name11">
                                <div class="fn11" style="font-family:'run_wildregular';">palmalicious</div>
                            </div>
                        </div>
                        <div class="color-item12">
                            <img class="img12" src="https://c1.staticflickr.com/1/944/42169965352_a0bc1fef3a_o.jpg"
                                height="50px;">
                            <div class="fabric-name12">
                                <div class="fn12" style="font-family:'run_wildregular';">palmalicious</div>
                            </div>
                        </div>
                        <select id="fabric-selection">
                            <option value="Jungle Dream">Jungle Dream</option>
                            <option value="Run Wild">Run Wild</option>
                            <option value="Fall Flora">Fall Flora</option>
                            <option value="Sunburst">Sunburst</option>
                            <option value="Derive">Derive</option>
                        </select>
                    </div>
                    <hr>
                    <div class="product-details" style="font-size: 15px;">sizes</div>
                    <div class="sizes">
                        <p class="size-1" style="font-family:'run_wildregular';">XS</p>
                        <p class="size-1" style="font-family:'run_wildregular';">S</p>
                        <p class="size-1" style="font-family:'run_wildregular';">M</p>
                        <p class="size-1" style="font-family:'run_wildregular';">L</p>
                        <p class="size-1" style="font-family:'run_wildregular';">XL</p>
                    </div>
                    <select id="size-selection">
                        <option value="XS">Xtra Small</option>
                        <option value="S">Small</option>
                        <option value="M">Medium</option>
                        <option value="L">Large</option>
                        <option value="XL">Extra Large</option>
                    </select>
                    <hr>
                    <div class="product-details" style="font-size: 15px;"></div>
                    <button id="addToCart" alt="${picOrder}">Add to Cart</button>
                </div>
            </div>
        </div>

       
        `);
                    break;
                }
            }
            init();
            handleSliderClicks();
            handleAddToCart();
        });
    });
};

function init() {
    $("#clickMe1").click(function () {
        $("#bikini-display1").css('display', 'block');
        $("#bikini-display3").css('display', 'none');
        $("#bikini-display4").css('display', 'none');
        $("#bikini-display2").css('display', 'none');
    });

    $("#clickMe2").click(function () {
        $("#bikini-display2").css('display', 'block');
        $("#bikini-display3").css('display', 'none');
        $("#bikini-display4").css('display', 'none');
        $("#bikini-display1").css('display', 'none');

    });

    $("#clickMe3").click(function () {
        $("#bikini-display3").css('display', 'block');
        $("#bikini-display1").css('display', 'none');
        $("#bikini-display4").css('display', 'none');
        $("#bikini-display2").css('display', 'none');
    });

    $("#clickMe4").click(function () {
        $("#bikini-display4").css('display', 'block');
        $("#bikini-display3").css('display', 'none');
        $("#bikini-display1").css('display', 'none');
        $("#bikini-display2").css('display', 'none');
    });
}

function handleSliderClicks() {
    $(".bikini-thumbnail img").click(function () {
        $('.thumbnail-clicked').removeClass('thumbnail-clicked');
        $('.thumbnail-clicked').addClass('bikini-thumbnails');
        $(this).addClass('thumbnail-clicked');
        $(this).find('.bikini-thumbnails').removeClass('bikini-thumbnails');
    });
};

function addToCart(addCartItem) {

    $.ajax({
        type: 'POST',
        url: '/api/cart',
        data: JSON.stringify(addCartItem),
        success: function (res) {
            location.href = "tops.html";
        },
        error: function (res) {
            alert("FALIED!");
        },
        dataType: 'json',
        contentType: 'application/json'
    });

    let cartItems = $("#cart-items").html();
    console.log(cartItems);
}

function handleAddToCart() {
    $("#addToCart").click(function (event) {
        var alt = $(this).attr("alt")
        let fabric = $("#fabric-selection").val();
        let size = $("#size-selection").val();

        console.log(alt);

        if (localStorage.authToken) {
            $.getJSON('http://localhost:8080/api/products', function (data) {

                for (let i = 0; i < data.length; i++) {
                    if (alt === data[i].order) {

                        let cartItem = {
                            username: localStorage.username,
                            product: data[i].name,
                            size: size,
                            fabric: fabric,
                            price: data[i].price
                        }
                        addToCart(cartItem);
                    }
                }
            });
        }
    });
}


$(function () {
    handleSignUp();
    handleLogin();
    handleLogout();
    getUserProfile();
    editProfile();
    handleNewsLetter();
    handleProductsClick();
});
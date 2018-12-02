$.getJSON('http://localhost:8080/api/products', function (data) {

    $("#apiContainer1").append(`<img id="onepic" src="${data[0].url[0]}" style="width:100%;">`);
    $("#apiContainer2").append(`<img id="twopic" src="${data[1].url}" style="width:100%;">`);
    $("#apiContainer3").append(`<img id="threepic" src="${data[2].url}" style="width:100%;">`);
    $("#apiContainer4").append(`<img id="threepic" src="${data[3].url}" style="width:100%;">`);

    console.log(data[5].url);



    $("#firstPic").append(`<img src="${data[5].url[0]}"
    onmouseover="this.src='${data[5].url[1]}'"
    onmouseout="this.src='${data[5].url[0]}'"
    alt="Image 1" />
    <div class="tops-price" style="font-family:'run_wildregular'; text-align: center;font-size: 22px;">
    beach bandeau top $64
    </div></a>`);

    $("#secondPic").append(`<img src="${data[4].url[0]}"
    onmouseover="this.src='${data[4].url[1]}'"
    onmouseout="this.src='${data[4].url[0]}'"
    alt="Image 2" />
    <div class="tops-price" style="font-family:'run_wildregular'; text-align: center;font-size: 22px;">high
    neck top $58</div>
    </a>`);

    $("#thirdPic").append(`<img src="${data[6].url[0]}"
    onmouseover="this.src='${data[6].url[1]}'"
    onmouseout="this.src='${data[6].url[0]}'"
    alt="Image 3" />
    <div class="tops-price" style="font-family:'run_wildregular'; text-align: center;font-size: 22px;">huka
    tie top $72</div>
    </a>`);

    $("#fourthPic").append(`<img src="${data[7].url[0]}"
    onmouseover="this.src='${data[7].url[1]}'"
    onmouseout="this.src='${data[7].url[0]}'"
    alt="Image 4" />
    <div class="tops-price" style="font-family:'run_wildregular'; text-align: center;font-size: 22px;">north
    pack top $58</div>
    </a>`);

    $("#fifthPic").append(`<img src="${data[8].url[0]}"
    onmouseover="this.src='${data[8].url[1]}'"
    onmouseout="this.src='${data[8].url[0]}'"
    alt="Image 5" />
    <div class="tops-price" style="font-family:'run_wildregular'; text-align: center;font-size: 22px;">raglan
    ladder top $68</div>
    </a>`);

    $("#sixthPic").append(`<img src="${data[9].url[0]}"
    onmouseover="this.src='${data[9].url[1]}'"
    onmouseout="this.src='${data[9].url[0]}'"
    alt="Image 6" />
    <div class="tops-price" style="font-family:'run_wildregular'; text-align: center;font-size: 22px;">villa
    tropical top $62</div>
    </a>`);

    $("#seventhPic").append(`<img src="${data[10].url[0]}"
    onmouseover="this.src='${data[10].url[1]}'"
    onmouseout="this.src='${data[10].url[0]}'"
    alt="Image 7" />
    <div class="tops-price" style="font-family:'run_wildregular'; text-align: center;font-size: 22px;">matapalo
    $39</div>
    </a>`);

    $("#eighthPic").append(`<img src="${data[11].url[0]}"
    onmouseover="this.src='${data[11].url[1]}'"
    onmouseout="this.src='${data[11].url[0]}'"
    alt="Image 8" />
    <div class="tops-price" style="font-family:'run_wildregular'; text-align: center;font-size: 22px;">matapalo
    $39</div>
    </a>`);

    $("#ninthPic").append(`<img src="${data[12].url[0]}"
    onmouseover="this.src='${data[12].url[1]}'"
    onmouseout="this.src='${data[12].url[0]}'"
    alt="Image 9" />
    <div class="tops-price" style="font-family:'run_wildregular'; text-align: center;font-size: 22px;">matapalo
    $39</div>
    </a>`);

    $("#tenthPic").append(`<img src="${data[13].url[0]}"
    onmouseover="this.src='${data[13].url[1]}'"
    onmouseout="this.src='${data[13].url[0]}'"
    alt="Image 10" />
    <div class="tops-price" style="font-family:'run_wildregular'; text-align: center;font-size: 22px;">matapalo
    $39</div>
    </a>`);

    $("#eleventhPic").append(`<img src="${data[14].url[0]}"
    onmouseover="this.src='${data[14].url[1]}'"
    onmouseout="this.src='${data[14].url[0]}'"
    alt="Image 11" />
    <div class="tops-price" style="font-family:'run_wildregular'; text-align: center;font-size: 22px;">matapalo
    $39</div>
    </a>`);

    $("#twelfthPic").append(`<img src="${data[15].url[0]}"
    onmouseover="this.src='${data[15].url[1]}'"
    onmouseout="this.src='${data[15].url[0]}'"
    alt="Image 12" />
    <div class="tops-price" style="font-family:'run_wildregular'; text-align: center;font-size: 22px;">matapalo
    $39</div>
    </a>`);




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

$(function () {
    handleSignUp();
    handleLogin();
    handleLogout();
    getUserProfile();
    editProfile();

});
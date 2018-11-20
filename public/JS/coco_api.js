$.getJSON('http://localhost:8080/api/products', function (data) {

    $("#apiContainer").append(`<img id="onepic" src="${data[0].url}" style="width:100%;">`);

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

});
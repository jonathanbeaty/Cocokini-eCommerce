// $.getJSON('http://localhost:8080/products', function (data) {

//     $("#apiContainer").append(`<img id="onepic" src="${data[0].picture.url}" style="width:100%;">`);

// });

// $.getJSON('http://localhost:8080/events', function (data) {

//     $("#farmers").append(`<img class="ev1" src="${data[0].picture.url}" height="225px;"> <div style="font-size: 20px;" class="centered">the island farmers and art market</br>·
//     june 8th ·</br>corpus christi, tx</div>`);
//     $("#swimweek").append(`<img class="ev1" src="${data[1].picture.url}" height="225px;"><div style="font-size: 20px;" class="centered">miami swim week</br>· july 16th ·</br>miami,
//     fl</div>`);
//     $("#localslist").append(`<img class="ev1" src="${data[2].picture.url}" height="225px;"><div style="font-size: 20px;" class="centered">the locals list party</br>· tbd ·</br>corpus
//     christi, tx</div>`);

// });

// $(function () {
//     if (localStorage.authToken) {
//         $('#login').css('display', 'none');
//         $('#sign-up').css('display', 'none');
//     } else {
//         $('#my-account').css('display', 'none');
//         $('#logout').css('display', 'none');
//     }
// });

function handleSignUp() {
    $(".signup-form").submit(event => {
        event.preventDefault();

        let $form = $(".signup-form");

        let userData = {
            username: $form.find('[name=username]').val(),
            password: $form.find('[name=password]').val(),
            firstName: $form.find('[name=firstName]').val(),
            lastName: $form.find('[name=lastName]').val(),
            // password2: $form.find('[name=password2]').val(),
            // address: $form.find('[name=address]').val(),
            // city: $form.find('[name=city]').val(),
            // state: $form.find('[name=state]').val(),
            // zipcode: $form.find('[name=zipCode]').val(),
            // country: $form.find('[name=country]').val(),
            // topSize: $form.find('[name=topSize]').val(),
            // bottomSize: $form.find('[name=bottomSize]').val()
        }

        console.log(JSON.stringify(userData));

        // let password = $form.find('[name=password]').val();
        // let password2 = $form.find('[name=password2]').val();
        // if (password !== password2 || password.length < 6) {
        //     alert('Passwords must match and have more than 5 characters')
        //     return;
        // }

        $.ajax({
            type: 'POST',
            url: '/api/users',
            data: JSON.stringify(userData),
            success: function (res) {
                localStorage.setItem('authToken', res.authToken);
                localStorage.setItem('userId', res.userId);
                localStorage.setItem('username', res.username);
                $('.signup-page').hide();
            },
            error: function (res) {
                alert("FALIED!");
            },
            dataType: 'json',
            contentType: 'application/json'
        });
    });
}

$(function () {
    handleSignUp();



})
function showSecure(ev) {
    $('.modal-form__secure').removeClass('show')
    $('.modal-form__base').removeClass('show')

    if (ev === 0) {
        $(this).toggleClass('rbtfa')
        $('.modal-form__base').toggleClass('show')
        $('.modal-form__empty').toggleClass('show')
    } else if (ev === 1) {
        $(this).toggleClass('rbtfa')
        $('.modal-form__base').toggleClass('show')
        $('.modal-form__email').toggleClass('show')
    } else if (ev === 2) {
        $(this).toggleClass('rbtfa')
        $('.modal-form__base').toggleClass('show')
        $('.modal-form__app').toggleClass('show')
    }
}

function closeModal(argument) {
    $('.overlay').removeClass('show-overlay')

    if (argument === 'panel') {
        $('.modal-form__secure').removeClass('show')
        $('.modal-form__base').removeClass('show')
        $('.modal-form-buttons__button').removeClass('rbtfa');
    }
}

function showMenu() {
    $('.main-header').toggleClass('showmenu')
    $('.faq-container').toggleClass('faqconmn')
    $('.faq, .main-slider').toggleClass('faqptn')
    $('.hamburger--spin').toggleClass('is-active')
    $('.main-header .main-header__nav').toggleClass('navv')
    $('.main-header .main-header-profile').toggleClass('profilev')
    $('.scaleing').toggleClass('scaleingactive')

}

function showPopup() {
    $('.popupmenu').toggleClass('showdropmenu')
}

function showModal() {
    $('.overlay').addClass('show-overlay')
}
$(document).ready(function() {

    var modelPrice,
        modelDays,

        modelPrice = '0';
    modelDays = '0';


    $(window).on("scroll", function() {
        var scrolled = $(this).scrollTop();
        if (scrolled > 630) {
            $('.main-header').addClass('scrolled');
        }
        if (scrolled <= 630) {
            $('.main-header').removeClass('scrolled');
        }
        if ($(window).width() < 769) {
            $('.main-header').removeClass('scrolled');
        }
    });
    $(document).on('click', 'a[href^="#"]', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1500);
    });
})


function allSumWins(){
    var sumWins = 0;

    sumWins = $("#winrate-boost-input").val() * 30;

    if($('#checkboxcalcwins').prop('checked')){
        sumWins = sumWins + ( sumWins * 0.35 );
    }

    $("#winrate-boost-price").text(sumWins);
}


$('#winrate-boost-input').on('input', function() {
    allSumWins();
});

$('#checkboxcalcwins').on('input', function() {
    allSumWins();
})

function changeTarifForBuy(val) {
    $('.calc-section-select-item-ranks .dropmenu').removeClass('dropmenushow')

    switch (val) {
        case 0:
            $('#hoursboost-price').text(0)
            break;
        case 1:
            $('#hoursboost-price').text(49)
            break;
        case 2:
            $('#hoursboost-price').text(149)
            break;
        case 3:
            $('#hoursboost-price').text(299)
            break;
        case 4:
            $('#hoursboost-price').text(449)
            break;
        case 5:
            $('#hoursboost-price').text(749)
            break;
        default:
            $('#hoursboost-price').text(0)
    }
}

var ranksArray = [{
        id: 0,
        price: 100,
        days: 1,
    },
    {
        id: 1,
        price: 100,
        days: 1,
    },
    {
        id: 2,
        price: 100,
        days: 1,
    },
    {
        id: 3,
        price: 100,
        days: 1,
    },
    {
        id: 4,
        price: 100,
        days: 1,
    },
    {
        id: 5,
        price: 120,
        days: 1,
    },
    {
        id: 6,
        price: 120,
        days: 1,
    },
    {
        id: 7,
        price: 120,
        days: 1,
    },
    {
        id: 8,
        price: 120,
        days: 1,
    },
    {
        id: 9,
        price: 200,
        days: 1,
    },
    {
        id: 10,
        price: 200,
        days: 1,
    },
    {
        id: 11,
        price: 200,
        days: 1,
    },
    {
        id: 12,
        price: 250,
        days: 1,
    },
    {
        id: 13,
        price: 300,
        days: 1,
    },
    {
        id: 14,
        price: 500,
        days: 1,
    },
    {
        id: 15,
        price: 700,
        days: 1,
    },
    {
        id: 16,
        price: 1000,
        days: 1,
    },
]

var ranks = [null, null];

function allSum(){
    var sum = 0;
    var days = 0;
    
    if (ranks[0] != null && ranks[1] != null && ranks[1] > ranks[0]){
        for (var i = ranks[0]; i < ranks[1]; i++) {
            console.log("i = " + i);
            sum += ranksArray[i].price;
        }
        console.log(sum);
        days = i;

        if($('#checkboxcalc').prop('checked')){
            sum = sum + ( sum * 0.35 );
        }
        if($('#checkboxcalcs').prop('checked')){
            sum += 600;
        }
        if($('#checkboxcalct').prop('checked')){
            sum += 59;
        }
    }

    //update full price and days
    $("#modelDays").text(days);
    $("#modelPrice").text(sum);
}

$('#checkboxcalc').on('input', function() {
    allSum();
});

$('#checkboxcalcs').on('input', function() {
    allSum();
});

$('#checkboxcalct').on('input', function() {
    allSum();
});

function myRankForBoost(val) {
    
    $('.calc-section-select-item-ranks .dropmenu').removeClass('dropmenushow')
    $("#myRankForBoostImage").attr("src", `assets/img/ranks/${val}.png`);
    $("#myRankForBoostInput").val(val);
    ranks[0] = val
    allSum();
    switch (val) {
        case 0:
            $('#myRankForBoost').text('Серебро 1')
            break;
        case 1:
            $('#myRankForBoost').text('Серебро 2')
            break;
        case 2:
            $('#myRankForBoost').text('Серебро 3')
            break;
        case 3:
            $('#myRankForBoost').text('Серебро 4')
            break;
        case 4:
            $('#myRankForBoost').text('Сильвер-Элита')
            break;
        case 5:
            $('#myRankForBoost').text('Серебро-Великий Магистр')
            break;
        case 6:
            $('#myRankForBoost').text('Золотая звезда 1')
            break;
        case 7:
            $('#myRankForBoost').text('Золотая звезда 2')
            break;
        case 8:
            $('#myRankForBoost').text('Золотая Звезда 3')
            break;
        case 9:
            $('#myRankForBoost').text('Золотая Звезда Магистр')
            break;
        case 10:
            $('#myRankForBoost').text('Магистр Хранитель 1')
            break;
        case 11:
            $('#myRankForBoost').text('Магистр Хранитель 2')
            break;
        case 12:
            $('#myRankForBoost').text('Магистр Хранитель Элита')
            break;
        case 13:
            $('#myRankForBoost').text('Заслуженный Магистр Хранитель')
            break;
        case 14:
            $('#myRankForBoost').text('Легендарный Беркут')
            break;
        case 15:
            $('#myRankForBoost').text('Легендарный Беркут Магистр')
            break;
        case 16:
            $('#myRankForBoost').text('Великий Магистр Высшего Ранка')
            break;
        case 17:
            $('#myRankForBoost').text('Всемирная Элита')
            break;
        default:
            $('#myRankForBoost').text('Выбрать звание')
    }
}

function wantRankForBoost(val) {
    $('.calc-section-select-item-ranks .dropmenu').removeClass('dropmenushow')
    $("#wantedRankForBoostInput").val(val);
    ranks[1] = val
    allSum();

    if (ranks[1] > ranks[0]) {
        $("#wantRankForBoostImage").attr("src", `assets/img/ranks/${val}.png`);
        switch (val) {
            case 0:
                $('#wantRankForBoostHead').text('Серебро 1')
                break;
            case 1:
                $('#wantRankForBoostHead').text('Серебро 2')
                break;
            case 2:
                $('#wantRankForBoostHead').text('Серебро 3')
                break;
            case 3:
                $('#wantRankForBoostHead').text('Серебро 4')
                break;
            case 4:
                $('#wantRankForBoostHead').text('Сильвер-Элита')
                break;
            case 5:
                $('#wantRankForBoostHead').text('Серебро-Великий Магистр')
                break;
            case 6:
                $('#wantRankForBoostHead').text('Золотая звезда 1')
                break;
            case 7:
                $('#wantRankForBoostHead').text('Золотая звезда 2')
                break;
            case 8:
                $('#wantRankForBoostHead').text('Золотая Звезда 3')
                break;
            case 9:
                $('#wantRankForBoostHead').text('Золотая Звезда Магистр')
                break;
            case 10:
                $('#wantRankForBoostHead').text('Магистр Хранитель 1')
                break;
            case 11:
                $('#wantRankForBoostHead').text('Магистр Хранитель 2')
                break;
            case 12:
                $('#wantRankForBoostHead').text('Магистр Хранитель Элита')
                break;
            case 13:
                $('#wantRankForBoostHead').text('Заслуженный Магистр Хранитель')
                break;
            case 14:
                $('#wantRankForBoostHead').text('Легендарный Беркут')
                break;
            case 15:
                $('#wantRankForBoostHead').text('Легендарный Беркут Магистр')
                break;
            case 16:
                $('#wantRankForBoostHead').text('Великий Магистр Высшего Ранка')
                break;
            case 17:
                $('#wantRankForBoostHead').text('Всемирная Элита')
                break;
            default:
                $('#myRankForBoost').text('Выбрать звание')
        }
    }

}

function sumRankForBoost() {

}
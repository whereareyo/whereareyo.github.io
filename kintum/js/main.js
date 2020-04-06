$(document).ready(function() {
    const londonTIme = new Date().toLocaleString("en-US", { timeZone: "America/New_York" })
    const date = new Date(londonTIme)
    const yesterdayTMS = date.setDate(date.getDate() - 1)
    const yesterdayDate = new Date(yesterdayTMS)

    const pricesbtc = (async () => {
        try {
            const current = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
            const getYesterdateBTC = await axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${moment(yesterdayDate).format("YYYY-MM-DD")}&end=${moment(new Date()).format("YYYY-MM-DD")}`)
            const getWeekBTC = await axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${moment(new Date()).subtract(7, "days").format("YYYY-MM-DD")}&end=${moment(new Date()).format("YYYY-MM-DD")}`)
            const getMonthBTC = await axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${moment(new Date()).subtract(1, "month").format("YYYY-MM-DD")}&end=${moment(new Date()).format("YYYY-MM-DD")}`)
            const getYearBTC = await axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${moment(new Date()).subtract(1, "year").format("YYYY-MM-DD")}&end=${moment(new Date()).format("YYYY-MM-DD")}`)

            return {
                current: current.data.bpi.USD.rate_float.toFixed(2),
                yesterday: Object.values(getYesterdateBTC.data.bpi)[0].toFixed(2),
                week: Object.values(getWeekBTC.data.bpi)[0].toFixed(2),
                month: Object.values(getMonthBTC.data.bpi)[0].toFixed(2),
                year: Object.values(getYearBTC.data.bpi)[0].toFixed(2)
            }
        } catch (error) {
            console.log(error)
        }
    })()
        .then(pricesbtc => {
            document.getElementById("currentbtc").innerHTML = pricesbtc.current
            document.getElementById("daybtc").innerHTML = pricesbtc.yesterday
            document.getElementById("weekbtc").innerHTML = pricesbtc.week
            document.getElementById("monthbtc").innerHTML = pricesbtc.month
            document.getElementById("yearbtc").innerHTML = pricesbtc.year
        })
    $(".addquest_btn").click(function() {
        $(".dropdown_question").toggleClass("dropdown_question_showed")
        $(".reply").toggleClass("reply_showed")
    })
    $(".sendquest").click(function() {
        $(".dropdown_question").removeClass("dropdown_question_showed")
        $(".reply").hide(3000)
    })
    $("#dayopener").click(function() {
        $(this).addClass("price-content__time_active")
        $("#weekopener").removeClass("price-content__time_active")
        $("#monthopener").removeClass("price-content__time_active")
        $("#yearopener").removeClass("price-content__time_active")
        $(".price-content-graph_day").addClass("show")
        $(".price-content-graph_current").removeClass("show")
        $(".price-content-graph_week").removeClass("show")
        $(".price-content-graph_month").removeClass("show")
        $(".price-content-graph_year").removeClass("show")
    })
    $("#weekopener").click(function() {
        $(this).addClass("price-content__time_active")
        $("#dayopener").removeClass("price-content__time_active")
        $("#monthopener").removeClass("price-content__time_active")
        $("#yearopener").removeClass("price-content__time_active")
        $(".price-content-graph_week").addClass("show")
        $(".price-content-graph_current").removeClass("show")
        $(".price-content-graph_day").removeClass("show")
        $(".price-content-graph_month").removeClass("show")
        $(".price-content-graph_year").removeClass("show")
    })
    $("#monthopener").click(function() {
        $(this).addClass("price-content__time_active")
        $("#weekopener").removeClass("price-content__time_active")
        $("#dayopener").removeClass("price-content__time_active")
        $("#yearopener").removeClass("price-content__time_active")
        $(".price-content-graph_month").addClass("show")
        $(".price-content-graph_current").removeClass("show")
        $(".price-content-graph_week").removeClass("show")
        $(".price-content-graph_day").removeClass("show")
        $(".price-content-graph_year").removeClass("show")
    })
    $("#yearopener").click(function() {
        $(this).addClass("price-content__time_active")
        $("#weekopener").removeClass("price-content__time_active")
        $("#monthopener").removeClass("price-content__time_active")
        $("#dayopener").removeClass("price-content__time_active")
        $(".price-content-graph_year").addClass("show")
        $(".price-content-graph_current").removeClass("show")
        $(".price-content-graph_week").removeClass("show")
        $(".price-content-graph_month").removeClass("show")
        $(".price-content-graph_day").removeClass("show")
    })

    $(window).scroll(function() {
        if ($(".adaptive-menu").hasClass("show")) {
            $(".header").removeClass("scrolled");
            $(".header-logo").removeClass("header-logo_scrolled");
            $(".hamburger").removeClass("hamburger_scrolled");
        } else if ($(".header").offset().top > 50) {
            $(".header").addClass("scrolled");
            $(".header-logo").addClass("header-logo_scrolled");
            $(".hamburger").addClass("hamburger_scrolled");
        } else {
            $(".header").removeClass("scrolled");
            $(".header-logo").removeClass("header-logo_scrolled");
            $(".hamburger").removeClass("hamburger_scrolled");
        }
    })
    $(".login_btn").click(function() {
        if (!$(this).hasClass("selected")) {
            $(this).addClass("selected")
            $(".overlay").addClass("show")
            $(".modal_login").addClass("show")
        } else {
            $(this).removeClass("selected")
            $(".overlay").removeClass("show")
            $(".modal_login").removeClass("show")
        }
    })
    $(".signup_btn").click(function() {
        if (!$(this).hasClass("selected")) {
            $(this).addClass("selected")
            $(".overlay").addClass("show")
            $(".modal_signup").addClass("show")

        } else {
            $(this).removeClass("selected")
            $(".overlay").removeClass("show")
            $(".modal_signup").removeClass("show")
        }
    })
    $(".signup_btn_adaptive").click(function() {
        if (!$(this).hasClass("selected")) {
            $(this).addClass("selected")
            $(".overlay").addClass("show")
            $(".modal_signup").addClass("show")
            $(".hamburger").removeClass("is-active")
            $(".adaptive-menu").removeClass("show")
        } else {
            $(this).removeClass("selected")
            $(".overlay").removeClass("show")
            $(".modal_signup").removeClass("show")
        }
    })
    $(".login_btn_adaptive").click(function() {
        if (!$(this).hasClass("selected")) {
            $(this).addClass("selected")
            $(".overlay").addClass("show")
            $(".modal_login").addClass("show")
            $(".hamburger").removeClass("is-active")
            $(".adaptive-menu").removeClass("show")
        } else {
            $(this).removeClass("selected")
            $(".overlay").removeClass("show")
            $(".modal_login").removeClass("show")
        }
    })
    $("#signuphere").click(function() {
        $(".modal_signup").addClass("show")
        $(".modal_login").removeClass("show")

    })
    $("#loginhere").click(function() {
        $(".modal_signup").removeClass("show")
        $(".modal_login").addClass("show")
        $(".modal_backtologin").removeClass("show")
    })
    $("#backtologin").click(function() {
        $(".modal_signup").removeClass("show")
        $(".modal_backtologin").removeClass("show")
        $(".modal_login").addClass("show")

    })
    $(".overlay").click(function() {
        $(this).removeClass("show")
        $(".modal_login").removeClass("show")
        $(".modal_signup").removeClass("show")
        $(".modal_backtologin").removeClass("show")
    })

    $(".modal_signup__forgot").click(function() {
        $(".modal_backtologin").addClass("show")
        $(".modal_login").removeClass("show")
        $(".modal_signup").removeClass("show")
    })
    $(".modal_login__forgot").click(function() {
        $(".modal_backtologin").addClass("show")
        $(".modal_login").removeClass("show")
        $(".modal_signup").removeClass("show")
    })
    $(".hamburger").click(function() {
        $(".overlay").toggleClass("show")
        $(this).toggleClass("is-active")
        $(".adaptive-menu").toggleClass("show")
        $(".header").removeClass("scrolled");
        $(".header-logo").removeClass("header-logo_scrolled");
    })
    $(".adaptive__nav_item").click(function() {
        $(".adaptive_column", this).toggleClass("adaptive_show")
        $(".adaptive_nav_img", this).toggleClass("imgrotate")
    })
    $(".questions-content-item").click(function() {
        if (!$(this).hasClass("selected")) {
            $(this).addClass("selected")
            $(".questions-content-item__btn", this).addClass("questions-content-item__btn_active")
            $(".questions-content-item__info", this).addClass("questions-content-item__info__showed")
        } else {
            $(this).removeClass("selected")
            $(".questions-content-item__btn", this).removeClass("questions-content-item__btn_active")
            $(".questions-content-item__info", this).removeClass("questions-content-item__info__showed")
        }

    })

})
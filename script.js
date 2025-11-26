// Uses jQuery (already included in your HTML)

$(function () {
    /* ===========================
       Theme Toggle with LocalStorage
       =========================== */
    var $body = $("body");
    var $toggle = $("#themeToggle");

    // On load – apply stored theme
    var savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        $body.addClass("dark-theme");
        $toggle.text("☀️");
    } else {
        $toggle.text("🌙");
    }

    // Toggle on click
    $toggle.on("click", function () {
        $body.toggleClass("dark-theme");
        var isDark = $body.hasClass("dark-theme");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        $toggle.text(isDark ? "☀️" : "🌙");
    });

    /* ===========================
       Add reveal-on-scroll class
       =========================== */
    var revealSelectors = [
        ".hero-text",
        ".hero-card",
        ".info-card",
        ".resume-section",
        ".profile-block",
        ".data-table",
        ".biodata-section",
        ".page-header"
    ];

    $(revealSelectors.join(",")).addClass("reveal-on-scroll");

    function handleReveal() {
        var winTop = $(window).scrollTop();
        var winHeight = $(window).height();

        $(".reveal-on-scroll").each(function () {
            var $el = $(this);
            var elemTop = $el.offset().top;

            if (elemTop < winTop + winHeight - 80) {
                $el.addClass("visible");
            }
        });
    }

    $(window).on("load scroll", handleReveal);

    /* ===========================
       Smooth Scroll for in-page links
       =========================== */
    $("a[href^='#']").on("click", function (e) {
        var target = $(this).attr("href");
        if (target.length > 1 && $(target).length) {
            e.preventDefault();
            var offsetTop = $(target).offset().top - 80;
            $("html, body").animate({ scrollTop: offsetTop }, 700);
        }
    });
});

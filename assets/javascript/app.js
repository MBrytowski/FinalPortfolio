$(document).ready(function () {
    $(".portfolioCard").hide();
    $(".contactCard").hide();

    $(".aboutButton").on("click", function() {
        $(".aboutCard").show();
        $(".portfolioCard").hide();
        $(".contactCard").hide();
    });

    $(".portfolioButton").on("click", function() {
        $(".portfolioCard").show();
        $(".aboutCard").hide();
        $(".contactCard").hide();
    });

    $(".contactButton").on("click", function() {
        $(".contactCard").show();
        $(".aboutCard").hide();
        $(".portfolioCard").hide();
    })
});
$(".Real").click(function() {
    $(".ginny").show();
    $(".steve").show();
    $(".reallife").fadeIn();
    $(".animate").hide();
    $(".question2").show();
    $(".Animated").hide();
});
$(".Animated").click(function() {
    $(".mrk").hide();
    $(".eep").show();
    $(".Bmo").show();
    $(".animate").toggle();
    $(".Real").hide();
    $(".question2").show();
});
$(".kid").click(function() {
    $(".wizkids").toggle();
    $(".Bmo").show();
    $(".teen").hide();
    $(".adult").hide();
    $(".question3").show();
});
$(".teen").click(function() {
    $(".teenimg").show();
    $(".ginny").show();
    $(".eep").show();
    $(".kid").hide();
    $(".adult").hide();
    $(".question3").show();
});
$(".adult").click(function() {
    $(".adult").show();
    $(".mrk").hide();
    $(".steve").show();
    $(".kid").hide();
    $(".teen").hide();
    $(".question3").show();
});
$(".male").mouseenter(function() {
    $(".male").hide();
    $(".mrk").show();
    $(".steve").hide();
    $(".Bmo").hide();
    $(".female").hide();

});
$(".female").click(function() {
    $(".females").toggle();
    $(".ginny").show();
    $(".eep").show();
    $(".male").hide();
    $(".Revealfemale").show();

});
$(".Revealfemale").click(function() {
    $(".eep").css("display", "inline-block");
    $(".eep").show();
});

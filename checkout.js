$(".input-cart-number").on("keyup change", function(){
    $t = $(this);
    if($t.val().length > 3){
        $t.next().focus();
    }
    var card_number = "";
    $(".input-cart-number").each(function(){
        card_number += $(this).val() + " ";
        if ($(this).val().length == 4){
            $(this).next().focus();
        }
    });
    $(".credit-card-box .number").html(card_number);
});
$("#card-holder").on("keyup change", function(){
    $(".credit-card-box .card-holder div").html($(this).val());
});
$("#card-expiration-month, #card-expiration-year").on("change", function(){
    var month = $("#card-expiration-month").val();
    var year = $("#card-expiration-year").val();

    $(".credit-card-box .card-expiration-date div").html(month + "/" + year);
});
$("#card-cvv").on("keyup change", function(){
    $(".credit-card-box .cvv div").html($(this).val());
});
$("#card-cvv").on("focus", function(){
    $(".credit-card-box").addClass("hover");
});

$("#card-cvv").on("blur", function(){
    $(".credit-card-box").removeClass("hover");
})
$("#card-cvv").on("input", function(){
    $(".credit-card-box .ccv div").text($(this).val());
});
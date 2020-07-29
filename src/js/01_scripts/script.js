function canUseWebP() {
    var elem = document.createElement("canvas");
    if (!!(elem.getContext && elem.getContext("2d"))) {
       return elem.toDataURL("image/webp").indexOf("data:image/webp") == 0;
    }
    return false;
 }

$(document).ready(function(){
    $(".intro__about-text, .intro__sentence-wrapper, .intro__hello-text").addClass("show");
    
    if(canUseWebP()) {
        $("[data-img-name]").each(function(index,item) {
           $(item).attr("data-href", "../img/" + $(item).attr("data-img-name") + ".webp")
        });
    }
    else {
        $("[data-img-name]").attr("data-href", "../min-img/" + $(this).attr("data-img-name") + "." + $(this).attr("data-name-ext"))
    }

    $(".portfolio__btn-extend").on("click", function() {
        $(this).attr("href",$(this).attr("data-href"));
    });

});


$(document).ready(function () {
    var target = 0;

    var $botones = $(".control");
    var $anterior = $(".previous");
    var $siguiente = $(".next");
    var $target = parseInt($(this.dataset.target));

    $(".botones").each(function () {
        $(".boton").click(function () {
            $(".boton").click(function (target) {
                var $lastSlide = $("div.active");
                var $slide = $("div[data-slide='" + target + "']");
                $lastSlide.removeClass(".active");
                $slide.addClass(".active");
            });
        });
    });

    $(".previous").click(function (e) {
        e.preventDefault();
        target = target - 1;
        target = (target < 0) ? 3 : target;
        mostrarImagen(target);
    });
    
     $(".next").click(function (e) {
        e.preventDefault();
        target = target + 1;
        target = (target >3) ? 0 : target;
        mostrarImagen(target);
    });
});

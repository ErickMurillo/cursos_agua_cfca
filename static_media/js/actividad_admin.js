(function($){
    $(document).ready(function() {

        var perforacion = $('#id_tipo_actividad_10'),
        mejoras = $('#id_tipo_actividad_11'),
        presupuesto = $(".field-presupuesto, .field-ejecutado .field-estado"),
        verified_inline = $('#presupuestoinfraestructura_set-group');
        verified_financiacion = $('#financiamientoinstituciones_set-group');

        if (perforacion.prop('checked') || mejoras.prop('checked')){
            verified_inline.show();
            presupuesto.show();
            verified_financiacion.show();
        }else{
            verified_inline.hide();
            presupuesto.hide();
            verified_financiacion.hide()
        }

        perforacion.click(function(){
            if($(this).is(":checked")){
                console.log("Checkbox is checked.");
                verified_inline.show();
                presupuesto.show();
                verified_financiacion.show();
            }
            else if($(this).is(":not(:checked)")){
                console.log("Checkbox is unchecked.");
                verified_inline.hide();
                presupuesto.hide();
                verified_financiacion.hide()
            }
        });

        mejoras.click(function(){
            if($(this).is(":checked")){
                console.log("Checkbox is checked.");
                verified_inline.show();
                presupuesto.show();
                verified_financiacion.show();
            }
            else if($(this).is(":not(:checked)")){
                console.log("Checkbox is unchecked.");
                verified_inline.hide();
                presupuesto.hide();
                verified_financiacion.hide()
            }
        });

    });

})(jQuery || django.jQuery);

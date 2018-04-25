/**
 * Created by jwinters on 1/7/2015.
 */

$(document).ready(function () {
    $('a.dnnPrimaryAction').addClass('btn btn-primary').removeClass("dnnPrimaryAction");
    $('a.dnnSecondaryAction').addClass('btn btn-default').removeClass("dnnSecondaryAction");
    $('ul.buttonGroup').addClass('list-unstyled list-inline').removeClass("buttonGroup");
    $('.dnnFormAndList table[id*="Default_List_grdData"]').addClass('table table-bordered');

    Layout.init();
    LayersliderInit.initLayerSlider();
    Layout.initNavScrolling();
});

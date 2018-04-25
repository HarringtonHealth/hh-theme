var LayersliderInit = function () {

    return {
        initLayerSlider: function () {
            $('#layerslider').layerSlider({
                skinsPath : 'Portals/_default/Skins/Coaa/assets/global/plugins/slider-layer-slider/skins/',
                skin : 'v5',
                hoverPrevNext : false,
                responsive : false,
                responsiveUnder : 960,
                layersContainer : 960,
                autoPlayVideos : false,
                autoPauseSlideshow : true
            });
        }
    };

}();
var size = 0;
var placement = 'point';

var style_NIVELSOCIOECONOMICO_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("PC1");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= -13.058831 && value <= -2.336030) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -2.336030 && value <= -1.075567) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(240,240,240,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -1.075567 && value <= 0.027928) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(189,189,189,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.027928 && value <= 0.908818) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(150,150,150,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.908818 && value <= 1.664982) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(115,115,115,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.664982 && value <= 2.288291) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(37,37,37,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2.288291 && value <= 2.504013) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,0,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};

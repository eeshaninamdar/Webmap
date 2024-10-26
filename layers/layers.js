ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32643").setExtent([273156.127303, 2114559.672219, 275740.078329, 2116474.179604]);
var wms_layers = [];

var format_LandUse_0 = new ol.format.GeoJSON();
var features_LandUse_0 = format_LandUse_0.readFeatures(json_LandUse_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_LandUse_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandUse_0.addFeatures(features_LandUse_0);
var lyr_LandUse_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandUse_0, 
                style: style_LandUse_0,
                popuplayertitle: "LandUse",
                interactive: true,
                title: '<img src="styles/legend/LandUse_0.png" /> LandUse'
            });
var format_BuildingFootprints_1 = new ol.format.GeoJSON();
var features_BuildingFootprints_1 = format_BuildingFootprints_1.readFeatures(json_BuildingFootprints_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_BuildingFootprints_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BuildingFootprints_1.addFeatures(features_BuildingFootprints_1);
var lyr_BuildingFootprints_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BuildingFootprints_1, 
                style: style_BuildingFootprints_1,
                popuplayertitle: "Building Footprints",
                interactive: true,
    title: 'Building Footprints<br />\
    <img src="styles/legend/BuildingFootprints_1_0.png" /> 1<br />\
    <img src="styles/legend/BuildingFootprints_1_1.png" /> 2<br />\
    <img src="styles/legend/BuildingFootprints_1_2.png" /> 3<br />\
    <img src="styles/legend/BuildingFootprints_1_3.png" /> 4<br />\
    <img src="styles/legend/BuildingFootprints_1_4.png" /> 5<br />\
    <img src="styles/legend/BuildingFootprints_1_5.png" /> 6<br />\
    <img src="styles/legend/BuildingFootprints_1_6.png" /> 7<br />\
    <img src="styles/legend/BuildingFootprints_1_7.png" /> 8<br />\
    <img src="styles/legend/BuildingFootprints_1_8.png" /> 9<br />\
    <img src="styles/legend/BuildingFootprints_1_9.png" /> 10<br />\
    <img src="styles/legend/BuildingFootprints_1_10.png" /> 11<br />\
    <img src="styles/legend/BuildingFootprints_1_11.png" /> 12<br />\
    <img src="styles/legend/BuildingFootprints_1_12.png" /> 13<br />\
    <img src="styles/legend/BuildingFootprints_1_13.png" /> 14<br />\
    <img src="styles/legend/BuildingFootprints_1_14.png" /> 15<br />\
    <img src="styles/legend/BuildingFootprints_1_15.png" /> 16<br />\
    <img src="styles/legend/BuildingFootprints_1_16.png" /> 17<br />\
    <img src="styles/legend/BuildingFootprints_1_17.png" /> 18<br />\
    <img src="styles/legend/BuildingFootprints_1_18.png" /> 19<br />\
    <img src="styles/legend/BuildingFootprints_1_19.png" /> 20<br />\
    <img src="styles/legend/BuildingFootprints_1_20.png" /> 21<br />\
    <img src="styles/legend/BuildingFootprints_1_21.png" /> 22<br />\
    <img src="styles/legend/BuildingFootprints_1_22.png" /> 23<br />\
    <img src="styles/legend/BuildingFootprints_1_23.png" /> 24<br />\
    <img src="styles/legend/BuildingFootprints_1_24.png" /> <br />'
        });
var group_QUERIESOF251024 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "QUERIES OF 25.10.24"});

lyr_LandUse_0.setVisible(true);lyr_BuildingFootprints_1.setVisible(true);
var layersList = [lyr_LandUse_0,lyr_BuildingFootprints_1];
lyr_LandUse_0.set('fieldAliases', {'id': 'id', 'CTS Number': 'CTS Number', 'Gaothan ?': 'Gaothan ?', 'LU-DP\'67': 'LU-DP\'67', 'LU-DP\'81': 'LU-DP\'81', 'LU-ELU\'14': 'LU-ELU\'14', 'LU-DP\'1634': 'LU-DP\'1634', 'LU-OnSite': 'LU-OnSite', });
lyr_BuildingFootprints_1.set('fieldAliases', {'ID': 'ID', 'BLDG_HT': 'Height of building (in no. of storeys)', 'BLDG_COND': 'Condition of building', 'BLDG_USE': 'Current use of building', 'HERITAGE': 'Is it a classified heritage building ?', 'GRADE': 'Heritage grade of the building ', 'AGE': 'Age of the building in decades', 'REDEV': 'Has the building undergone redevelopment ?', 'OCCUPIED': 'Occupied or not ? (Y/N)', 'ROOF_TYPE': 'Type of roof ', 'MODIF': 'Has the building undergone modifications ?', 'NUMBER_FAM': 'Number of families occupying the building', 'NUMBER_SHO': 'Number of shops in the building', 'SEMIPUBLIC': 'Does the building have a semi-public interface ? (verandah, balcao, etc)', 'BLDG_OWNER': 'Ownership of the building', 'COMMUNITY': 'Community occupying the building', 'REMARKS': 'Remarks', });
lyr_LandUse_0.set('fieldImages', {'id': 'TextEdit', 'CTS Number': 'TextEdit', 'Gaothan ?': 'TextEdit', 'LU-DP\'67': 'TextEdit', 'LU-DP\'81': 'TextEdit', 'LU-ELU\'14': 'TextEdit', 'LU-DP\'1634': 'TextEdit', 'LU-OnSite': 'TextEdit', });
lyr_BuildingFootprints_1.set('fieldImages', {'ID': 'TextEdit', 'BLDG_HT': 'TextEdit', 'BLDG_COND': 'TextEdit', 'BLDG_USE': 'TextEdit', 'HERITAGE': 'TextEdit', 'GRADE': 'TextEdit', 'AGE': 'TextEdit', 'REDEV': 'TextEdit', 'OCCUPIED': 'TextEdit', 'ROOF_TYPE': 'TextEdit', 'MODIF': 'TextEdit', 'NUMBER_FAM': 'TextEdit', 'NUMBER_SHO': 'TextEdit', 'SEMIPUBLIC': 'TextEdit', 'BLDG_OWNER': 'TextEdit', 'COMMUNITY': 'TextEdit', 'REMARKS': 'TextEdit', });
lyr_LandUse_0.set('fieldLabels', {'id': 'no label', 'CTS Number': 'no label', 'Gaothan ?': 'no label', 'LU-DP\'67': 'no label', 'LU-DP\'81': 'no label', 'LU-ELU\'14': 'no label', 'LU-DP\'1634': 'no label', 'LU-OnSite': 'no label', });
lyr_BuildingFootprints_1.set('fieldLabels', {'ID': 'no label', 'BLDG_HT': 'no label', 'BLDG_COND': 'no label', 'BLDG_USE': 'no label', 'HERITAGE': 'no label', 'GRADE': 'no label', 'AGE': 'no label', 'REDEV': 'no label', 'OCCUPIED': 'no label', 'ROOF_TYPE': 'no label', 'MODIF': 'no label', 'NUMBER_FAM': 'no label', 'NUMBER_SHO': 'no label', 'SEMIPUBLIC': 'no label', 'BLDG_OWNER': 'no label', 'COMMUNITY': 'no label', 'REMARKS': 'no label', });
lyr_BuildingFootprints_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
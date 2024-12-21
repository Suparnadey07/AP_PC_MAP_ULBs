var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRIShadedRelief_2 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_STPs_3 = new ol.format.GeoJSON();
var features_STPs_3 = format_STPs_3.readFeatures(json_STPs_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STPs_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STPs_3.addFeatures(features_STPs_3);
var lyr_STPs_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STPs_3, 
                style: style_STPs_3,
                popuplayertitle: 'STPs',
                interactive: true,
    title: 'STPs<br />\
    <img src="styles/legend/STPs_3_0.png" /> NSTP<br />\
    <img src="styles/legend/STPs_3_1.png" /> STP<br />'
        });
var format_ULBBoundary_4 = new ol.format.GeoJSON();
var features_ULBBoundary_4 = format_ULBBoundary_4.readFeatures(json_ULBBoundary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ULBBoundary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ULBBoundary_4.addFeatures(features_ULBBoundary_4);
var lyr_ULBBoundary_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ULBBoundary_4, 
                style: style_ULBBoundary_4,
                popuplayertitle: 'ULB Boundary',
                interactive: true,
                title: '<img src="styles/legend/ULBBoundary_4.png" /> ULB Boundary'
            });
var format_DistrictBoundary_5 = new ol.format.GeoJSON();
var features_DistrictBoundary_5 = format_DistrictBoundary_5.readFeatures(json_DistrictBoundary_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistrictBoundary_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistrictBoundary_5.addFeatures(features_DistrictBoundary_5);
var lyr_DistrictBoundary_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistrictBoundary_5, 
                style: style_DistrictBoundary_5,
                popuplayertitle: ' District Boundary',
                interactive: true,
                title: '<img src="styles/legend/DistrictBoundary_5.png" />  District Boundary'
            });
var format_ParliamentaryConstituencies_6 = new ol.format.GeoJSON();
var features_ParliamentaryConstituencies_6 = format_ParliamentaryConstituencies_6.readFeatures(json_ParliamentaryConstituencies_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParliamentaryConstituencies_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParliamentaryConstituencies_6.addFeatures(features_ParliamentaryConstituencies_6);
var lyr_ParliamentaryConstituencies_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParliamentaryConstituencies_6, 
                style: style_ParliamentaryConstituencies_6,
                popuplayertitle: 'Parliamentary-Constituencies',
                interactive: true,
                title: '<img src="styles/legend/ParliamentaryConstituencies_6.png" /> Parliamentary-Constituencies'
            });
var format_AssemblyyConstituencies_7 = new ol.format.GeoJSON();
var features_AssemblyyConstituencies_7 = format_AssemblyyConstituencies_7.readFeatures(json_AssemblyyConstituencies_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AssemblyyConstituencies_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AssemblyyConstituencies_7.addFeatures(features_AssemblyyConstituencies_7);
var lyr_AssemblyyConstituencies_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AssemblyyConstituencies_7, 
                style: style_AssemblyyConstituencies_7,
                popuplayertitle: 'Assemblyy-Constituencies',
                interactive: true,
                title: '<img src="styles/legend/AssemblyyConstituencies_7.png" /> Assemblyy-Constituencies'
            });
var format_ACDetails_8 = new ol.format.GeoJSON();
var features_ACDetails_8 = format_ACDetails_8.readFeatures(json_ACDetails_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACDetails_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACDetails_8.addFeatures(features_ACDetails_8);
var lyr_ACDetails_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ACDetails_8, 
                style: style_ACDetails_8,
                popuplayertitle: 'AC Details',
                interactive: true,
                title: '<img src="styles/legend/ACDetails_8.png" /> AC Details'
            });
var format_APStateBOUNDARY_9 = new ol.format.GeoJSON();
var features_APStateBOUNDARY_9 = format_APStateBOUNDARY_9.readFeatures(json_APStateBOUNDARY_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APStateBOUNDARY_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APStateBOUNDARY_9.addFeatures(features_APStateBOUNDARY_9);
var lyr_APStateBOUNDARY_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APStateBOUNDARY_9, 
                style: style_APStateBOUNDARY_9,
                popuplayertitle: 'AP State BOUNDARY',
                interactive: true,
                title: '<img src="styles/legend/APStateBOUNDARY_9.png" /> AP State BOUNDARY'
            });
var group_BASEMAPs = new ol.layer.Group({
                                layers: [lyr_GoogleHybrid_0,lyr_OSMStandard_1,lyr_ESRIShadedRelief_2,],
                                fold: "open",
                                title: 'BASE MAPs'});

lyr_GoogleHybrid_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_ESRIShadedRelief_2.setVisible(true);lyr_STPs_3.setVisible(true);lyr_ULBBoundary_4.setVisible(true);lyr_DistrictBoundary_5.setVisible(true);lyr_ParliamentaryConstituencies_6.setVisible(true);lyr_AssemblyyConstituencies_7.setVisible(true);lyr_ACDetails_8.setVisible(true);lyr_APStateBOUNDARY_9.setVisible(true);
var layersList = [group_BASEMAPs,lyr_STPs_3,lyr_ULBBoundary_4,lyr_DistrictBoundary_5,lyr_ParliamentaryConstituencies_6,lyr_AssemblyyConstituencies_7,lyr_ACDetails_8,lyr_APStateBOUNDARY_9];
lyr_STPs_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'UN_ID': 'UN_ID', 'DIST_NAME': 'District Name', 'ULB_NAME': 'Name of ULBs', 'LOCATION': 'STPs Location', 'CAPACITY_M': 'Capacity in MLD', 'TYPE': 'Type of STPs', 'TECHNOLOGY': 'TECHNOLOGY', 'LAND_OWNER': 'Land Ownership', 'LAND_REQ': 'Land Required', 'STATUS_POS': 'Status of Possession', 'PROJ_ST_1': 'Status on 20-09-2024', 'PROJ_ST_2': 'Status on 25-09-2024', 'Proj_Cost': 'Proj_Cost', });
lyr_ULBBoundary_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'UN_ID': 'UN_ID', 'Name_ULB': 'Name of ULBs', 'Total_ulb': 'Total NO of Projects', 'No_STP': 'No of STP', 'No_NSTP': 'No of NSTP', 'Status_con': 'Status of Construction', 'Status_STP': 'Status of STPs', 'Total_Pop': 'ULBs Population(2011)', 'Total_Cost': 'Total Project Cost(Cr.)', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Name': 'Name', 'Area': 'Area(SQ.KM)', });
lyr_DistrictBoundary_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'nam': 'State Name', 'Dist': 'Dist', 'Area_SKM': 'Area(SQ.KM)', 'Area': 'Area(SQ.KM)', 'Region': 'Region', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'No_ULB': 'No of ULBs', });
lyr_ParliamentaryConstituencies_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ST_NAME': 'State Name', 'PC_NAME': 'PC Name', 'ST_CODE': 'State Code', 'PC_CODE': 'PC Code', 'Res': 'Reservation Category', 'No_AC': 'No of Assembly Constituencies', 'Area': 'Area(SQ.KM)', 'Count_Elec': 'Count of Electors', 'Count_Voters': 'Count of Voters', 'Data_Source': 'Data Source', 'Name_AC': 'Name of Assembly Constituencies', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_AssemblyyConstituencies_7.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'ST_NAME': 'State Name', 'DIST_NAME': 'District Name', 'AC_NO': 'AC NO.', 'AC_NAME': 'AC Name', 'PC_NO': 'PC NO.', 'PC_NAME': 'PC Name', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Area': 'Area(SQ.KM)', });
lyr_ACDetails_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ST_NAME': 'State Name', 'DIST_NAME': 'District Name', 'AC_NO': 'Assembly No.', 'AC_NAME': 'Assembly Name', 'PC_NO': 'PC NO.', 'PC_NAME': 'PC Name', 'Area': 'Area(SQ.KM)', 'ORIG_FID': 'ORIG_FID', });
lyr_APStateBOUNDARY_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OID_': 'OID_', 'Name': 'State Name', 'Ara': 'Area(SQ.KM)', 'No_PC': 'No of Parliamentary-Constituencies', 'No_AC': 'No of Assembly-Constituencies', 'No_ulb': 'No of ULBs', 'T_ulb_pop': 'Total ULBs Population(2011)', 'No_Distric': 'No of Districts', 'Population': 'Population(2011)', 'Pop_2024': 'Population(2024)', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_STPs_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'UN_ID': 'Range', 'DIST_NAME': 'TextEdit', 'ULB_NAME': 'TextEdit', 'LOCATION': 'TextEdit', 'CAPACITY_M': 'TextEdit', 'TYPE': 'TextEdit', 'TECHNOLOGY': 'TextEdit', 'LAND_OWNER': 'TextEdit', 'LAND_REQ': 'TextEdit', 'STATUS_POS': 'TextEdit', 'PROJ_ST_1': 'TextEdit', 'PROJ_ST_2': 'TextEdit', 'Proj_Cost': 'TextEdit', });
lyr_ULBBoundary_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'UN_ID': 'Range', 'Name_ULB': 'TextEdit', 'Total_ulb': 'Range', 'No_STP': 'Range', 'No_NSTP': 'Range', 'Status_con': 'TextEdit', 'Status_STP': 'TextEdit', 'Total_Pop': 'Range', 'Total_Cost': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', });
lyr_DistrictBoundary_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'nam': 'TextEdit', 'Dist': 'TextEdit', 'Area_SKM': 'TextEdit', 'Area': 'TextEdit', 'Region': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'No_ULB': 'Range', });
lyr_ParliamentaryConstituencies_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'ST_NAME': 'TextEdit', 'PC_NAME': 'TextEdit', 'ST_CODE': 'TextEdit', 'PC_CODE': 'Range', 'Res': 'TextEdit', 'No_AC': 'Range', 'Area': 'TextEdit', 'Count_Elec': 'Range', 'Count_Voters': 'Range', 'Data_Source': 'TextEdit', 'Name_AC': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_AssemblyyConstituencies_7.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'ST_NAME': 'TextEdit', 'DIST_NAME': 'TextEdit', 'AC_NO': 'Range', 'AC_NAME': 'TextEdit', 'PC_NO': 'Range', 'PC_NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Area': 'TextEdit', });
lyr_ACDetails_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'ST_NAME': 'TextEdit', 'DIST_NAME': 'TextEdit', 'AC_NO': 'Range', 'AC_NAME': 'TextEdit', 'PC_NO': 'Range', 'PC_NAME': 'TextEdit', 'Area': 'TextEdit', 'ORIG_FID': 'Range', });
lyr_APStateBOUNDARY_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'OID_': 'Range', 'Name': 'TextEdit', 'Ara': 'TextEdit', 'No_PC': 'Range', 'No_AC': 'Range', 'No_ulb': 'Range', 'T_ulb_pop': 'Range', 'No_Distric': 'Range', 'Population': 'TextEdit', 'Pop_2024': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_STPs_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'UN_ID': 'hidden field', 'DIST_NAME': 'inline label - visible with data', 'ULB_NAME': 'inline label - visible with data', 'LOCATION': 'inline label - visible with data', 'CAPACITY_M': 'inline label - visible with data', 'TYPE': 'inline label - visible with data', 'TECHNOLOGY': 'inline label - visible with data', 'LAND_OWNER': 'inline label - visible with data', 'LAND_REQ': 'inline label - visible with data', 'STATUS_POS': 'inline label - visible with data', 'PROJ_ST_1': 'inline label - visible with data', 'PROJ_ST_2': 'inline label - visible with data', 'Proj_Cost': 'hidden field', });
lyr_ULBBoundary_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'UN_ID': 'hidden field', 'Name_ULB': 'inline label - visible with data', 'Total_ulb': 'inline label - visible with data', 'No_STP': 'inline label - visible with data', 'No_NSTP': 'inline label - visible with data', 'Status_con': 'inline label - visible with data', 'Status_STP': 'inline label - visible with data', 'Total_Pop': 'inline label - visible with data', 'Total_Cost': 'inline label - visible with data', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Name': 'hidden field', 'Area': 'hidden field', });
lyr_DistrictBoundary_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'nam': 'inline label - visible with data', 'Dist': 'inline label - visible with data', 'Area_SKM': 'hidden field', 'Area': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'No_ULB': 'inline label - visible with data', });
lyr_ParliamentaryConstituencies_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'ST_NAME': 'hidden field', 'PC_NAME': 'inline label - visible with data', 'ST_CODE': 'hidden field', 'PC_CODE': 'inline label - visible with data', 'Res': 'inline label - visible with data', 'No_AC': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Count_Elec': 'inline label - visible with data', 'Count_Voters': 'inline label - visible with data', 'Data_Source': 'header label - visible with data', 'Name_AC': 'header label - visible with data', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_AssemblyyConstituencies_7.set('fieldLabels', {'OBJECTID_1': 'hidden field', 'ST_NAME': 'inline label - visible with data', 'DIST_NAME': 'inline label - visible with data', 'AC_NO': 'inline label - visible with data', 'AC_NAME': 'inline label - visible with data', 'PC_NO': 'inline label - visible with data', 'PC_NAME': 'inline label - visible with data', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Area': 'inline label - visible with data', });
lyr_ACDetails_8.set('fieldLabels', {'OBJECTID': 'hidden field', 'ST_NAME': 'inline label - visible with data', 'DIST_NAME': 'inline label - visible with data', 'AC_NO': 'inline label - visible with data', 'AC_NAME': 'inline label - visible with data', 'PC_NO': 'inline label - visible with data', 'PC_NAME': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'ORIG_FID': 'hidden field', });
lyr_APStateBOUNDARY_9.set('fieldLabels', {'OBJECTID': 'hidden field', 'OID_': 'hidden field', 'Name': 'inline label - visible with data', 'Ara': 'inline label - visible with data', 'No_PC': 'inline label - visible with data', 'No_AC': 'inline label - visible with data', 'No_ulb': 'inline label - visible with data', 'T_ulb_pop': 'inline label - visible with data', 'No_Distric': 'inline label - visible with data', 'Population': 'inline label - visible with data', 'Pop_2024': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_APStateBOUNDARY_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
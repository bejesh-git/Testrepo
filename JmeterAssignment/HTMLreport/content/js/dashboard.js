/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 100.0, "KoPercent": 0.0};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.1968, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.89, 500, 1500, "StaffFourm-2"], "isController": false}, {"data": [0.0, 500, 1500, "HostelFacility"], "isController": false}, {"data": [0.0, 500, 1500, "TransportFacility"], "isController": false}, {"data": [0.0, 500, 1500, "programOffered"], "isController": false}, {"data": [1.0, 500, 1500, "StaffFourm-1"], "isController": false}, {"data": [1.0, 500, 1500, "StaffFourm-0"], "isController": false}, {"data": [1.0, 500, 1500, "OnlineLearning"], "isController": false}, {"data": [0.0, 500, 1500, "CoreValues"], "isController": false}, {"data": [0.0, 500, 1500, "Recruitments"], "isController": false}, {"data": [0.0, 500, 1500, "360view"], "isController": false}, {"data": [0.0, 500, 1500, "Training"], "isController": false}, {"data": [1.0, 500, 1500, "FirstYearFee"], "isController": false}, {"data": [0.0, 500, 1500, "MediaCenter"], "isController": false}, {"data": [0.0, 500, 1500, "Culturals"], "isController": false}, {"data": [0.0, 500, 1500, "Internships"], "isController": false}, {"data": [0.99, 500, 1500, "FEE(2024-2025)"], "isController": false}, {"data": [0.0, 500, 1500, "Sports"], "isController": false}, {"data": [0.0, 500, 1500, "VideoGallery"], "isController": false}, {"data": [0.0, 500, 1500, "StudentZone"], "isController": false}, {"data": [0.0, 500, 1500, "Careers"], "isController": false}, {"data": [0.0, 500, 1500, "ourCampus"], "isController": false}, {"data": [0.0, 500, 1500, "PhotoGallary"], "isController": false}, {"data": [0.0, 500, 1500, "Alumnievents"], "isController": false}, {"data": [0.0, 500, 1500, "FounderChancelor"], "isController": false}, {"data": [0.0, 500, 1500, "Iqiac"], "isController": false}, {"data": [0.0, 500, 1500, "Library"], "isController": false}, {"data": [0.0, 500, 1500, "Industry-Relations"], "isController": false}, {"data": [0.0, 500, 1500, "Certifications"], "isController": false}, {"data": [0.0, 500, 1500, "AuditoriamAndConfressHall"], "isController": false}, {"data": [0.0, 500, 1500, "Galary"], "isController": false}, {"data": [0.0, 500, 1500, "Eminentalumni"], "isController": false}, {"data": [0.0, 500, 1500, "PostGraduate"], "isController": false}, {"data": [0.0, 500, 1500, "Events"], "isController": false}, {"data": [0.0, 500, 1500, "Evolution"], "isController": false}, {"data": [0.5, 500, 1500, "StaffFourm"], "isController": false}, {"data": [0.0, 500, 1500, "Schools"], "isController": false}, {"data": [0.0, 500, 1500, "AluminiRegistration"], "isController": false}, {"data": [0.0, 500, 1500, "Faculty"], "isController": false}, {"data": [0.0, 500, 1500, "overview"], "isController": false}, {"data": [0.0, 500, 1500, "Administration"], "isController": false}, {"data": [0.0, 500, 1500, "AboutUs"], "isController": false}, {"data": [1.0, 500, 1500, "OnlineLearning-2"], "isController": false}, {"data": [1.0, 500, 1500, "OnlineLearning-1"], "isController": false}, {"data": [1.0, 500, 1500, "OnlineLearning-0"], "isController": false}, {"data": [0.0, 500, 1500, "Alumnispeaks"], "isController": false}, {"data": [0.42, 500, 1500, "StartEcosystem"], "isController": false}, {"data": [0.04, 500, 1500, "HomePage"], "isController": false}, {"data": [0.0, 500, 1500, "UnderGraduate"], "isController": false}, {"data": [0.0, 500, 1500, "FAQ"], "isController": false}, {"data": [0.0, 500, 1500, "VisionAndMission"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 2500, 0, 0.0, 4908.8207999999995, 41, 7839, 6173.0, 6756.9, 6929.9, 7312.969999999999, 9.989131824574864, 860.9697531897796, 1.473592044355741], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["StaffFourm-2", 50, 0, 0.0, 454.7, 359, 695, 448.5, 539.4, 572.7499999999999, 695.0, 2.3666398447484265, 72.13153081660909, 0.30045232404032757], "isController": false}, {"data": ["HostelFacility", 50, 0, 0.0, 6200.72, 5864, 6833, 6178.5, 6382.5, 6444.15, 6833.0, 1.950534446438324, 165.31526122532574, 0.2857228193024889], "isController": false}, {"data": ["TransportFacility", 50, 0, 0.0, 6043.62, 4890, 6751, 6150.5, 6474.2, 6584.8, 6751.0, 1.9538882375928095, 231.66375109906213, 0.2919383792497069], "isController": false}, {"data": ["programOffered", 50, 0, 0.0, 6402.740000000001, 5728, 6900, 6348.0, 6698.8, 6814.2, 6900.0, 1.9223375624759709, 206.2752306805075, 0.281592416378316], "isController": false}, {"data": ["StaffFourm-1", 50, 0, 0.0, 70.82000000000001, 46, 133, 64.0, 103.99999999999999, 124.89999999999999, 133.0, 2.4039617289292754, 2.3917541107745564, 0.30519045386797444], "isController": false}, {"data": ["StaffFourm-0", 50, 0, 0.0, 177.52000000000004, 119, 356, 168.0, 231.9, 264.4999999999999, 356.0, 2.3872045834328004, 2.767665313917403, 0.3007318274051086], "isController": false}, {"data": ["OnlineLearning", 50, 0, 0.0, 300.7600000000001, 249, 488, 290.5, 356.09999999999997, 417.19999999999976, 488.0, 2.5119316754584275, 107.56479017520722, 0.9395213200200954], "isController": false}, {"data": ["CoreValues", 50, 0, 0.0, 6281.499999999999, 5904, 7238, 6233.0, 6600.1, 6845.65, 7238.0, 1.94560099614771, 159.26302154266702, 0.25460013035526674], "isController": false}, {"data": ["Recruitments", 50, 0, 0.0, 6447.9000000000015, 5811, 6864, 6474.5, 6694.2, 6773.999999999999, 6864.0, 1.9688915140775742, 289.80902521411696, 0.28072086040559163], "isController": false}, {"data": ["360view", 50, 0, 0.0, 5263.080000000002, 1585, 6853, 6296.5, 6588.2, 6660.599999999999, 6853.0, 2.9265437518290898, 236.02746835674566, 0.3715338747439274], "isController": false}, {"data": ["Training", 50, 0, 0.0, 6373.079999999999, 5807, 7287, 6392.0, 6659.8, 6748.849999999999, 7287.0, 1.9745675697022351, 188.76287479760683, 0.30852618276597427], "isController": false}, {"data": ["FirstYearFee", 50, 0, 0.0, 55.22000000000001, 41, 126, 53.0, 62.8, 69.79999999999998, 126.0, 2.673510854454069, 30.912469254625172, 0.43340117367126507], "isController": false}, {"data": ["MediaCenter", 50, 0, 0.0, 5828.839999999999, 4974, 7110, 5820.0, 6525.0, 6620.299999999999, 7110.0, 2.17419663434361, 174.7406506147541, 0.28663725159803455], "isController": false}, {"data": ["Culturals", 50, 0, 0.0, 6364.840000000002, 5826, 6863, 6354.5, 6699.1, 6826.25, 6863.0, 1.94924174496121, 208.33594755077775, 0.28743701512611597], "isController": false}, {"data": ["Internships", 50, 0, 0.0, 6303.7, 5946, 6633, 6295.5, 6527.5, 6596.45, 6633.0, 1.9918731575173294, 186.04095291211854, 0.28205235140626245], "isController": false}, {"data": ["FEE(2024-2025)", 50, 0, 0.0, 217.43999999999994, 175, 524, 208.5, 268.4, 284.74999999999994, 524.0, 2.6427061310782243, 30.556289640591963, 0.36646901427061307], "isController": false}, {"data": ["Sports", 50, 0, 0.0, 6330.139999999999, 5919, 7111, 6341.0, 6643.7, 6806.65, 7111.0, 1.9399394738884148, 201.4636615993831, 0.2671205720881508], "isController": false}, {"data": ["VideoGallery", 50, 0, 0.0, 4404.040000000001, 1645, 6718, 4229.5, 6204.3, 6382.799999999999, 6718.0, 2.551671344730799, 213.2986432285022, 0.3388938504720592], "isController": false}, {"data": ["StudentZone", 50, 0, 0.0, 6107.28, 5333, 6735, 6146.0, 6420.9, 6615.949999999999, 6735.0, 1.983182611454863, 163.86278731358084, 0.2614547388148501], "isController": false}, {"data": ["Careers", 50, 0, 0.0, 6351.1399999999985, 5756, 6992, 6346.0, 6720.7, 6826.25, 6992.0, 1.9316952557564517, 153.37464142906813, 0.2452347492659558], "isController": false}, {"data": ["ourCampus", 50, 0, 0.0, 6320.040000000001, 5976, 6918, 6293.0, 6558.8, 6697.2, 6918.0, 1.9791006966434452, 165.61593942962318, 0.28990732860987967], "isController": false}, {"data": ["PhotoGallary", 50, 0, 0.0, 5559.7800000000025, 4015, 6763, 5839.5, 6276.2, 6399.15, 6763.0, 2.0824656393169514, 193.89007835276968, 0.2765774677217826], "isController": false}, {"data": ["Alumnievents", 50, 0, 0.0, 6521.4400000000005, 6055, 6986, 6503.5, 6946.2, 6963.35, 6986.0, 1.8742034635280005, 189.19699606182996, 0.247087370679961], "isController": false}, {"data": ["FounderChancelor", 50, 0, 0.0, 6079.82, 5719, 6744, 6069.0, 6335.2, 6473.75, 6744.0, 1.9422755700578798, 156.41236209843453, 0.28451302295769726], "isController": false}, {"data": ["Iqiac", 50, 0, 0.0, 6235.66, 5705, 6930, 6203.5, 6632.9, 6733.45, 6930.0, 1.9637877538195674, 199.6570352082597, 0.2627333225325007], "isController": false}, {"data": ["Library", 50, 0, 0.0, 6787.72, 5692, 7588, 6777.5, 7401.8, 7499.2, 7588.0, 1.833247781770184, 864.6471628199017, 0.25063934516389236], "isController": false}, {"data": ["Industry-Relations", 50, 0, 0.0, 6290.52, 5841, 6879, 6255.0, 6601.0, 6671.95, 6879.0, 2.0106160527585653, 216.35304721429148, 0.29845082033134956], "isController": false}, {"data": ["Certifications", 50, 0, 0.0, 6597.540000000001, 6067, 7243, 6596.5, 7114.7, 7205.45, 7243.0, 1.9560284797746657, 174.1996175964322, 0.34192294714811045], "isController": false}, {"data": ["AuditoriamAndConfressHall", 50, 0, 0.0, 6314.740000000001, 5966, 6849, 6293.5, 6590.7, 6666.2, 6849.0, 1.941747572815534, 168.83415503640776, 0.3147754854368932], "isController": false}, {"data": ["Galary", 50, 0, 0.0, 6572.720000000001, 6030, 7254, 6549.5, 7080.7, 7180.549999999999, 7254.0, 1.920860545524395, 236.5591159839608, 0.27574853534383403], "isController": false}, {"data": ["Eminentalumni", 50, 0, 0.0, 6362.540000000001, 4718, 7214, 6317.0, 6979.0, 7153.85, 7214.0, 2.061940698585509, 168.07559235690132, 0.2738514990308879], "isController": false}, {"data": ["PostGraduate", 50, 0, 0.0, 6393.92, 5578, 7159, 6338.0, 6904.3, 7126.95, 7159.0, 1.9490137990176972, 228.90097395873937, 0.2816934006392765], "isController": false}, {"data": ["Events", 50, 0, 0.0, 6178.280000000001, 5241, 7635, 6058.5, 6929.099999999999, 7329.299999999998, 7635.0, 1.8449503708350246, 150.03341810495922, 0.23242050570089665], "isController": false}, {"data": ["Evolution", 50, 0, 0.0, 6311.959999999999, 5849, 7046, 6295.5, 6622.5, 6697.85, 7046.0, 1.9316952557564517, 166.98041623203522, 0.26975822419255135], "isController": false}, {"data": ["StaffFourm", 50, 0, 0.0, 703.4200000000002, 565, 931, 710.5, 779.7, 876.5499999999996, 931.0, 2.338524858519246, 76.31250621170665, 0.8883654003554557], "isController": false}, {"data": ["Schools", 50, 0, 0.0, 6154.2, 5478, 6797, 6145.0, 6498.6, 6602.999999999999, 6797.0, 1.8932222642938281, 161.14020789946989, 0.2588389814464218], "isController": false}, {"data": ["AluminiRegistration", 50, 0, 0.0, 7114.959999999998, 6633, 7839, 7081.0, 7416.6, 7712.9, 7839.0, 1.8751875187518752, 195.8654239447382, 0.2691919582583258], "isController": false}, {"data": ["Faculty", 50, 0, 0.0, 6736.520000000001, 5936, 7520, 6782.0, 7187.3, 7317.599999999999, 7520.0, 1.849386003846723, 147.38667309328304, 0.23659137353898504], "isController": false}, {"data": ["overview", 50, 0, 0.0, 5792.380000000002, 2621, 6928, 6279.0, 6559.8, 6589.349999999999, 6928.0, 2.3172822913287296, 191.07857180099177, 0.30323811234184544], "isController": false}, {"data": ["Administration", 50, 0, 0.0, 6027.86, 5725, 6622, 5988.0, 6326.099999999999, 6479.349999999999, 6622.0, 1.9312475859405176, 174.17823906431053, 0.27535365971417536], "isController": false}, {"data": ["AboutUs", 50, 0, 0.0, 6160.32, 5540, 6580, 6175.5, 6472.1, 6568.95, 6580.0, 1.9837333862328903, 163.4513783847451, 0.273150788534021], "isController": false}, {"data": ["OnlineLearning-2", 50, 0, 0.0, 71.51999999999997, 57, 129, 68.0, 86.9, 103.94999999999987, 129.0, 2.543493743005392, 103.45168991313969, 0.317936717875674], "isController": false}, {"data": ["OnlineLearning-1", 50, 0, 0.0, 68.46, 45, 282, 63.0, 81.9, 89.24999999999997, 282.0, 2.545176889793841, 2.5256903792313565, 0.3181471112242301], "isController": false}, {"data": ["OnlineLearning-0", 50, 0, 0.0, 160.22, 126, 239, 153.5, 185.9, 223.1499999999999, 239.0, 2.5292124032576253, 2.924105449188123, 0.3136816164196469], "isController": false}, {"data": ["Alumnispeaks", 50, 0, 0.0, 6228.379999999997, 4829, 7086, 6262.0, 6608.9, 6824.2, 7086.0, 2.035913514393908, 186.9460088460442, 0.2684065668390407], "isController": false}, {"data": ["StartEcosystem", 50, 0, 0.0, 1642.7200000000003, 1324, 4481, 1378.0, 3070.0, 3686.049999999997, 4481.0, 2.4669429642786658, 114.77201592411683, 0.3011404985691731], "isController": false}, {"data": ["HomePage", 50, 0, 0.0, 4849.4, 1363, 7739, 5671.0, 7028.5, 7542.199999999999, 7739.0, 4.059430056020135, 502.075304330397, 0.48760732118210603], "isController": false}, {"data": ["UnderGraduate", 50, 0, 0.0, 6448.92, 6032, 7056, 6431.0, 6869.4, 6999.599999999999, 7056.0, 1.9673421207948063, 231.0511908567775, 0.28434241589612436], "isController": false}, {"data": ["FAQ", 50, 0, 0.0, 6363.58, 5639, 6829, 6382.0, 6738.0, 6822.05, 6829.0, 1.924409206373643, 191.62943636459858, 0.2555855977214995], "isController": false}, {"data": ["VisionAndMission", 50, 0, 0.0, 6412.420000000002, 5562, 7208, 6443.5, 6962.7, 7034.05, 7208.0, 1.9019361710221006, 154.11763980419568, 0.2804612908440793], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": []}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 2500, 0, "", "", "", "", "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});

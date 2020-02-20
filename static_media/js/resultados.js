Highcharts.chart('indicador1-2018', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            'Trimestre 1',
            'Trimestre 2',
            'Trimestre 3',
            'Trimestre 4',

        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'CAPS'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Meta',
        data: [39, 46, 46, 59]

    }, {
        name: 'Alcanzado',
        data: [40, 44, 48, 60]

    }]
});
Highcharts.chart('indicador1-2019', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            'Trimestre 1',
            'Trimestre 2',
            'Trimestre 3',

        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'CAPS'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Meta',
        data: [29, 36, 40]

    }, {
        name: 'Alcanzado',
        data: [33, 34, 38]

    }]
});

Highcharts.chart('indicador2-2018', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            'Trimestre 1',
            'Trimestre 2',
            'Trimestre 3',
            'Trimestre 4',

        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Socios locales'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Meta',
        data: [22, 26, 22, 30]

    }, {
        name: 'Alcanzado',
        data: [23, 28, 24, 28]

    }]
});
Highcharts.chart('indicador2-2019', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            'Trimestre 1',
            'Trimestre 2',
            'Trimestre 3',

        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Socios locales'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Meta',
        data: [29, 26, 22]

    }, {
        name: 'Alcanzado',
        data: [33, 28, 24]

    }]
});


Highcharts.chart('indicador3-2018', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            'Trimestre 1',
            'Trimestre 2',
            'Trimestre 3',
            'Trimestre 4',

        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Personas'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Meta',
        data: [448, 538, 539, 541]

    }, {
        name: 'Alcanzado',
        data: [483, 578, 598, 593]

    }]
});
Highcharts.chart('indicador3-2019', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            'Trimestre 1',
            'Trimestre 2',
            'Trimestre 3',

        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Personas'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Meta',
        data: [548, 538, 539]

    }, {
        name: 'Alcanzado',
        data: [783, 778, 798]

    }]
});


Highcharts.chart('tacometro_caps', {

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
    },

    title: {
        text: ''
    },

    pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#FFF'],
                    [1, '#333']
                ]
            },
            borderWidth: 0,
            outerRadius: '109%'
        }, {
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#333'],
                    [1, '#FFF']
                ]
            },
            borderWidth: 1,
            outerRadius: '107%'
        }, {
            // default background
        }, {
            backgroundColor: '#DDD',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
        }]
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 100,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: '%'
        },
        plotBands: [{
            from: 0,
            to: 40,
            color: '#DF5353' // red
        }, {
            from: 41,
            to: 79,
            color: '#DDDF0D' // yellow
        }, {
            from: 80,
            to: 100,
            color: '#55BF3B' // green
        }]
    },

    series: [{
        name: 'average',
        data: [81],
        tooltip: {
            valueSuffix: ' %'
        }
    }],
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    },

});

Highcharts.chart('tacometro_caps2', {

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
    },

    title: {
        text: ''
    },

    pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#FFF'],
                    [1, '#333']
                ]
            },
            borderWidth: 0,
            outerRadius: '109%'
        }, {
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#333'],
                    [1, '#FFF']
                ]
            },
            borderWidth: 1,
            outerRadius: '107%'
        }, {
            // default background
        }, {
            backgroundColor: '#DDD',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
        }]
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 100,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: '%'
        },
        plotBands: [{
            from: 0,
            to: 40,
            color: '#DF5353' // red
        }, {
            from: 41,
            to: 79,
            color: '#DDDF0D' // yellow
        }, {
            from: 80,
            to: 100,
            color: '#55BF3B' // green
        }]
    },

    series: [{
        name: 'average',
        data: [83],
        tooltip: {
            valueSuffix: ' %'
        }
    }],
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    },

});

Highcharts.chart('tacometro_caps3', {

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
    },

    title: {
        text: ''
    },

    pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#FFF'],
                    [1, '#333']
                ]
            },
            borderWidth: 0,
            outerRadius: '109%'
        }, {
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#333'],
                    [1, '#FFF']
                ]
            },
            borderWidth: 1,
            outerRadius: '107%'
        }, {
            // default background
        }, {
            backgroundColor: '#DDD',
            borderWidth: 0,
            outerRadius: '100%',
            innerRadius: '100%'
        }]
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 100,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: '%'
        },
        plotBands: [{
            from: 0,
            to: 40,
            color: '#DF5353' // red
        }, {
            from: 41,
            to: 79,
            color: '#DDDF0D' // yellow
        }, {
            from: 80,
            to: 100,
            color: '#55BF3B' // green
        }]
    },

    series: [{
        name: 'average',
        data: [83],
        tooltip: {
            valueSuffix: ' %'
        }
    }],
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    },

});
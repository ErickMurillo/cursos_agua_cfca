

// Build the chart
Highcharts.chart('mujeres', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Presidenta (4)',
            y: 4,
            sliced: true,
            selected: true
        }, {
            name: 'Fiscal (0)',
            y: 0
        }, {
            name: 'Secretaria (2)',
            y: 2
        }, {
            name: 'Tesorera (0)',
            y: 0
        }, {
            name: 'Vocal (0)',
            y: 0
        }]
    }]
});


Highcharts.chart('impacto1', {
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
            'Uso Estratégico de las TIC',
            'Gestión de recursos hídricos',
            'Manejo de sistemas de agua',
            'Auditoria social y abogacia',
            'Manejo financiero de los caps',
            'Marco legal de aguas',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rainfall (mm)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
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
        name: '2019',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0]

    }, {
        name: '2020',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5]

    }]
});


Highcharts.chart('impacto2', {
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
            'Uso Estratégico de las TIC',
            'Gestión de recursos hídricos',
            'Manejo de sistemas de agua',
            'Auditoria social y abogacia',
            'Manejo financiero de los caps',
            'Marco legal de aguas',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rainfall (mm)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
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
        name: '2019',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0]

    }, {
        name: '2020',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5]

    }]
});

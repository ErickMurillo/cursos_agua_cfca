
// Create the chart
Highcharts.chart('familia', {
    chart: {
        type: 'pie'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}: {point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    "series": [
        {
            "name": "Beneficiarios",
            "colorByPoint": true,
            "data": [
                {
                    "name": "Hombres",
                    "y": {{total_hombres}}

                },
                {
                    "name": "Mujeres",
                    "y": {{total_mujeres}}

                },
                {
                    "name": "Niños y Niñas",
                    "y": {{ninez}}

                }
            ]
        }
    ]
});




// Create the chart

Highcharts.chart('financiado', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: ['2017', '2018', '2019']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'USD'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        }
    },
    series: [{
        name: 'Inversiones',
        data: [20365.00, 75383.47, 74169.23]
    }, {
        name: 'Capacitación',
        data: [210.00, 433.00, 0]
    }, {
        name: 'Comunicación',
        data: [47234.50, 14451.00, 19973.00]
    }]
});



// Create the chart
Highcharts.chart('capacitaciones', {
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
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Personas Capacitadas'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'
    },

    "series": [
        {
            "name": "Personas",
            "colorByPoint": true,
            "data": [
                {
                    "name": "TIC",
                    "y": 40.00,
                    "drilldown": "TIC"
                },
                {
                    "name": "Recursos Hídricos",
                    "y": 25,
                    "drilldown": "Recursos Hídricos"
                },
                {
                    "name": "Sistemas de Agua",
                    "y": 35,
                    "drilldown": "Sistemas de Agua"
                },
                {
                    "name": "Auditoria Social",
                    "y": 35,
                    "drilldown": "Auditoria Social"
                },
                {
                    "name": "Manejo financiero",
                    "y": 35,
                    "drilldown": "Manejo financiero"
                },
                {
                    "name": "Marco Legal",
                    "y": 35,
                    "drilldown": "Marco Legal"
                },

            ]
        }
    ],

});

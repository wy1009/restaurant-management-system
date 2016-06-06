<template>
    <canvas id="myChart" width="400" height="400"></canvas>
</template>

<script>
import Chart from 'chart.js'

export default {
    data () {
        return {
            earnData: [],
            payData: []
        }
    },
    ready () {
        this.getPayData(0)
        this.getEarnData(0)
        this.drawChart()
    },
    methods: {
        getEarnData (day) {
            if (day > 6) {
                return
            }
            this.$http.get('/api/account/earn/', {day: day}).then(function (res) {
                var data = res.data
                if (data.success) {
                    this.earnData.push(data.earnNum)
                    this.getEarnData(day + 1)
                } else {
                    console.log(data.reason)
                }
            })
        },
        getPayData (day) {
            if (day > 6) {
                return
            }
            this.$http.get('/api/account/pay/', {day: day}).then(function (res) {
                var data = res.data
                if (data.success) {
                    this.payData.push(data.payNum)
                    this.getPayData(day + 1)
                } else {
                    console.log(data.reason)
                }
            })
        },
        drawChart () {
            var ctx = document.getElementById("myChart")
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['六天前', '五天前', '四天前', '三天前', '两天前', '一天前', '今日'],
                    datasets : [{
                            label: '收入',
                            fillColor : 'rgba(255, 99, 132, 0.2)',
                            strokeColor : "rgba(220,220,220,1)",
                            pointColor : "rgba(220,220,220,1)",
                            pointStrokeColor : "#fff",
                            // data : this.earnData
                            data: [1023, 1250, 2000, 1987.5, 2278.6, 1363.5, 2587.6]
                        },{
                            label: '支出',
                            fillColor : "rgba(151,187,205,0.5)",
                            strokeColor : "rgba(151,187,205,1)",
                            pointColor : "rgba(151,187,205,1)",
                            pointStrokeColor : "#fff",
                            // data : this.payData
                            data: [300, 600, 320, 560, 250, 530, 560]
                        }
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            })
        }
    }
}
</script>

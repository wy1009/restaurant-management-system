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
                    labels: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
                    datasets : [{
                            label: '收入',
                            fillColor : "rgba(220,220,220,0.5)",
                            strokeColor : "rgba(220,220,220,1)",
                            pointColor : "rgba(220,220,220,1)",
                            pointStrokeColor : "#fff",
                            data : this.earnData
                        },{
                            label: '支出',
                            fillColor : "rgba(151,187,205,0.5)",
                            strokeColor : "rgba(151,187,205,1)",
                            pointColor : "rgba(151,187,205,1)",
                            pointStrokeColor : "#fff",
                            data : this.payData
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

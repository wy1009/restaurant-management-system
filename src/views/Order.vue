<template>
    <div class="order-wrapper has-side-nav">
        <aside>
            <ul>
                <li v-for="orderStatus of orderStatusList" :class="orderStatus == nowOrderStatus ? 'active' : ''">
                    <a href="javascript:;" @click="getOrderList(orderStatus)">{{ orderStatus.name }}</a>
                </li>
            </ul>
        </aside>
        <article class="ui list-wrap">
            <h3 class="ui title">{{ nowOrderStatus.name }}</h3>
        </article>
    </div>
</template>

<script>
export default {
    data () {
        return {
            orderStatusList: [],
            nowOrderStatus: {},
            orderList: []
        }
    },
    ready () {
        this.getOrderStatusList()
    },
    methods: {
        getOrderStatusList () {
            this.$http.get('/api/order-status/').then(function (res) {
                var data = res.data
                if (data.success) {
                    this.orderStatusList = data.orderstatuses
                    this.getOrderList(this.orderStatusList[0])
                } else {
                    console.log(data.reason)
                }
            })
        },
        getOrderList (orderStatus) {
            this.nowOrderStatus = orderStatus
            this.$http.get('/api/order/').then(function (res) {
                var data = res.data
                if (data.success) {
                    this.orderList = data.orderList
                } else {
                    console.log(data.reason)
                }
            })
        }
    }
}
</script>
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
            <div class="list">
                <ul>
                    <li v-for="order of orderList">
                        <h4 class="title fl">{{ order.customer.name }}</h4>
                        <div class="meal fl">
                            <template v-for="meal of order.meals">
                                {{ meal.name }}
                            </template>
                        </div>
                        <div class="operation fr">
                            <span @click="editOrder(order)">编辑</span>
                            <span @click="delOrder(order)">删除</span>
                        </div>
                    </li>
                </ul>
            </div>
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
        },
        editOrder () {

        },
        delOrder () {

        }
    }
}
</script>
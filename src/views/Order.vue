<template>
    <div class="order-wrapper">
        <aside>
            <ul>
                <li v-for="orderStatus of orderStatusList" @click="nowOrderStatus = orderStatus">{{ orderStatus.name }}</li>
            </ul>
        </aside>
        <div class="ui list-warp">
            <h3>{{ nowOrderStatus.name }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            orderStatusList: [],
            nowOrderStatus: {}
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
                } else {
                    console.log(data.reason)
                }
            })
        }
    }
}
</script>
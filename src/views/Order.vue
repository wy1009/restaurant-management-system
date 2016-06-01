<template>
    <div class="order-wrapper has-side-nav">
        <aside>
            <ul>
                <li v-for="orderStatus of orderStatusList">
                    <a href="javascript:;" @click="nowOrderStatus = orderStatus" :class="orderStatus == nowOrderStatus ? 'active' : ''">{{ orderStatus.name }}</a>
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
                    this.nowOrderStatus = data.orderstatuses[0]
                } else {
                    console.log(data.reason)
                }
            })
        }
    }
}
</script>

<style lang="sass">
</style>
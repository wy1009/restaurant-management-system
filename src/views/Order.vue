<template>
    <div class="order-wrapper has-side-nav">
        <aside>
            <ul>
                <li v-for="orderStatus in orderStatusList" :class="orderStatus.name == nowOrderStatus.name ? 'active' : ''">
                    <div @click="getOrderList(orderStatus)">
                        {{ orderStatus.name }}
                    </div>
                </li>
            </ul>
        </aside>
        <article class="ui list-wrap">
            <h3 class="ui title">
                {{ nowOrderStatus.name }}
            </h3>
            <div class="list">
                <ul>
                    <li v-for="order in orderList">
                        <h4 class="title fl">{{ order.customer.name }}</h4>
                        <div class="operation fr" v-if="role">
                            <span @click="editOrder(order)">编辑</span>
                            <span @click="delOrder(order)">删除</span>
                        </div>
                        <div class="price fr">¥{{ order.price }}/份</div>
                        <div class="meals fr">
                            <template v-for="meal of order.meals">
                                {{ meal.meal.name }}{{ meal.count }}份
                            </template>
                        </div>
                        <div class="phone fr">{{ order.customer.phone }}</div>
                    </li>
                </ul>
            </div>
        </article>
        <dlg-order-put v-show="dlgOrderShow" type="order" :info-obj="selectedOrderObj" :class-info-list="orderStatusList" @close-dlg="toggleOrderDlg" @submited="dlgOrderSubmited" transition="expand"></dlg-order-put>
    </div>
</template>

<script>
import DlgOrderPut from '../components/DlgOrderPut.vue'
import { getRole } from '../vuex/getters'
import { dispatchHoldOnObj } from '../vuex/actions'

export default {
    data () {
        return {
            nowOrderStatus: {},
            orderStatusList: [],
            orderList: [],
            selectedOrderObj: {},
            dlgOrderShow: false
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
                    this.orderStatusList = data.orderStatusList
                    this.getOrderList(this.orderStatusList[0])
                } else {
                    console.log(data.reason)
                }
            })
        },
        getOrderList (orderStatus) {
            this.nowOrderStatus = orderStatus
            var filterCondition = {
                status: orderStatus._id
            }
            this.$http.get('/api/order/', filterCondition).then(function (res) {
                var data = res.data
                if (data.success) {
                    this.orderList = data.orderList
                } else {
                    console.log(data.reason)
                }
            })
        },
        toggleOrderDlg () {
            this.dlgOrderShow = !this.dlgOrderShow
            if (!this.dlgOrderShow) {
                this.selectedOrderObj = {}
            }
        },
        dlgOrderSubmited () {
            this.getOrderList()
            this.toggleOrderDlg()
        },
        editOrder (order) {
            this.selectedOrderObj = order
            this.toggleOrderDlg()
        },
        delOrder (order) {
            var filterCondition = {
                _id: order._id
            }
            this.$http.delete('/api/order/', filterCondition).then(function (res) {
                var data = res.data
                if (data.success) {
                    this.getOrderList(this.nowClassInfo)
                } else {
                    console.log(data.reason)
                }
            })
        }
    },
    components: {
        DlgOrderPut
    },
    vuex: {
        getters: {
            role: getRole
        },
        actions: {
            dispatchHoldOnObj
        }
    }
}
</script>
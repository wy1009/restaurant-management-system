<template>
    <div class="order-wrapper has-side-nav">
        <aside>
            <ul>
                <li v-for="orderStatus in orderStatusList" :class="orderStatus.name == nowOrderStatus.name ? 'active' : ''">
                    <div @click="getorderList(orderStatus)">
                        {{ orderStatus.name }}
                    </div>
                </li>
            </ul>
        </aside>
        <article class="ui list-wrap">
            <h3 class="ui title">
                {{ nowOrderStatus.name }}
                <span @click="toggleOrderDlg" v-if="orderStatus == 50">添加员工</span>
            </h3>
            <div class="list">
                <ul>
                    <li v-for="order in orderList">
                        <h4 class="title fl">{{ order.name }}</h4>
                        <div class="operation fr">
                            <span @click="editorder(order)" v-if="orderStatus == 50">编辑</span>
                        </div>
                        <div class="phone fr">{{ order.phone }}</div>
                    </li>
                </ul>
            </div>
        </article>
        <dlg-order-add-put v-show="dlgOrderShow" type="order" :info-obj="selectedOrderObj" :order-status-list="orderStatusList" @close-dlg="toggleOrderDlg" @submited="dlgOrderSubmited" transition="expand"></dlg-order-add-put>
    </div>
</template>

<script>
import DlgOrderAddPut from '../components/DlgOrderAddPut.vue'

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
        this.getOrderList()
    },
    methods: {
        getOrderList (orderStatus) {
            if (orderStatus) {
                this.nowOrderStatus = orderStatus
            }
            this.$http.get('/api/order/', this.nowOrderStatus).then(function (res) {
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
        }
    },
    components: {
        DlgOrderPut
    },
    vuex: {
        getters: {
        }
    }
}
</script>
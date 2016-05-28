<template>
    <div class="add-customer-box">
        <div class="group-inputs">
            <div class="input-wrapper">
                <input type="text" placeholder="姓名" v-model="customerObj.name">
            </div>
            <div class="input-wrapper">
                <input type="text" placeholder="电话" v-model="customerObj.phone">
            </div>
            <div class="input-wrapper">
                <select>
                    <option value=""></option>
                </select>
            </div>
        </div>
        <div class="button-wrapper">
            <button @click="addCustomer">确定</button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            customerObj: {}
        }
    },
    ready () {
        this.getMemberList()
    },
    methods: {
        getMemberList () {
            var _this = this
            _this.$http.get('/api/member/').then(function (res) {

            })
        },
        addCustomer () {
            var _this = this
            _this.$http.post('/api/customer/', _this.customerObj).then(function (res) {

            })
        }
    }
}
</script>
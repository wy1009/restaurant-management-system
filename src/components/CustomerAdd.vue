<template>
    <div class="add-customer-box">
        <div class="group-inputs">
            <div class="input-wrapper">
                <input type="text" placeholder="姓名" v-model="newCustomerObj.name">
            </div>
            <div class="input-wrapper">
                <input type="text" placeholder="电话" v-model="newCustomerObj.phone">
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
            newCustomerObj: {}
        }
    },
    methods: {
        addCustomer () {
            var _this = this
            _this.$http.post('/api/customer/', newCustomerObj).then(function (res) {
                
            })
        }
    }
}
</script>
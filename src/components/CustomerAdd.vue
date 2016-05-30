<template>
    <div class="add-customer-box">
        <div class="group-inputs">
            <div class="ui input-wrapper">
                <input type="text" placeholder="姓名" v-model="customerObj.name">
            </div>
            <div class="ui input-wrapper">
                <input type="text" placeholder="电话" v-model="customerObj.phone">
            </div>
            <div class="ui input-wrapper">
                <select>
                    <option value=""></option>
                </select>
            </div>
        </div>
        <div class="button-wrapper">
            <button class="ui button" @click="addCustomer">确定</button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            memberList: [],
            customerObj: {}
        }
    },
    ready () {
        this.getMemberList()
    },
    methods: {
        getMemberList () {
            this.$http.get('/api/member/').then(function (res) {
                var data = res.data
                if (data.success) {
                    this.memberList = data.memberList
                } else {
                    console.log(data.reason)
                }
            })
        },
        addCustomer () {
            this.$http.post('/api/customer/', this.customerObj).then(function (res) {
                this.$dispatch('close-customer-dlg', false)
            })
        }
    }
}
</script>
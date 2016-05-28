<template>
    <div class="dialog-box">
        <div class="add-select-customer-dialog">
            <div class="header">顾客信息</div>
            <div class="content">
                <div class="main-body">
                    <div class="tab-navs">
                        <div class="navs-slider">
                            <a href="javascript:;">新顾客</a>
                            <a href="javascript:;">老顾客</a>
                        </div>
                    </div>
                    <div class="add-customer-box">
                        <div class="group-inputs">
                            <div class="input-wrapper">
                                <input type="text" placeholder="姓名" v-model="customerObj.name">
                            </div>
                            <div class="input-wrapper">
                                <input type="text" placeholder="电话" v-model="customerObj.phone">
                            </div>
                        </div>
                    </div>
                    <div class="select-customer-box">
                        <div class="group-inputs">
                            <div class="input-wrapper">
                                <input type="text" placeholder="请输入姓名或电话进行查找">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer">
                <input type="button" value="取消">
                <input type="button" value="确定" @click="dispatchCustomerInfo">
            </div>
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
        methods: {
            dispatchCustomerInfo () {
                this.$dispatch('get-customer-info', this.customerObj)
                this.customerObj = {}
            }
        }
    }
</script>
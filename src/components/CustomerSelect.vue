<template>
    <div class="select-customer-box">
        <div class="group-inputs">
            <div class="ui input-wrapper">
                <input v-model="customerFilter" debounce="300" type="text" placeholder="请输入电话进行查找">
                <ul class="search-result-list">
                    <li v-for="result of searchResultList" @click="dispatchCustomerMsg(result)">{{ result.name }} {{ result.phone }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            customerFilter: null,
            searchResultList: [],
            selectedCustomer: {}
        }
    },
    watch: {
        customerFilter (val) {
            var filterCondition = {
                phone: val
            }
            this.$http.get('/api/customer/orderadd/', filterCondition).then(function (res) {
                var data = res.data
                if (data.success) {
                    this.searchResultList = data.customerList
                } else {
                    console.log(data.reason)
                }
            })
        }
    },
    methods: {
        dispatchCustomerMsg (result) {
            this.searchResultList = []
            this.customerFilter = null
            this.selectedCustomer = result
            this.$dispatch('submited', this.selectedCustomer)
        }
    }
}
</script>

<style lang="sass">
    .select-customer-box {
        .search-result-list {
            border-top: 1px solid #ebebeb;
            border-bottom: 1px solid #ebebeb;
            position: absolute;
            background: #fff;
            li {
                width: 260px;
                line-height: 26px;
                text-align: left;
                padding: 0 10px;
                cursor: pointer;
                &:hover {
                    background: #ff2d4b;
                    color: #fff;
                }
            }
        }
    }
</style>
<template>
    <div class="select-customer-box">
        <div class="group-inputs">
            <div class="ui input-wrapper">
                <input v-model="customerFilter" debounce="300" type="text" placeholder="请输入电话进行查找">
                <ul class="search-result-list">
                    <li v-for="result of searchResultList"></li>
                </ul>
            </div>
        </div>
        <div class="button-wrapper">
            <button class="ui button">确定</button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            customerFilter: null,
            searchResultList: []
        }
    },
    watch: {
        customerFilter (val) {
            var filter = {
                phone: val
            }
            this.$http.get('/api/customer/', filter).then(function (res) {

            })
        }
    },
    methods: {
        searchCustomer () {
            this.$http.get('/api/customer/', this.customerFilter).then(function (res) {

            })
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
            }
        }
    }
</style>
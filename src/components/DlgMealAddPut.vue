<template>
    <div class="dialog-box">
        <div class="add-put-meal-dialog">
            <div class="header">菜肴信息</div>
            <div class="content">
                <div class="group-inputs">
                    <div class="input-wrapper">
                        <input type="text" placeholder="名称" v-model="mealObj.name">
                    </div>
                    <div class="input-wrapper">
                        <select v-model="mealObj['category']">
                            <option value="">请选择</option>
                            <template v-for="category in categoryList">
                                <option value="{{ category._id }}">{{ category.name }}</option>
                            </template>
                        </select>
                    </div>
                    <div class="input-wrapper">
                        <input type="text" placeholder="价格" v-model="mealObj['price']">
                    </div>
                </div>
            </div>
            <div class="footer">
                <input type="button" value="取消">
                <input type="button" value="确定" @click="addMeal">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['categoryList'],
    data () {
        return {
            mealObj: {
                name: '',
                category: '',
                price: ''
            }
        }
    },
    methods: {
        addMeal () {
            var _this = this
            _this.$http.post('/api/meal/', _this.mealObj).then(function (res) {
                if (res.success) {
                    _this.$dispatch('update-meal-list')
                } else {
                    console.log(res.reason)
                }
            })
        }
    }
}
</script>
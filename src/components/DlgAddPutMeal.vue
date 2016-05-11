<template>
    <div class="dialog-box">
        <div class="add-meal-dialog">
            <div class="header">菜肴信息</div>
            <div class="content">
                <div>
                    <div class="input-wrapper">
                        <input type="text" placeholder="名称" v-model="mealData.name">
                    </div>
                    <div class="input-wrapper">
                        <select v-model="mealData['category']">
                            <option value="">请选择</option>
                            <template v-for="category in categoryList">
                                <option value="{{ category._id }}">{{ category.name }}</option>
                            </template>
                        </select>
                    </div>
                    <div class="input-wrapper">
                        <input type="text" placeholder="价格" v-model="mealData['price']">
                    </div>
                </div>
            </div>
            <div class="footer">
                <input type="button" value="取消">
                <input type="button" value="确定" @click="addMealData">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['categoryList'],
    data () {
        return {
            mealData: {
                name: '',
                category: '',
                price: ''
            }
        };
    },
    methods: {
        addMealData () {
            var _this = this;
            _this.$http.post('/api/meal/', _this.mealData).then(function (res) {
                if (res.success) {
                    _this.$dispatch('update-meal-list');
                } else {
                    console.log(res.reason);
                }
            });
        }
    }
}
</script>
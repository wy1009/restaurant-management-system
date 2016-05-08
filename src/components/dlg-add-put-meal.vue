<template>
    <div class="dialog-box">
        <div class="add-meal-dialog">
            <div class="header">添加菜肴</div>
            <div class="content">
                <div>
                    <div class="input-wrapper">
                        <input type="text" placeholder="名称" v-model="mealData.name">
                    </div>
                    <div class="input-wrapper">
                        <select v-model="mealData['type']">
                            <option value="">菜系</option>
                            <option value="川">川</option>
                            <option value="鲁">鲁</option>
                            <option value="粤">粤</option>
                            <option value="苏">苏</option>
                            <option value="浙">浙</option>
                            <option value="闽">闽</option>
                            <option value="湘">湘</option>
                            <option value="徽">徽</option>
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
    data () {
        return {
            mealData: {
                name: '',
                type: '',
                price: ''
            }
        }
    },
    methods: {
        addMealData () {
            var _this = this;
            _this.$http.post('/api/meal/', _this.mealData).then(function (res) {
                console.log('success');
                console.log(res);
            }, function (res) {
                console.log('error');
                console.log(res);
            });
        }
    }
}
    
</script>
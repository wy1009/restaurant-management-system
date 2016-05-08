<template>
    <div class="container has-side-nav">
        <aside>
            <ul>
                <li><a href="javascript:;" @click="meal_type = '川'">川</a></li>
                <li><a href="javascript:;" @click="meal_type = '鲁'">鲁</a></li>
                <li><a href="javascript:;" @click="meal_type = '粤'">粤</a></li>
                <li><a href="javascript:;" @click="meal_type = '苏'">苏</a></li>
                <li><a href="javascript:;" @click="meal_type = '浙'">浙</a></li>
                <li><a href="javascript:;" @click="meal_type = '闽'">闽</a></li>
                <li><a href="javascript:;" @click="meal_type = '湘'">湘</a></li>
                <li><a href="javascript:;" @click="meal_type = '徽'">徽</a></li>
            </ul>
        </aside>
        <article>
            <h1>{{ meal_type }}</h1><a class="add-meal" href="javascript:;">添加菜肴</a>
            <ul>
                <li></li>
            </ul>
        </article>
        <div class="dialog-box">
            <div class="add-meal-dialog">
                <div class="header">添加菜肴</div>
                <div class="content">
                    <div>
                        <div class="input-wrapper">
                            <input type="text" placeholder="名称" v-model="new_update_meal_data.name">
                        </div>
                        <div class="input-wrapper">
                            <select v-model="new_update_meal_data['type']">
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
                            <input type="text" placeholder="价格" v-model="new_update_meal_data['price']">
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <input type="button" value="取消">
                    <input type="button" value="确定" @click="add_meal_data">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            meal_type: '',
            new_update_meal_data: {
                name: '',
                type: '',
                price: ''
            }
        }
    },
    methods: {
        add_meal_data () {
            var _this = this;
            _this.$http.post('/api/meal/', _this.new_update_meal_data).then(function (res) {
                console.log('success');
                console.log(res);
            }, function (res) {
                console.log('error');
                console.log(res);
            });
        },
        changeSelected () {
            console.log(this.new_update_meal_data)
        }
    }
};
</script>
<style lang="sass">
    .add-meal {
        float: right;
    }
</style>
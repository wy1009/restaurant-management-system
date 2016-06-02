<template>
    <div class="dialog-box">
        <div class="add-put-meal-dialog dialog">
            <div class="header">菜肴信息<i @click="dispatchCloseDlgMsg" class="close-btn">+</i></div>
            <div class="content">
                <div class="group-inputs">
                    <div class="ui input-wrapper">
                        <input type="text" placeholder="名称" v-model="mealObj.name">
                    </div>
                    <div class="ui input-wrapper">
                        <select v-model="mealObj.category">
                            <option v-for="category in categoryList" value="{{ category._id }}">{{ category.name }}</option>
                        </select>
                    </div>
                    <div class="ui input-wrapper">
                        <input type="text" placeholder="价格" v-model="mealObj.price">
                    </div>
                </div>
                <div class="button-wrapper">
                    <button class="ui button" @click="addMeal">确定</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['categoryList', 'mealObj'],
    methods: {
        addMeal () {
            this.$http.post('/api/meal/', this.mealObj).then(function (res) {
                var data = res.data
                if (data.success) {
                    this.$dispatch('submited')
                } else {
                    console.log(data.reason)
                }
            })
        },
        dispatchCloseDlgMsg () {
            this.$dispatch('close-dlg')
        }
    }
}
</script>
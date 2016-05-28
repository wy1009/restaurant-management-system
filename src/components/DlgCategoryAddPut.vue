<template>
    <div class="dialog-box">
        <div class="add-put-category-dialog">
            <div class="header">菜肴类别</div>
            <div class="content">
                <div class="group-inputs">
                    <div class="input-wrapper">
                        <input type="text" placeholder="名称" v-model="categoryObj.name">
                    </div>
                </div>
            </div>
            <div class="footer">
                <input type="button" value="取消">
                <input type="button" value="确定" @click="addCategory">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            categoryObj: {
                name: ''
            }
        }
    },
    methods: {
        addCategory () {
            var _this = this
            _this.$http.post('/api/category/', _this.categoryObj).then(function (res) {
                console.log('success')
                console.log(res)
            }, function (res) {
                console.log('error')
                console.log(res)
            })
        }
    }
}
</script>
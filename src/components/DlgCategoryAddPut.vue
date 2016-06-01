<template>
    <div class="dialog-box">
        <div class="add-put-category-dialog dialog">
            <div class="header">菜肴类别<i @click="dispatchCloseDlgMsg" class="close-btn">+</i></div>
            <div class="content">
                <div class="group-inputs">
                    <div class="ui input-wrapper">
                        <input type="text" placeholder="名称" v-model="categoryObj.name">
                    </div>
                </div>
                <div class="button-wrapper">
                    <button class="ui button" @click="addCategory">确定</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            categoryObj: {}
        }
    },
    methods: {
        addCategory () {
            var _this = this
            _this.$http.post('/api/category/', _this.categoryObj).then(function (res) {
                var data = res.data
                if (data.success) {
                    this.categoryObj = {}
                    this.$dispatch('finish')
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

style
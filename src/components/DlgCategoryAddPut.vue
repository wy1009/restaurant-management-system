<template>
    <div class="dialog-box">
        <div class="add-put-category-dialog dialog">
            <div class="header">菜肴类别</div>
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

<style lang="sass">
    .add-put-category-dialog {
        width: 280px;
        height: 180px;
        margin-top: -114px;
        margin-left: -90px;
    }
</style>
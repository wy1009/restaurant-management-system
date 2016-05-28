<template>
    <div class="dialog-box">
        <div class="add-put-member-dialog">
            <div class="header">会员等级</div>
            <div class="content">
                <div class="group-inputs">
                    <div class="input-wrapper">
                        <input type="text" placeholder="名称" v-model="memberObj.name">
                    </div>
                </div>
                <div class="group-inputs">
                    <div class="input-wrapper">
                        <input type="text" placeholder="折扣" v-model="memberObj.name">
                    </div>
                </div>
            </div>
            <div class="footer">
                <input type="button" value="取消">
                <input type="button" value="确定" @click="addMember">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        memberObj: {}
    },
    methods: {
        addMember () {
            var _this = this
            _this.$http.post('/api/member/', _this.memberObj).then(function (res) {
                
            })
        }
    }
}
</script>
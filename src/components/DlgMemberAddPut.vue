<template>
    <div class="dialog-box">
        <div class="add-put-member-dialog dialog">
            <div class="header"><slot></slot>会员等级<i @click="dispatchCloseDlgMsg" class="close-btn">+</i></div>
            <div class="content">
                <div class="group-inputs">
                    <div class="ui input-wrapper">
                        <input type="text" placeholder="名称" v-model="memberObj.name">
                    </div>
                    <div class="ui input-wrapper">
                        <input type="text" placeholder="折扣（输入整数或小数）" v-model="memberObj.discount">
                    </div>
                </div>
                <div class="button-wrapper">
                    <button class="ui button" @click="addMember">确定</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            memberObj: {}
        }
    },
    methods: {
        addMember () {
            this.$http.post('/api/member/', this.memberObj).then(function (res) {
                this.memberObj = {}
                this.dispatchCloseDlgMsg()
            })
        },
        dispatchCloseDlgMsg () {
            this.$dispatch('close-dlg', false)
        }
    }
}
</script>
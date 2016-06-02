<template>
    <div class="dialog-box">
        <div class="add-put-user-dialog dialog">
            <div class="header"><slot></slot>会员<i @click="dispatchCloseDlgMsg" class="close-btn">+</i></div>
            <div class="content">
                <div class="group-inputs">
                    <div class="ui input-wrapper">
                        <input type="text" placeholder="名称" v-model="userObj.name">
                    </div>
                    <div class="ui input-wrapper">
                        <select v-model="userObj.role">
                            <option v-for="role of roleList" value="{{ role.role }}">{{ role.name }}</option>
                        </select>
                    </div>
                </div>
                <div class="button-wrapper">
                    <button class="ui button" @click="addUser">确定</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['userObj', 'roleList'],
    methods: {
        addUser () {
            this.$http.post('/api/user/', this.userObj).then(function (res) {
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
<template>
    <div id="login-box">
        <h3 class="ui title">登录</h3>
        <div class="group-inputs">
            <div class="ui input-wrapper">
                <input type="text" placeholder="用户名" v-model="userObj.username">
            </div>
            <div class="ui input-wrapper">
                <input type="password" placeholder="密码" v-model="userObj.password">
            </div>
        </div>
        <div class="button-wrapper">
            <button class="ui button" @click="login">确定</button>
        </div>
    </div>
</template>

<script>
import { loginSuccess } from '../vuex/actions'

export default {
    data () {
        return {
            userObj: {},
            userInfo: {}
        }
    },
    methods: {
        login () {
            this.$http.post('/api/user/login/', this.userObj).then(function (res) {
                var data = res.data
                if (data.success) {
                    this.userInfo = data.userInfo
                    this.loginSuccess(this.userInfo)
                }
            })
        }
    },
    vuex: {
        actions: {
            loginSuccess
        }
    }
}
</script>

<style lang="sass">
    #login-box {
        width: 300px;
        margin: 200px auto;
        .title {
            border: 1px #f5f5f5 solid;
        }
    }
</style>
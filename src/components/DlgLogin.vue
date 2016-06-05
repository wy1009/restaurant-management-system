<template>
    <div class="dialog-box">
        <div id="login-dialog" class="dialog">
            <div class="header">登录<i @click="dispatchCloseDlgMsg" class="close-btn">+</i></div>
            <div class="content">
                <div class="ui input-wrapper">
                    <input type="text" placeholder="用户名" v-model="infoObj.username">
                </div>
                <div class="ui input-wrapper">
                    <input type="text" placeholder="密码" v-model="infoObj.password">
                </div>
                <div class="button-wrapper">
                    <button class="ui button" @click="addInfo">确定</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mixins: [DlgAddPutMixin]
}
</script>
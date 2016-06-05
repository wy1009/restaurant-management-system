<template>
    <div class="login-box">
        <div class="group-inputs">
            <div class="ui input-wrapper">
                <input type="text" placeholder="用户名" v-model="infoObj.username">
            </div>
            <div class="ui input-wrapper">
                <input type="password" placeholder="密码" v-model="infoObj.password">
            </div>
        </div>
        <div class="button-wrapper">
            <button class="ui button" @click="addInfo">确定</button>
        </div>
    </div>
</template>
<template>
    <div class="dialog-box">
        <div id="add-put-user-dialog" class="dialog">
            <div class="header"><slot></slot>员工<i @click="dispatchCloseDlgMsg" class="close-btn">+</i></div>
            <div class="content">
                <div class="group-inputs">
                    <div class="ui input-wrapper">
                        <input type="text" placeholder="用户名" v-model="infoObj.username">
                    </div>
                    <div class="ui input-wrapper">
                        <input type="text" placeholder="密码" v-model="infoObj.password">
                    </div>
                    <div class="ui input-wrapper">
                        <input type="text" placeholder="姓名" v-model="infoObj.name">
                    </div>
                    <div class="ui input-wrapper">
                        <select v-model="infoObj.role">
                            <option v-for="role of roleList" value="{{ role.role }}">{{ role.name }}</option>
                        </select>
                    </div>
                    <div class="ui input-wrapper">
                        <input type="text" placeholder="电话" v-model="infoObj.phone">
                    </div>
                </div>
                <div class="button-wrapper">
                    <button class="ui button" @click="addInfo">确定</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DlgAddPutMixin from './DlgAddPutMixin.vue'

export default {
    mixins: [DlgAddPutMixin],
    props: ['roleList']
}
</script>

<style lang="sass">
    #add-put-user-dialog {
        height: 320px;
        margin-top: -160px;
    }
</style>
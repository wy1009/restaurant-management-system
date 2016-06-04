<template>
    <div class="dialog-box">
        <div id="add-put-account-dialog" class="dialog">
            <div class="header">账目<i @click="dispatchCloseDlgMsg" class="close-btn">+</i></div>
            <div class="content">
                <div class="ui input-wrapper">
                    <select v-model="infoObj.type">
                        <option v-for="accountType in classInfoList" value="{{ accountType._id }}">{{ accountType.name }}</option>
                    </select>
                </div>
                <div class="ui input-wrapper">
                    <select v-model="infoObj.earn">
                        <option value="1">收入</option>
                        <option value="0">支出</option>
                    </select>
                </div>
                <div class="ui input-wrapper">
                    <input type="text" placeholder="金额" v-model="infoObj.value">
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
    props: ['classInfoList']
}
</script>
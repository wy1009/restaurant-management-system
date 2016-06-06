<template>
    <div class="dialog-box">
        <div id="put-member-dialog" class="dialog">
            <div class="header">订单<i @click="dispatchCloseDlgMsg" class="close-btn">+</i></div>
            <div class="content">
                <div class="group-inputs">
                    <div class="ui input-wrapper">
                        <select v-model="infoObj.status">
                            <option v-for="orderStatus of classInfoList" value="{{ orderStatus._id }}">{{ orderStatus.name }}</option>
                        </select>
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
    props: ['classInfoList']
}
</script>

<style lang="sass">
    #put-member-dialog {
        height: 130px;
        margin-top: -65px;
    }
</style>
<template>
    <div class="dialog-box">
        <div class="add-put-member-dialog dialog">
            <div class="header"><slot></slot>会员等级<i @click="dispatchCloseDlgMsg" class="close-btn">+</i></div>
            <div class="content">
                <div class="group-inputs">
                    <div class="ui input-wrapper">
                        <input type="text" placeholder="名称" v-model="infoObj.name">
                    </div>
                    <div class="ui input-wrapper">
                        <input type="text" placeholder="折扣（输入整数或小数）" v-model="infoObj.discount">
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
    mixins: [DlgAddPutMixin]
}
</script>
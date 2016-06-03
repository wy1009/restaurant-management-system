<template>
    <div class="dialog-box">
        <div id="add-put-category-dialog" class="dialog">
            <div class="header">菜肴类别<i @click="dispatchCloseDlgMsg" class="close-btn">+</i></div>
            <div class="content">
                <div class="group-inputs">
                    <div class="ui input-wrapper">
                        <input type="text" placeholder="名称" v-model="infoObj.name">
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

<style lang="sass">
    #add-put-category-dialog {
        height: 130px;
        margin-top: -65px;
    }
</style>
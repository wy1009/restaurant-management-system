<template>
    <div class="dialog-box">
        <div class="add-put-meal-dialog dialog">
            <div class="header">菜肴信息<i @click="dispatchCloseDlgMsg" class="close-btn">+</i></div>
            <div class="content">
                <div class="group-inputs">
                    <div class="ui input-wrapper">
                        <input type="text" placeholder="名称" v-model="infoObj.name">
                    </div>
                    <div class="ui input-wrapper">
                        <select v-model="infoObj.category">
                            <option v-for="category in classInfoList" value="{{ category._id }}">{{ category.name }}</option>
                        </select>
                    </div>
                    <div class="ui input-wrapper">
                        <input type="text" placeholder="价格" v-model="infoObj.price">
                    </div>
                    <div class="ui input-wrapper">
                        <input type="text" placeholder="描述" v-model="infoObj.description">
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
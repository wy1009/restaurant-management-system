<template>
    <div class="dialog-box">
        <div class="add-put-customer-dialog dialog">
            <div class="header"><slot></slot>会员<i @click="dispatchCloseDlgMsg" class="close-btn">+</i></div>
            <div class="content">
                <customer-add :customer-obj="infoObj" :member-list="classInfoList"></customer-add>
            </div>
        </div>
    </div>
</template>

<script>
import CustomerAdd from './CustomerAdd.vue'
import DlgAddPutMixin from './DlgAddPutMixin.vue'

export default {
    mixins: [DlgAddPutMixin],
    props: ['classInfoList'],
    components: {
        CustomerAdd
    }
}
</script>


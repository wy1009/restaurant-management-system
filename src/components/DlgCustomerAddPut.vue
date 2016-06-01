<template>
    <div class="dialog-box">
        <div class="add-put-customer-dialog dialog">
            <div class="header"><slot></slot>会员<i @click="dispatchCloseDlgMsg" class="close-btn">+</i></div>
            <div class="content">
                <customer-add :customer-obj="customerObj"></customer-add>
            </div>
        </div>
    </div>
</template>

<script>
import CustomerAdd from './CustomerAdd.vue'

export default {
    props: ['customerObj'],
    data () {
        return {
            customerObj: {}
        }
    },
    methods: {
        dispatchCloseDlgMsg () {
            this.$dispatch('close-dlg')
        }
    },
    components: {
        CustomerAdd
    }
}
</script>


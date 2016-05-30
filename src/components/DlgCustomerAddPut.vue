<template>
    <div class="dialog-box">
        <div class="add-put-customer-dialog dialog">
            <div class="header"><slot></slot>会员<i @click="dispatchCloseDlgMsg" class="close-btn">+</i></div>
            <div class="content">
                <!-- <customer-add></customer-add> -->
            </div>
        </div>
    </div>
</template>

<script>
// import customerAdd from './customerAdd.vue'

export default {
    data () {
        return {
            customerObj: {}
        }
    },
    methods: {
        dispatchCloseDlgMsg () {
            this.$dispatch('close-dlg', false)
        }
    },
    components: {
        // customerAdd
    }
}
</script>

<style lang="sass">
    .add-put-customer-dialog {
        width: 280px;
        height: 180px;
        margin-top: -114px;
        margin-left: -90px;
    }
</style>


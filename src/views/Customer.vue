<template>
    <div class="customer-wrapper">
        <div class="customer-list-box ui list-wrap">
            <h3 class="ui title">会员列表<span @click="toggleCustomerDlg">添加会员</span></h3>
        </div>
        <div class="member-box ui list-wrap">
            <h3 class="ui title">会员等级列表<span @click="toggleMemberDlg">添加会员等级</span></h3>
        </div>
        <dlg-member-add-put @close-dlg="toggleMemberDlg" v-show="dlgMemberShow" transition="expand">添加</dlg-member-add-put>
        <dlg-customer-add-put @close-dlg="toggleCustomerDlg" v-show="dlgCustomerShow" transition="expand"></dlg-customer-add-put>
    </div>
</template>

<script>
import DlgMemberAddPut from '../components/DlgMemberAddPut.vue'
import DlgCustomerAddPut from '../components/DlgCustomerAddPut.vue'

export default {
    data () {
        return {
            dlgMemberShow: false,
            dlgCustomerShow: false
        }
    },
    methods: {
        toggleMemberDlg () {
            this.dlgMemberShow = !this.dlgMemberShow
        },
        toggleCustomerDlg () {
            this.dlgCustomerShow = !this.dlgCustomerShow
        }
    },
    components: {
        DlgMemberAddPut,
        DlgCustomerAddPut
    }
}
</script>

<style lang="sass">
    .customer-wrapper {
        .customer-list-box {
            width: 690px;
            float: left;
        }
        .member-box {
            width: 280px;
            float: right;
        }
    }
</style>
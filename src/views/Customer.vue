<template>
    <div class="customer-wrapper">
        <div class="customer-list-box ui list-wrap">
            <h3 class="ui title">会员列表</h3>
        </div>
        <div class="member-box ui list-wrap">
            <h3 class="ui title">会员等级列表<span class="fr" @click="toggleDlg">添加会员等级</span></h3>
        </div>
        <dlg-member-add-put @close-dlg="toggleDlg" v-show="dlgShow" transition="expand">添加</dlg-member-add-put>
    </div>
</template>

<script>
import DlgMemberAddPut from '../components/DlgMemberAddPut.vue'

export default {
    data () {
        return {
            dlgShow: false
        }
    },
    methods: {
        toggleDlg () {
            this.dlgShow = !this.dlgShow
        }
    },
    components: {
        DlgMemberAddPut
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
            .title span {
                font-size: 14px;
                font-weight: normal;
                color: #ff2d4b;
                cursor: pointer;
            }
        }
    }
</style>
<template>
    <div class="customer-wrapper has-side-nav">
        <aside>
            <ul>
                <li v-for="member in memberList" :class="nowMember._id == member._id ? 'active' : ''">
                    <div @click="getCustomerList(member)">
                        {{ member.name }}
                        <span class="fr" @click.stop="delMember(member)">删除</span>
                        <span class="fr" @click.stop="editMember(member)">编辑</span>
                    </div>
                </li>
                <li>
                    <a href="javascript:;" @click="toggleMemberDlg">+ 添加会员等级</a>
                </li>
            </ul>
        </aside>
        <article class="ui list-wrap">
            <h3 class="ui title">
                {{ nowMember.name }}
                <span @click="toggleCustomerDlg">添加会员</span>
            </h3>
            <div class="list">
                <ul>
                    <li v-for="customer of customerList">
                        <h4 class="title fl">{{ customer.name }}</h4>
                        <div class="phone fl">{{ customer.phone }}</div>
                        <div class="operation fr">
                            <span @click="editCustomer(customer)">编辑</span>
                            <span @click="delCustomer(customer)">删除</span>
                        </div>
                    </li>
                </ul>
            </div>
        </article>
        <dlg-member-add-put type="member" :info-obj="selectedMemberObj" @submited="dlgMemberSubmited" @close-dlg="toggleMemberDlg" v-show="dlgMemberShow" transition="expand">添加</dlg-member-add-put>
        <dlg-customer-add-put type="customer" :info-obj="selectedCustomerObj" :member-list="memberList" @submited="dlgCustomerSubmited" @close-dlg="toggleCustomerDlg" v-show="dlgCustomerShow" transition="expand"></dlg-customer-add-put>
    </div>
</template>

<script>
import DlgMemberAddPut from '../components/DlgMemberAddPut.vue'
import DlgCustomerAddPut from '../components/DlgCustomerAddPut.vue'

export default {
    data () {
        return {
            customerList: [],
            selectedCustomerObj: {},
            dlgMemberShow: false,
            dlgCustomerShow: false,
            nowMember: {},
            memberList: [],
            selectedMemberObj: {}
        }
    },
    ready () {
        this.getMemberList()
    },
    methods: {
        getMemberList () {
            this.$http.get('/api/member/').then(function (res) {
                var data = res.data
                if (data.success) {
                    this.memberList = data.memberList
                    this.getCustomerList(this.memberList[0])
                } else {
                    console.log(data.reason)
                }
            })
        },
        getCustomerList (member) {
            this.nowMember = member
            var filterCondition = {
                member: member._id
            }
            this.$http.get('/api/customer/', filterCondition).then(function (res) {
                var data = res.data
                if (data.success) {
                    this.customerList = data.customerList
                } else {
                    console.log(data.reason)
                }
            })
        },
        editCustomer (customer) {
            this.selectedCustomerObj = customer
            this.toggleCustomerDlg()
        },
        toggleMemberDlg () {
            this.dlgMemberShow = !this.dlgMemberShow
            if (!this.dlgMemberShow) {
                this.selectedMemberObj = {}
            }
        },
        toggleCustomerDlg () {
            this.dlgCustomerShow = !this.dlgCustomerShow
            if (!this.dlgCustomerShow) {
                this.selectedCustomerObj = {}
            }
        },
        dlgMemberSubmited () {
            this.getMemberList()
            this.toggleMemberDlg()
        },
        dlgCustomerSubmited () {
            this.getCustomerList(this.nowMember)
            this.toggleCustomerDlg()
        },
        editMember (member) {
            this.selectedMemberObj = member
            this.toggleMemberDlg()
        },
        delMember (member) {

        }
    },
    components: {
        DlgMemberAddPut,
        DlgCustomerAddPut
    }
}
</script>
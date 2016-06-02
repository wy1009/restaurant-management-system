<template>
    <div class="customer-wrapper">
        <aside class="member-box ui list-wrap">
            <ul>
                <li v-for="member in memberList">
                    <a href="javascript:;" @click="getCustomerList(category, $index)" :class="nowCategory.index === $index ? 'active' : ''">{{ category.name }}</a>
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
        <dlg-member-add-put @close-dlg="toggleMemberDlg" v-show="dlgMemberShow" transition="expand">添加</dlg-member-add-put>
        <dlg-customer-add-put :customer-obj="selectedCustomerObj" @close-dlg="toggleCustomerDlg" v-show="dlgCustomerShow" transition="expand"></dlg-customer-add-put>
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
            nowMember: {}
        }
    },
    ready () {
        this.getCustomerList()
    },
    methods: {
        getCustomerList () {
            this.$http.get('/api/customer/').then(function (res) {
                var data = res.data
                if (data.success) {
                    this.customerList = data.customers
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
        },
        toggleCustomerDlg () {
            this.dlgCustomerShow = !this.dlgCustomerShow
            if (!this.dlgCustomerShow) {
                this.selectedCustomerObj = {}
            }
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
            .list {
                .title {
                    width: 100px;
                }
                .phone {
                    line-height: 69px;
                    margin-left: 26px;
                    font-size: 14px;
                }
                .member {
                    font-size: 14px;
                    margin-right: 26px;
                }
            }
        }
        .member-box {
            width: 280px;
            float: right;
        }
    }
</style>
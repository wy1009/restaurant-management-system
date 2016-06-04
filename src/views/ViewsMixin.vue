<template>
    <div class="customer-wrapper has-side-nav">
        <aside>
            <ul>
                <li v-for="classInfo in classInfoList" :class="nowClassInfo._id == classInfo._id ? 'active' : ''">
                    <div @click="getCustomerList(classInfo)">
                        {{ classInfo.name }}
                        <span class="fr" @click.stop="delClassInfo(classInfo)">删除</span>
                        <span class="fr" @click.stop="editClassInfo(classInfo)">编辑</span>
                    </div>
                </li>
                <li>
                    <a href="javascript:;" @click="toggleClassInfoDlg">+ 添加会员等级</a>
                </li>
            </ul>
        </aside>
        <article class="ui list-wrap">
            <h3 class="ui title">
                {{ nowClassInfo.name }}
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
        <dlg-class-info-add-put :type="classType" :info-obj="selectedClassInfoObj" @submited="dlgClassInfoSubmited" @close-dlg="toggleClassInfoDlg" v-show="dlgClassInfoShow" transition="expand">添加</dlg-class-info-add-put>
        <dlg-item-info-add-put :type="itemType" :info-obj="selectedCustomerObj" :class-info-list="classInfoList" @submited="dlgCustomerSubmited" @close-dlg="toggleCustomerDlg" v-show="dlgCustomerShow" transition="expand"></dlg-item-info-add-put>
    </div>
</template>

<script>

export default {
    props: ['classType', 'itemType']
    data () {
        return {
            customerList: [],
            selectedCustomerObj: {},
            dlgClassInfoShow: false,
            dlgCustomerShow: false,
            nowClassInfo: {},
            classInfoList: [],
            selectedClassInfoObj: {}
        }
    },
    ready () {
        this.$dispatch('topnavIndex', 4)
        this.getClassInfoList()
    },
    methods: {
        getClassInfoList () {
            this.$http.get('/api/' + classType + '/').then(function (res) {
                var data = res.data
                if (data.success) {
                    this.classInfoList = data.classInfoList
                    this.getCustomerList(this.classInfoList[0])
                } else {
                    console.log(data.reason)
                }
            })
        },
        getCustomerList (classInfo) {
            this.nowClassInfo = classInfo
            var filterCondition = {
                this.classType: classInfo._id
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
        toggleClassInfoDlg () {
            this.dlgClassInfoShow = !this.dlgClassInfoShow
            if (!this.dlgClassInfoShow) {
                this.selectedClassInfoObj = {}
            }
        },
        toggleCustomerDlg () {
            this.dlgCustomerShow = !this.dlgCustomerShow
            if (!this.dlgCustomerShow) {
                this.selectedCustomerObj = {}
            }
        },
        dlgClassInfoSubmited () {
            this.getClassInfoList()
            this.toggleClassInfoDlg()
        },
        dlgCustomerSubmited () {
            this.getCustomerList(this.nowClassInfo)
            this.toggleCustomerDlg()
        },
        editClassInfo (classInfo) {
            this.selectedClassInfoObj = classInfo
            this.toggleClassInfoDlg()
        },
        delClassInfo (classInfo) {

        }
    },
    components: {
        DlgClassInfoAddPut,
        DlgItemInfoAddPut
    }
}
</script>
<template>
    <div class="meal-wrapper has-side-nav">
        <aside>
            <ul>
                <li v-for="role in roleList" :class="role.name == nowRole.name ? 'active' : ''">
                    <a href="javascript:;" @click="getUserList(role)">{{ role.name }}</a>
                </li>
            </ul>
        </aside>
        <article class="ui list-wrap">
            <h3 class="ui title">
                {{ nowRole.name }}
                <span @click="toggleUserDlg">添加员工</span>
            </h3>
            <div class="list">
                <ul>
                    <li v-for="user in userList">
                        <h4 class="title fl">{{ user.name }}</h4>
                        <div class="operation fr">
                            <span @click="editMeal(user)">编辑</span>
                            <span @click="delMeal(user)">删除</span>
                        </div>
                        <div class="phone fr">{{ user.phone }}</div>
                    </li>
                </ul>
            </div>
        </article>
        <dlg-user-add-put v-show="dlgUserShow" :user-obj="selectedUserObj" :role-list="roleList" @close-dlg="toggleUserDlg" @submited="dlgUserSubmited" transition="expand"></dlg-user-add-put>
    </div>
</template>

<script>
import DlgUserAddPut from '../components/DlgUserAddPut.vue'

export default {
    data () {
        return {
            nowRole: {
                name: '普通员工',
                role: 0
            },
            roleList: [{
                name: '普通员工',
                role: 0
            }, {
                name: '管理员',
                role: 1
            }, {
                name: '超级管理员',
                role: 50
            }],
            userList: [],
            selectedUserObj: {},
            dlgUserShow: false
        }
    },
    ready () {
        this.getUserList()
    },
    methods: {
        getUserList (role) {
            if (role) {
                this.nowRole = role
            }
            this.$http.get('/api/user/', this.nowRole).then(function (res) {
                var data = res.data
                if (data.success) {
                    this.userList = data.userList
                } else {
                    console.log(data.reason)
                }
            })
        },
        toggleUserDlg () {
            this.dlgUserShow = !this.dlgUserShow
            if (!this.dlgUserShow) {
                this.selectedUserObj = {}
            }
        },
        dlgUserSubmited () {
            this.getUserList()
            this.toggleUserDlg()
        }
    },
    components: {
        DlgUserAddPut
    }
}
</script>
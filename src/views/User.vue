<template>
    <div class="User-wrapper has-side-nav">
        <aside>
            <ul>
                <li v-for="role in roleList" :class="role.name == nowRole.name ? 'active' : ''">
                    <div @click="getUserList(role)">
                        {{ role.name }}
                    </div>
                </li>
            </ul>
        </aside>
        <article class="ui list-wrap">
            <h3 class="ui title">
                {{ nowRole.name }}
                <span @click="toggleUserDlg" v-if="role == 50">添加员工</span>
            </h3>
            <div class="list">
                <ul>
                    <li v-for="user in userList">
                        <h4 class="title fl">{{ user.name }}</h4>
                        <div class="operation fr">
                            <span @click="editUser(user)" v-if="role == 50">编辑</span>
                        </div>
                        <div class="phone fr">{{ user.phone }}</div>
                    </li>
                </ul>
            </div>
        </article>
        <dlg-user-add-put v-show="dlgUserShow" type="user" :info-obj="selectedUserObj" :role-list="roleList" @close-dlg="toggleUserDlg" @submited="dlgUserSubmited" transition="expand"></dlg-user-add-put>
    </div>
</template>

<script>
import DlgUserAddPut from '../components/DlgUserAddPut.vue'
import { getRole } from '../vuex/getters'

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
        },
        editUser (user) {
            this.selectedUserObj = user
            this.toggleUserDlg()
        }
    },
    components: {
        DlgUserAddPut
    },
    vuex: {
        getters: {
            role: getRole
        }
    }
}
</script>
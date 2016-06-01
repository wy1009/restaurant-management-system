<template>
    <div class="meal-wrapper has-side-nav">
        <aside>
            <ul>
                <li><a href="javascript:;">超级管理员</a></li>
                <li><a href="javascript:;">管理员</a></li>
                <li><a href="javascript:;">普通员工</a></li>
            </ul>
        </aside>
        <article class="ui list-wrap">
            <h3 class="ui title">
                超级管理员
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
                        <div class="sales fr">已售{{ user.sales }}份</div>
                        <div class="price fr">¥{{ user.price }}/份</div>
                        <div class="desc fr">{{ user.description }}</div>
                    </li>
                </ul>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    data () {
        return {
            userList: []
        }
    },
    methods: {
        toggleUserDlg () {

        }
    }
}
</script>
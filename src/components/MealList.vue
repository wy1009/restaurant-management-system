<template>
    <div class="container has-side-nav">
        <aside>
            <ul>
                <li v-for="category in categoryList">
                    <a href="javascript:;" @click="">{{ category.name }}</a>
                </li>
            </ul>
            <a href="javascript:;">添加菜肴类别</a>
        </aside>
        <article>
            <h1>{{ nowCategory }}</h1><a class="add-meal" href="javascript:;">添加菜肴</a>
            <ul>
                <li></li>
            </ul>
        </article>
        <dlg-add-put-meal :category-list="categoryList"></dlg-add-put-meal>
        <dlg-add-put-category></dlg-add-put-category>
    </div>
</template>
<script>
import DlgAddPutCategory from './DlgAddPutCategory.vue';
import DlgAddPutMeal from './DlgAddPutMeal.vue';

export default {
    data () {
        return {
            nowCategory: '',
            categoryList: []
        };
    },
    ready () {
        this.getCategoryList();
    },
    methods: {
        getCategoryList () {
            var _this = this;
            _this.$http.get('/api/category/').then(function (res) {
                console.log('success');
                console.log(res);
            }, function (res) {
                console.log('error');
            });
        }
    },
    components: {
        DlgAddPutCategory,
        DlgAddPutMeal
    }
};
</script>
<style lang="sass">
    .add-meal {
        float: right;
    }
</style>
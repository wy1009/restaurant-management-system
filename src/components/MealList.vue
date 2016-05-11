<template>
    <div class="container has-side-nav">
        <aside>
            <ul>
                <li v-for="category in categoryList">
                    <a href="javascript:;" @click="getMealList(category);">{{ category.name }}</a>
                </li>
            </ul>
            <a href="javascript:;" @click="dlgCategoryShow = !dlgCategoryShow">添加菜肴类别</a>
        </aside>
        <article>
            <h1>{{ nowCategory.name }}</h1><a class="add-meal" href="javascript:;" @click="dlgMealShow = !dlgMealShow">添加菜肴</a>
            <ul>
                <li></li>
            </ul>
        </article>
        <dlg-add-put-meal v-show="dlgMealShow" :category-list="categoryList"></dlg-add-put-meal>
        <dlg-add-put-category v-show="dlgCategoryShow"></dlg-add-put-category>
    </div>
</template>
<script>
import DlgAddPutCategory from './DlgAddPutCategory.vue';
import DlgAddPutMeal from './DlgAddPutMeal.vue';

export default {
    data () {
        return {
            nowCategory: {},
            categoryList: [],
            mealList: [],
            dlgMealShow: false,
            dlgCategoryShow: false
        };
    },
    ready () {
        this.getCategoryList();
    },
    methods: {
        getCategoryList () {
            var _this = this;
            _this.$http.get('/api/category/').then(function (res) {
                var data = res.data;
                if (data.success) {
                    _this.categoryList = data.categoryList;
                } else {
                    console.log(data.reason);
                }
            });
        },
        getMealList (category) {
            var _this = this;
            _this.nowCategory = category;
            var filterCondition = {
                category: category._id
            };
            _this.$http.get('/api/meal/', _this.filterCondition).then(function (res) {
                var data = res.data;
                if (data.success) {
                    _this.mealList = data.mealList;
                    console.log(_this.mealList);
                } else {
                    console.log(data.reason);
                }
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
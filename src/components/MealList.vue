<template>
    <div class="container has-side-nav meal-list-box">
        <aside>
            <ul class="side-nav">
                <li v-for="category in categoryList" :class="nowCategory.index === $index ? 'active' : ''">
                    <a href="javascript:;" @click="getMealList(category, $index);">{{ category.name }}</a>
                </li>
                <li>
                    <a href="javascript:;" @click="dlgCategoryShow = !dlgCategoryShow">添加菜肴类别</a>
                </li>
            </ul>
        </aside>
        <article>
            <a class="add-meal" href="javascript:;" @click="dlgMealShow = !dlgMealShow">添加菜肴</a>
            <h1>{{ nowCategory.name }}</h1>
            <ul class="meal-list">
                <li>
                    <div class="info">
                        <h3></h3>
                        <div class="info-desc"></div>
                        <div class="info-price"></div>
                    </div>
                </li>
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
                    _this.nowCategory = _this.categoryList[0];
                    _this.nowCategory.index = 0;
                } else {
                    console.log(data.reason);
                }
            });
        },
        getMealList (category, index) {
            var _this = this;
            _this.nowCategory = category;
            _this.nowCategory.index = index;
            var filterCondition = {
                category: category._id
            };
            _this.$http.get('/api/meal/', filterCondition).then(function (res) {
                var data = res.data;
                if (data.success) {
                    _this.mealList = data.mealList;
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
#main {
    .container.meal-list-box {
        article {
            .add-meal {
                float: right;
                padding: 3px;
            }
            h1 {
                margin-bottom: 24px;
            }
            .meal-list {
                padding: 0 25px;
            }
        }
    }
}
</style>
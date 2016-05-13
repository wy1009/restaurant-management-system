<template>
    <div class="meal-list-box">
        <div class="category-wrap">
            <ul>
                <li v-for="category in categoryList" :class="nowCategory.index === $index ? 'active' : ''">
                    <a href="javascript:;" @click="getMealList(category, $index);">{{ category.name }}</a>
                </li>
                <li>
                    <a href="javascript:;" @click="dlgCategoryShow = !dlgCategoryShow">添加菜肴类别</a>
                </li>
            </ul>
        </div>
        <div class="list-wrap">
            <h3 class="meal-title">
                {{ nowCategory.name }}
                <a class="add-meal-link" href="javascript:;" @click="dlgMealShow = !dlgMealShow">添加菜肴</a>
            </h3>
            <ul class="meal-list">
                <li v-for="meal in mealList">
                    <meal-list-item-in-order-page :meal="meal"></meal-list-item-in-order-page>
                </li>
            </ul>
        </div>
        <dlg-add-put-meal v-show="dlgMealShow" :category-list="categoryList"></dlg-add-put-meal>
        <dlg-add-put-category v-show="dlgCategoryShow"></dlg-add-put-category>
    </div>
</template>

<script>
import DlgAddPutCategory from './DlgAddPutCategory.vue'
import DlgAddPutMeal from './DlgAddPutMeal.vue'
import MealListItemInOrderPage from './MealListItemInOrderPage.vue'

export default {
    data () {
        return {
            nowCategory: {},
            categoryList: [],
            mealList: [],
            dlgMealShow: false,
            dlgCategoryShow: false
        }
    },
    ready () {
        this.getCategoryList()
    },
    methods: {
        getCategoryList () {
            var _this = this
            _this.$http.get('/api/category/').then(function (res) {
                var data = res.data
                if (data.success) {
                    _this.categoryList = data.categoryList
                    _this.getMealList(_this.categoryList[0], 0)
                } else {
                    console.log(data.reason)
                }
            })
        },
        getMealList (category, index) {
            var _this = this
            _this.nowCategory = category
            _this.nowCategory.index = index
            var filterCondition = {
                category: category._id
            }
            _this.$http.get('/api/meal/', filterCondition).then(function (res) {
                var data = res.data
                if (data.success) {
                    _this.mealList = data.mealList
                } else {
                    console.log(data.reason)
                }
            })
        }
    },
    components: {
        DlgAddPutCategory,
        DlgAddPutMeal,
        MealListItemInOrderPage
    }
}
</script>

<style lang="sass">
.meal-list-box {
    margin-top: 10px;
    width: 720px;
    .category-wrap {
        background-color: #fff;
        border: 1px solid #ebebeb;
        padding: 21px 20px;
        ul {
            overflow: auto;
            li {
                width: 130px;
                height: 24px;
                line-height: 24px;
                margin-right: 5px;
                margin-bottom: 4px;
                float: left;
                a {
                    padding: 5px;
                    color: #535353;
                    height: 14px;
                    font-size: 14px;
                    line-height: 14px;
                }
                &.active a {
                    color: #fa9700;
                }
            }
        }
    }
    .list-wrap {
        background-color: #fff;
        border: 1px solid #ebebeb;
        margin-top: 10px;
        .add-meal-link {
            float: right;
            font-weight: normal;
            font-size: 16px;
        }
        .meal-title {
            height: 35px;
            font-size: 16px;
            padding: 15px 19px 0;
            background-color: #fafafa;
            border-bottom: 1px solid #ebebeb;
        }
    }
}
</style>
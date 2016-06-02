<template>
    <div class="meal-wrapper has-side-nav">
        <aside>
            <ul>
                <li v-for="category in categoryList">
                    <a href="javascript:;" @click="getMealList(category, $index)" :class="nowCategory.index === $index ? 'active' : ''">{{ category.name }}</a>
                </li>
                <li>
                    <a href="javascript:;" @click="toggleCategoryDlg">+ 添加菜肴类别</a>
                </li>
            </ul>
        </aside>
        <article class="ui list-wrap">
            <h3 class="ui title">
                {{ nowCategory.name }}
                <span @click="toggleMealDlg">添加菜肴</span>
            </h3>
            <div class="list">
                <ul>
                    <li v-for="meal in mealList">
                        <h4 class="title fl">{{ meal.name }}</h4>
                        <div class="operation fr">
                            <span @click="editMeal(meal)">编辑</span>
                            <span @click="delMeal(meal)">删除</span>
                        </div>
                        <div class="sales fr">已售{{ meal.sales }}份</div>
                        <div class="price fr">¥{{ meal.price }}/份</div>
                        <div class="desc fr">{{ meal.description }}</div>
                    </li>
                </ul>
            </div>
        </article>
        <dlg-category-add-put v-show="dlgCategoryShow" @close-dlg="toggleCategoryDlg" @submited="dlgCategorySubmited" transition="expand"></dlg-category-add-put>
        <dlg-meal-add-put v-show="dlgMealShow" :meal-obj="selectedMealObj" :category-list="categoryList" @close-dlg="toggleMealDlg" @submited="dlgMealSubmited" transition="expand"></dlg-meal-add-put>
    </div>
</template>

<script>
import MealListMixin from '../components/MealListMixin.vue'
import DlgCategoryAddPut from '../components/DlgCategoryAddPut.vue'
import DlgMealAddPut from '../components/DlgMealAddPut.vue'

export default {
    mixins: [MealListMixin],
    data () {
        return {
            dlgMealShow: false,
            dlgCategoryShow: false,
            selectedMealObj: {} // 指被操作的行
        }
    },
    methods: {
        toggleCategoryDlg () {
            this.dlgCategoryShow = !this.dlgCategoryShow
        },
        toggleMealDlg () {
            this.dlgMealShow = !this.dlgMealShow
            if (!this.dlgMealShow) {
                this.selectedMealObj = {}
            }
        },
        dlgCategorySubmited () {
            this.getCategoryList()
            this.toggleCategoryDlg()
        },
        dlgMealSubmited () {
            this.getMealList(this.nowCategory, this.nowCategory.index)
            this.toggleMealDlg()
        },
        editMeal (meal) {
            this.selectedMealObj = meal
            this.toggleMealDlg()
        },
        delMeal (meal) {
            // this.$http.delete('/api/meal/', meal)
        }
    },
    components: {
        DlgCategoryAddPut,
        DlgMealAddPut
    }
}
</script>

<style lang="sass">
    .meal-wrapper {
        .desc {
            width: 200px;
        }
    }
</style>
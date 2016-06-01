<template>
    <div class="meal-wrapper has-side-nav">
        <aside>
            <ul>
                <li v-for="category in categoryList">
                    <a href="javascript:;" @click="getMealList(category, $index);" :class="nowCategory.index === $index ? 'active' : ''">{{ category.name }}</a>
                </li>
                <li>
                    <a href="javascript:;" @click="toggleCategoryDlg">添加菜肴类别</a>
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
                            <span>编辑</span>
                            <span>删除</span>
                        </div>
                        <div class="sales fr">已售{{ meal.sales }}份</div>
                        <div class="price fr">¥{{ meal.price }}/份</div>
                        <div class="desc fr">{{ meal.description }}</div>
                    </li>
                </ul>
            </div>
        </article>
        <dlg-category-add-put v-show="dlgCategoryShow"></dlg-category-add-put>
        <dlg-meal-add-put v-show="dlgMealShow"></dlg-meal-add-put>
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
            dlgCategoryShow: false
        }
    },
    methods: {
        toggleCategoryDlg () {
            this.dlgCategoryShow = !this.dlgCategoryShow
        },
        toggleMealDlg () {
            this.dlgMealShow = !this.dlgMealShow
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
            width: 250px;
        }
        .price {
            width: 100px;
        }
        .sales {
            width: 70px;
        }
        .operation {
            width: 100px;
            span {
                font-size: 14px;
                color: #ff2d4b;
                margin-right: 10px;
                cursor: pointer;
            }
        }
        div.fr {
            margin-right: 20px;
            height: 69px;
            line-height: 69px;
        }
    }
</style>
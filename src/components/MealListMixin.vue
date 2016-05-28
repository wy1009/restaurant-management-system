<script>
import DlgCategoryAddPut from './DlgCategoryAddPut.vue'
import DlgMealAddPut from './DlgMealAddPut.vue'
import MealListInOrderPage from './MealListInOrderPage.vue'

export default {
    props: ['type'],
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
        DlgCategoryAddPut,
        DlgMealAddPut,
        MealListInOrderPage
    }
}
</script>

<style lang="sass">
.meal-list-box {
    margin-top: 10px;
    width: 690px;
    float: left;
    .category-wrap {
        background-color: #fff;
        border: 1px solid #ebebeb;
        padding: 21px 20px;
        ul {
            overflow: auto;
            li {
                width: 124px;
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
                    color: #ff2d4b;
                }
            }
        }
    }
    .list-wrap {
        margin-top: 10px;
        .add-meal-link {
            float: right;
            font-weight: normal;
            font-size: 16px;
        }
        .meal-list {
            .info {
                height: 69px;
                cursor: pointer;
                border-top: 1px solid #ebebeb;
                .title {
                    font-size: 14px;
                    color: #313131;
                    font-weight: normal;
                    padding-left: 30px;
                    padding-top: 25px;
                }
            }
        }
    }
}
</style>
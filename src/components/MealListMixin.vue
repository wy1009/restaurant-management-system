<script>
import DlgCategoryAddPut from './DlgCategoryAddPut.vue'
import DlgMealAddPut from './DlgMealAddPut.vue'

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
            this.$http.get('/api/category/').then(function (res) {
                var data = res.data
                if (data.success) {
                    this.categoryList = data.categoryList
                    this.getMealList(this.categoryList[0], 0)
                } else {
                    console.log(data.reason)
                }
            })
        },
        getMealList (category, index) {
            this.nowCategory = category
            this.nowCategory.index = index
            var filterCondition = {
                category: category._id
            }
            this.$http.get('/api/meal/', filterCondition).then(function (res) {
                var data = res.data
                if (data.success) {
                    this.mealList = data.mealList
                } else {
                    console.log(data.reason)
                }
            })
        }
    },
    components: {
        DlgCategoryAddPut,
        DlgMealAddPut,
    }
}
</script>
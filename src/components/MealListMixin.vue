<script>
export default {
    data () {
        return {
            nowCategory: {},
            categoryList: [],
            mealList: [],
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
                    this.getMealList(this.categoryList[0])
                } else {
                    console.log(data.reason)
                }
            })
        },
        getMealList (category) {
            this.nowCategory = category
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
    }
}
</script>
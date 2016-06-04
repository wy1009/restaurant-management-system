<script>
import DlgClassInfoAddPut from '../components/DlgCategoryAddPut.vue'
import DlgItemInfoAddPut from '../components/DlgMealAddPut.vue'
import ViewsMixin from './ViewsMixin.vue'

export default {
    mixins: [ViewsMixin],
    data () {
        return {
            classType: 'category',
            itemType: 'meal',
            classCn: '菜肴类别',
            itemCn: '菜肴',
            filterName: 'category'
        }
    },
    components: {
        DlgClassInfoAddPut,
        DlgItemInfoAddPut
    }
}
</script>
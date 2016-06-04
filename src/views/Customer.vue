<script>
import DlgClassInfoAddPut from '../components/DlgMemberAddPut.vue'
import DlgItemInfoAddPut from '../components/DlgCustomerAddPut.vue'
import ViewsMixin from './ViewsMixin.vue'

export default {
    mixins: [ViewsMixin],
    data () {
        return {
            classType: 'member',
            itemType: 'customer',
            filterName: 'member',
            classCn: '会员等级',
            itemCn: '会员',
            filterName: 'type'
        }
    },
    components: {
        DlgClassInfoAddPut,
        DlgItemInfoAddPut
    }
}
</script>
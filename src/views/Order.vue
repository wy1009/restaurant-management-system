<script>
import DlgItemInfoAddPut from '../components/DlgCustomerAddPut.vue'
import ViewsMixin from './ViewsMixin.vue'

export default {
    mixins: [ViewsMixin],
    data () {
        return {
            classType: 'order-status',
            itemType: 'order',
            filterName: 'status',
            filterName: 'status'
        }
    },
    components: {
        DlgItemInfoAddPut
    }
}
</script>
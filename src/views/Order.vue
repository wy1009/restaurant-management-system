<script>
import DlgItemInfoAddPut from '../components/DlgOrderPut.vue'
import ViewsMixin from './ViewsMixin.vue'

export default {
    mixins: [ViewsMixin],
    data () {
        return {
            classType: 'order-status',
            itemType: 'order',
            filterName: 'status'
        }
    },
    components: {
        DlgItemInfoAddPut
    }
}
</script>
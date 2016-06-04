<script>
import DlgClassInfoAddPut from '../components/DlgMemberAddPut.vue'
import DlgItemInfoAddPut from '../components/DlgCustomerAddPut.vue'
import ViewsMixin from './ViewsMixin.vue'

export default {
    mixins: [ViewsMixin],
    components: {
        DlgClassInfoAddPut,
        DlgItemInfoAddPut
    }
}
</script>
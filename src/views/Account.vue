<script>
import DlgClassInfoAddPut from '../components/DlgAccountTypeAddPut.vue'
import DlgItemInfoAddPut from '../components/DlgAccountAddPut.vue'
import ViewsMixin from './ViewsMixin.vue'

export default {
    mixins: [ViewsMixin],
    data () {
        return {
            classType: 'account-type',
            itemType: 'account',
            filterName: 'type'
        }
    },
    components: {
        DlgClassInfoAddPut,
        DlgItemInfoAddPut
    }
}
</script>
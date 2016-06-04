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
            classCn: '账目类别',
            itemCn: '账目',
            filterName: 'type'
        }
    },
    components: {
        DlgClassInfoAddPut,
        DlgItemInfoAddPut
    }
}
</script>
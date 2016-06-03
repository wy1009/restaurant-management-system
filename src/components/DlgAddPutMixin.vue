<script>
export default {
    props: ['type','oldInfoObj'],
    data () {
        return {
            newInfoObj: {}
        }
    },
    methods: {
        addInfo () {
            var _this = this
            _this.$http.post('/api/' + this.type + '/', _this.newInfoObj).then(function (res) {
                var data = res.data
                if (data.success) {
                    this.newInfoObj = {}
                    this.$dispatch('submited')
                } else {
                    console.log(data.reason)
                }
            })
        },
        dispatchCloseDlgMsg () {
            this.$dispatch('close-dlg')
        }
    }
}
</script>
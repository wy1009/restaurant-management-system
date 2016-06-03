<script>
export default {
    props: ['type','infoObj'],
    methods: {
        addInfo () {
            var _this = this
            _this.$http.post('/api/' + this.type + '/', _this.infoObj).then(function (res) {
                var data = res.data
                if (data.success) {
                    this.infoObj = {}
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
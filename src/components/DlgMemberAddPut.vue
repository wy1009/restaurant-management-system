<template>
    <div class="dialog-box">
        <div class="add-put-member-dialog ui list-wrap">
            <div class="header"><slot></slot>会员等级<i class="close-btn"></i></div>
            <div class="content">
                <div class="group-inputs">
                    <div class="input-wrapper">
                        <input type="text" placeholder="名称" v-model="memberObj.name">
                    </div>
                </div>
                <div class="group-inputs">
                    <div class="input-wrapper">
                        <input type="text" placeholder="折扣" v-model="memberObj.discount">
                    </div>
                </div>
            </div>
            <div class="footer">
                <button class="ui button" @click="addMember">确定</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            memberObj: {}
        }
    },
    methods: {
        addMember () {
            var _this = this
            _this.$http.post('/api/member/', _this.memberObj).then(function (res) {
                
            })
        }
    }
}
</script>

<style lang="sass">
    .add-put-member-dialog {
        width: 280px;
        height: 179px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -90px;
        margin-left: -140px;
        .header {
            height: 18px;
            font-size: 16px;
            padding: 15px 0 13px 14px;
            background: #ebebeb;
            font-weight: bold;
            color: #313131;
            .close-btn {
                background: url(../public/images/close.png);
                width: 16px;
                height: 16px;
            }
        }
        .content {
            .input-wrapper {
                border-top: 1px solid #ebebeb;
                input {
                    border: 0;
                    padding: 14px 10px;
                    width: 100%;
                    box-sizing: border-box;
                }
            }
        }
        .footer {

        }
    }
</style>
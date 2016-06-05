<template>
    <div id="wrapper">
        <topnav></topnav>
        <div id="page-wrap">
            <div class="inner-wrap">
                <router-view></router-view>
            </div>
        </div>
        <dlg-login v-show="dlgLoginShow" type="user/login" :info-obj="{}" @close-dlg="toggleLoginDlg" @submited="toggleLoginDlg"></dlg-login>
    </div>
</template>

<script>
import store from '../vuex/store'
import Topnav from './Topnav.vue'
import { getLoginStatus } from '../vuex/getters'
import DlgLogin from './DlgLogin.vue'
export default {
    data () {
        return {
            dlgLoginShow: false
        }
    },
    components: {
        Topnav,
        DlgLogin
    },
    store,
    ready () {
        if (!this.loginStatus) {
            this.dlgLoginShow = true
        }
    },
    methods: {
        toggleLoginDlg () {
            this.dlgLoginShow = !this.dlgLoginShow
        }
    },
    vuex: {
        getters: {
            loginStatus: getLoginStatus
        }
    }
}
</script>

<style lang="sass">
* {
    padding: 0;
    margin: 0;
    font-family: 'Microsoft YaHei';
}
body {
    background-color: #f5f5f5;
    font: 12px/1.4 Helvetica,宋体,Arial,sans-serif;
    color: #333;
    ul {
        list-style-type: none;
    }
    a {
        text-decoration: none;
    }
    input,
    select {
        outline: none;
    }
    .expand-transition {
        transition: all .3s ease;
    }
    .expand-enter, .expand-leave {
        opacity: 0;
    }
    .fl {
        float: left;
    }
    .fr {
        float: right;
    }
    .visibility-hidden {
        visibility: hidden;
    }
    .ui {
        &.title {
            height: 35px;
            font-size: 16px;
            padding: 15px 19px 0;
            background-color: #fafafa;
            span {
                font-size: 14px;
                font-weight: normal;
                color: #ff2d4b;
                cursor: pointer;
                float: right;
            }
        }
        &.list-wrap {
            background-color: #fff;
            border: 1px solid #ebebeb;
            .list {
                li {
                    height: 69px;
                    border-top: 1px solid #ebebeb;
                    .title {
                        font-size: 14px;
                        color: #313131;
                        font-weight: normal;
                        padding-left: 30px;
                    }
                    .price {
                        width: 90px;
                        font-size: 14px;
                        font-weight: bold;
                    }
                    .sales {
                        width: 70px;
                        font-size: 12px;
                        color: #898989;
                    }
                    .operation {
                        width: 90px;
                        span {
                            font-size: 14px;
                            color: #ff2d4b;
                            margin-right: 10px;
                            cursor: pointer;
                        }
                    }
                    &>.fr,
                    &>.fl {
                        margin-right: 20px;
                        height: 69px;
                        line-height: 69px;
                    }
                }
            }
        }
        &.button {
            border: 0;
            background: #ff2d4b;
            width: 100%;
            line-height: 41px;
            color: #fff;
            font-size: 15px;
            border-radius: 3px;
            cursor: pointer;
        }
        &.input-wrapper {
            border-top: 1px solid #ebebeb;
            input,
            select {
                border: 0;
                padding: 14px 10px;
                width: 100%;
                box-sizing: border-box;
            }
        }
    }
    #page-wrap {
        .inner-wrap {
            padding: 0 20px;
            max-width: 980px;
            margin: 34px auto 0;
        }
    }
    .dialog-box {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(56,62,68,.9);
        .dialog {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 280px;
            height: 180px;
            margin-top: -90px;
            margin-left: -140px;
            background: #fff;
            border-radius: 3px;
            .header {
                height: 50px;
                font-size: 16px;
                padding-left: 14px;
                background: #ebebeb;
                font-weight: bold;
                line-height: 50px;
                color: #313131;
                border-radius: 3px;
                .close-btn {
                    display: inline-block;
                    float: right;
                    width: 26px;
                    height: 26px;
                    font-size: 26px;
                    color: #ff2d4b;
                    transform: rotate(45deg);
                    font-style: normal;
                    cursor: pointer;
                }
            }
        }
    }
    .has-side-nav {
        aside {
            float: left;
            width: 280px;
            li {
                margin-right: 10px;
                padding: 5px 10px;
                display: block;
                font-size: 16px;
                a, div {
                    color: #ff2d4b;
                    cursor: pointer;
                    span {
                        color: #f5f5f5;
                        margin-left: 6px;
                        font-size: 14px;
                        line-height: 22px;
                    }
                    &:hover span {
                        color: #ff2d4b;
                    }
                }
                &.active {
                    background: #ff2d4b;
                    a, div {
                        color: #fff;
                        span {
                            color: #ff2d4b;
                        }
                        &:hover span {
                            color: #fff;
                        }
                    }
                }
            }
        }
        article {
            margin-left: 280px;
        }
    }
}
</style>
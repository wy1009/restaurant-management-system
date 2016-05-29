<template>
    <div id="wrapper">
        <topnav></topnav>
        <div id="page-wrap">
            <div class="inner-wrap">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Topnav from './Topnav.vue'
export default {
    components: {
        Topnav
    }
}
</script>

<style lang="sass">
body {
    background-color: #f5f5f5;
    font: 12px/1.4 Helvetica,宋体,Arial,sans-serif;
    #wrapper {
        ul {
            list-style-type: none;
        }
        a {
            text-decoration: none;
        }
        input {
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
        }
        #page-wrap {
            .inner-wrap {
                padding: 0 20px;
                max-width: 980px;
                margin: 24px auto 0;
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
            }
        }
    }
}
</style>
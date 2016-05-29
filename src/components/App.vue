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
        }
    }
}
</style>
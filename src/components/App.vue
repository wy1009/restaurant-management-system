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
    #wrapper {
        ul {
            list-style-type: none;
        }
        a {
            text-decoration: none;
        }
        fl {
            float: left;
        }
        fr {
            float: right;
        }
        #page-wrap {
            .inner-wrap {
                padding: 0 20px;
                max-width: 980px;
                margin: 24px auto 0;
            }
        }
    }
}
</style>
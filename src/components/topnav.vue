<template>
    <header id="page-header">
        <nav>
            <ul>
                <li :class="isActive['0']">
                    <a href="/#!/overviews/">首页</a>
                </li>
                <li :class="isActive['1']">
                    <a href="/#!/order/add/">点餐</a>
                </li>
                <li :class="isActive['2']">
                    <a href="/#!/order/">订单</a>
                </li>
                <li :class="isActive['3']">
                    <a href="/#!/meal/">菜肴</a>
                </li>
                <li :class="isActive['4']">
                    <a href="/#!/customer/">会员</a>
                </li>
                <li :class="isActive['5']">
                    <a href="/#!/user/">员工</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
import Vue from 'vue'
export default {
    props: ['active'],
    data () {
        return {
            isActive: {},
        }
    },
    ready () {
        var _this = this
        Vue.set(_this.isActive, _this.active, 'active')
    }
}
</script>

<style lang="sass">
header {
    background: #ff2d4b;
    nav {
        max-width: 980px;
        margin: 0 auto;
        text-align: center;
        li {
            display: inline-block;
            line-height: 30px;
            padding: 12px 0;
            position: relative;
            a {
                text-decoration: none;
                color: #fff;
                padding: 0 8px;
                font-size: 14px;
            }
            +li:before {
                content: '|';
                padding: 0 .3em 0 .1em;
                color: #fff;
            }
            &.active {
                &:after {
                    border: 14px solid transparent;
                    border-top-color: #333;
                    content: '';
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    margin-left: -7px;
                }
                &:first-child:after {
                    margin-left: -14px;
                }
            }
        }
    }
}
</style>
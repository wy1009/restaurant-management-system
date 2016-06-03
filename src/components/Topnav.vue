<template>
    <header id="page-header">
        <nav>
            <ul>
                <li :class="active === 0 ? 'active' : ''">
                    <a href="/#!/overviews/" @click="changePage(0)">首页</a>
                </li>
                <li :class="active === 1 ? 'active' : ''">
                    <a href="/#!/order/add/" @click="changePage(1)">点餐</a>
                </li>
                <li :class="active === 2 ? 'active' : ''">
                    <a href="/#!/order/" @click="changePage(2)">订单</a>
                </li>
                <li :class="active === 3 ? 'active' : ''">
                    <a href="/#!/meal/" @click="changePage(3)">菜肴</a>
                </li>
                <li :class="active === 4 ? 'active' : ''">
                    <a href="/#!/customer/" @click="changePage(4)">会员</a>
                </li>
                <li :class="active === 5 ? 'active' : ''">
                    <a href="/#!/user/" @click="changePage(5)">员工</a>
                </li>
                <li :class="active === 6 ? 'active' : ''">
                    <a href="/#!/account/" @click="changePage(6)">账务</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
import Vue from 'vue'
export default {
    data () {
        return {
            active: 0,
        }
    },
    methods: {
        changePage (index) {
            this.active = index
        }
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
                    border-top-color: #ff2d4b;;
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

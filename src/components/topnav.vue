<template>
    <header>
        <nav>
            <ul>
                <li :class="isActive[0]">
                    <a href="/#!/overviews/">首页</a>
                </li>
                <li :class="isActive[1]">
                    <a href="/#!/order/add/">点餐</a>
                </li>
                <li :class="isActive[2]">
                    <a href="/#!/order/">订单</a>
                </li>
                <li :class="isActive[3]">
                    <a href="/#!/meal/">菜肴</a>
                </li>
                <li :class="isActive[4]">
                    <a href="/#!/customer/">会员</a>
                </li>
                <li :class="isActive[5]">
                    <a href="/#!/user/">员工</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    props: ['active'],
    data () {
        return {
            isActive: [],
            abc: ''
        }
    },
    ready () {
        var _this = this;
        _this.isActive = []; // 如果不写这条语句，那么class不显示active
        // 明明打印出_this.isActive[0]=='active'，可class就是为空
        console.log(_this.active); // 打印为0，正常
        _this.isActive[_this.active] = 'active';
        console.log(_this.isActive[0]); // 打印为active，正常，但是没有那条语句，class为空
    }
};
</script>

<style lang="sass">
header {
    background: #333;
    nav {
        max-width: 980px;
        margin: 0 auto;
        text-align: center;
        li {
            display: inline-block;
            line-height: 30px;
            padding: 12px 0;
            a {
                text-decoration: none;
                color: #999;
                padding: 0 8px;
                font-size: 14px;
            }
            +li:before {
                content: '|';
                padding: 0 .3em 0 .1em;
                color: #999;
            }
            &.active:after {
                border: 14px solid transparent;
                border-top-color: #333;
            }
        }
    }
}
</style>
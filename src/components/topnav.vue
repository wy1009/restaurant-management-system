<template>
    <header>
        <nav>
            <ul>
                <li>
                    <a href="/#!/overviews/">首页</a>
                </li>
                <li>
                    <a href="/#!/order/add/">点餐</a>
                </li>
                <li>
                    <a href="/#!/order/">订单</a>
                </li>
                <li>
                    <a href="/#!/meal/">菜肴</a>
                </li>
                <li>
                    <a href="/#!/customer/">会员</a>
                </li>
                <li>
                    <a href="/#!/user/">员工</a>
                </li>
            </ul>
        </nav>
    </header>
</template>
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

            }
        }
    }
}
</style>
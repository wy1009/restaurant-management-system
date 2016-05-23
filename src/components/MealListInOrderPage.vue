<template>
    <div class="meal-list-in-order-page">
        <div class="meal-list">
            <ul>
                <li v-for="meal in mealList">
                    <div class="info">
                        <h4 class="title fl">{{ meal.name }}</h4>
                        <div class="sales fr">已售{{ meal.sales }}份</div>
                        <div class="operation fr">
                            <i class="minusfrcart">-</i>
                            <i class="select-count"></i>
                            <i class="addtocart">+</i>
                        </div>
                        <div class="price fr">{{ meal.price }}</div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="menu-cart">
            <div class="cc-warp">
                <div class="title">点单列表</div>
                <div class="cart-panel">
                    <table>
                        <thead>
                            <tr>
                                <td class="item-name">菜品</td>
                                <td class="item-count">份数</td>
                                <td class="item-price">单价</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="item-name"></td>
                                <td class="item-count"></td>
                                <td class="item-price"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="cart-bar"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['mealList'],
    data () {
        return {
            orderObj: {
                customer: null,
                meal: []
            }
        }
    }
}
</script>

<style lang="sass">
.meal-list-in-order-page {
    .meal-list {
        .sales {
            width: 70px;
            height: 100%;
            margin-right: 38px;
            line-height: 69px;
            font-size: 12px;
            color: #898989;
        }
        .operation {
            width: 92px;
            padding-top: 20px;
            .minusfrcart,
            .addtocart {
                font-style: normal;
                width: 26px;
                height: 26px;
                line-height: 21px;
                display: inline-block;
                border: 1px solid #898989;
                border-radius: 13px;
                text-align: center;
                color: #ff2d4b;
                font-size: 26px;
            }
        }
    }
    .menu-cart {
        position: fixed;
        width: 280px;
        bottom: 0px;
        margin-left: 720px;
        box-shadow: 0 -1px 10px 2px #e4e4e4;
        .cc-warp {
            .title {
                height: 40px;
                line-height: 38px;
                padding: 0 12px;
                background: #fafafa;
                font-size: 14px;
                color: #999;
                font-weight: 400;
                text-decoration: none;
            }
            .cart-panel {
                max-height: 245px;
                background: #fff;
                overflow: auto;
                table {
                    width: 100%;
                    border-collapse:collapse;
                    thead {
                        border-bottom: 1px solid #ddd;
                        color: #aaa;
                    }
                    td {
                        padding: 8px 0;
                    }
                    .item-name {
                        width: 123px;
                        text-align: left;
                        padding-left: 12px;
                    }
                    .item-count {
                        width: 75px;
                        text-align: center;
                    }
                    .item-price {
                        width: 50px;
                        text-align: right;
                        padding-right: 10px;
                    }
                }
            }
        }
    }
}
</style>
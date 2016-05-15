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
            <div class="cc-warp"></div>
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
</style>
<template>
    <div class="order-wrapper">
        <div class="meal-list-box">
            <div class="category-wrap">
                <ul>
                    <li v-for="category in categoryList" :class="nowCategory.index === $index ? 'active' : ''">
                        <a href="javascript:;" @click="getMealList(category, $index);">{{ category.name }}</a>
                    </li>
                    <li v-if="type == 'mealpage'">
                        <a href="javascript:;" @click="dlgCategoryShow = !dlgCategoryShow">添加菜肴类别</a>
                    </li>
                </ul>
            </div>
            <div class="list-wrap">
                <h3 class="title">
                    {{ nowCategory.name }}
                    <a v-if="type == 'mealpage'" class="add-meal-link" href="javascript:;" @click="dlgMealShow = !dlgMealShow">添加菜肴</a>
                </h3>
                <div class="meal-list">
                    <ul>
                        <li v-for="meal in mealList">
                            <div class="info">
                                <h4 class="title fl">{{ meal.name }}</h4>
                                <div class="sales fr">已售{{ meal.sales }}份</div>
                                <div class="operation fr">
                                    <template v-show="orderObj.meal[meal._id]">
                                        <i class="minusfrcart" @click="minusFromCart(meal._id)">-</i>
                                        <i class="select-count"></i>
                                    </template>
                                    <i class="addtocart" @click="addToCart(meal._id)">+</i>
                                </div>
                                <div class="price fr">¥{{ meal.price }}/份</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="customer-info-box list-wrap">
            <h3 class="title">顾客信息</h3>
            <div class="main-body">
                <div class="tab-navs">
                    <a href="javascript:;">新顾客</a>
                    <a href="javascript:;">老顾客</a>
                </div>
                <customer-add></customer-add>
                <!-- <customer-select></customer-select> -->
            </div>
        </div>
        <div class="menu-cart">
            <div class="cc-warp">
                <div class="title">
                    <span class="txt">点单列表</span>
                    <span class="customer-info fr">添加顾客信息</span>
                </div>
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
                            <tr v-for="meal of orderObj.meal">
                                <td class="item-name">{{ meal.name }}</td>
                                <td class="item-count">{{ meal.count }}</td>
                                <td class="item-price">{{ meal.price }}</td>
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
import MealListMixin from '../components/MealListMixin.vue'
import CustomerAdd from '../components/CustomerAdd.vue'

export default {
    mixins: [MealListMixin],
    data () {
        return {
            mealList: [],
            orderObj: {
                customer: null,
                meal: {}
            },
            dlgCustomerShow: false
        }
    },
    methods: {
        addToCart (mealId) {
            var _this = this
            if (_this.orderObj.meal[mealId]) {
                _this.orderObj.meal[mealId].count ++
            } else {
                _this.orderObj.meal[mealId] = {
                    mealId: mealId,
                    count: 1
                }
            }
            console.log(_this.orderObj.meal)
        },
        minusFromCart (mealId) {
            var _this = this
        }
    },
    components: {
        CustomerAdd
    }
}
</script>

<style lang="sass">
.order-wrapper {
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
                cursor: pointer;
            }
        }
        .price {
            line-height: 69px;
            margin-right: 15px;
            font-size: 14px;
            color: #313131;
            font-weight: bold;
        }
    }
    .customer-info-box {
        float: right;
        width: 280px;
        margin-top: 10px;
        .main-body {
            text-align: center;
            .tab-navs {
                margin: 6px 0;
                display: inline-block;
                font-size: 18px;
                a {
                    width: 4em;
                    height: 35px;
                    float: left;
                    color: #ff2d4b;
                    line-height: 35px;
                }
            }
            .add-customer-box {
                .group-inputs {
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
                .button-wrapper button {
                    border: 0;
                    background: #ff2d4b;
                    width: 100%;
                    line-height: 41px;
                    color: #fff;
                    font-size: 15px;
                    border-radius: 3px;
                }
            }
        }
    }
    .menu-cart {
        position: fixed;
        width: 280px;
        bottom: 0px;
        margin-left: 700px;
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
                        padding-right: 12px;
                    }
                }
            }
        }
    }
}
</style>
<template>
    <div class="order-add-wrapper">
        <div class="meal-list-box">
            <div class="category-wrap">
                <ul>
                    <li v-for="category in categoryList" :class="nowCategory._id == category._id ? 'active' : ''">
                        <a href="javascript:;" @click="getMealList(category);">{{ category.name }}</a>
                    </li>
                </ul>
            </div>
            <div class="ui list-wrap">
                <h3 class="ui title">
                    {{ nowCategory.name }}
                </h3>
                <div class="meal-list list">
                    <ul>
                        <li class="info" v-for="meal in mealList">
                            <h4 class="title fl">{{ meal.name }}</h4>
                            <div class="sales fr">已售{{ meal.sales }}份</div>
                            <div class="order-operation">
                                <i class="minusfrcart" :class="orderMealList[meal._id] ? '' : 'visibility-hidden'" @click="minusFromCart(meal)">-</i>
                                <i class="select-count" :class="orderMealList[meal._id] ? '' : 'visibility-hidden'">{{ orderMealList[meal._id] ? orderMealList[meal._id].count : 0 }}</i>
                                <i class="addtocart" @click="addToCart(meal)">+</i>
                            </div>
                            <div class="price fr">¥{{ meal.price }}/份</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="customer-info-box ui list-wrap">
            <h3 class="ui title">顾客信息<span>{{ customer.name }} {{ customer.phone }}</span></h3>
            <div class="main-body">
                <div class="tab-navs">
                    <a href="javascript:;" @click="currentView = 'CustomerAdd'" :class="currentView == 'CustomerAdd' ? 'border-bottom' : ''">新顾客</a>
                    <a href="javascript:;" @click="currentView = 'CustomerSelect'" :class="currentView == 'CustomerSelect' ? 'border-bottom' : ''">老顾客</a>
                </div>
                <component :is="currentView" :customer-obj="{}" @submited="selectedCustomer" :member-list="memberList"></component>
            </div>
        </div>
        <div class="menu-cart">
            <div class="cc-warp" v-show="orderMealListLen">
                <div class="title">
                    <span class="txt">点单列表</span>
                    <span class="customer-info fr">{{ customer.name }}</span>
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
                            <tr v-for="meal of orderMealList">
                                <td class="item-name">{{ meal.name }}</td>
                                <td class="item-count">{{ meal.count }}</td>
                                <td class="item-price">¥{{ meal.price }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="cart-bar">
                <span v-show="orderMealListLen == 0" class="empty">购物车是空的</span>
                <span v-show="orderMealListLen" class="total-price">共¥{{ totalPrice }}</span>
                <span v-show="orderMealListLen" @click="submitOrder(1)" class="submit fr">提交</span>
                <span v-show="orderMealListLen" @click="submitOrder(0)" class="hold-on fr">暂挂</span>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import MealListMixin from '../components/MealListMixin.vue'
import CustomerAdd from '../components/CustomerAdd.vue'
import CustomerSelect from '../components/CustomerSelect.vue'
import Json from '../public/javascripts/Json'

export default {
    mixins: [MealListMixin],
    ready () {
        this.getMemberList()
    },
    data () {
        return {
            mealList: [],
            customer: {},
            orderMealList: {},
            orderObj: {},
            currentView: 'CustomerAdd',
            memberList: []
        }
    },
    computed: {
        orderMealListLen () {
            return Json.getLen(this.orderMealList)
        },
        totalPrice () {
            var price = 0
            for (var key in this.orderMealList) {
                price += this.orderMealList[key].price
            }
            return price
        }
    },
    methods: {
        addToCart (meal) {
            if (this.orderMealList[meal._id]) {
                this.orderMealList[meal._id].count ++
            } else {
                Vue.set(this.orderMealList, meal._id, {
                    _id: meal._id,
                    name: meal.name,
                    price: meal.price,
                    count: 1
                })
            }
        },
        minusFromCart (meal) {
            if (this.orderMealList[meal._id].count > 1) {
                this.orderMealList[meal._id].count --
            } else {
                Vue.delete(this.orderMealList, meal._id)
            }
        },
        selectedCustomer (customer) {
            this.customer = customer
        },
        submitOrder (orderStatus) {
            var meals = []
            for (var key in this.orderMealList) {
                meals.push({
                    meal: this.orderMealList[key]._id,
                    count: this.orderMealList[key].count
                })
            }
            this.orderObj = {
                customer: this.customer._id,
                meals: meals,
                status: orderStatus
            }
            this.$http.post('/api/order/', this.orderObj).then(function (res) {
                this.orderObj = {}
                this.customer = {}
                this.orderMealList = {}
            })
        },
        getMemberList () {
            this.$http.get('/api/member/').then(function (res) {
                var data = res.data
                if (data.success) {
                    this.memberList = data.memberList
                } else {
                    console.log(data.reason)
                }
            })
        }
    },
    components: {
        CustomerAdd,
        CustomerSelect
    }
}
</script>

<style lang="sass">
.order-add-wrapper {
    .meal-list-box {
        margin-top: 10px;
        width: 690px;
        float: left;
        .category-wrap {
            background-color: #fff;
            border: 1px solid #ebebeb;
            padding: 21px 20px;
            ul {
                overflow: auto;
                li {
                    width: 124px;
                    height: 24px;
                    line-height: 24px;
                    margin-right: 5px;
                    margin-bottom: 4px;
                    float: left;
                    a {
                        padding: 5px;
                        color: #535353;
                        height: 14px;
                        font-size: 14px;
                        line-height: 14px;
                    }
                    &.active a {
                        color: #ff2d4b;
                    }
                }
            }
        }
        .list-wrap {
            margin-top: 10px;
            .meal-list {
                .sales {
                    width: 70px;
                    height: 100%;
                    margin-right: 30px;
                    line-height: 69px;
                }
                .order-operation {
                    width: 110px;
                    padding-top: 20px;
                    float: right;
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
                    .select-count {
                        display: inline-block;
                        width: 26px;
                        height: 26px;
                        text-align: center;
                        color: #ff2d4b;
                        font-weight: bold;
                    }
                }
                .price {
                    line-height: 69px;
                    margin-right: 15px;
                    color: #313131;
                }
            }
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
                    &.border-bottom {
                        border-bottom: 3px solid;
                    }
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
        .cart-bar {
            height: 40px;
            line-height: 40px;
            background: #3f4347;
            font-size: 15px;
            color: #fff;
            .empty,
            .total-price {
                padding-left: 18px;
            }
            .hold-on,
            .submit {
                background-color: #ff2d4b;
                padding: 0 18px;
                cursor: pointer;
                &:hover {
                    color: #ffd0d6;
                }
            }
        }
    }
}
</style>

<template>
    <ul class="meal-list">
        <li v-for="meal in mealList">
            <div class="info">
                <h4 class="title">{{ meal.name }}</h4>
                <div class="sales">已售{{ meal.sales }}份</div>
                <div class="operation">
                    <i class="minusfrcart"></i>
                    <i class="select-count"></i>
                    <i class="addtocart"></i>
                </div>
                <div class="price">{{ meal.price }}</div>
            </div>
        </li>
    </ul>
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

</style>
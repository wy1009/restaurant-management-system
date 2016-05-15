<template>
    <meal>
        <meal-list-in-order-page slot="meal-list" :meal-list="mealList"></meal-list-in-order-page>
    </meal>
</template>

<script>
import Meal from '../components/Meal.vue';

export default {
    components: {
        Meal
    }
};
</script>
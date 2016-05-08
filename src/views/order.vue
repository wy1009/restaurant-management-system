<template>
    <topnav></topnav>
    <div class="main">
        <meal-list></meal-list>
    </div>   
</template>
<script>
import Topnav from '../components/Topnav.vue';
import MealList from '../components/MealList.vue';

export default {
    components: {
        topnav: Topnav,
        mealList: MealList
    }
};
</script>
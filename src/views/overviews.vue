<template>
    <topnav></topnav>
    <div class="main">
        <meal-list></meal-list>
    </div>   
</template>
<script>
import TopNav from '../components/topnav.vue';
import MealList from '../components/meal-list.vue';

export default {
    components: {
        topnav: TopNav,
        mealList: MealList
    }    
};
</script>
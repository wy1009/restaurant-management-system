<template>
    <topnav></topnav>
    <div id="main">
        <meal-list></meal-list>
    </div>   
</template>
<script>
import Topnav from '../components/Topnav.vue';
import MealList from '../components/MealList.vue';

export default {
    components: {
        Topnav,
        MealList
    }
};
</script>
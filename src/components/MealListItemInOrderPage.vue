<template>
    <div class="info">
        <h4 class="title">{{ meal.name }}</h4>
        <div class="sales">已售{{ meal.sales }}份</div>
        <div class="add"><a href="javascript:;"></a></div>
        <div class="price">{{ meal.price }}</div>
        <div class="num"></div>
    </div>
</template>

<style lang="sass">
.meal-list-box {
    .info {
        height: 69px;
        cursor: pointer;
    }
}
</style>
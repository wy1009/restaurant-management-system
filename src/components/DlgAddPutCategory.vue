<template>
    <div class="dialog-box">
        <div class="add-meal-dialog">
            <div class="header">菜肴类别</div>
            <div class="content">
                <div>
                    <div class="input-wrapper">
                        <input type="text" placeholder="名称" v-model="mealData.name">
                    </div>
                </div>
            </div>
            <div class="footer">
                <input type="button" value="取消">
                <input type="button" value="确定" @click="addMealData">
            </div>
        </div>
    </div>
</template>
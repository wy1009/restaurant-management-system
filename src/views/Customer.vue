<template>
    <div class="customer-wrapper">
        <div class="customer-list-box list-wrap">
            <h3 class="title">会员列表</h3>
        </div>
        <div class="member-box list-wrap">
            <h3 class="title">会员等级列表<span class="fr">添加会员等级</span></h3>
        </div>
    </div>
</template>

<style lang="sass">
    .customer-wrapper {
        .customer-list-box {
            width: 690px;
            float: left;
        }
        .member-box {
            width: 280px;
            float: right;
            .title span {
                font-size: 14px;
                font-weight: normal;
                color: #ff2d4b;
                cursor: pointer;
            }
        }
    }
</style>
<template>
    <div class="dialog-box">
        <div class="add-put-user-dialog dialog">
            <div class="header"><slot></slot>会员<i @click="dispatchCloseDlgMsg" class="close-btn">+</i></div>
            <div class="content">
                <div class="group-inputs">
                    <div class="ui input-wrapper">
                        <input type="text" placeholder="名称" v-model="memberObj.name">
                    </div>
                    <div class="ui input-wrapper">
                        <select v-model="customerObj.member">
                            <option v-for="member of memberList" value="{{ member._id }}">{{ member.name }}</option>
                        </select>
                    </div>
                </div>
                <div class="button-wrapper">
                    <button class="ui button" @click="addMember">确定</button>
                </div>
            </div>
        </div>
    </div>
</template>
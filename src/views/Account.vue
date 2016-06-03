<template>
    <div class="account-wrapper has-side-nav">
        <aside>
            <ul>
                <li v-for="accountType in accountTypeList" :class="nowAccountType._id == accountType._id ? 'active' : ''">
                    <div @click="getAccountList(accountType)">
                        {{ accountType.name }}
                        <span class="fr" @click.stop="delAccountType(accountType)">删除</span>
                        <span class="fr" @click.stop="editAccountType(accountType)">编辑</span>
                    </div>
                </li>
                <li>
                    <a href="javascript:;" @click="toggleAccountTypeDlg">+ 添加会员等级</a>
                </li>
            </ul>
        </aside>
        <article class="ui list-wrap">
            <h3 class="ui title">
                {{ nowAccountType.name }}
                <span @click="toggleAccountDlg">添加会员</span>
            </h3>
            <div class="list">
                <ul>
                    <li v-for="account of accountList">
                        <h4 class="title fl">{{ account.name }}</h4>
                        <div class="phone fl">{{ account.phone }}</div>
                        <div class="operation fr">
                            <span @click="editAccount(account)">编辑</span>
                            <span @click="delAccount(account)">删除</span>
                        </div>
                    </li>
                </ul>
            </div>
        </article>
        <dlg-account-type-add-put type="accountType" :info-obj="selectedAccountTypeObj" @submited="dlgAccountTypeSubmited" @close-dlg="toggleAccountTypeDlg" v-show="dlgAccountTypeShow" transition="expand">添加</dlg-account-type-add-put>
        <dlg-account-add-put type="account" :info-obj="selectedAccountObj" :accountType-list="accountTypeList" @submited="dlgAccountSubmited" @close-dlg="toggleAccountDlg" v-show="dlgAccountShow" transition="expand"></dlg-account-add-put>
    </div>
</template>
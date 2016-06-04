<template>
    <div :class="classType + '-wrapper'" class="has-side-nav">
        <aside>
            <ul>
                <li v-for="classInfo in classInfoList" :class="nowClassInfo._id == classInfo._id ? 'active' : ''">
                    <div @click="getItemInfoList(classInfo)">
                        {{ classInfo.name }}
                        <span class="fr" @click.stop="delClassInfo(classInfo)">删除</span>
                        <span class="fr" @click.stop="editClassInfo(classInfo)">编辑</span>
                    </div>
                </li>
                <li>
                    <a href="javascript:;" @click="toggleClassInfoDlg">+ 添加{{ classCn }}</a>
                </li>
            </ul>
        </aside>
        <article class="ui list-wrap">
            <h3 class="ui title">
                {{ nowClassInfo.name }}
                <span @click="toggleItemInfoDlg">添加{{ itemCn }}</span>
            </h3>
            <div class="list">
                <ul>
                    <li v-for="itemInfo of itemInfoList">
                        <div class="operation fr">
                            <span @click="editItemInfo(itemInfo)">编辑</span>
                            <span @click="delItemInfo(itemInfo)">删除</span>
                        </div>
                        <template v-for="info in itemInfo">
                            <h4 v-if="$key == 'name'" class="title fl">{{ info }}</h4>
                            <div v-if="$key == 'value'" class="{{ $key }} fl">{{ info }}元</div>
                            <h4 v-if="$key == 'earn'" class="title fl">{{ info ? '收入' : '支出' }}</h4>
                            <div v-if="['_id', 'meta', filterName, '__v', 'name', 'earn', 'price', 'value'].indexOf($key) == -1" class="{{ $key }} fr">{{ info }}</div>
                            <div v-if="$key == 'price'" class="{{ $key }} fr">¥{{ info }}/份</div>
                        </template>
                    </li>
                </ul>
            </div>
        </article>
        <dlg-class-info-add-put :type="classType" :info-obj="selectedClassInfoObj" @submited="dlgClassInfoSubmited" @close-dlg="toggleClassInfoDlg" v-show="dlgClassInfoShow" transition="expand">添加</dlg-class-info-add-put>
        <dlg-item-info-add-put :type="itemType" :info-obj="selectedItemInfoObj" :class-info-list="classInfoList" @submited="dlgItemInfoSubmited" @close-dlg="toggleItemInfoDlg" v-show="dlgItemInfoShow" transition="expand"></dlg-item-info-add-put>
    </div>
</template>

<script>

export default {
    data () {
        return {
            itemInfoList: [],
            selectedItemInfoObj: {},
            dlgClassInfoShow: false,
            dlgItemInfoShow: false,
            nowClassInfo: {},
            classInfoList: [],
            selectedClassInfoObj: {}
        }
    },
    ready () {
        this.$dispatch('topnavIndex', 4)
        this.getClassInfoList()
    },
    methods: {
        getClassInfoList () {
            this.$http.get('/api/' + this.classType + '/').then(function (res) {
                var data = res.data
                if (data.success) {
                    this.classInfoList = data.classInfoList
                    this.getItemInfoList(this.classInfoList[0])
                } else {
                    console.log(data.reason)
                }
            })
        },
        getItemInfoList (classInfo) {
            this.nowClassInfo = classInfo
            var filterCondition = {}
            filterCondition[this.filterName] = classInfo._id
            this.$http.get('/api/' + this.itemType + '/', filterCondition).then(function (res) {
                var data = res.data
                if (data.success) {
                    this.itemInfoList = data.itemInfoList
                } else {
                    console.log(data.reason)
                }
            })
        },
        editItemInfo (itemInfo) {
            this.selectedItemInfoObj = itemInfo
            this.toggleItemInfoDlg()
        },
        toggleClassInfoDlg () {
            this.dlgClassInfoShow = !this.dlgClassInfoShow
            if (!this.dlgClassInfoShow) {
                this.selectedClassInfoObj = {}
            }
        },
        toggleItemInfoDlg () {
            this.dlgItemInfoShow = !this.dlgItemInfoShow
            if (!this.dlgItemInfoShow) {
                this.selectedItemInfoObj = {}
            }
        },
        dlgClassInfoSubmited () {
            this.getClassInfoList()
            this.toggleClassInfoDlg()
        },
        dlgItemInfoSubmited () {
            this.getItemInfoList(this.nowClassInfo)
            this.toggleItemInfoDlg()
        },
        editClassInfo (classInfo) {
            this.selectedClassInfoObj = classInfo
            this.toggleClassInfoDlg()
        },
        delClassInfo (classInfo) {

        }
    }
}
</script>
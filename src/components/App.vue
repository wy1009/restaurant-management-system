<template>
    <div id="wrapper">
        <router-view></router-view>
    </div>
</template>

<style lang="sass">
#wrapper {
    ul {
        list-style-type: none;
    }
    #main {
        .container {
            padding: 0 20px;
            max-width: 980px;
            margin: 24px auto 0;
            &.has-side-nav { /* side-nav共有样式 */
                a {
                    color: #43853d;
                    text-decoration: none;
                    border-radius: 2px;
                    &:hover {
                        color: #fff;
                        background-color: #43853d;
                    }
                }
                aside {
                    width: 200px;
                    float: left;
                    .side-nav {
                        li {
                            padding: .1em .5em;
                            a {
                                padding: 5px 10px;
                                display: block;
                            }
                            &.active {
                                a {
                                    color: #fff;
                                    background-color: #026e00;
                                }
                            }

                        }
                    }
                }
                article {
                    margin-left: 220px;
                }
            }
        }
    }
}
</style>
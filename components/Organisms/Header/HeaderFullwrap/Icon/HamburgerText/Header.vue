<template>
    <div class="container">
        <!-- SPメニュー -->
        <header class="header">
            <div class="header-wrapper">
                <!-- ロゴ -->
                <h1 class="header-logo">
                    <nuxt-link to="/">
                        <img :src="require('@/assets/image/symbol.png')" alt="ロゴ" />
                    </nuxt-link>
                </h1>
                <!-- Hamburger -->
                <button class="menu-trigger" @click="toggle()" :class="{ active: isToggle }">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <!-- メニュー -->
            <nav class="menu-nav" :class="{ 'menu-nav-active': isToggle }">
                <nuxt-link to="/" class="menu-nav-item" @click.native="toggle()">
                    <fa class="before-icon" icon="inbox" />
                    特徴
                    <fa class="after-icon" icon="angle-right" />
                </nuxt-link>
                <nuxt-link to="/" class="menu-nav-item" @click.native="toggle()">
                    <fa class="before-icon" icon="box-open" />
                    サービス
                    <fa class="after-icon" icon="angle-right" />
                </nuxt-link>
                <nuxt-link to="/" class="menu-nav-item" @click.native="toggle()">
                    <fa class="before-icon" icon="folder" />
                    事例
                    <fa class="after-icon" icon="angle-right" />
                </nuxt-link>
                <nuxt-link to="/" class="menu-nav-item" @click.native="toggle()">
                    <fa class="before-icon" icon="tags" />
                    価格
                    <fa class="after-icon" icon="angle-right" />
                </nuxt-link>
                <nuxt-link to="/" class="menu-nav-item" @click.native="toggle()">
                    <fa class="before-icon" icon="building" />
                    会社概要
                    <fa class="after-icon" icon="angle-right" />
                </nuxt-link>
                <nuxt-link to="/" class="menu-nav-item" @click.native="toggle()">
                    <fa class="before-icon" icon="user-tie" />
                    採用情報
                    <fa class="after-icon" icon="angle-right" />
                </nuxt-link>
                <nuxt-link to="/" class="menu-nav-item" @click.native="toggle()">
                    <fa class="before-icon" icon="envelope" />
                    お問い合わせ
                    <fa class="after-icon" icon="angle-right" />
                </nuxt-link>
            </nav>
            <!-- PCメニュー -->
            <PCheader />
        </header>
    </div>
</template>

<script>
import PCheader from '@/components/Organisms/Header/HeaderFullwrap/BackGroundColorTextWhite/HamburgerText/PCheader';
export default {
    components: {
        PCheader,
    },
    data() {
        return {
            isToggle: false,
        };
    },
    methods: {
        toggle() {
            this.isToggle = !this.isToggle;
        },
    },
};
</script>

<style lang="scss" scoped>
//position fixed
.container {
    position: fixed;
    width: 100%;
    height: 8vh;
    z-index: 1000;
}
// SPメニュー
.header {
    position: relative;
    background-color: #fff;
    &-wrapper {
        padding: 0 15px;
        height: 8vh;
        box-shadow: 0 0.1rem 1rem rgba(34, 34, 34, 0.2);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    // ロゴ
    &-logo {
        & a {
            display: flex;
            align-items: center;
            & img {
                height: 20px;
            }
        }
    }
}
// Hamburger
.menu-trigger,
.menu-trigger span {
    display: inline-block;
    transition: all 0.3s;
    box-sizing: border-box;
}
.menu-trigger {
    background: #fff;
    border: none;
    outline: none;
    position: relative;
    width: 20px;
    height: 16px;
    & span {
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #0074d9;
        border-radius: 4px;
        &:nth-of-type(1) {
            top: 0;
        }
        &:nth-of-type(2) {
            top: 7px;
        }
        &:nth-of-type(3) {
            bottom: 0;
        }
    }

    &:after {
        position: absolute;
        left: -5px;
        bottom: -20px;
        content: 'MENU';
        display: block;
        width: 100%;
        color: #0074d9;
        font-size: 6px;
        text-decoration: none;
        text-align: center;
        white-space: nowrap;
        transition: all 0.3s;
    }
    //クリック
    &.active {
        &:after {
            content: 'CLOSE';
            bottom: -20px;
        }
        & span {
            &:nth-of-type(1) {
                transform: translateY(7px) rotate(-45deg);
            }
            &:nth-of-type(2) {
                opacity: 0;
            }
            &:nth-of-type(3) {
                transform: translateY(-7px) rotate(45deg);
            }
        }
    }
}
// メニュー
.menu-nav {
    height: 92vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    transition: all 0.3s;
    opacity: 0;
    display: none;
    &-item {
        position: relative;
        text-align: left;
        width: 100%;
        padding: 10px 30px;
        color: #444;
        font-weight: bold;
        border-top: 1px solid #ddd;
        text-decoration: none;
        display: block;

        &:last-child {
            border-bottom: 1px solid #ddd;
        }
    }
    &-active {
        opacity: 1;
        display: block;
    }
}
//アイコン
.before-icon {
    color: #aaa;
    display: inline-block;
    text-align: center;
    width: 18px;
    height: 18px;
    margin-right: 15px;
}
.after-icon {
    color: #aaa;
    display: inline-block;
    text-align: center;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
}

// //560px以上はタブレット
@media screen and (min-width: 560px) {
    // タブレットメニュー
    .header {
        &-wrapper {
            padding: 0 100px;
        }
        // ロゴ
        &-logo {
            & a {
                & img {
                    height: 100%;
                }
            }
        }
    }
    // Hamburger
    .menu-trigger {
        width: 28px;
        height: 24px;
        & span {
            &:nth-of-type(2) {
                top: 11px;
            }
        }
        &:after {
            left: 0;
        }
        //クリック
        &.active {
            & span {
                &:nth-of-type(1) {
                    transform: translateY(11px) rotate(-45deg);
                }
                &:nth-of-type(3) {
                    transform: translateY(-11px) rotate(45deg);
                }
            }
        }
    }
    // メニュー
    .menu-nav {
        &-item {
            font-size: 1.25rem;
            text-align: center;
        }
    }
    //アイコン
    .before-icon {
        display: none;
    }
}

// //960px以上はPC
@media screen and (min-width: 960px) {
    .header-wrapper {
        display: none;
    }
    .menu-nav {
        display: none;
    }
}
</style>
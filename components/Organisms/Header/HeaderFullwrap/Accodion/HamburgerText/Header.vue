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
                    <fa class="before-icon" icon="angle-right" />
                    TOP
                </nuxt-link>
                <AccordionMenu
                    parentMenu="企業情報"
                    :childMenus="corporateInformation"
                    @AccordionToggle="toggle()"
                />
                <nuxt-link to="/" class="menu-nav-item" @click.native="toggle()">
                    <fa class="before-icon" icon="angle-right" />
                    グループ企業一覧
                </nuxt-link>
                <nuxt-link to="/" class="menu-nav-item" @click.native="toggle()">
                    <fa class="before-icon" icon="angle-right" />
                    ニュースリリース
                </nuxt-link>
                <nuxt-link to="/" class="menu-nav-item" @click.native="toggle()">
                    <fa class="before-icon" icon="angle-right" />
                    採用情報
                </nuxt-link>
                <AccordionMenu
                    parentMenu="サステナビリティ"
                    :childMenus="sustainability"
                    @AccordionToggle="toggle()"
                />
                <AccordionMenu
                    parentMenu="株主・投資家の皆さま"
                    :childMenus="investment"
                    @AccordionToggle="toggle()"
                />
            </nav>
            <!-- PCメニュー -->
            <PCheader />
        </header>
    </div>
</template>

<script>
import PCheader from '@/components/Organisms/Header/HeaderFullwrap/BackGroundColorTextWhite/HamburgerText/PCheader';
import AccordionMenu from '@/components/Molecules/Accordion/AccordionMenu';
export default {
    components: {
        PCheader,
        AccordionMenu,
    },
    data() {
        return {
            isToggle: false,
            corporateInformation: [
                { id: 1, nav: '企業情報TOP', link: '/' },
                { id: 2, nav: '基本理念', link: '/' },
                { id: 3, nav: '行動規範', link: '/' },
                { id: 4, nav: 'トップメッセージ', link: '/' },
                { id: 5, nav: '企業概要', link: '/' },
                { id: 6, nav: '企業沿革', link: '/' },
            ],
            sustainability: [
                { id: 1, nav: 'サステナビリティTOP', link: '/' },
                { id: 2, nav: 'サステナビリティ基本方針', link: '/' },
                { id: 3, nav: '環境の取り組み', link: '/' },
                { id: 4, nav: '社会の取り組み', link: '/' },
                { id: 5, nav: '環境・社会報告書', link: '/' },
                { id: 6, nav: '環境・社会活動VTR', link: '/' },
            ],
            investment: [
                { id: 1, nav: '株主・投資家の皆さまTOP', link: '/' },
                { id: 2, nav: '経営方針', link: '/' },
                { id: 3, nav: '財務・業績情報', link: '/' },
                { id: 4, nav: '株式・債権情報', link: '/' },
                { id: 5, nav: 'IR資料', link: '/' },
                { id: 6, nav: '個人投資家の皆さまへ', link: '/' },
            ],
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
    overflow-y: scroll;
    &-item {
        position: relative;
        text-align: left;
        width: 100%;
        padding: 15px 15px;
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
    color: #0074d9;
    display: inline-block;
    text-align: center;
    margin-right: 10px;
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
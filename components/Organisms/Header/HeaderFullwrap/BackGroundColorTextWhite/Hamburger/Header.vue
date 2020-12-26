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
            <nav class="menu-nav" :class="{ 'menu-nav-active': isToggle }" @click="toggle()">
                <nuxt-link to="/media" class="menu-nav-item">
                    <fa class="icon" icon="angle-right" />spMenu1
                </nuxt-link>
                <nuxt-link to="/" class="menu-nav-item">
                    <fa class="icon" icon="angle-right" />spMenu2
                </nuxt-link>
                <nuxt-link to="/" class="menu-nav-item">
                    <fa class="icon" icon="angle-right" />spMenu3
                </nuxt-link>
                <nuxt-link to="/" class="menu-nav-item">
                    <fa class="icon" icon="angle-right" />spMenu4
                </nuxt-link>
                <nuxt-link to="/" class="menu-nav-item">
                    <fa class="icon" icon="angle-right" />spMenu5
                </nuxt-link>
            </nav>
            <!-- PCメニュー -->
            <PCheader />
        </header>
    </div>
</template>

<script>
import PCheader from '@/components/Organisms/Header/HeaderFullwrap/BackGroundColorTextWhite/Hamburger/PCheader';
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
        margin: 10px 0;
        & a {
            display: flex;
            align-items: center;
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
    width: 24px;
    height: 18px;
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
            top: 8px;
        }
        &:nth-of-type(3) {
            bottom: 0;
        }
    }
    //クリック
    &.active {
        & span {
            &:nth-of-type(1) {
                transform: translateY(8px) rotate(-45deg);
            }
            &:nth-of-type(2) {
                opacity: 0;
            }
            &:nth-of-type(3) {
                transform: translateY(-8px) rotate(45deg);
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
    background: #0074d9;
    transition: all 0.3s;
    opacity: 0;
    display: none;
    &-item {
        position: relative;
        text-align: left;
        width: 100%;
        padding: 10px 30px;
        color: #fff;
        text-decoration: none;
        display: block;
    }
    &-active {
        opacity: 1;
        display: block;
    }
}
//アイコン
.icon {
    color: #fff;
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
    }
    // Hamburger
    .menu-trigger {
        width: 32px;
        height: 26px;
        & span {
            &:nth-of-type(2) {
                top: 12px;
            }
        }
        //クリック
        &.active {
            & span {
                &:nth-of-type(1) {
                    transform: translateY(12px) rotate(-45deg);
                }
                &:nth-of-type(3) {
                    transform: translateY(-12px) rotate(45deg);
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
    .icon {
        height: 25px;
        width: 30px;
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
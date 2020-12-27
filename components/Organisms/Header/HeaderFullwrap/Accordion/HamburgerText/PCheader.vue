<template>
    <div class="header">
        <div class="header-wrapper">
            <!-- ロゴ -->
            <h1 class="header-logo">
                <nuxt-link to="/">
                    <img :src="require('@/assets/image/logo.png')" alt="ロゴ" />
                </nuxt-link>
            </h1>
            <!-- PCメニュー -->
            <nav class="header-nav">
                <nuxt-link to="/" class="header-nav-item">商品情報</nuxt-link>
                <Dropdown parentMenu="企業情報" parentLink="/" :childMenus="corporateInformation" />
                <Dropdown
                    parentMenu="サステナビリティ"
                    parentLink="/"
                    :childMenus="sustainability"
                />
                <Dropdown
                    parentMenu="株主・投資家の皆さま"
                    parentLink="/"
                    :childMenus="investment"
                />
                <nuxt-link to="/" class="header-nav-contact">オンラインショップ</nuxt-link>
            </nav>
        </div>
    </div>
</template>

<script>
import Dropdown from '@/components/Molecules/Dropdown/Dropdown';
export default {
    components: {
        Dropdown,
    },
    data() {
        return {
            corporateInformation: [
                { id: 1, nav: '企業情報TOP', link: '/', childNav: '' },
                { id: 2, nav: '基本理念', link: '/', childNav: '' },
                { id: 3, nav: '行動規範', link: '/', childNav: '' },
                { id: 4, nav: 'トップメッセージ', link: '/', childNav: '' },
                { id: 5, nav: '企業概要', link: '/', childNav: '' },
                { id: 6, nav: '企業沿革', link: '/', childNav: '' },
            ],
            sustainability: [
                { id: 1, nav: 'サステナビリティTOP', link: '/', childNav: '' },
                {
                    id: 2,
                    nav: 'サステナビリティ基本方針',
                    link: '/',
                    childNav: [
                        { id: 1, nav: '生物多様性方針', link: '/' },
                        { id: 2, nav: '脱炭素ビジョン2050', link: '/' },
                        { id: 3, nav: '持続可能な調達原則・2020年目標', link: '/' },
                    ],
                },
                {
                    id: 3,
                    nav: '環境の取り組み',
                    link: '/',
                    childNav: [
                        { id: 1, nav: '植樹活動', link: '/' },
                        { id: 2, nav: '森の循環プログラム', link: '/' },
                        { id: 3, nav: '買物袋持参運動', link: '/' },
                        { id: 4, nav: 'リサイクル活動', link: '/' },
                        { id: 5, nav: '環境配慮型商品', link: '/' },
                    ],
                },
                {
                    id: 4,
                    nav: '社会の取り組み',
                    link: '/',
                    childNav: [
                        { id: 1, nav: '幸せの黄色いレシートキャンペーン', link: '/' },
                        { id: 2, nav: 'クリーン＆グリーン活動', link: '/' },
                        { id: 3, nav: 'チアーズクラブ', link: '/' },
                    ],
                },
                { id: 5, nav: '環境・社会報告書', link: '/' },
                { id: 6, nav: '環境・社会活動VTR', link: '/' },
            ],
            investment: [
                { id: 1, nav: '株主・投資家の皆さまTOP', link: '/', childNav: '' },
                {
                    id: 2,
                    nav: '経営方針',
                    link: '/',
                    childNav: [
                        { id: 1, nav: '社長からのメッセージ', link: '/' },
                        { id: 2, nav: '財務担当からのメッセージ', link: '/' },
                        { id: 3, nav: '中期経営計画', link: '/' },
                    ],
                },
                {
                    id: 3,
                    nav: '財務・業績情報',
                    link: '/',
                    childNav: [
                        { id: 1, nav: '決算レビュー', link: '/' },
                        { id: 2, nav: '業績ハイライト', link: '/' },
                    ],
                },
                {
                    id: 4,
                    nav: '株式・債権情報',
                    link: '/',
                    childNav: [
                        { id: 1, nav: '株式情報', link: '/' },
                        { id: 2, nav: '株価情報', link: '/' },
                        { id: 3, nav: '株主総会', link: '/' },
                    ],
                },
                {
                    id: 5,
                    nav: 'IR資料',
                    link: '/',
                    childNav: [
                        { id: 1, nav: '決算資料', link: '/' },
                        { id: 2, nav: '月次連結営業概況', link: '/' },
                    ],
                },
                { id: 6, nav: '個人投資家の皆さまへ', link: '/' },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.header {
    padding: 0 15px;
    display: relative;
    background-color: #fff;
    box-shadow: 0 0.1rem 1rem rgba(34, 34, 34, 0.2);

    &-wrapper {
        height: 8vh;
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &-logo {
        & a {
            display: flex;
            align-items: center;
        }
    }

    &-nav {
        display: flex;
        align-items: center;
        &-item,
        &-contact {
            line-height: 8vh;
            font-weight: bold;
            text-decoration: none;
        }

        &-item {
            padding: 0 10px;
            color: #111;

            &:hover {
                color: #0074d9;
            }
        }

        &-contact {
            font-weight: bold;
            margin-left: 20px;
            padding: 0 10px;
            height: 40px;
            line-height: 40px;
            border-radius: 10px;
            background: #0074d9;
            color: #fff;

            &:hover {
                opacity: 0.75;
            }
        }
    }
}
</style>
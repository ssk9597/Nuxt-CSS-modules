<template>
    <div class="card-wrapper">
        <!--リンクカード -->
        <div class="container">
            <Card :image="require('~/assets/image/photo2.jpg')" title="夜明け前">
                木曾路はすべて山の中である。あるところは岨づたいに行く崖の道であり、あるところは数十間の深さに臨む木曾川の岸であり、あるところは山の尾をめぐる谷の入り口である。
            </Card>
        </div>
        <div class="container">
            <Card title="吾輩は猫である">
                吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。
            </Card>
        </div>

        <!-- バッジ付きカード -->
        <div class="container">
            <BadgeCard :image="require('~/assets/image/photo2.jpg')" title="夜明け前">
                木曾路はすべて山の中である。あるところは岨づたいに行く崖の道であり、あるところは数十間の深さに臨む木曾川の岸であり、あるところは山の尾をめぐる谷の入り口である。
            </BadgeCard>
        </div>
        <div class="container">
            <BadgeCard title="吾輩は猫である">
                吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。
            </BadgeCard>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Molecules/Card/Card';
import BadgeCard from '@/components/Molecules/Card/BadgeCard';

export default {
    components: {
        Card,
        BadgeCard,
    },
};
</script>

<style lang="scss" scoped>
.card-wrapper {
    margin-bottom: -40px;
}
.container {
    margin-bottom: 40px;
}

// //560px以上はタブレット
@media screen and (min-width: 560px) {
    .card-wrapper {
        display: flex;
        flex-wrap: wrap;
    }

    .container {
        flex-basis: calc((100% - 4%) / 2);
        margin-right: 4%;

        &:nth-of-type(2n) {
            margin-right: 0%;
        }
    }
}

// //960px以上はPC
@media screen and (min-width: 960px) {
    //3カラム
    .container {
        flex-basis: calc((100% - 8%) / 3);

        &:nth-of-type(2n) {
            margin-right: 4%;
        }

        &:nth-of-type(3n) {
            margin-right: 0%;
        }
    }

    //4カラム
    // .container {
    //     flex-basis: calc((100% - 12%) / 4);

    //     &:nth-of-type(2n) {
    //         margin-right: 4%;
    //     }

    //     &:nth-of-type(3n) {
    //         margin-right: 4%;
    //     }

    //     &:nth-of-type(4n) {
    //         margin-right: 0%;
    //     }
    // }
}
</style>
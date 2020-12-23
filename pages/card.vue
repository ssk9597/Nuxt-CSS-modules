<template>
    <div>
        <Card :cardArray="cardArray" />
    </div>
</template>

<script>
import Card from '@/components/Molecules/Card/Card';

export default {
    components: {
        Card,
    },
    data() {
        return {
            cardArray: [
                {
                    id: 1,
                    title: '夜明け前',
                    link: '/',
                    badge: true,
                    badgeName: 'new',
                    image: require('~/assets/image/photo.jpg'),
                    text:
                        '木曾路はすべて山の中である。あるところは岨づたいに行く崖の道であり、あるところは数十間の深さに臨む木曾川の岸であり、あるところは山の尾をめぐる谷の入り口である。',
                },
                {
                    id: 2,
                    title: '吾輩は猫である',
                    link: '/',
                    badge: true,
                    badgeName: 'new',
                    image: require('~/assets/image/photo2.jpg'),
                    text:
                        '吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。',
                },
                {
                    id: 3,
                    title: '人間失格',
                    link: '/',
                    badge: false,
                    badgeName: 'new',
                    image: require('~/assets/image/photo3.jpg'),
                    text:
                        '恥の多い生涯を送って来ました。自分には、人間の生活というものが、見当つかないのです。自分は東北の田舎に生れましたので、汽車をはじめて見たのはよほど大きくなってからでした。',
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
</style>
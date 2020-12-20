<template>
    <div>
        <PriceTable :tables="tables" />
    </div>
</template>

<script>
import PriceTable from '@/components/Molecules/PriceTable/PriceTable';
export default {
    components: {
        PriceTable,
    },
    data() {
        return {
            tables: [
                {
                    id: 1,
                    title: 'Starter',
                    price: '6,000',
                    lead: '初めてインバウンドマーケティングを行う企業向けのスタートアッププラン',
                    featureTitle1: '費用に含まれるコンタクト数',
                    featureText1: '1,000件',
                    featureTitle2: '月間サイト訪問者数',
                    featureText2: '3,000',
                    featureTitle3: '月間Eメール送信数上限',
                    featureText3: '最大コンタクト数の5倍',
                },
                {
                    id: 2,
                    title: 'Pro',
                    price: '96,000',
                    lead: 'マーケティング担当者の欲しい機能が網羅されたおすすめプラン',
                    featureTitle1: '費用に含まれるコンタクト数',
                    featureText1: '1,000件',
                    featureTitle2: '月間サイト訪問者数',
                    featureText2: '無制限',
                    featureTitle3: '月間Eメール送信数上限',
                    featureText3: '最大コンタクト数の10倍',
                },
                {
                    id: 3,
                    title: 'EnterPrise',
                    price: '384,000',
                    lead: 'マーケティングチームでインバウンドマーケティングを行える高機能プラン',
                    featureTitle1: '費用に含まれるコンタクト数',
                    featureText1: '10,000件',
                    featureTitle2: '月間サイト訪問者数',
                    featureText2: '無制限',
                    featureTitle3: '月間Eメール送信数上限',
                    featureText3: '最大コンタクト数の10倍',
                },
            ],
        };
    },
};
</script>

<style>
</style>
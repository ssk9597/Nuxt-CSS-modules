<template>
    <div>
        <Faq :FaqArray="FaqArray" />
    </div>
</template>

<script>
import Faq from '@/components/Molecules/FAQ/Faq';
export default {
    components: {
        Faq,
    },
    data() {
        return {
            FaqArray: [
                {
                    id: 1,
                    title: 'どのようなCMSの開発経験がありますか？',
                    body: 'WordPressとHubSpot CMSとMicroCMSの経験があります',
                },
                {
                    id: 2,
                    title: 'サイト制作以外の得意分野はありますか？',
                    body: 'HubSpotを用いたインバウンドマーケティングが得意です',
                },
            ],
        };
    },
};
</script>

<style>
</style>
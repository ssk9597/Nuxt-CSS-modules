<template>
    <div>
        <Accordion
            title="どのようなCMSの開発経験がありますか？"
            body="WordPressとHubSpot CMSとMicroCMSの経験があります"
        />

        <Accordion
            title="サイト制作以外の得意分野はありますか？"
            body="HubSpotを用いたインバウンドマーケティングが得意です"
        />
    </div>
</template>

<script>
import Accordion from '@/components/Molecules/Accordion/Accordion';
export default {
    components: {
        Accordion,
    },
};
</script>

<style lang="scss" scoped>
</style>
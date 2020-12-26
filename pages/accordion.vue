<template>
    <div>
        <Accordion title="どのようなCMSの開発経験がありますか？">
            WordPressとHubSpot CMSとMicroCMSの経験があります。
        </Accordion>

        <Accordion title="サイト制作以外の得意分野はありますか？">
            HubSpotを用いたインバウンドマーケティングが得意です。
        </Accordion>
        <AccordionMenu parentMenu="CM・キャンペーン" :childMenus="childMenus" />
    </div>
</template>

<script>
import Accordion from '@/components/Molecules/Accordion/Accordion';
import AccordionMenu from '@/components/Molecules/Accordion/AccordionMenu';

export default {
    components: {
        Accordion,
    },
    data() {
        return {
            childMenus: [
                { id: 1, nav: 'CMギャラリー', link: '/media' },
                { id: 2, nav: 'キャンペーン', link: '/card' },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
</style>
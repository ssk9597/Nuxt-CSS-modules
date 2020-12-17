<template>
    <div>
        <!-- カード -->
        <Card />
        <!-- バッジ付きカード -->
        <BadgeCard />
        <!--リンクカード -->
        <LinkCard />
        <!--3カラム -->
        <Column3Card />
        <!--4カラム -->
        <Column4Card />
    </div>
</template>

<script>
import Card from '@/components/Molecules/Card/Card';
import BadgeCard from '@/components/Molecules/Card/BadgeCard';
import LinkCard from '@/components/Molecules/Card/LinkCard';
import Column3Card from '@/components/Molecules/Card/Column3Card';
import Column4Card from '@/components/Molecules/Card/Column4Card';

export default {
    components: {
        Card,
        BadgeCard,
        LinkCard,
        Column3Card,
        Column4Card,
    },
};
</script>

<style>
</style>
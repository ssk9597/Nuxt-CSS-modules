<template>
    <div>
        <!-- 見出し1 -->
        <Lv1Heading />
        <!-- 見出し2 -->
        <Lv2Heading />
        <!-- 見出し3 -->
        <Lv3Heading />
        <!-- 見出し4 -->
        <Lv4Heading />
    </div>
</template>

<script>
import Lv1Heading from '@/components/Atoms/Heading/Lv1Heading';
import Lv2Heading from '@/components/Atoms/Heading/Lv2Heading';
import Lv3Heading from '@/components/Atoms/Heading/Lv3Heading';
import Lv4Heading from '@/components/Atoms/Heading/Lv4Heading';

export default {
    components: {
        Lv1Heading,
        Lv2Heading,
        Lv3Heading,
        Lv4Heading,
    },
};
</script>

<style lang="scss" scoped>
</style>
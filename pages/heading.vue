<template>
    <div>
        <!-- 見出し1 -->

        <!-- 見出し2 -->
        <div class="container">
            <H2Heading1 title="見出し2" />
        </div>
        <div class="container">
            <H2Heading2 title="見出し2" />
        </div>

        <!-- 見出し3 -->
        <div class="container">
            <H3Heading1 title="見出し3" />
        </div>
        <div class="container">
            <H3Heading2 title="見出し3" />
        </div>

        <!-- 見出し4 -->
        <div class="container">
            <H4Heading1 title="見出し4" />
        </div>
        <div class="container">
            <H4Heading2 title="見出し4" />
        </div>
    </div>
</template>

<script>
//h2
import H2Heading1 from '@/components/Atoms/Heading/H2/Heading1';
import H2Heading2 from '@/components/Atoms/Heading/H2/Heading2';
//h3
import H3Heading1 from '@/components/Atoms/Heading/H3/Heading1';
import H3Heading2 from '@/components/Atoms/Heading/H3/Heading2';
//h4
import H4Heading1 from '@/components/Atoms/Heading/H4/Heading1';
import H4Heading2 from '@/components/Atoms/Heading/H4/Heading2';

export default {
    components: {
        H2Heading1,
        H2Heading2,
        H3Heading1,
        H3Heading2,
        H4Heading1,
        H4Heading2,
    },
};
</script>

<style lang="scss" scoped>
.container {
    padding: 20px 0;
}
</style>
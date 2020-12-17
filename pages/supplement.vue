<template>
    <div>
        <!-- 注意を促す -->
        <Annotation />
        <!-- 補足 -->
        <Supplement />
    </div>
</template>

<script>
import Annotation from '@/components/Atoms/Supplement/Annotation';
import Supplement from '@/components/Atoms/Supplement/Supplement';

export default {
    components: {
        Annotation,
        Supplement,
    },
};
</script>

<style>
</style>
<template>
    <div>
        <!-- 注意を促す -->
        <div class="container">
            <div class="text-center">
                <Annotation text="※注釈が入ります" />
            </div>
        </div>

        <!-- 補足 -->
        <div class="container">
            <div class="text-center">
                <Supplement text="※注釈が入ります" />
            </div>
        </div>
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

<style lang="scss" scoped>
.container {
    padding-bottom: 20px;
}

.text-center {
    text-align: center;
}
</style>
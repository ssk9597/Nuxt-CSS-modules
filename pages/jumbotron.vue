<template>
    <div>
        <Jumbotron
            title="貴社のビジネスに最適なWebサイトをご提案し成果に繋げます"
            :image="require('@/assets/image/background.jpg')"
        />
    </div>
</template>

<script>
import Jumbotron from '@/components/Molecules/Jumbotron/Jumbotron';
export default {
    components: {
        Jumbotron,
    },
};
</script>

<style>
</style>
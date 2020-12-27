<template>
    <header class="header">
        <!-- PCメニュー -->
        <div v-if="isPc">
            <PCheader />
        </div>

        <!-- SPメニュー -->
        <div v-else>
            <SPheader />
        </div>
    </header>
</template>

<script>
import PCheader from '@/components/Organisms/Header/HeaderFullwrap/Accordion/Hamburger/PCheader';
import SPheader from '@/components/Organisms/Header/HeaderFullwrap/Accordion/Hamburger/SPheader';
export default {
    components: {
        PCheader,
        SPheader,
    },
    data() {
        return {
            windowWidth: 960,
        };
    },
    mounted() {
        this.windowWidth = window.innerWidth;
        this.$nextTick(() => {
            window.addEventListener('resize', () => {
                this.windowWidth = window.innerWidth;
            });
        });
    },
    computed: {
        isPc() {
            return this.windowWidth > 960;
        },
    },
};
</script>

<style lang="scss" scoped>
//position fixed
.header {
    position: fixed;
    width: 100%;
    height: 8vh;
    z-index: 1000;
}
</style>
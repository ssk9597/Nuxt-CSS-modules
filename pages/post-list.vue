<template>
    <div>
        <PostList :PostLists="PostLists" />
    </div>
</template>

<script>
import PostList from '@/components/Molecules/PostList/PostList';
export default {
    components: {
        PostList,
    },
    data() {
        return {
            PostLists: [
                {
                    id: 1,
                    date: '2020/01/01',
                    title: '【多言語サイトを構築する】①対象言語・地域とURL方式の選定',
                },
                {
                    id: 2,
                    date: '2020/02/15',
                    title: '打ち合わせアポをスムーズに！ビジネスで使える日程調整ツール4選',
                },
                {
                    id: 3,
                    date: '2020/3/12',
                    title: 'BtoB向けコンテンツマーケティング戦略におけるLinkedIn活用術',
                },
            ],
        };
    },
};
</script>

<style>
</style>
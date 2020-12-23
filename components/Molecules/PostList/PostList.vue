<template>
    <div>
        <ul class="post-list" v-for="PostList in PostLists" :key="PostList.id">
            <li class="post-list-item">
                <div class="post-list-header">
                    <time class="post-list-date" :datetime="PostList.date">
                        {{ PostList.date }}
                    </time>
                </div>
                <nuxt-link to="#" class="post-list-ttl">
                    {{ PostList.title }}
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'PostList',
    props: {
        PostLists: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.post-list {
    &-item {
        padding: 15px 0;
        border-bottom: 1px solid #ddd;

        &:first-child {
            padding-top: 0;
        }
    }

    &-header {
        margin-bottom: 8px;
    }

    &-date {
        font-size: 0.75rem;
    }

    &-ttl {
        color: #0074d9;
        font-size: 0.875rem;
        font-weight: bold;
        text-decoration: none;

        &:focus,
        &:hover {
            text-decoration: underline;
        }
    }
}

// //560px以上はタブレット
@media screen and (min-width: 560px) {
    .post-list {
        &-item {
            padding: 16px 0;
        }

        &-header {
            margin-bottom: 10px;
        }

        &-date {
            font-size: 1rem;
        }

        &-ttl {
            font-size: 1.25rem;
        }
    }
}

// //960px以上はPC
@media screen and (min-width: 960px) {
    .post-list {
        &-ttl {
            font-size: 1.5rem;
        }
    }
}
</style>
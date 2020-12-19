<template>
    <div>
        <nuxt-link to="/card" class="bl-card">
            <figure class="bl-card-imgWrapper">
                <img :src="image" alt="" />
            </figure>
            <div class="bl-card-body">
                <h3 class="bl-card-ttl">{{ title }}</h3>
                <p class="bl-card-txt">
                    <slot>デフォルト</slot>
                </p>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        image: {
            type: String,
            default: require('~/assets/image/photo.jpg'),
        },
        title: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.bl-card {
    display: block;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    color: currentColor;
    text-decoration: none;
    transition: 0.25s;

    &:focus,
    &:hover {
        opacity: 0.75;
    }

    &-imgWrapper {
        position: relative;
        padding-top: 56.25%;
        overflow: hidden;

        & img {
            position: absolute;
            top: 50%;
            width: 100%;
            transform: translateY(-50%);
        }
    }

    &-body {
        padding: 15px;

        &*:last-child {
            margin-bottom: 0;
        }
    }

    &-ttl {
        margin-bottom: 5px;
        font-size: 1.125rem;
        font-weight: bold;
        transition: 0.25s;
    }

    &-txt {
        font-size: 0.875rem;
        color: #777;
        transition: 0.25s;
    }
}

// //560px以上はタブレット
@media screen and (min-width: 560px) {
    .bl-card {
        &-ttl {
            font-size: 1.5rem;
        }

        &-txt {
            font-size: 1rem;
        }
    }
}

// //960px以上はPC
@media screen and (min-width: 960px) {
    .bl-card {
        &-ttl {
            font-size: 1.75rem;
        }
    }
}
</style>
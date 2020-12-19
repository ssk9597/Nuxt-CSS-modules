<template>
    <div>
        <nuxt-link to="/card" class="bl-card">
            <b class="bl-card-badge">
                <span class="bl-card-badge-txt">{{ badgeName }}</span>
            </b>
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
    name: 'BadgeCard',
    props: {
        badgeName: {
            type: String,
            default: 'New',
        },
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

    &-badge {
        position: relative;

        &::after {
            content: '';
            position: absolute;
            z-index: 10;
            top: 0;
            left: 0;
            width: 0;
            height: 0;
            border-width: 3.75rem 3.75rem 0 0;
            border-style: solid;
            border-color: #e25c00 transparent transparent transparent;
        }

        &-txt {
            position: absolute;
            z-index: 20;
            top: 0.5rem;
            left: 0.3125rem;
            color: #fff;
            font-size: 0.875rem;
            font-weight: bold;
            transform: rotate(-45deg);
        }
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
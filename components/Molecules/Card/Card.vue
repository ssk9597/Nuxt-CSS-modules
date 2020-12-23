<template>
    <div class="card-wrapper">
        <div class="container" v-for="card in cardArray" :key="card.id">
            <nuxt-link :to="card.link" class="bl-card">
                <div v-show="card.badge">
                    <b class="bl-card-badge">
                        <span class="bl-card-badge-txt">{{ card.badgeName }}</span>
                    </b>
                </div>
                <figure class="bl-card-imgWrapper">
                    <img :src="card.image" alt="" />
                </figure>
                <div class="bl-card-body">
                    <h3 class="bl-card-ttl">{{ card.title }}</h3>
                    <p class="bl-card-txt">
                        {{ card.text }}
                    </p>
                </div>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BadgeCard',
    props: {
        cardArray: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.card-wrapper {
    margin-bottom: -40px;
}

.container {
    margin-bottom: 40px;
}

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
    .card-wrapper {
        display: flex;
        flex-wrap: wrap;
    }

    .container {
        flex-basis: calc((100% - 4%) / 2);
        margin-right: 4%;

        &:nth-of-type(2n) {
            margin-right: 0%;
        }
    }

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
    //3カラム
    .container {
        flex-basis: calc((100% - 8%) / 3);

        &:nth-of-type(2n) {
            margin-right: 4%;
        }

        &:nth-of-type(3n) {
            margin-right: 0%;
        }
    }

    //4カラム
    // .container {
    //     flex-basis: calc((100% - 12%) / 4);

    //     &:nth-of-type(2n) {
    //         margin-right: 4%;
    //     }

    //     &:nth-of-type(3n) {
    //         margin-right: 4%;
    //     }

    //     &:nth-of-type(4n) {
    //         margin-right: 0%;
    //     }
    // }

    .bl-card {
        &-ttl {
            font-size: 1.75rem;
        }
    }
}
</style>
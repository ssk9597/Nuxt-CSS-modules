<template>
    <div>
        <div class="bl-media">
            <figure class="bl-media-imgWrapper">
                <img :src="image" alt="" />
            </figure>
            <div class="bl-media-body">
                <h3 class="bl-media-ttl">{{ title }}</h3>
                <div class="bl-media-txt">
                    <slot>デフォルト</slot>
                    <div class="button">
                        <Button
                            name="標準ボタン"
                            link="/accordion"
                            btnColor="blue"
                            padding="padding: 10px"
                            icon="true"
                            iconName="arrow-right"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Atoms/Button/Button';

export default {
    components: {
        Button,
    },
    name: 'Media',
    props: {
        image: {
            type: String,
            default: require('~/assets/image/photo.jpg'),
        },
        title: {
            type: String,
            default: 'ユーザーを考えた設計で満足な体験を',
        },
    },
};
</script>

<style lang="scss" scoped>
.bl-media {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-imgWrapper {
        & img {
            width: 100%;
            margin-bottom: 24px;
        }
    }

    &-body {
        &*:last-child {
            margin-bottom: 0;
        }
    }

    &-ttl {
        margin-bottom: 10px;
        font-size: 1.125rem;
        font-weight: bold;
    }

    &-txt {
        font-size: 0.875rem;
    }

    & .button {
        margin-top: 20px;
        text-align: center;
    }
}

// //560px以上はタブレット
@media screen and (min-width: 560px) {
    .bl-media {
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
    .bl-media {
        flex-direction: row;

        &-imgWrapper {
            flex-basis: 48%;
            margin-right: 4%;

            & img {
                margin-bottom: 0;
            }
        }

        &-body {
            flex-basis: 48%;
        }

        &-ttl {
            font-size: 1.75rem;
        }

        & .button {
            text-align: left;
        }
    }
}
</style>
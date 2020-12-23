<template>
    <div>
        <dl class="faq" v-for="Faq in FaqArray" :key="Faq.id">
            <dt class="faq-q">
                <span class="faq-icon">Q</span>
                <span class="faq-txt">{{ Faq.title }}</span>
            </dt>
            <dd class="faq-a">
                <span class="faq-icon">A</span>
                <div class="faq-body">
                    <span class="faq-txt">
                        {{ Faq.body }}
                    </span>
                </div>
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
    name: 'Faq',
    props: {
        FaqArray: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.faq {
    margin-bottom: 16px;

    &:last-child {
        margin-bottom: 0;
    }
}

.faq-q,
.faq-a {
    position: relative;
    display: flex;
    align-items: flex-start;
    min-height: 30px;
    padding-left: 50px;
}

.faq-q {
    margin-bottom: 15px;
    font-weight: bold;

    & .faq-txt {
        line-height: 30px;
    }

    & .faq-icon {
        background: #ff4136;
        color: #fff;
    }
}

.faq-a {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ddd;

    & .faq-txt {
        font-size: 0.875rem;
        line-height: 30px;
        margin-bottom: 20px;
    }

    & .faq-icon {
        background: #aaaaaa;
        color: #fff;
    }
}

.faq-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    line-height: 30px;
    text-align: center;
    font-weight: normal;
}

// //560px以上はタブレット
@media screen and (min-width: 560px) {
    .faq {
        margin-bottom: 24px;
    }

    .faq-q,
    .faq-a {
        min-height: 45px;
        padding-left: 60px;
    }

    .faq-q {
        font-size: 1.125rem;

        & .faq-txt {
            line-height: 45px;
        }
    }

    .faq-a {
        & .faq-txt {
            font-size: 1rem;
            line-height: 45px;
        }
    }

    .faq-icon {
        width: 45px;
        height: 45px;
        line-height: 45px;
    }
}

// //960px以上はPC
@media screen and (min-width: 960px) {
}
</style>
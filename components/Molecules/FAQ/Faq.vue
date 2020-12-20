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
    margin-bottom: 24px;

    &:last-child {
        margin-bottom: 0;
    }
}

.faq-q,
.faq-a {
    position: relative;
    display: flex;
    align-items: flex-start;
    min-height: 45px;
    padding-left: 60px;
}

.faq-q {
    margin-bottom: 15px;
    font-size: 1.125rem;
    font-weight: bold;

    & .faq-txt {
        line-height: 45px;
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
        line-height: 45px;
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
    width: 45px;
    height: 45px;
    border-radius: 50%;
    line-height: 45px;
    text-align: center;
    font-weight: normal;
}
</style>
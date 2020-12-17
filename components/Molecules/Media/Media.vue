<template>
    <div>
        <div class="bl-media">
            <figure class="bl-media-imgWrapper">
                <img src="~/assets/image/photo.jpg" alt="" />
            </figure>
            <div class="bl-media-body">
                <h3 class="bl-media-ttl">ユーザーを考えた設計で満足な体験を</h3>
                <p class="bl-media-txt">
                    提供するサービスやペルソナによって、Webサイトの設計は異なります。サービスやペルソナに合わせた設計を行うことにより、訪問者にストレスのないより良い体験を産み出し、満足を高めることとなります<br />私たちはお客様のサイトに合ったユーザビリティを考えるため、分析やヒアリングをきめ細かく実施、満足を体験できるクリエイティブとテクノロジーを設計・構築し、今までにない期待を超えたユーザー体験を提供いたします。
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bl-media {
    display: flex;
    align-items: center;

    &-imgWrapper {
        flex: 0 1 27.58333%;
        margin-right: 3.33333%;

        & img {
            width: 100%;
        }
    }

    &-body {
        flex: 1;

        &*:last-child {
            margin-bottom: 0;
        }
    }

    &-ttl {
        margin-bottom: 10px;
        font-size: 1.125rem;
        font-weight: bold;
    }
}

@media screen and (max-width: 768px) {
    .bl-media {
        display: block;

        &-imgWrapper {
            margin-right: 0;
            margin-bottom: 20px;
        }
    }
}
</style>
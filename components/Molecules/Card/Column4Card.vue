<template>
    <div>
        <div class="bl-cardUnit col4">
            <!-- 1つ目 -->
            <div class="bl-card">
                <figure class="bl-card-imgWrapper">
                    <img src="~/assets/image/photo.jpg" alt="" />
                </figure>
                <div class="bl-card-body">
                    <h3 class="bl-card-ttl">ユーザーを考えた設計で満足な体験を</h3>
                    <p class="bl-card-txt">
                        提供するサービスやペルソナによって、Webサイトの設計は異なります。サービスやペルソナに合わせた設計を行うことにより、訪問者にストレスのないより良い体験を産み出し、満足を高めることとなります<br />私たちはお客様のサイトに合ったユーザビリティを考えるため、分析やヒアリングをきめ細かく実施、満足を体験できるクリエイティブとテクノロジーを設計・構築し、今までにない期待を超えたユーザー体験を提供いたします。
                    </p>
                </div>
            </div>
            <!-- 2つ目 -->
            <div class="bl-card">
                <figure class="bl-card-imgWrapper">
                    <img src="~/assets/image/photo.jpg" alt="" />
                </figure>
                <div class="bl-card-body">
                    <h3 class="bl-card-ttl">ユーザーを考えた設計で満足な体験を</h3>
                    <p class="bl-card-txt">
                        提供するサービスやペルソナによって、Webサイトの設計は異なります。サービスやペルソナに合わせた設計を行うことにより、訪問者にストレスのないより良い体験を産み出し、満足を高めることとなります<br />私たちはお客様のサイトに合ったユーザビリティを考えるため、分析やヒアリングをきめ細かく実施、満足を体験できるクリエイティブとテクノロジーを設計・構築し、今までにない期待を超えたユーザー体験を提供いたします。
                    </p>
                </div>
            </div>
            <!-- 3つ目 -->
            <div class="bl-card">
                <figure class="bl-card-imgWrapper">
                    <img src="~/assets/image/photo.jpg" alt="" />
                </figure>
                <div class="bl-card-body">
                    <h3 class="bl-card-ttl">ユーザーを考えた設計で満足な体験を</h3>
                    <p class="bl-card-txt">
                        提供するサービスやペルソナによって、Webサイトの設計は異なります。サービスやペルソナに合わせた設計を行うことにより、訪問者にストレスのないより良い体験を産み出し、満足を高めることとなります<br />私たちはお客様のサイトに合ったユーザビリティを考えるため、分析やヒアリングをきめ細かく実施、満足を体験できるクリエイティブとテクノロジーを設計・構築し、今までにない期待を超えたユーザー体験を提供いたします。
                    </p>
                </div>
            </div>
            <!-- 4つ目 -->
            <div class="bl-card">
                <figure class="bl-card-imgWrapper">
                    <img src="~/assets/image/photo.jpg" alt="" />
                </figure>
                <div class="bl-card-body">
                    <h3 class="bl-card-ttl">ユーザーを考えた設計で満足な体験を</h3>
                    <p class="bl-card-txt">
                        提供するサービスやペルソナによって、Webサイトの設計は異なります。サービスやペルソナに合わせた設計を行うことにより、訪問者にストレスのないより良い体験を産み出し、満足を高めることとなります<br />私たちはお客様のサイトに合ったユーザビリティを考えるため、分析やヒアリングをきめ細かく実施、満足を体験できるクリエイティブとテクノロジーを設計・構築し、今までにない期待を超えたユーザー体験を提供いたします。
                    </p>
                </div>
            </div>
            <!-- 5つ目 -->
            <div class="bl-card">
                <figure class="bl-card-imgWrapper">
                    <img src="~/assets/image/photo.jpg" alt="" />
                </figure>
                <div class="bl-card-body">
                    <h3 class="bl-card-ttl">ユーザーを考えた設計で満足な体験を</h3>
                    <p class="bl-card-txt">
                        提供するサービスやペルソナによって、Webサイトの設計は異なります。サービスやペルソナに合わせた設計を行うことにより、訪問者にストレスのないより良い体験を産み出し、満足を高めることとなります<br />私たちはお客様のサイトに合ったユーザビリティを考えるため、分析やヒアリングをきめ細かく実施、満足を体験できるクリエイティブとテクノロジーを設計・構築し、今までにない期待を超えたユーザー体験を提供いたします。
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bl-cardUnit {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: -20px;
}
.col4 {
    margin-bottom: -20px;
}
.bl-card {
    width: 23.78%;
    margin-right: 1.62602%;
    margin-bottom: 20px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

    &:nth-of-type(4n) {
        margin-right: 0;
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
    }

    &-txt {
        color: #777;
    }
}

@media screen and (max-width: 768px) {
    .bl-cardUnit {
        margin-bottom: -20px;

        & .bl-card {
            width: 100%;
            margin-bottom: 20px;
            margin-right: 0;
        }
    }
}
</style>
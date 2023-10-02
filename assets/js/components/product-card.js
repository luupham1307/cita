class ProductCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="product-card-item gap-10">
                <img class="product-card-img" src="./assets/image/product-detail/tra-sua.png" alt="">
                <p class="product-card-name">Thực Phẩm Bổ Sung Bánh gạo Gerber...</p>
                <div class="flex gap-8">
                    <div class="flex">
                        <img class="icon-xs" src="./assets/image/product-detail/yello-star.svg" class="" alt="">
                        <img class="icon-xs" src="./assets/image/product-detail/yello-star.svg" class="" alt="">
                        <img class="icon-xs" src="./assets/image/product-detail/yello-star.svg" class="" alt="">
                        <img class="icon-xs" src="./assets/image/product-detail/yello-star.svg" class="" alt="">
                        <img class="icon-xs" src="./assets/image/product-detail/yello-star.svg" alt="">
                    </div>
                    <p>(1.1k)</p>
                </div>
                <h5>86.000đ</h5>
            </div>
        `;
    }
}

customElements.define('productcard-component', ProductCard);

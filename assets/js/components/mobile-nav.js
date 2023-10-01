class MobileNav extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <nav class="content-container flex text-grey mobile-nav">
            <a class="mobile-navlink" href="">
                <img src="./assets/image/navbar/mobile-home.svg" alt="">
                <p>Trang chủ</p>
            </a>
            <a class="mobile-navlink" href="">
                <img src="./assets/image/navbar/mobile-search.svg" alt="">
                <p>Tìm kiếm</p>
            </a>
            <a class="mobile-navlink" href="">
                <img src="./assets/image/navbar/mobile-cart.svg" alt="">
                <p>Giỏ hàng</p>
            </a>
            <a class="mobile-navlink" href="">
                <img src="./assets/image/navbar/mobile-user.svg" alt="">
                <p>Cá nhân</p>
            </a>
        </nav>
        `;
    }
}

customElements.define('mobilenav-component', MobileNav);

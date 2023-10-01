class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav class="text-white desktop-nav">
            <div class="content-container flex top-bar text-sm">
                <div class="flex">
                    <img src="./assets/image/navbar/customer-service.svg" alt="">
                    <p>Tổng đài hỗ trợ: <span class="font-semibold">0907950255</span></p>
                </div>
                <div class="flex">
                    <img src="./assets/image/navbar/map-pin-2.svg" alt="">
                    <p>Giao đến <span class="font-semibold">Quận 1, TP. Hồ Chí Minh</span></p>
                </div>
                <div class="flex">
                    <img src="./assets/image/navbar/user.svg" alt="">
                    <div class="flex font-semibold">
                        <a href="">Đăng ký</a>
                        <span>/</span>
                        <a href="">Đăng nhập</a>
                    </div>
                </div>
            </div>
            <div class="content-container main-bar flex">
                <div>
                    <img src="./assets/image/navbar/Logo-full1.svg" alt="">
                </div>
                <div class="search-input-container">
                    <input type="text" placeholder="Bạn tìm gì...">
                    <button type="submit" class="search-btn">
                        <img src="./assets/image/navbar/search-icon.svg" alt="">
                    </button>
                </div>
                <div class="flex cart-noti-icon">
                    <a href="">
                        <img class="nav-main-bar-icons" src="./assets/image/navbar/cart.svg" alt="">
                        <p>Giỏ hàng</p>
                    </a>
                    <a href="">
                        <img class="nav-main-bar-icons" src="./assets/image/navbar/notification-3.svg" alt="">
                        <p>Ưu đãi</p>
                    </a>
                </div>
            </div>
        </nav>
        `;
    }
}

customElements.define('navbar-component', Navbar);

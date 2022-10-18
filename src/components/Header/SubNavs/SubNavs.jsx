import s from './SubNavs.module.css'

let SubNavs = {
    Mens: () => {
        return (
            <div>
                <div className={s.subNavContent}>
                    <div className={s.contentArea}>
                        <div className={s.menuCategories}>
                            <div className={s.categories}>
                                <div className={s.category}>SHOP BY PRODUCT</div>
                                <div className={s.item}>T-shirts & Tops</div>
                                <div className={s.item}>Trousers</div>
                                <div className={s.item}>Jeans</div>
                                <div className={s.item}>Hoodies & Sweatshirts</div>
                                <div className={s.item}>Basics</div>
                            </div>
                            <div className={s.categories}>
                                <div className={s.category}>TRENDING NOW</div>
                                <div className={s.item}>Shackets</div>
                                <div className={s.item}>Music, Movies & Logos</div>
                                <div className={s.item}>Bestsellers</div>
                            </div>
                        </div>
                        <div className={s.banner}>
                            <div className={s.text}>
                                <h1><b>MENS SALE</b></h1>
                                <h1>UP TO 30% OFF</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },

    Womens: () => {
        return (
            <div>
                <div className={s.subNavContent}>
                    <div className={s.contentArea}>
                        <div className={s.menuCategories}>
                            <div className={s.categories}>
                                <div className={s.category}>NEW ARRIVALS</div>
                                <div className={s.item}>View All</div>
                                <div className={s.item}>Clothes</div>
                                <div className={s.item}>Shoes & Accessories</div>
                                <div className={s.item}>Sportswear</div>
                                <div className={s.item}>Beauty</div>
                            </div>
                            <div className={s.categories}>
                                <div className={s.category}>TRENDING NOW</div>
                                <div className={s.item}>Bestsellers</div>
                                <div className={s.item}>Glam Season</div>
                                <div className={s.item}>Autumn must-haves</div>
                                <div className={s.item}>Teddy & Shearling</div>
                                <div className={s.item}>Puffer jackets</div>
                                <div className={s.item}>Halloween</div>
                            </div>
                        </div>
                        <div className={s.banner}>
                            <div className={s.text}>
                                <h1><b>WOMEN SALE</b></h1>
                                <h1>UP TO 70% OFF</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },

    Brand: () => {
        return (
            <div>
                <div className={s.subNavContent}>
                    <div className={s.contentArea}>
                        <div className={s.menuCategories}>
                            <div className={s.categories}>
                                <div className={s.category}>SPORT</div>
                                <div className={s.item}>Nike</div>
                                <div className={s.item}>Adidas</div>
                                <div className={s.item}>New balance</div>
                                <div className={s.item}>Puma</div>
                                <div className={s.item}>Reebok</div>
                            </div>
                            <div className={s.categories}>
                                <div className={s.category}>BASIC</div>
                                <div className={s.item}>H&M</div>
                                <div className={s.item}>Pull & Bear</div>
                                <div className={s.item}>Zara</div>
                                <div className={s.item}>Reserved</div>
                                <div className={s.item}>Bershka</div>
                            </div>
                        </div>
                        <div className={s.banner}>
                            <div className={s.text}>
                                <h1><b>NIKE SALE</b></h1>
                                <h1>UP TO 40% OFF</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },

    LocalStories: () => {
        return (
            <div>
                <div className={s.subNavContent}>
                    <div className={s.contentArea}>
                        <div className={s.menuCategories}>
                            <div className={s.categories}>
                                <div className={s.category}>CASUALS</div>
                                <div className={s.item}>Jackets</div>
                                <div className={s.item}>Hoodies & Sweaters</div>
                                <div className={s.item}>Polo Sweatshirt</div>
                                <div className={s.item}>Sportswear</div>
                                <div className={s.item}>Trousers & Chinos</div>
                                <div className={s.item}>T-shirts</div>
                            </div>
                            <div className={s.categories}>
                                <div className={s.category}>FORMAL</div>
                                <div className={s.item}>Jackets</div>
                                <div className={s.item}>Shirts</div>
                                <div className={s.item}>Suits</div>
                                <div className={s.item}>Trousers</div>
                            </div>
                        </div>
                        <div className={s.banner}>
                            <div className={s.text}>
                                <h1><b>AUTUMN SALE</b></h1>
                                <h1>UP TO 50% OFF</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },

    Lookbook: () => {
        return (
            <div>
                <div className={s.subNavContent}>
                    <div className={s.contentArea}>
                        <div className={s.menuCategories}>
                            <div className={s.categories}>
                                <div className={s.category}>CATEGORY 1</div>
                                <div className={s.item}>Lookbook 1</div>
                                <div className={s.item}>Lookbook 2</div>
                                <div className={s.item}>Lookbook 3</div>
                                <div className={s.item}>Lookbook 4</div>
                                <div className={s.item}>Lookbook 5</div>
                                <div className={s.item}>Lookbook 6</div>
                                <div className={s.item}>Lookbook 7</div>
                                <div className={s.item}>Lookbook 8</div>
                                <div className={s.item}>Lookbook 9</div>
                            </div>
                            <div className={s.categories}>
                                <div className={s.category}>CATEGORY 2</div>
                                <div className={s.item}>Lookbook 1</div>
                                <div className={s.item}>Lookbook 2</div>
                                <div className={s.item}>Lookbook 3</div>
                                <div className={s.item}>Lookbook 4</div>
                                <div className={s.item}>Lookbook 5</div>
                                <div className={s.item}>Lookbook 6</div>
                                <div className={s.item}>Lookbook 7</div>
                                <div className={s.item}>Lookbook 8</div>
                                <div className={s.item}>Lookbook 9</div>
                            </div>
                        </div>
                        <div className={s.banner}>
                            <div className={s.text}>
                                <h1><b>LOOKBOOK SALE</b></h1>
                                <h1>UP TO 20% OFF</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
}


export default SubNavs;

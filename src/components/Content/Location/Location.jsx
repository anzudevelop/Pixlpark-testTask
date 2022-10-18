import s from './Location.module.css'


function Location() {
    return (
        <div>
            <div className={s.cities}>
                <div className={s.city}>
                    <div className={s.title}>LONDON</div>
                    <div className={s.address}>180-182 Regent Street, London, W1B 5BT</div>
                    <div className={s.description}>Lorem ipsum dolor sit amet, consectetur adipiscing esi elit. Viorem ipsum dolor sit amet,
                        consectetur adipiscing esi elit. Viorem ipsum dolor sit amet, consectetur adipiscing esi elit. Viorem ipsum dolor sit amet,
                        consectetur adipiscing esi elit. Viorem ipsum dolor sit amet, consectetur adipiscing esi elit. Viorem ipsum dolor sit amet,
                    </div>
                    <div className={s.buttonViewDetails}>
                        <button>VIEW DETAILS</button>
                    </div>
                </div>
                <div className={s.city}>
                    <div className={s.title}>NEW YORK</div>
                    <div className={s.address}>109 Columbus Circle, New York, NY 10023</div>
                    <div className={s.description}>Nunc non posuere nisl. Etiam finibus vel dui nec lobortis. Aliqc non posuere. Aliqc non posuere.
                        Nunc non posuere nisl. Etiam finibus vel dui nec lobortis. Aliqc non posuere. Aliqc non posuere.
                        Nunc non posuere nisl. Etiam finibus vel dui nec lobortis. Aliqc non posuere. Aliqc non posuere.
                    </div>
                    <div className={s.buttonViewDetails}>
                        <button>VIEW DETAILS</button>
                    </div>
                </div>
                <div className={s.city}>
                    <div className={s.title}>PARIS</div>
                    <div className={s.address}>2133 Rue Saint-Honoré, 75001 Paris</div>
                    <div className={s.description}>Ut interdum fermentum blandit. Donec nec lacus egetit mi rhoncurdum fermentum blantum blandit.
                        Ut interdum fermentum blandit. Donec nec lacus egetit mi rhoncurdum fermentum blantum blandit.
                        Ut interdum fermentum blandit. Donec nec lacus egetit mi rhoncurdum fermentum blantum blandit.
                    </div>
                    <div className={s.buttonViewDetails}>
                        <button>VIEW DETAILS</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Location;

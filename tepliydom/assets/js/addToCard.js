const goods = [
    {
        id: 0,
        name: "Клей универсальный",
        description: "Высокопрочный клей на основе цементных вяжущих для внутреннего и наружного применения, используется для укладки тяжелых строительных материалов (керамогранитные плиты, натуральный камень, габаритные плиты)-Состав сухой смеси, и специальные модифицированные добавки обеспечивают повышенную прочность сцепления соединяемых (укладываемых изделий, материалов), высокую устойчивость к воздействию атмосферных условий и механических нагрузок.",
        price: 850,
        image: "blue.jpeg"
    },
    {
        id: 1,
        name: "Универсальная песчано-цементная смесь",
        description: "Смесь приготовлена из высококачественного из цемента ПЦ-400 Д 20. сухого фракционированного песка с добавлением минерального наполнителя, значительно улучшающего свойства смеси. Сухая строительная смесь на цементной основе для внутренних и наружных работ.",
        price: 550,
        image: "red.jpeg"
    },
    {
        id: 2,
        name: "Гипсовая смесь FINISH",
        description: "Cухая штукатурная смесь на гипсовой основе для выполнения внутренних работ. Предназначена для финишной (окончательной) отделки стен и потолков с целью получения высококачественной поверхности под покраску, оклейку обоями и другие виды декоративной отделки.        ",
        price: 1400,
        image: "purple.jpeg"
    },
    {
        id: 3,
        name: "Гипсовая смесь теплоизоляционная",
        description: "Штукатурная смесь на основе гипса применяется для высококачественного оштукатурования потолков и стен для внутренней отделки помещений различного назначения. Используется по кирпичной кладке, бетонным, пенебетонным и гипсовым основаниям. Для ручного и машинного применения.",
        price: 1250,
        image: "green.jpeg"
    },
    {
        id: 4,
        name: "Гипсовая штукатурка",
        description: "Гипсовая штукатурка гипсового вяжущего с лёгким заполнителем и полимерными добавками, обеспечив ающими повышенную адгезию. Предназначена для высококачественного оштукатуривания вручную потолков и стен с обычным твердым основанием (бетон, кирпич, цементная штукатурка), а также поверхностей из пенополистирола, пазогребневых плит, ЦСП, внутри помещений с нормальной влажностью, а также в кухнях и ванных комнатах (с покрытием обеспечивающим защиту от увлажнения).Особенно рекомендуется для гладких бетонных потолочных и стеновых поверхностей.",
        price: 1050,
        image: "brown.jpeg"
    }
]

class renderedShop {

    constructor() {
        this.goods = goods
        this.list = document.getElementById("list")
        this.storage = JSON.parse(localStorage.getItem("card"))
    }


    allGoods() {
        this.goods.forEach(item => {
            this.list.innerHTML += `
                <div class="slider-products_page-item">
                    <button class="cart__add btn" data-id="${item.id}" onclick="render.addToCard(${item.id})">+</button>
                    <div class="slider-products-content-item"><img src="assets/img/${item.image}" alt=""></div>
                    <div class="column">
                        <h1 class="slider-products_page-item__title">${item.name}</h1>
                        <p class="slider-products_page-item__desc">${item.description}</p>
                    </div>
                    <p class="slider-products_page-item__price">Цена: ${item.price} KZT</p>
                </div>
            `
        })

        this.hasCards()
    }


    addToCard(id) {
        const index = this.goods.findIndex(x => x.id === id)
        const modifyGood = { ...this.goods[index], count: 1 }

        console.log(localStorage.getItem("card"))
        if (!this.storage) {
            this.setCardStorage([modifyGood])
            location.reload()
        } else {
            const findDuplicates = this.storage.findIndex(x => x.id === modifyGood.id)

            if (findDuplicates > -1) {
                this.storage[findDuplicates].count += 1
            } else {
                this.storage.push(modifyGood)
            }

            this.setCardStorage(this.storage)
        }

        this.hasCards()
        location.reload()
    }


    hasCards() {
        if (this.storage) {
            document.querySelector("#number").innerHTML = this.storage.length
        }
    }


    allCardGoods() {
        const cardsGoods = document.querySelector("#storage-list")
        let items = ""

        if (this.storage.length > 0) {
            this.storage.forEach(good => {
                items += `
                    <div class="slider-products_page-item">
                        <div class="quantity">
                            <input type="number" class="quantity-val" min="1" value="${good.count}" name="quantity" onchange="render.countWatcher(${good.id}, this)" />
                        </div>
                        <button class="cart__add btn" onclick="render.removeFromCard(${good.id})">-</button>
                        <div class="slider-products-content-item"><img src="assets/img/${good.image}" alt=""></div>
                        <div class="column">
                            <h1 class="slider-products_page-item__title">${good.name}</h1>
                        </div>
                        <p class="slider-products_page-item__price">Цена: ${good.price} KZT</p>
                    </div>
                `
            })
        }

        cardsGoods.innerHTML = items
        items = ""
    }


    removeFromCard(id) {
        const goodIndex = this.storage.findIndex(x => x.id === id)
        
        if (goodIndex > -1) {
            if (this.storage.length === 1) {
                this.setCardStorage([])
                location.reload()
            } else {
                const newStorage = this.storage.splice(goodIndex, 1)
                this.setCardStorage(newStorage)
            }

            this.allCardGoods()
        }

        this.hasCards()
    }

    countWatcher(id, that) {
        const findDuplicates = this.storage.findIndex(x => x.id === id)
        
        this.storage[findDuplicates].count = that.value
        this.setCardStorage(this.storage)
    }

    async sendForm() {
        let text = ""

        const formData = new FormData()
        const storage = JSON.parse(localStorage.getItem('card')) || []
        const name = document.querySelector("input[name='name']").value
        const phone = document.querySelector("input[name='phone']").value
        const email = document.querySelector("input[name='email']").value
        const total = storage.reduce((a, b) => { return a + b.price }, 0)

        for (let item of storage) {
            text += `%0A ${item.name} : ${item.count}`
        }

        formData.append("name", name)
        formData.append("phone", phone)
        formData.append("email", email)
        formData.append("goods", text)
        formData.append("total", `${total} KZT`)

        document.querySelector(".success").classList.add("show")

        const response = await fetch("send.php", { method: "POST", body: formData })
        .then(() => {
            setTimeout(() => {
                document.querySelector(".success").classList.remove("show")
            }, 1000)

            this.setCardStorage([])
            location.reload()
        })
    }


    setCardStorage(value) {
        localStorage.setItem("card", JSON.stringify(value))
    }
}


const render = new renderedShop()
render.allGoods()
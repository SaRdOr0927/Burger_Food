const foods = {
    plainBurger: {
        name: "GAMBURGER",
        price: 10000,
        amount: 0,
        kcall: 400,
        get calcSum() {
            return this.price * this.amount
        },
        get kcallSum() {
            return this.amount * this.kcall
        }
    },
    freshBurger: {
        name: "GAMBURGER FRESH",
        price: 20900,
        amount: 0,
        kcall: 500,
        get calcSum() {
            return this.price * this.amount
        },
        get kcallSum() {
            return this.amount * this.kcall
        }
    },
    freshCombo: {
        name: "FRESH COMBO",
        price: 31900,
        amount: 0,
        kcall: 600,
        get calcSum() {
            return this.price * this.amount
        },
        get kcallSum() {
            return this.amount * this.kcall
        }
    },
}

// console.log(foods.plainBurger['amount'])

let elBtn = [...document.querySelectorAll('.main__product-btn')]

// console.log(elBtn)

for (let i = 0; i < elBtn.length; i++) {
    elBtn[i].addEventListener('click',function() {
        // console.log(this.closest(".main__product").getAttribute('id'))
        prepare(this);
    })
    
}

function prepare(btn) {
    // console.log(btn)
    let parent = btn.closest(".main__product")
    // console.log(parent)
    let parentId = parent.getAttribute('id');
    console.log(parentId)
    let price = parent.querySelector(".main__product-price span")
    let kcall = parent.querySelector('.main__product-kcall span')
    let sym = btn.getAttribute('data-symbol')
    let num = parent.querySelector('.main__product-num')

    let count = foods[parentId].amount
    console.log(count)
    
    if(sym == "+"){
        count++
    }else if(sym == "-" && count > 0){
        count--
    }

    foods[parentId].amount = count
    num.innerHTML = count
    price.innerHTML = foods[parentId].calcSum
    kcall.innerHTML = foods[parentId].kcallSum
}

let count = document.querySelector('.header__timer-extra');
let stop;

function lvl() {
    count.innerHTML++;

    if(count.innerHTML < 90){
        stop = setTimeout(() => {
            lvl()
        },20) 
        
    }else if(count.innerHTML < 95){
        stop = setTimeout(() => {
            lvl()
        },150) 
    }else if(count.innerHTML < 100){
        stop = setTimeout(() => {
            lvl()
        },400)
    }
}
lvl()


let addCart =  document.querySelector('.addCart')
let receipt =  document.querySelector('.receipt')
let receiptWindow =  document.querySelector('.receipt__window')
let receiptWindowOut =  document.querySelector('.receipt__window-out')
let receiptWindowBtn =  document.querySelector('.receipt__window-btn')


addCart.addEventListener('click',() => {
    receipt.style.display = 'block'
    setTimeout(() => {
        receipt.style.opacity = 1
        receiptWindow.style.top = "20%";

    },200)

    let menu = "Sizning chekingiz: \n\n";
    let totalPrice = 0;
    let totalKcall = 0;

    for (const foodKey in foods) {
        menu = menu + `${foods[foodKey].name} ${foods[foodKey].amount}X ${foods[foodKey].pricet} = ${foods[foodKey].calcSum}sum\n\n`
        totalPrice = totalPrice + foods[foodKey].calcSum
        totalKcall = totalKcall + foods[foodKey].kcallSum
    }

    receiptWindowOut.innerHTML = `${menu} \n\n Jami summa: ${totalPrice}sum \n\n Jami kaloriya: ${totalKcall}`


    receiptWindowBtn.addEventListener("click", function () {
        if(event.target == event.currentTarget){
            receipt.style.opacity = 0;
            receiptWindow.style.top = "-100%";
            setTimeout(() => {
                receipt.style.display = 'none'
                location.reload()
            },400)
        }
    });
    
})
receipt.addEventListener('click',function(event){
    if(event.target == event.currentTarget){
        receipt.style.opacity = 0;
        receiptWindow.style.top = "-100%";
        setTimeout(() => {
            receipt.style.display = 'none'
            location.reload()
        },400)
    }
})

let View  =  document.querySelector('.view ')
let MainProductiInfo  =  document.querySelector('#info')
let MainProductiInfo2  =  document.querySelector('#info2')
let MainProductiInfo3  =  document.querySelector('#info3')
let BurgerImg  =  document.querySelector('.BurgerImg ')
let ViewClose  =  document.querySelector('.view__close')

let ImgBurger  =  document.querySelector('.imgburger ')
let ImgBurger2  =  document.querySelector('.imgcamburger ')
let ImgBurger3  =  document.querySelector('.imgcambo ')


MainProductiInfo.addEventListener('click',() => {
    
    ImgBurger.style.display = 'none'
    ImgBurger2.style.display = 'block'
    ImgBurger3.style.display = 'none'
    setTimeout(() => {
        View.style.opacity = 1;
        View.style.top = "-0%";
        
    },200)

    
    ViewClose.addEventListener("click", function () {
        location.reload()
    });
    
})

MainProductiInfo2.addEventListener('click',() => {
    
    ImgBurger.style.display = 'block'
    ImgBurger2.style.display = 'none'
    ImgBurger3.style.display = 'none'
    setTimeout(() => {
        View.style.opacity = 1;
        View.style.top= "-0%";
        
    },200)

    
    ViewClose.addEventListener("click", function () {
        location.reload()
    });
    
})


MainProductiInfo3.addEventListener('click',() => {
    
    ImgBurger.style.display = 'none'
    ImgBurger2.style.display = 'none'
    ImgBurger3.style.display = 'block'
    setTimeout(() => {
        View.style.opacity = 1;
        View.style.top = "-0%";
        
    },200)

    
    ViewClose.addEventListener("click", function () {
        location.reload()
    });
    
})


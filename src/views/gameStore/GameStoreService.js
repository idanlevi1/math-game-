export const buy = async(item,userStore) =>{
    switch (item.type) {
        case 'stars':
            await buyStars(item,userStore)
            break;
        case 'time':
            await buyTime(item,userStore)
            break;
        default:
            break;
    }
}

const buyStars = async(item,userStore) =>{
    userStore.addStars(item.amount)
    userStore.addCoins(-item.price)
    userStore.addToShoppingData(item.amount,item.price,'stars')
}

const buyTime = async(item,userStore) =>{
    userStore.addCoins(-item.price)
    userStore.addToShoppingData(item.amount,item.price,'time')
}

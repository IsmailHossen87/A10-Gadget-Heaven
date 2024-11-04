const getStoreCart= ()=>{
    const storecartStringify = localStorage.getItem('cart')
    if(storecartStringify){
        return JSON.parse(storecartStringify)
    }else{
        return []
    }
}
const  saveCart = (id)=>{
    const storedList = getStoreCart()
    if(storedList.includes(id)){
        alert('already added the data')
    }else{
        storedList.push(id)
        const stringyCart = JSON.stringify(storedList)
        localStorage.setItem('cart',stringyCart)
    }
}
export {getStoreCart,saveCart};
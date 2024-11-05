// import { toast } from "react-toastify"

// const getStoreCart= ()=>{
//     const storecartStringify = localStorage.getItem('cart')
//     if(storecartStringify){
//         return JSON.parse(storecartStringify)
//     }else{
//         return []
//     }
// }
// const  saveCart = (id)=>{
//     const storedList = getStoreCart()
//     if(storedList.includes(id)){
//         toast.warning('Already added the item!',{
//             position:'top-center',
//             autoClose:1200
//           })
//     }else{
        
//         storedList.push(id)
//         const stringyCart = JSON.stringify(storedList)
//         localStorage.setItem('cart',stringyCart) 
//     }
// }
// export {getStoreCart,saveCart};
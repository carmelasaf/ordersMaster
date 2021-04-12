import { 
    GET_ALL_PRODUCTS, 
    GET_ORDERS, 
    GET_PRODUCTS_BY_SUPPLIER_ID, 
    GET_SUPPLIERS, 
    GET_USERS 
} from "./serviceApiConstants";

/**
 * Get all users orders
 * @returns @see baseFetch()
 */
 const getOrders=async()=> {
    return baseFetch(GET_ORDERS)
}

/**
 * Get all users
 * @returns @see baseFetch()
 */
const getUsers=async()=> {
    return baseFetch(GET_USERS)
}

/**
 * Get all suppliers
 * @returns @see baseFetch()
 */
async function getSuppliers() {
    return baseFetch(GET_SUPPLIERS)
}

/**
 * get all products
 * @returns @see baseFetch()
 */
async function getProducts() {
    return baseFetch(GET_ALL_PRODUCTS)
}

/**
 * get product by supplier id
 * @param {Int8Array} id 
 * @returns @see baseFetch()
 */
async function getProductsBySupplierId(id) {
    return baseFetch(GET_PRODUCTS_BY_SUPPLIER_ID(id))
}

/**
 * service api base fetch function
 * @param {String} url 
 * @returns Success Object json
 * @returns Error String 
 */
 async function baseFetch(url){
    console.log("FETCH URL :" + url)
    try {
        let response = await fetch(url);
        let responseJson = await response.json();
        // console.log("FETCH Success: " + JSON.stringify(responseJson))
        return responseJson;
    } catch (error) {
        console.log("FETCH ERROR: " + error)
        console.error(error);
        return error
    }
}

export {getUsers, getSuppliers, getProducts, getProductsBySupplierId}
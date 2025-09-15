import axios from 'axios';
const url ='http://localhost:3001/products';
 
const ProductService = {
    getProducts(){
        return axios.get(url);
    },
 
    getProductById(id)
    {
        return axios.get(url + '/' + id);
    },
 
    addProduct(product)
    {
        return axios.post(url, product);
    },
 
    deleteProduct(id)
    {
        return axios.delete(url + '/' + id);
    },
 
    updateProduct(id, product)
    {
        return axios.put(url + '/' + id, product);
    },

    loginAdmin(creds)
    {
        return axios.post('http://localhost:3001/admin/login', creds)
    },

    getDeliveryPartners() {
        return axios.get("/delivery-partners");
    },
    addDeliveryPartner(partner) {
        return axios.post("/delivery-partners", partner);
    },
    deleteDeliveryPartner(id) {
        return axios.delete(`/delivery-partners/${id}`);
    },
    updateDeliveryPartner(id, partner) {
        return axios.put(`/delivery-partners/${id}`, partner);
    },
}
 
export default ProductService;
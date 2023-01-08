import axios from 'axios';
import BaseUrl from './baseUrl';
const baseUrl = BaseUrl();

export default new(class Payment_Service{
        StripePay(data){
            return axios.post(`${baseUrl}/payment/stripe`,data);
        }
})
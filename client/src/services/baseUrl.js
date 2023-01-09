function BaseUrl() {
  return process.env.REACT_APP_NEXT_PUBLIC_REST_API_ENDPOINT || "https://react-payment.onrender.com";
  
}

export default BaseUrl
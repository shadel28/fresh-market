import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const loginCustomer = async ({ customerCredentials }) => {
  const response = await axios.post("/login-customer/", customerCredentials);
  console.log("aqui ", response.data);
  return response.data;
};

export const useLoginCustomer = () => {
  const navigateTo = useNavigate();
  return useMutation({
    mutationFn: loginCustomer,
    onSuccess: (data) => {
      console.log("hey ", data);
      navigateTo("/home");
    },
    onError: (error) => {
      console.error("Error en la solicitud:", error);
      navigateTo("/");
    },
  });
};

export const registerCustomer = async ({ customerData }) => {
  const response = await axios.post("/register-customer", customerData);
  console.log("registro ", response.data);
  return response.data;
};

export const useRegisterCustomer = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: registerCustomer,
    onSuccess: (data) => {
      console.log("registro data ", data);
      navigate("/home");
    },
    onError: (error) => {
      console.log("registro error data  ", error);
      navigate("/register");
    },
  });
};

// PRODUCTS

const getProducts = async () => {
  const response = await axios.get("/products/");
  return response.data;
};

export const useGetProducts = () => {
  return useQuery({
    queryFn: getProducts,
    onError: (error) => {
      console.log("Error consultando productos ", error);
    },
  });
};

const sendPayment = async ({ paymentInfo }) => {
  console.log("paymentInfo ", paymentInfo);
  const response = await axios.post("/payment/", paymentInfo);
  console.log("sendPayment ", response.data);
  return response.data;
};

export const useSendPayment = () => {
  return useMutation({
    mutationFn: sendPayment,
    onError: (error) => {
      console.log("Error creando el pago ", error);
    },
  });
};

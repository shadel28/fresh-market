import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const loginCustomer = async ({ customerCredentials }) => {
  const response = await axios.post("/login-customer/", customerCredentials);
  return response.data;
};

export const useLoginCustomer = () => {
  const navigateTo = useNavigate();
  return useMutation({
    mutationFn: loginCustomer,
    onSuccess: (data) => {
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
  return response.data;
};

export const useRegisterCustomer = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: registerCustomer,
    onSuccess: (data) => {
      navigate("/home");
    },
    onError: (error) => {
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
  const response = await axios.post("/payment/", paymentInfo);
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

export const loginEmployee = async ({ employeeCredentials }) => {
  const response = await axios.post("/login-employee/", employeeCredentials);
  return response.data;
};

export const useLoginEmployee = () => {
  const navigateTo = useNavigate();
  return useMutation({
    mutationFn: loginEmployee,
    onSuccess: (data) => {
      navigateTo("/inventory");
    },
    onError: (error) => {
      console.error("Error en la solicitud:", error);
      navigateTo("/");
    },
  });
};

// Proveedores

const getSuppliers = async () => {
  const response = await axios.get("/suppliers");
  return response.data;
};

export const useGetSuppliers= () => {
  return useQuery({
    queryFn: getSuppliers,
    onError: (error) => {
      console.log("Error consultando proveedores", error);
    },
  });
};
/*
export const addSupplier = async ({ supplierData }) => {
  const response = await axios.post("/addSupplier")
  return response.data;
}

export const useAddSupplier= () => {
  return useQuery({
    queryFn: addSupplier,
    onError: (error) => {
      console.log("Error añadiendo proveedor", error);
    },
  });
};

export const updateSupplier = async ({ supplierData }) => {
  const response = await axios.put("/updateSupplier", supplierData)
  return response.data;
}

export const useUpdateSupplier= () => {
  return useQuery({
    queryFn: updateSupplier,
    onError: (error) => {
      console.log("Error actualizando datos del proveedor ", error);
    },
  });
};

export const deleteSupplier = async ({ supplierId }) => {
  const response = await axios.delete("/deleteSupplier")
  return response.data;
}

export const useDeleteSupplier= () => {
  return useQuery({
    queryFn: deleteSupplier,
    onError: (error) => {
      console.log("Error eliminando proveedor", error);
    },
  });
};*/
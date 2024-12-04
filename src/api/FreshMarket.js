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
    mutationKey: "login-customer",
    mutationFn: loginCustomer,
    onSuccess: (data) => {
      navigateTo("/home");
    },
    onError: (error) => {
      console.error("Error en la solicitud:", error);
      navigateTo("/login");
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
    mutationKey: "register-customer",
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
  return useQuery("products", {
    queryFn: getProducts,
    onError: (error) => {
      console.log("Error consultando productos ", error);
    },
  });
};

// SUPPLIER

const getSuppliers = async () => {
  const response = await axios.get("/suppliers/");
  return response.data;
};

export const useGetSuppliers = () => {
  return useQuery("suppliers", {
    queryFn: getSuppliers,
    onSuccess: (d) => {},
    onError: (e) => {
      console.log("ERROR EN PROVEEDOR ", e);
    },
  });
};

const sendPayment = async ({ paymentInfo }) => {
  const response = await axios.post("/payment/", paymentInfo);
  return response.data;
};

export const useSendPayment = () => {
  return useMutation({
    mutationKey: "send-payment",
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
    mutationKey: "login-employee",
    mutationFn: loginEmployee,
    onSuccess: (data) => {
      navigateTo("/inventory");
    },
    onError: (error) => {
      console.error("Error en la solicitud:", error);
      navigateTo("/login-employee");
    },
  });
};

// order

const postOrder = async ({ orderData }) => {
  const response = await axios.post("/order/", orderData);
  return response.data;
};

export const usePostOrder = () => {
  return useMutation({
    mutationKey: "order",
    mutationFn: postOrder,
  });
};

const getOrders = async () => {
  const response = await axios.get("/orders/");
  return response.data;
};

export const useGetOrders = () => {
  return useQuery("orders", {
    queryFn: getOrders,
    onError: (error) => {
      console.error("Error solicitando pedidos ", error);
    },
  });
};

const updateProductQuantity = async ({ productData }) => {
  console.log("cantidad_disponible ", productData);
  const response = await axios.put("/update-quantity/", productData);

  return response.data;
};

export const useUpdateProductQuantity = () => {
  return useMutation({
    mutationKey: "quantity",
    mutationFn: updateProductQuantity,
    onError: (error) => {
      console.error("Error al actualizar cantidad ", error);
    },
  });
};

// Proveedores

const getSuppliersAdmin = async () => {
  const response = await axios.get("/suppliers-admin/");
  return response.data;
};

export const useGetSuppliersAdmin = () => {
  return useQuery({
    queryFn: getSuppliersAdmin,
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

import axios, { axiosNoAuth } from "./axios";

// Helper to get cookie value
function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
  return null;
}

// Add access token to headers for every request
const getAuthHeaders = () => {
  const token = getCookie("accessToken");
  return token ? { "access-token": token } : {};
};

const createCompany = async (formData: FormData, type: String) => {
  const endpoint = `/company/${type}`;
  const response = await axios.post(endpoint, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      ...getAuthHeaders(),
    },
  });
  return response.data;
};

const getFuneralCompany = async (queryParams?: {
  id?: string;
  userId?: string;
}) => {
  const endpoint = `/company/funeral`;
  const response = await axios.get(endpoint, {
    params: queryParams,
    headers: getAuthHeaders(),
  });
  return response.data;
};


const getFuneralCompanyBySlug = async (queryParams?: {
  slug: string;
}) => {
  const endpoint = `/company/funeral/by-slug`;
  const response = await axiosNoAuth.get(endpoint, {
    params: queryParams,
  });
  return response.data;
};

const getCompleteCompany = async (queryParams?: { type?: string }) => {
  const endpoint = `/company/details`;
  const response = await axios.get(endpoint, {
    params: queryParams,
    headers: getAuthHeaders(),
  });
  return response.data;
};

const getFloristCompany = async (queryParams?: {
  id?: string;
  userId?: string;
}) => {
  const endpoint = `/company/florist`;
  const response = await axios.get(endpoint, {
    params: queryParams,
    headers: getAuthHeaders(),
  });
  return response.data;
};

const getFloristCompanyBySlug = async (queryParams?: {
  slug: string;
}) => {
  const endpoint = `/company/florist/by-slug`;
  const response = await axiosNoAuth.get(endpoint, {
    params: queryParams,
  });
  return response.data;
};

const getCompanies = async (queryParams?: {
  type?: string;
  region?: string;
  city?: string;
}) => {
  const endpoint = `/company/`;
  const response = await axios.get(endpoint, {
    params: queryParams,
    headers: getAuthHeaders(),
  });
  return response.data;
};

const updateCompany = async (formData: FormData, id: String) => {
  const endpoint = `/company/${id}`;
  const response = await axios.patch(endpoint, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      ...getAuthHeaders(),
    },
  });
  return response.data;
};

const companyAdditionalData = async ({ companyId, table }: { companyId: number; table: string }) => {  
  const endpoint = `/company/additional-data/${companyId}?table=${table}`;
  const response = await axios.get(endpoint);
  return response.data?.data;
};

const companyService = {
  createCompany,
  getFuneralCompany, getFuneralCompanyBySlug,
  updateCompany,companyAdditionalData,
  getFloristCompany,
  getCompleteCompany, getFloristCompanyBySlug,
  getCompanies,
};

export default companyService;

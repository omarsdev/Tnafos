import { AxiosInstance } from "../api";

export const media = async (id, type, file) => {
  const formData = new FormData();
  formData.append("model_id", id);
  formData.append("model_type", type);
  formData.append("media", file);

  try {
    const res = await AxiosInstance.post(
      "/api/dashboard/media/store",
      formData
    );

    console.log(res.data.data);
  } catch (err) {
    console.log(err.response.data);
  }
};

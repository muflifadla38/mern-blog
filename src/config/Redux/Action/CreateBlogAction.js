import Axios from "axios";

export const setForm = (formType, formValue) => {
  return { type: "UPDATE_DATA_FORM", formType, formValue };
};

export const setImgPreview = (payload) => {
  return { type: "UPDATE_IMG_PREVIEW", payload };
};

export const postToAPI = (form) => {
  const data = new FormData();
  data.append("title", form.title);
  data.append("body", form.body);
  data.append("image", form.image);

  Axios.post("http://localhost:4000/v1/blog/create-post", data, {
    Headers: {
      "Content-Type": "multipart/form-data",
    },
  })
    .then((res) => console.log("Post success: ", res))
    .catch((err) => console.log("Err : ", err));
};

export const updateToAPI = (form, id) => {
  const data = new FormData();
  data.append("title", form.title);
  data.append("body", form.body);
  data.append("image", form.image);

  console.log("title", form.title);
  console.log("body", form.body);
  console.log("image", form.image);
  
  Axios.put(`http://localhost:4000/v1/blog/post/${id}`, data, {
    Headers: {
      "Content-Type": "multipart/form-data",
    },
  })
    .then((res) => console.log("Update success: ", res))
    .catch((err) => console.log("Err : ", err));
};

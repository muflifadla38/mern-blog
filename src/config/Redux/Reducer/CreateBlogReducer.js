const initCreateBlogState = {
  form: {
    title: "",
    body: "",
    image: "",
  },
  imgPreview: null,
};

const CreateBlogReducer = (state = initCreateBlogState, action) => {
  if (action.type === "UPDATE_DATA_FORM") {
    return {
      ...state,
      form: {
        ...state.form,
        [action.formType]: action.formValue,
      },
    };
  }

  if (action.type === "UPDATE_IMG_PREVIEW") {
    return {
      ...state,
      imgPreview: action.payload,
    };
  }

  return state;
};

export default CreateBlogReducer;

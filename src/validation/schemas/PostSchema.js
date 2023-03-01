import Yup from "../validate";

export const PostSchema = Yup.object().shape({
  title: Yup.string().trim().required(),
  body: Yup.string().trim().required(),
});

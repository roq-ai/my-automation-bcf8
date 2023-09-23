import * as yup from 'yup';

export const commentValidationSchema = yup.object().shape({
  content: yup.string().required(),
  comment_status: yup.string().nullable(),
  likes: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
  task_id: yup.string().nullable().required(),
});

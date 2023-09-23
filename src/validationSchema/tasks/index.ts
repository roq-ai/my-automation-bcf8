import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  task_status: yup.string().nullable(),
  due_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
  project_id: yup.string().nullable().required(),
});

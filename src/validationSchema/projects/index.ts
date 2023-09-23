import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  project_status: yup.string().nullable(),
  deadline: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
  team_id: yup.string().nullable().required(),
});

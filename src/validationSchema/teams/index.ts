import * as yup from 'yup';

export const teamValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  team_size: yup.number().integer().nullable(),
  team_status: yup.string().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});

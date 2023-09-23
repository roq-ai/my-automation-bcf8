import * as yup from 'yup';

export const activityLogValidationSchema = yup.object().shape({
  activity: yup.string().required(),
  activity_type: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  team_id: yup.string().nullable().required(),
  project_id: yup.string().nullable().required(),
  task_id: yup.string().nullable().required(),
  comment_id: yup.string().nullable().required(),
});

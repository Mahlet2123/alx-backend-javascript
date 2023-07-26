import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let result = {};
  let photo;
  let user;

  try {
    photo = await uploadPhoto();
    user = await createUser();
  } catch (error) {
    photo = null;
    user = null;
  }
  result = { photo, user };
  return result;
}

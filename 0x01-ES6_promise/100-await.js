import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  try {
    const user = await createUser();
    const photo = await uploadPhoto();
    return { user, photo };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}

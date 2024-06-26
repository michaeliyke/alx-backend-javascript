import signUp from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = Promise.allSettled([
    signUp(firstName, lastName), uploadPhoto(fileName),
  ]);

  return promises.then((values) => values).catch((error) => console.log(error));
}

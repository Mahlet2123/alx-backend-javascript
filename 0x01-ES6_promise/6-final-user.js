import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => ({
      status: results.map((result) => result.status),
      value: results.map((result) => (result.status === 'fulfilled' ? result.value : String(result.reason))),
    }));
}

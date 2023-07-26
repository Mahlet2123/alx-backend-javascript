import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default handleProfileSignup(firstName, lastName, fileName){
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      return [
	{
          status: results.status,
          value: results.value 
        },
      ]
    })
    .catch (()=> {
      return [
        {
          status: results.status,
          value: results.reason
        },
      ]
    });
}

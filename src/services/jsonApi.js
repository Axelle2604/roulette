import axios from 'axios';

export const postData = (name, number, index) =>
  axios.post(
    `https://www.jsonstore.io/88c31f23548e7bbfda262091847d64c04c234efce6e3a9602c751f669633ce6a/users/${index}`,
    { name, number, index },
    {
      headers: {
        'Content-type': 'application/json',
      },
    }
  );

export const getData = () =>
  axios.get(
    `https://www.jsonstore.io/88c31f23548e7bbfda262091847d64c04c234efce6e3a9602c751f669633ce6a/users`
  );

export const deleteData = index =>
  axios.delete(
    `https://www.jsonstore.io/88c31f23548e7bbfda262091847d64c04c234efce6e3a9602c751f669633ce6a/users/${index}`
  );

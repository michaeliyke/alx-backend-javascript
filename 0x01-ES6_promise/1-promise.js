export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (typeof success === 'boolean' && success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

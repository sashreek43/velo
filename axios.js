const postBtn = document.getElementById('log-btn');

const sendData = () => {
  axios
    .post(
      'https://reqres.in/api/register',
      {
        email: 'eve.holt@reqres.in',
        password: 'pistol'
      }
    )
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err, err.response);
    });
};

postBtn.addEventListener('click', sendData);
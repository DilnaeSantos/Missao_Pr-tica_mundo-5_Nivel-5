function login() {
  const _data = {
    username: username,
    password: password
  };

  fetch('https://dominio.com/auth', {
    method: "POST",
    body: JSON.stringify(_data),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
  .then(response => response.json())
  .then(json => {
    const token = json.jwt_token;
    const payloadBase64 = token.split('.')[1];
    const decodedPayload = JSON.parse(atob(payloadBase64));

    localStorage.setItem("token", token);
    localStorage.setItem("exp", decodedPayload.exp); // salva timestamp de expiração
  })
  .catch(err => console.log(err));
}

function doAction() {
  const token = localStorage.getItem("token");
  const exp = localStorage.getItem("exp");

  const now = Math.floor(Date.now() / 1000);
  if (!token || !exp || now > exp) {
    alert("Sessão expirada. Faça login novamente.");
    window.location.href = "/login"; // redireciona
    return;
  }

  fetch('https://dominio.com/do_SomeAction', {
    method: "POST",
    body: JSON.stringify(null),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Authorization": `Bearer ${token}`
    }
  })
  .then(response => response.json())
  .then(json => {
    console.log(`response: ${JSON.stringify(json)}`);
  })
  .catch(err => console.log(err));
}

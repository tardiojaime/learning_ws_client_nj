import { Manager, Socket } from "socket.io-client";
export const connectToServer = () => {
  const maneger = new Manager("http://localhost:3000/socket.io/socket.io.js");
  const socket = maneger.socket("/");
  // console.log(socket)
  addListener(socket);
};
const addListener = (socket: Socket) => {
  const serverStatusLabel = document.querySelector("#server-status")!;
  const clienturl = document.querySelector("#clients-ul")!;
  const messageForm = document.querySelector<HTMLFormElement>("#message-form")!;
  const messageInput =
    document.querySelector<HTMLInputElement>("#message-input")!;
    const messageul = document.querySelector("#message-ul")!;
  socket.on("connect", () => {
    serverStatusLabel.innerHTML = "Conectado";
  });
  socket.on("disconnect", () => {
    serverStatusLabel.innerHTML = "desconectado";
  });
  // escuchar cambios o eventos en el canal cliente-updated
  socket.on("Cliente-updated", (clients: string[]) => {
    let clientsHtml = "";
    clients.forEach((client) => {
      clientsHtml += `<li>${client}</li>`;
    });
    clienturl.innerHTML = clientsHtml;
  });
  messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (messageInput.value.trim().length <= 0) return;
    console.log({id:'yp', sms: messageInput.value})
    // emitir evento con el mensaje
    // de tal forma el servidor tiene que escuchar
    socket.emit('message-from-client', {
      id: 'The Best',
      message: messageInput.value
    })
    messageInput.value = "";
  });
};

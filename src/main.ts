import { connectToServer } from "./socket-cliente";
import "./style.css";
import typescriptLogo from "./typescript.svg";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      <span id="server-status"></span>
    </p>
    <ul id="clients-ul"></ul>
    <form id="message-form">
    <input placeholder="message" id="message-input"/>
    </form>
    <h3>Message</h3>
    <ul id="message-ul">
    </ul>
  </div>
`;
connectToServer();


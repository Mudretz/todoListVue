import "./Style/main.scss";
import { createApp } from "vue";
import App from "./App.vue";
import store from "./Components/Store/store";
import components from "@/Components/Ui";

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component);
});

app
    .use(store)
    .mount("#app");
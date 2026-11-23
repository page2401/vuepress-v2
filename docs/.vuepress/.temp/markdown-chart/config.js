import { defineClientConfig } from "vuepress/client";
import Mermaid from "/home/antigravity/page2401/page2401.github.io/sites/vuepress-v2/node_modules/@vuepress/plugin-markdown-chart/dist/client/components/Mermaid.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Mermaid", Mermaid);
  },
});

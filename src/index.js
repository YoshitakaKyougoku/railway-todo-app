import React from "react";
import { createRoot } from "react-dom/client"; // 更新されたインポート
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import { store } from "./store";

// root要素を取得
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Failed to find the root element');

// React 18の新しいAPIを使用してrootを作成
const root = createRoot(rootElement);

// root.renderを使用してAppコンポーネントをレンダリング
root.render(
  <Provider store={store}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

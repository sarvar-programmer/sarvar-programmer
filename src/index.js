import { createRoot } from "react-dom/client";
import App from './App'
import AppDef from "./AppDef";

 const container = document.getElementById('root');
 const root = createRoot(container);
 root.render(<App/>)

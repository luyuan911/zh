// src/stores/index.ts
import { createPinia } from 'pinia';
import presist from 'pinia-plugin-persistedstate'
const pinia = createPinia();

pinia.use(presist)

export default pinia;

export * from './modules/user';

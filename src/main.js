import './global.css';

import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

console.log("Hi guys!");
import { deriveSeedFrom } from '@holo-host/wasm-key-manager'
const hha_id = new Uint8Array([
	66, 123, 133, 136, 133, 6, 247, 116,
	4, 59, 43, 206, 131, 168, 123, 44,
	54, 52, 3, 53, 134, 75, 137, 43,
	63, 26, 216, 191, 67, 117, 38, 142
]);
let a = deriveSeedFrom(hha_id, "email", 'password')
console.log(">>>>>aaaa", a)

export default app;

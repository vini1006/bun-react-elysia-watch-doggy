/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { createRoot } from 'react-dom/client';

import App from './App';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);

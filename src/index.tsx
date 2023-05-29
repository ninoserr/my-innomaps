/* @refresh reload */
/*<script src="https://unpkg.com/solid-js@latest/dist/solid.js"></script>*/
import { render } from 'solid-js/web';

import './index.css';
import App from './App';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}

/*new solidJS.createApp(App).render(root);*/

render(() => <App />, root!);

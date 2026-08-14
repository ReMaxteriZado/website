# website

Portfolio web en Vue 3 con soporte de idiomas para la web pública.

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Idiomas

La página principal está disponible en español e inglés mediante las rutas `/es/` y `/en/`.
El selector de idioma se encuentra en el footer y mantiene el idioma seleccionado en la URL.
Las rutas de login y administración (`/login` y `/admin/*`) permanecen en español.

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


# TG Super ESLint Config 🎉

A **TypeScript-based** plug-n-play ESLint Flat Config that enforces modern best practices for perfectionist
Javascript Programmers that like to be in control and dislike a messy ESLint configuration.

---

## Features ✨

- **Flat Config** (ESLint 8+ / 9+): Uses the modern ESLint configuration format.
- **TypeScript Support** 🛠️
- **Prettier Integration** 🎨
- **Vue 3 Support**: Optional support for Vue 3 script and template linting, and internationalization.
- **Enhanced Code Quality** 🚀
- **Dependency linting using `eslint-plugin-depend`**
- **Highly Configurable**
---

> ⚠️ **Alert**  
> This project is currently in active development.
> Expect breaking changes as features are added and improvements are made.  
> For detailed updates, check the [Changelog](CHANGELOG.md).

🚧 Thank you for your patience and contributions!

## Installation 📦

1. **Install the package**:

   ```bash
   yarn add -D tg-super-eslint-config
   ```

2. **Install the peer dependencies**:

   ```bash
   yarn add -D eslint typescript @eslint-community/eslint-plugin-eslint-comments @intlify/eslint-plugin-vue-i18n @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-prettier eslint-config-prettier eslint-plugin-sonarjs eslint-plugin-unicorn eslint-plugin-depend eslint-plugin-vue prettier
   ```

3. **Set up your ESLint configuration**:

   Create or update the `eslint.config.js` or `eslint.config.mjs` file in the root of your project:

   ```js
   // eslint.config.js
   import tgSuperEslintConfig from "tg-super-eslint-config"

   export default [
     ...tgSuperEslintConfig({
       useVue: true, // DEFAULT: False - Set to true if you are using vue
       useGlobalRulesWithVue: true // DEFAULT: False - Set to true if you want to use all other configs in vue projects too
       vueI18nDir: "./src/locales" // DEFAULT: undefined - Pass the path to your i18n locales if you want additional locale linting
     })

     // You can also add your own rules, overrides, configs, plugins, etc here.
     // EXAMPLE: 'no-undef': 'off'
   ]
   ```

   Or if you are happy with the default config, you can just do:

   ```js
   // eslint.config.js
   import tgSuperEslintConfig from "tg-super-eslint-config"

   export default tgSuperEslintConfig()
   ```

4. **Run ESLint or create your own script**:

   ```bash
   eslint .
   ```

---

## Plugins Used 🧩

This configuration integrates the following plugins for advanced linting:

- `@typescript-eslint` for TypeScript linting
- `eslint-plugin-prettier` for Prettier integration
- `eslint-config-prettier` to disable conflicting ESLint rules
- `eslint-plugin-depend` for dependency linting
- `eslint-plugin-sonarjs` for code smell detection
- `eslint-plugin-unicorn` for modern and advanced JavaScript linting
- `eslint-plugin-vue` for Vue 3 script and template linting
- `@intlify/eslint-plugin-vue-i18n` for internationalization
- `eslint-plugin-jsdoc` for JSDoc linting and quality enforcement
- `@eslint-community/eslint-plugin-eslint-comments` for ESLint comment linting and best practices

## Types 📝
- If your IDE or linter complains, you might need to install some required types:

```bash
yarn add -D @types/eslint-config-prettier
```

---

## Contributing 🤝

I’m not the smartest person in the room (or on GitHub) 🤓, so if you see something that could be improved, fixed, or just made cooler, please feel free to contribute. I’ll probably learn something from it too!

---

## License 📄

This project is licensed under the [MIT License](LICENSE.md).

---

## Support 🛠️

If you encounter any issues or have questions, please open an issue on [GitHub](https://github.com/iamtiagogalvao/tg-super-eslint-config/issues).

---

## Author 👤

**Tiago M Galvão**  
[https://tiagogalvao.com](https://tiagogalvao.com)

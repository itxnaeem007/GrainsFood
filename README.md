# React Starter Template

## Guides

### Setup and Run

To start a new project, clone this repo and run the following commands

```bash
$ npm install
$ npm run dev
```

### Commit

Follow the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) to write commit messages.

### Icons and SVGs

Put svg icons in `public/icons` folder. Use [svgr](https://react-svgr.com/docs/cli/) to convert svg icons to react components by running the following command

```bash
$ npm rum svgr
```

Put all other svgs in `src/assets` and directly import them as react components.

```tsx
import { ReactComponent as Logo } from "@/assets/logo.svg";
```

## More Tools

### Component Library

Use [radix-ui](https://www.radix-ui.com/docs/primitives/overview/getting-started) for component library. It is a collection of open source accessible UI components that helps you build your own design system from scratch. There docs have examples to use each component with `stitches`, 'tailwindcss`and`css`.

### Graphql

Use [graphql code generator](https://the-guild.dev/graphql/codegen/docs/guides/react-vue) to generate typescript types from graphql schema and operations. Use [graphql-request](https://github.com/jasonkuhrt/graphql-request) with `tanstack/react-query` to make graphql requests.

```bash
$ npm install graphql graphql-request
$ npm install -D @graphql-codegen/cli @graphql-codegen/client-preset
```

```ts
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://localhost:4000/graphql",
  documents: ["src/**/*.tsx"],
  ignoreNoDocuments: true,
  generates: {
    "./src/gql/": {
      preset: "client",
    },
  },
};
export default config;
```

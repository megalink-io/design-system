# Megalink Design System

The Megalink Design System powers our frontend apps. It contains reusable UI components that help us build complex, durable, and accessible user interfaces across our projects.

## Install

The code is delivered as an NPM package:

```bash
npm install @megalink/design-system
```

## Use

Add an alias for the package path to the `compilerOptions` of your `tsconfig.json` to make the imports shorter and clearer:

```json
"baseUrl": ".",
"paths": {
  "@mds/*": ["node_modules/@megalink/design-system/dist/*"]
}
```

> As long as `creat-react-app` does not support the `paths` property in `tsconfig.json`, the following workaround must be used: [https://github.com/oklas/react-app-rewire-alias](https://github.com/oklas/react-app-rewire-alias)

You can then import icons or components:

```tsx
import { HouseSVG } from '@mds/icons';
import { IconButton } from '@mds/components/basic/actions';
```

## Dependencies

The following peer dependencies are required:

```json
"react": ">= 16.13.0",
"react-dom": ">= 16.13.0",
"react-router-dom": ">= 5.1.0",
"styled-components": ">= 5.0.0",
"typescript": ">= 3.8.0"
```

## Credits

We use the following tool and are very grateful for the free use.

- [React](https://reactjs.org/) - a JavaScript library for building user interfaces, License: MIT License
- [React Router](https://reacttraining.com/react-router/) - Declarative routing for React, License: MIT License
- [Styled Components](https://styled-components.com/) - visual primitives for the component age, License: MIT License
- [TypeScript](https://styled-components.com/) - JavaScript that scales, License: [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)
- [Storybook](https://storybook.js.org/) - build bulletproof UI components faster, License: MIT License
- [Prettier](https://prettier.io/) - an opinionated code formatter, License: MIT License
- [ESLint](https://eslint.org/) - find and fix problems in your JavaScript code, License: MIT License
- [OpenMoji](https://openmoji.org/) – the open-source emoji and icon project, License: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- [Free Outline Icon Pack](https://aspengrovestudios.com/product/free-outline-icon-pack/) by Aspen Grove Studios, License: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- [Poppins](https://www.indiantypefoundry.com/fonts/poppins/) by Indian Type Foundry, License: [Open Font License](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL)

> Please let us know if we have forgotten anything!

## License

At this time the Megalink Design System may not be used by third parties. Nevertheless the source code is public and can be used for inspiration. Please contact us if you are interested in using the design system for your own purposes.

The included icons and emojis from [Aspen Grove Studios](https://aspengrovestudios.com) and [OpenMoji](https://openmoji.org/) are available under their original license [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

# ajbell-miniapp

## Install

```sh
git clone https://github.com/norgeous/ajbell-miniapp
cd ajbell-miniapp
npm install
```

## How to use

| Command                                | What it does                                                                          |
| -------------------------------------- | ------------------------------------------------------------------------------------- |
| `npm run dev`                          | Runs Nextjs in development mode                                                       |
| `npm run sb`                           | Runs Storybook in development mode                                                    |
| `npm run storycap`                     | Runs Storycap and captures images of Storybook stories to `__screenshots__` directory |
| `npm run lint`                         | Runs Prettier, ESLint in fix mode, then typescript compiler                           |
| `npm run test`                         | Runs all tests with Vitest, including Unit and Storybook's interaction tests          |
| `npx vitest --project=unit --coverage` | Runs Unit tests in watch mode, with coverage report                                   |
| `npx http-server ./coverage`           | View the html `./coverage` report                                                     |

## Features

- [x] React, NextJS and Typescript
- [x] Storybook with some plugins
- [x] An SPA with
  - [x] analystRating, is displayed as a star rating between 0-5. (`StarRating` component)
  - [x] SRRI, is a sliding measure of risk between 0-10 where zero is low risk, 10 is very high risk. (`GradientRating` component)
  - [x] Portfolio.asset is traditionally displayed as a pie chart, where the values are percentages. (`PieChart` component)
- [x] Use of local storage to save the user’s fund selection [code](https://github.com/norgeous/ajbell-miniapp/blob/main/components/StrategySelector/index.tsx#L28)
- [x] Caching / SSR [code](https://github.com/norgeous/ajbell-miniapp/blob/main/app/page.tsx#L5)
- [x] Error handling
- [x] Mobile responsiveness
- [x] a11y (esp. of graphs)
- [x] Tests
  - [x] Storybook Interaction tests (play function), example: [code](https://github.com/norgeous/ajbell-miniapp/blob/main/components/StrategySelector/index.stories.ts#L18)
  - [x] code coverage via storybook
  - [x] Storycaps
- [x] Lint + Format on Save (in VSCode)

## Considerations

- Aesthetic presentation of the data
- Clarity and simplicity of code
- Standardisation
- Use of relevant frameworks for JS, CSS
- Front-end performance

## Future / Ideas / Didn't have time to do

- Local visual difference testing report with RegVis
- Capture both mobile and desktop views of stories with Storycap
- CI which runs linter, tsc, vitest tests, storybook tests, visual difference tests, Storybook a11y tests, deploys Storybook, etc
  - perhaps like [this](https://github.com/norgeous/ComfyUI-UI-Builder/pull/35), with a branch report like [this](https://norgeous.github.io/ComfyUI-UI-Builder/pr-preview/pr-35/)
- Use NPM workspaces to separate custom node modules; ie Storybook module, etc
- Use GTM to see where people abandon the flow
- Custom Storybook plugin(s) for whatever requirements
- web bff pattern. move all data adapters into one place

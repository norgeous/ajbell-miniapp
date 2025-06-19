# ajbell-miniapp

## Install

```sh
git clone https://github.com/norgeous/ajbell-miniapp
cd ajbell-miniapp
npm install
```

## How to use

| Command             | What it does                                                                          |
| ------------------- | ------------------------------------------------------------------------------------- |
| `npm run dev`       | Runs Nextjs in development mode                                                       |
| `npm run storybook` | Runs Storybook in development mode                                                    |
| `npm run storycap`  | Runs Storycap and captures images of Storybook stories to `__screenshots__` directory |
| `npm run lint`      | Runs Prettier and ESLint in fix mode                                                  |

## Features

- [x] NextJS
- [x] Storybook with some plugins
- [x] An SPA with
  - [x] analystRating, is displayed as a star rating between 0-5. (`StarRating` component)
  - [x] SRRI, is a sliding measure of risk between 0-10 where zero is low risk, 10 is very high risk. (`GradientRating` component)
  - [x] Portfolio.asset is traditionally displayed as a pie chart, where the values are percentages. (`PieChart` component)
- [x] Use of local storage to save the user’s fund selection
- [x] Caching / SSR
- [x] Error handling
- [x] Mobile responsiveness
- [x] a11y (esp. of graphs)
- [x] Tests
  - [x] Storybook Interaction test (play function), example: [code](https://github.com/norgeous/ajbell-miniapp/blob/main/components/StrategySelector/index.stories.ts#L18)
  - [ ] vitest
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
- CI which runs linter, vitest tests, storybook tests, visual difference tests, checks project will compile, deploys Storybook, etc
- Use NPM workspaces to separate custom node modules; ie Storybook module, etc
- Use GTM to see where people abandon the flow
- Custom Storybook plugin(s) for whatever requirements
- Use Mock Service Worker (MSW) to mock fetch - this might not work actually, im not sure if we can render server components inside storybook
- web bff pattern. move all data adapters into one place

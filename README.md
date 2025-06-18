# ajbell-miniapp

## Install

```sh
git clone https://github.com/norgeous/ajbell-miniapp
cd ajbell-miniapp
npm install
```

## How to use

| Command             | What it does                       |
| ------------------- | ---------------------------------- |
| `npm run dev`       | Runs Nextjs in development mode    |
| `npm run storybook` | Runs Storybook in development mode |

## Features

- [x] NextJS
- [x] Storybook
  - [x] Storybook plugins
- [x] An SPA with
  - [x] analystRating, is displayed as a star rating between 0-5. (StarRating)
  - [x] SRRI, is a sliding measure of risk between 0-10 where zero is low risk, 10 is very high risk. (GradientRating)
  - [x] Portfolio.asset is traditionally displayed as a pie chart, where the values are percentages. (PieChart)
- [x] Use of local storage to save the user’s fund selection
- [ ] Caching / SSR
- [ ] Error handling
- [ ] Mobile responsiveness
- [x] Tests
  - [x] Storybook Interaction test (play function), example: [code](https://github.com/norgeous/ajbell-miniapp/blob/main/components/StrategySelector/index.stories.ts#L18)
  - [ ] vitest
  - [ ] local visual difference testing
- [ ] a11y (esp. of graphs)
- [ ] CI

## Considerations

- [x] Aesthetic presentation of the data
- [x] Clarity and simplicity of code
- [x] Standardisation
- [x] Use of relevant frameworks for JS, CSS
- [x] Front-end performance

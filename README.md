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
  - [ ] Storybook plugins
- [x] An SPA with
  - [x] analystRating, is displayed as a star rating between 0-5. (StarRating)
  - [x] SRRI, is a sliding measure of risk between 0-10 where 10 zero is low risk, 10 is very high risk. (GradientRating)
  - [x] Portfolio.asset is traditionally displayed as a pie chart, where the values are percentages. (PieChart)
- [ ] Use of local storage to save the user’s fund selection
- [ ] Mobile responsiveness
- [ ] Error handling
- [ ] Tests
- [ ] Caching / SSR
- [ ] a11y (esp. of graphs)
- [ ] CI

## Considerations

- [x] Aesthetic presentation of the data
- [ ] Clarity and simplicity of code
- [ ] Standardisation
- [ ] Use of relevant frameworks for JS, CSS
- [ ] Front-end performance

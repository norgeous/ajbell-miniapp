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

## Features / TODO

- [x] NextJS
- [x] Storybook
  - [ ] add Storybook plugins
- [ ] Build the SPA
  - [x] analystRating, is displayed as a star rating between 0-5. (StarRating)
  - [x] SRRI, is a sliding measure of risk between 0-10 where 10 zero is low risk, 10 is very high risk. (GradientRating)
  - [x] Portfolio.asset is traditionally displayed as a pie chart, where the values are percentages. (PieChart)
- [ ] Error handling
- [ ] Caching / SSR
- [ ] Tests
- [ ] Clarity and simplicity of code
- [ ] Standardisation
- [ ] Use of relevant frameworks for JS, CSS
- [ ] Aesthetic presentation of the data
- [ ] Mobile responsiveness
- [ ] Use of local storage to save the user’s fund selection
- [ ] Front-end performance

## Steps to recreate this project

```sh
sudo n latest
sudo npm i -g npm
npx create-next-app@latest
cd ajbell-miniapp
npm create storybook@latest
npm i -S react-icons styled-components
```

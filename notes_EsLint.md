# Eslint Static Testing Tool

## Config

configure according to framework you're using (e.g., eslint-plugin-vue)

## Accessibility

- make sure content is perceivable, operable, understandable, and robust (POUR)
- ESLint has accessibility-focued plugins (eslint-plugin-vue-a11y)
  https://www.codingeasypeasy.com/blog/the-ultimate-guide-to-testing-accessibility-a11y-in-vuejs-applications

- Cypress + cypress-axe (End-to-End Testing)

```
npm install cypress cypress-axe --save-dev
```

Manual:

- can you tab forward and backward to each element using only keyboard? (focus indicators, incorrect tab order)
- interact with site using screen reader (Dynamic content updates that are not announced??)
- ARIA tags are super useful but use the correct HTML element instead when possible

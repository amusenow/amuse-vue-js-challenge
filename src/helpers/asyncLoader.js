const asyncLoader = filePath => () => import(
  /* webpackChunkName: "view-[request]" */
  /* webpackMode: "lazy" */
  `@/${filePath}.vue`
)

export default asyncLoader

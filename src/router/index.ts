import store from "@/store";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import difference from "lodash/difference";
import { Dictionary, Route } from "vue-router/types/router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

/**
 * Update the current route's query string to reflect all state data the app cares
 * about.
 *
 * This is how user actions in the app (toggling category visibility or moving
 * between pages of products) is communicated back to the Vuex store.
 *
 * @see src/views/Home.vue
 * @param categories
 */
export const updateRouteWithState = ({
  categories = [],
  page = 1,
}: {
  categories?: string[];
  page?: number;
}): Promise<Route | void> => {
  const query: Dictionary<string | (string | null)[]> = {
    ...router.currentRoute.query,
    page: String(page),
  };

  // wipe categories from the querystring since it's only used sometimes
  delete query.categories;

  // only set the query string param if a subset of categories is being selected
  if (
    categories.length > 0 &&
    difference(store.getters.categories, categories).length > 0
  ) {
    query.categories = categories;
  }

  return router.push({ path: router.currentRoute.path, query }).catch((err) => {
    // we don't care when vue-router complains we're on the same page...just stay there.
    if (err.name !== "NavigationDuplicated") {
      throw err;
    }
  });
};

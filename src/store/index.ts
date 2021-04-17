import Vue from "vue";
import Vuex from "vuex";
import { Product, RootState } from "@/types";
import uniqBy from "lodash/uniqBy";
import clamp from "lodash/clamp";
import difference from "lodash/difference";
import { PRODUCTS_PER_PAGE } from "@/constants";

Vue.use(Vuex);

type CategoriesFromQueryString = undefined | string | string[];

export default new Vuex.Store<RootState>({
  state: {
    loading: true,
    error: null,
    page: 1,
    products: [],
    selectedCategories: [],
  },
  mutations: {
    /**
     * Specify the list of categories to appear selected in the app.
     *
     * @param state
     * @param categories
     */
    setCategories(state, categories: string[]) {
      state.selectedCategories = categories;
    },

    /**
     * Set the current page of products to display.
     *
     * @param state
     * @param page
     */
    setPage(state, page: number) {
      state.page = page;
    },

    /**
     * Toggle the loading status.
     *
     * @param state
     * @param yesNo
     */
    setLoading(state, yesNo: boolean) {
      state.loading = yesNo;
    },

    /**
     * Set the pool of Product data received from the JSON data file.
     *
     * @param state
     * @param products
     */
    setProducts(state, products: Product[]) {
      state.products = products;
    },

    /**
     * Set or clear an error message.
     *
     * @param state
     * @param error
     */
    setError(state, error: string | null = null) {
      state.error = error;
    },
  },
  getters: {
    /**
     * Generate a unique, lowercase, alphabetic list of categories from the product data.
     *
     * @param state
     */
    categories: (state): string[] =>
      state.products
        .map((product) => product.category.trim().toLowerCase())
        .reduce(
          (acc, category) =>
            acc.includes(category) ? acc : acc.concat(category),
          [] as string[]
        )
        .filter((category) => category.length > 0)
        .sort((a: string, b: string) => a.localeCompare(b)),

    /**
     * Generate a list of ALL products matching any of the currently selected category.
     *
     * @param state
     */
    products: (state): Product[] =>
      state.products.filter((p) =>
        state.selectedCategories.includes(p.category.trim().toLowerCase())
      ),

    /**
     * Get a slice of all products matching the currently selected categories for
     * the current page.
     *
     * @param state
     * @param getters
     */
    currentPageOfProducts: (state, getters) => {
      const start = (state.page - 1) * PRODUCTS_PER_PAGE;
      return getters.products.slice(start, start + PRODUCTS_PER_PAGE);
    },

    /**
     *
     *
     * @param state
     * @param getters
     */
    allCategoriesAreSelected: (state, getters): boolean =>
      getters.categories.filter(
        (c: string) => !state.selectedCategories.includes(c)
      ).length === 0,

    /**
     * Determine how many pages of products are available given the currently selected
     * categories.
     *
     * @param _
     * @param getters
     */
    totalPages: (_, getters): number =>
      Math.max(1, Math.ceil(getters.products.length / PRODUCTS_PER_PAGE)),
  },
  actions: {
    /**
     * Boot the app. Fetch product data, load it into the store, and fail loudly
     * if something goes wrong. Make sure the app state reflects the current URL.
     *
     * @param param0
     * @param param1
     */
    async init(
      { commit, dispatch },
      { categories, page }: { categories: string[]; page: number }
    ) {
      // setup
      commit("setLoading", true);
      commit("setError");

      // load products
      try {
        const response = await fetch("/products.json");

        const products = (await response.json()) as Product[];

        // set products; discard duplicates
        commit("setProducts", uniqBy(products, "entity_id"));
      } catch {
        commit("setError", "There was a problem fetching product data.");
      } finally {
        commit("setLoading", false);
      }

      // apply initial category selection, respecting the query string param
      await dispatch("syncQueryString", { categories, page });
    },

    /**
     * If a change has been made to the selected categories, update the store to
     * reflect that change.
     *
     * We actively prevent the user from deselecting all categories, so if the
     * sanitized list is empty we'll instead select ALL categories.
     *
     * @param param0
     * @param categories
     */
    applyCategories(
      { state, getters, commit },
      categories: CategoriesFromQueryString = []
    ) {
      let sanitizedCategories = [categories]
        .flat()
        .filter((c) => getters.categories.includes(c));

      if (sanitizedCategories.length === 0) {
        sanitizedCategories = getters.categories;
      }

      // check if there has been no change; abort if so.
      if (
        state.selectedCategories.length > 0 &&
        difference(state.selectedCategories, sanitizedCategories).length ===
          0 &&
        difference(sanitizedCategories, state.selectedCategories).length === 0
      ) {
        return;
      }

      commit("setCategories", sanitizedCategories);
    },

    /**
     * Set the page, respecting lower and upper bounds.
     */
    applyPage({ state, getters, commit }, page: number) {
      const clampedPage = clamp(page, 1, getters.totalPages);

      if (state.page === page) {
        return;
      }

      commit("setPage", clampedPage);
    },

    /**
     * Ensure querystring data from the URL which the app cares about has been applied
     * to the store.
     *
     * @param param0
     * @param param1
     */
    async syncQueryString(
      { dispatch },
      {
        categories,
        page,
      }: { categories: CategoriesFromQueryString; page: number }
    ) {
      await dispatch("applyCategories", categories);
      await dispatch("applyPage", page);
    },
  },
  modules: {},
});

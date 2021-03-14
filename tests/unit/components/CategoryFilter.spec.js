import { shallowMount, enableAutoDestroy, createLocalVue } from '@vue/test-utils';
import Vue from 'vue'
import CategoryFilter from '@/components/CategoryFilter.vue';
import VueRouter from "vue-router";
import routes from "@/router/index.js"

const localVue = createLocalVue()
localVue.use(VueRouter)

describe("CardContainer.vue", () => {
    enableAutoDestroy(afterEach);

    describe("setQuery", () => {
        test("sets query string based on categories", async () => {
            expect.assertions(1);
            const router = new VueRouter({ routes })
            let wrapper = shallowMount(CategoryFilter, {
                localVue,
                router,
                data() {
                    return {
                        categories: ["flower", "edible"]
                    }
                }
            });
            await wrapper.vm.setQuery();
            expect(wrapper.vm.$route.query.categories).toBe("flower,edible");
        });

        test("Removes query string if no categories", async () => {
            expect.assertions(1);
            const router = new VueRouter({ routes })
            let wrapper = shallowMount(CategoryFilter, {
                localVue,
                router,
                data() {
                    return {
                        categories: ["flower", "edible"]
                    }
                }
            });
            wrapper.setData({categories: []});
            await wrapper.vm.setQuery();
            expect(wrapper.vm.$route.query.categories).toBeFalsy();
        });
    })
});
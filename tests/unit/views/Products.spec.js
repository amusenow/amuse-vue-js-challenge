import { shallowMount, enableAutoDestroy } from '@vue/test-utils';
import Vue from 'vue'
import Products from '@/views/Products.vue';

describe("CardContainer.vue", () => {
    enableAutoDestroy(afterEach);

    describe("setQuery", () => {
        test("Shows age gate if isOfAge is false", () => {
            expect.assertions(1);
            let wrapper = shallowMount(Products);
            expect(wrapper.find('[data-q-age-gate]').exists()).toBe(true);
        })

        test("Does not show age gate if isOfAge is true", () => {
            expect.assertions(1);
            let wrapper = shallowMount(Products, {
                data() {
                    return {
                        isOfAge: true
                    }
                }
            });
            expect(wrapper.find('[data-q-age-gate]').exists()).toBe(false);
        })
    })
});
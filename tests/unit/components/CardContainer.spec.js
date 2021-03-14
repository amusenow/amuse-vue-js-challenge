import { shallowMount, enableAutoDestroy, createLocalVue } from '@vue/test-utils';
import Vue from 'vue'
import CardContainer from '@/components/CardContainer.vue';
import VueRouter from "vue-router";
import routes from "@/router/index.js"

const localVue = createLocalVue()
localVue.use(VueRouter)

describe("CardContainer.vue", () => {
    enableAutoDestroy(afterEach);
    let sampleProducts;
    let router;

    beforeEach(() => {
        router = new VueRouter({ routes });
        sampleProducts = [{
            "entity_id": 1221,
            "sku": "FL000980",
            "is_cannabis": 1,
            "manufacturer": "Perfect",
            "name": "Happy Camper 1g ($1 Deal - Discount auto-applies at checkout)",
            "url": "/brands/perfect/happy-camper-1g/",
            "category": "Flower",
            "sub_category": "Pre-pack",
            "image_url": "FL000980/Perfect_FL_1gm_HappyCamper_PandP",
            "price": 18,
            "thc_percentage": 34.9,
            "quantity": 0
          },
          {
            "entity_id": 1222,
            "sku": "FL000980",
            "is_cannabis": 1,
            "manufacturer": "Perfect",
            "name": "Happy Camper 1g ($1 Deal - Discount auto-applies at checkout)",
            "url": "/brands/perfect/happy-camper-1g/",
            "category": "Vape",
            "sub_category": "Pre-pack",
            "image_url": "FL000980/Perfect_FL_1gm_HappyCamper_PandP",
            "price": 18,
            "thc_percentage": 34.9,
            "quantity": 0
          }]
    })

    describe("categories", () => {
        test("retuns array of categories if query exists", async () => {
            expect.assertions(1);
            let wrapper = shallowMount(CardContainer, { 
                localVue,
                router
            });
            router.push({ query: { categories: "mic,test" } });
            await wrapper.vm.$nextTick()
            expect(wrapper.vm.categories).toEqual(["mic", "test"]);
        });
    });

    describe("filteredProducts", () => {
        test("Returns an array of filtered products", () => {
            expect.assertions(2);
            let wrapper = shallowMount(CardContainer, {
                computed: {
                    categories() {
                      return ["flower"];
                    }
                },
                data() {
                    return {
                        products: sampleProducts
                    }
                }
            });
            expect(wrapper.vm.products.length).toBe(2);
            expect(wrapper.vm.filteredProducts.length).toBe(1);
        })
    });

    describe("viewMore", () => {
        test("Increases maxResults by 25", async () => {
            expect.assertions(1);
            let wrapper = shallowMount(CardContainer, {
                computed: {
                    categories() {
                      return ["flower"];
                    }
                },
            });
            let button = wrapper.find('[data-q-view-more]');
            button.trigger("click");
            await Vue.nextTick();
            expect(wrapper.vm.maxResults).toBe(50);
        });

        test("Does not show button when all results have been shown", async () => {
            expect.assertions(1);
            let wrapper = shallowMount(CardContainer, {
                computed: {
                    categories() {
                      return ["flower"];
                    }
                },
                data() {
                    return {
                        products: sampleProducts
                    }
                }
            });
            await Vue.nextTick();
            expect(wrapper.find('[data-q-view-more]').exists()).toBe(false);
        })
    })
});
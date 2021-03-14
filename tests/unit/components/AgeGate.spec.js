import { shallowMount, enableAutoDestroy } from '@vue/test-utils';
import Vue from 'vue'
import AgeGate from '@/components/AgeGate.vue'

describe("AgeGate.vue", () => {
    enableAutoDestroy(afterEach);

    describe("setAgePermission", () => {
        test("sets localStorage", async () => {
            expect.assertions(1);
            let wrapper = shallowMount(AgeGate);
            let yesButton = wrapper.find('[data-q-yes]');
            yesButton.trigger("click");
            await Vue.nextTick()
            expect(localStorage.isOfAge).toBe("true");
        });

        test("emits dismiss event", async () => {
            expect.assertions(2);
            let wrapper = shallowMount(AgeGate);
            let yesButton = wrapper.find('[data-q-yes]');
            yesButton.trigger("click");
            await Vue.nextTick()
            expect(wrapper.emitted("dismiss")).toBeTruthy();
            expect(wrapper.emitted("dismiss")).toHaveLength(1);
        });
    });

    test("Rejects user if user clicks no", async () => {
        expect.assertions(2);
        let wrapper = shallowMount(AgeGate);
        let noButton = wrapper.find('[data-q-no]');
        noButton.trigger("click");
        await Vue.nextTick()
        expect(wrapper.find('[data-q-check]').exists()).toBe(false);
        expect(wrapper.find('[data-q-rejected]').exists()).toBe(true);
    });
})
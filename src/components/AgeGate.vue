<template>
    <div class="overlay flex flex-col justify-center fixed bg-opacity-75 bg-gray-400 inset-0">
        <div class="age-check p-8 h-auto w-72 bg-blue-400 text-white inset-0 mx-auto my-0">
            <div data-q-check v-if="!isNotOfAge">
                <h1 class="text-xl mb-8 text-center">Are you at least 18 years of age?</h1>
                <div class="flex justify-center">
                    <button data-q-yes @click="setAgePermission()" class="mx-2 bg-blue-900 text-white font-bold py-2 px-4 rounded mb-4">Yes</button>
                    <button data-q-no @click="isNotOfAge = !isNotOfAge" class="mx-2 bg-blue-900 text-white font-bold py-2 px-4 rounded mb-4">No</button>
                </div>
            </div>
            
            <div v-else>
                <h1 data-q-rejected class="text-xl mb-8 text-center">You are not allowed</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AgeGate",
    data() {
        return {
            isNotOfAge: false,
        }
    },
    methods: {
        setAgePermission() {
            localStorage.isOfAge = true;
            this.$emit("dismiss")
        }
    }
}
</script>
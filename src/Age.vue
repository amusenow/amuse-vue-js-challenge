<template>
    <div class="box-modal">
        <div class="overlay"></div>
        <div class="body-modal">
            <div class="inner-body-modal">
                <h1 class="mb-1 text-center">Are you over 21</h1>

                <button v-on:click="$emit('agree')" class="btn">
                    Yes
                </button>
            </div>
        </div>
    </div>
</template>
 
<script>
    /**
     * Show / hide model when this component is mounted or destroyed
    */
    export default {
        mounted(){
            document.body.classList.add('active-modal');
        },
        destroyed(){
            document.body.classList.remove('active-modal');
        }
    }
</script> 
   
<style scoped> 
    .box-modal { 
        position: fixed;
        width: 100%;
        height: 100vh;
        left: 0px;
        top: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        visibility: visible;
        transition: all 0.9s;
        z-index: 2;
    }

    .box-modal .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
        background: #000;
        opacity: 0.5;
    }

    .box-modal .body-modal {
        max-height: 1000px;
    }

    .box-modal .body-modal .inner-body-modal {
        display: flex;
        flex-direction: column; 
        align-items: center;
        background: #fff;
        padding: 25px;
        border-radius: 8px;
        position: relative;
        z-index: 1;
        box-shadow: 0px 0px 65px 0px rgba(0, 0, 0, 0.43);
    }
</style>
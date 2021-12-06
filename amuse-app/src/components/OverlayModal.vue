<template>
  <div role="dialog">
    <p>Hey bud, you've got to be 21+ to enjoy some bud</p>
    <div>
      <button class="confirm" @click="verifyAge">Groovy</button>
      <button class="deny" @click="failAge">Bummer</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    verifyAge: function() {
      this.$emit('closeModal');
    },
    failAge: function() {
      window.location.replace('https://www.disney.com/');
    }
  }
}
</script>

<style scoped lang="scss">
  p {
    padding: 0 1rem;
  }
  .modal-visible {
    width: 100vw;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 20;
    position: absolute;
    overflow: hidden; 
  }
  div[role="dialog"] {
    height: 200px;
    background-color: white;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  button {
    font-family: inherit;
    border-radius: 0.25rem;
    padding: 1rem;
    margin: 1rem;
    border: none;
    cursor: pointer;
    box-shadow: 0px 3px 6px #dddddd;
    &:hover {
        box-shadow: 0px 3px 6px #bbbbbb;
        transform: scale(1.1);
      }
    }
    .confirm {
      background-color: #2c3e50;
      color: white;
    }

</style>
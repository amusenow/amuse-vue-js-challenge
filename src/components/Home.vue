<template>
  <Dialog
    header="Confirm Age"
    :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
    :style="{ width: '50vw' }"
    :modal="true"
    :visible="true"
  >
    <div class="grid">
      <div class="col-12">
        <Message severity="info" :closable="false">
          <strong>You’re 21+, right?</strong>
        </Message>
      </div>
    </div>

    <template #footer>
      <div class="grid">
        <div class="col-6 md:col-3">
          <Button label="No" @click="exit" class="p-button-outlined" />
        </div>

        <div class="col-6 md:col-3">
          <Button label="Yes" @click="enter" />
        </div>
      </div>
    </template>
  </Dialog>
</template>

<script>
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Message from 'primevue/message';
import router from '@/router';

export default {
  components: { Button, Dialog, Message },

  setup() {
    const enter = () => router.push('/categories');
    const exit = () => (window.location.href = 'http://www.google.com');
    return { enter, exit };
  }
};
</script>

<style lang="scss" scoped>
.p-dialog {
  .p-dialog-footer {
    button {
      width: 100%;
    }
  }
}
</style>

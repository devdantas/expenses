<template>
  <div>
    <div
      v-if="show"
      :class="`alert-${type}`"
      class="alert alert-dismissible fade show"
    >
      {{message}}
      <button type="button" class="close" @click="close()">
        <span>&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false,
    type: 'danger',
    message: ''
  }),
  created () {
    this.$root.$on('Notification::show', payload =>{
      this.show = true
      this.type = payload.type
      this.message = payload.message

      setTimeout(() => { this.close() }, payload.timeout || 10000)
    });
  },
  methods:  {
    close () {
      this.message = ''
      this.type = 'danger'
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
.alert{
  top:15px;
  right: 15px;
  z-index: 1000;
  position: absolute;
  max-width: 400px;
}
</style>

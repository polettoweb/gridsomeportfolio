<template>
  <div
    class="keywords__container"
    data-cy="keywords__container"
  >
    <div class="keywords__wrapper">
      <div>
        <p
          class="keywords__text"
          v-for="(item, i) in words"
          :key="i"
          :id="item.toLowerCase()"
        >{{item}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Keywords",
  props: {
    words: {
      type: Array,
      required: true,
      validator: prop => prop.length > 0
    }
  }
};
</script>
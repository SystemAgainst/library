<template>
  <div class="text-white">
    <select class="badge select-style">
        <option
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
        >
          {{ option.name }}
        </option>
    </select>
  </div>
</template>

<script>
// import {ref, watch} from "vue";

export default {
  name: "TheSelect",
  emits: ['select'],
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      required: true,
      default: 'active',
      validator(value) {
        return ['active', 'done', 'cancelled', 'pending'].includes(value);
      },
    },
  },
  setup() {
    const selectOption = (option) => {
      this.$emit('select', option);
    };
    // const status = ref(statuses[props.type]);

    return {
      selectOption,
    };
  },
};
</script>

<style scoped>
.select-style {
  padding: 0.5rem;
  cursor: pointer;
}
</style>

<template>
  <span :class="['badge', className]">{{ text ?? "Активен" }}</span>
</template>

<script>
import {ref, watch} from "vue";

export default {
  name: "AppStatus",
  props: {
    type: {
      type: String,
      required: true,
      default: 'active',
      validator(value) {
        return ['active', 'done', 'cancelled', 'pending'].includes(value);
      },
    },
  },
  setup(props) {
    const classesMap = {
      active: 'primary',
      cancelled: 'danger',
      done: 'primary',
      pending: 'warning'
    };

    const textMap = {
      active: 'Активен',
      cancelled: 'Отменен',
      done: 'Завершен',
      pending: 'Выполняется'
    };

    const className = ref(classesMap[props.type]);
    const text = ref(textMap[props.type]);

    watch(props, (value) => {
      className.value = className[value.type];
      text.value = textMap[value.type];
    });

    return {
      text,
      className,
    }
  },
}
</script>

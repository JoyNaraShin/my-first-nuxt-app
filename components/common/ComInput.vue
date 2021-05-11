<template>
  <div>
    <label v-if="makeLabel" :for="id">
      <em :class="labelClass">{{ labelTitle }}</em>
    </label>
    <input
      :id="id"
      ref="text"
      :type="type"
      :value="value"
      :name="name"
      :class="className"
      :disabled="isDisabled"
      :readonly="isReadOnly"
      :checked="isChecked"
      @input="$emit('input', $refs.text.value)"
      @keyup.enter="$emit('onEnter', $event)"
      @keyup="$emit('onKeyUp', $event)"
      @change="$emit('onChange', $event)"
    />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: false,
      default: '',
    },
    name: {
      type: String,
      required: false,
      default: '',
    },
    className: {
      type: String,
      required: false,
      default: '',
    },
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    value: {
      type: String,
      required: false,
      default: '',
    },
    isReadOnly: {
      type: Boolean,
      required: false,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    isChecked: {
      type: Boolean,
      required: false,
      default: false,
    },
    makeLabel: {
      type: Boolean,
      default: false,
      required: false,
    },
    labelTitle: {
      type: String,
      required: false,
      default: '',
    },
    labelClass: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>

<style></style>

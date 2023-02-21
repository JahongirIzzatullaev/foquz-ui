<template>
  <div>
    <draggable
      class="list-group"
      :style="isShowAccordion ? 'height:auto' : 'height:0'"
      tag="ul"
      v-model="list"
      v-bind="dragOptions"
      @start="isDragging = true"
      @end="isDragging = false"
    >
      <li
        class="list-group-item"
        v-for="element in list"
        :key="element.id"
      >
        {{ element.title }}
      </li>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "ListGroup",
  props: {
    listGroup: {
      type: Array,
      required: true,
      default: [],
    },
    isShowAccordion: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return { list: [] };
  },
  components: {
    draggable,
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: this.delayedDragging,
        ghostClass: "ghost",
      };
    },
  },
  created() {
    this.list = this.listGroup;
  },
};
</script>

<style scoped></style>

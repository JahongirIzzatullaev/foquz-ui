<template>
  <div>
    <div class="accordion_item cursor-pointer" @click="toggleAccordion()">
      <div class="left_section flex align-center">
        <accordion-icon
          class="accordion-icon"
          :isShowAccordion="isShowAccordion"
        />
        <span class="accordion-title">
          {{ data.title }}
        </span>
        <span class="accordion-description">
          {{ data.description }}
        </span>
      </div>
      <div class="right_section flex align-center">
        <span>
          <edit-icon />
        </span>
        <span>
          <delete-icon />
        </span>
        <span class="draggable-area">
          <drag-handler-icon />
        </span>
      </div>
    </div>
    <list-group :listGroup="data.list" :isShowAccordion="isShowAccordion" />
  </div>
</template>

<script>
import DragHandlerIcon from "./icons/DragHandlerIcon";
import draggable from "vuedraggable";
import AccordionIcon from "./icons/AccordionIcon";
import EditIcon from "./icons/EditIcon";
import DeleteIcon from "./icons/DeleteIcon";
import ListGroup from "./ListGroup";

export default {
  name: "AccordionItems",
  components: {
    ListGroup,
    DeleteIcon,
    EditIcon,
    AccordionIcon,
    DragHandlerIcon,
    draggable,
  },
  props: {
    data: {
      type: Object,
      required: true,
      default: {},
    },
    delayedDragging: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  data() {
    return {
      isShowAccordion: false,
    };
  },
  methods: {
    toggleAccordion() {
      this.isShowAccordion = !this.isShowAccordion;
    },
  },
};
</script>

<style lang="scss">
.accordion_item {
  cursor: pointer;
}
.left_section svg {
  margin-right: 15px;
}
.list-group {
  height: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}
.list-group.open {
  height: auto;
  transition: all 0.3s ease-in-out;
}
.right_section {
  span {
    margin-left: 20px;
  }
  span:last-child {
    margin-left: 15px;
  }
}
.accordion-description {
  margin-left: 15px;
  font-weight: 500;
  font-size: 13px;
  line-height: 108%;
  color: #8e9cbb;
}
</style>

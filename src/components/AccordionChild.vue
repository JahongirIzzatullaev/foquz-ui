<template>
  <div>
    <draggable
      class="list-group"
      :style="isShowAccordion ? 'height:auto' : 'height:0'"
      tag="ul"
      v-model="list"
      v-bind="dragOptions"
      @start="isDrag = true"
      @end="isDrag = false"
      handle=".draggable-item-area"
    >
      <li
        class="list-group-item flex align-center justify-between"
        v-for="element in list"
        :key="element.id"
      >
        <div class="item-left flex align-center">
          <span class="item-title">
            {{ element.title }}
          </span>
          <span class="item-required">
            {{ element.required ? "Обязательный" : "Необязательный" }}
          </span>
          <span class="item-for-all">
            {{ element.forAll ? "Для всех" : "Не для всех" }}
          </span>
        </div>
        <div class="item-right flex align-center">
          <span>
            <edit-icon />
          </span>
          <span>
            <delete-icon />
          </span>
          <span class="draggable-item-area">
            <drag-handler-icon />
          </span>
        </div>
      </li>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import EditIcon from "./icons/EditIcon";
import DeleteIcon from "./icons/DeleteIcon";
import DragHandlerIcon from "./icons/DragHandlerIcon";

export default {
  name: "AccordionChild",
  props: {
    listGroup: {
      type: Array,
      required: true,
      default: [],
    },
    isShowAccordion: {
      type: Boolean,
      required: false,
      default: true,
    },
    delayedDragging: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      list: [],
      delayedDrag: false,
      isDrag: false,
    };
  },
  components: {
    DragHandlerIcon,
    DeleteIcon,
    EditIcon,
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
  methods: {
    emitDelay(value) {
      this.$emit("delayedDrag", value);
    },
  },
  watch: {
    isDrag(newValue) {
      if (newValue) {
        this.delayedDrag = true;
        this.emitDelay(this.delayedDrag);
        return;
      }
      this.$nextTick(() => {
        this.delayedDrag = false;
        this.emitDelay(this.delayedDrag);
      });
    },
  },
};
</script>

<style scoped lang="scss">
.list-group {
  list-style: none;
  -webkit-padding-start: 0;
}
.list-group-item {
  background: #ffffff;
  border: 1px solid #dfe4ef;
  padding: 10px 15px;
}
.draggable-item-area {
  cursor: move;
}
.item-title {
  font-weight: 500;
  font-size: 14px;
  line-height: 108%;
  color: #000000;
}
.item-required {
  margin-left: 15px;
  font-weight: 500;
  font-size: 13px;
  line-height: 108%;
  color: #ff238d;
}
.item-for-all {
  margin-left: 15px;
  font-weight: 500;
  font-size: 13px;
  line-height: 108%;
  color: #8e9cbb;
}
.item-right {
  span {
    margin-left: 20px;
  }
  span:last-child {
    margin-left: 15px;
  }
}
</style>

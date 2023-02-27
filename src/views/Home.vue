<template>
  <div class="main">
    <div class="search flex align-center">
      <search-icon />
      <label :class="input_active ? 'active' : ''">
        <input
          type="text"
          v-model="search"
          @focus="input_active = true"
          @blur="input_active = false"
          placeholder="Документ ..."
        />
      </label>
      <div
        class="remove-btn"
        :class="input_has_value ? '' : 'hidden'"
        @click="removeValue"
      >
        <remove-icon />
      </div>
    </div>
    <draggable
      tag="div"
      class="accordion"
      v-model="list"
      v-bind="dragOptions"
      @start="isDragging = true"
      @end="isDragging = false"
      handle=".draggable-area"
      :animation="300"
    >
      <accordion
        v-for="item in filteredList"
        :key="item.id"
        :data="item"
        :delayedDragging="delayedDragging"
        @delayed="delayed($event)"
      />
    </draggable>
    <accordion-child
      :listGroup="documentsList"
      class="mt-4"
      :delayedDragging="delayedDragging"
    />
  </div>
</template>

<script>
import draggable from "vuedraggable";
import DragHandlerIcon from "../components/icons/DragHandlerIcon";
import Accordion from "../components/Accordion";
import AccordionChild from "../components/AccordionChild";
import SearchIcon from "../components/icons/SearchIcon";
import RemoveIcon from "../components/icons/RemoveIcon";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    RemoveIcon,
    SearchIcon,
    AccordionChild,
    Accordion,
    DragHandlerIcon,
    draggable,
  },
  data() {
    return {
      list: [],
      isDragging: false,
      delayedDragging: false,
      delayedDrag: false,
      search: "",
      input_active: false,
      input_has_value: false,
    };
  },
  methods: {
    delayed(data) {
      this.delayedDrag = data;
    },
    removeValue() {
      this.search = "";
    },
  },
  computed: {
    ...mapGetters(["documentsListCategories", "documentsList"]),
    filteredList() {
      return this.documentsListCategories.filter((item) => {
        return (item.title + item.description)
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: this.delayedDrag,
        ghostClass: "ghost",
      };
    },
    listString() {
      return JSON.stringify(this.list, null, 2);
    },
  },
  watch: {
    isDragging(newValue) {
      if (newValue) {
        this.delayedDragging = true;
        return;
      }
      this.$nextTick(() => {
        this.delayedDragging = false;
      });
    },
    search(newValue) {
      this.input_has_value = !!newValue;
    },
  },
};
</script>

<style lang="scss">
.main {
  padding: 20px 0;
}
.accordion {
  margin-top: 20px;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.accordion_item {
  padding: 13px 16px;
  border: 1px solid #dfe4ef;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
}
.draggable-area {
  cursor: move;
}
.search {
  max-width: fit-content;
  border-bottom: 1px solid #0066ff;
  input {
    all: unset;
    cursor: initial;
    padding: 12px 0;
    font-weight: 400;
    font-size: 15px;
    line-height: 108%;
    color: #000000;
    width: 400px;
    margin: 0 12px;
  }
  .hidden {
    visibility: hidden;
  }
  .remove-btn {
    cursor: pointer;
    padding: 12px;
  }
}
.sortable-chosen {
  border: 1px solid #dfe4ef;
  box-shadow: 0 3px 16px rgba(0, 102, 255, 0.5);
}
</style>

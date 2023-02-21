<template>
  <div class="navbar flex justify-between">
    <h1 class="title flex align-center">Документы</h1>
    <div class="navbar-actions flex align-center">
      <div class="cursor-pointer"><book-mark-icon /></div>
      <div class="add-type flex align-center cursor-pointer">
        <plus-icon />Новый тип
      </div>
      <div class="add-document flex align-center cursor-pointer">
        <plus-icon />Новый документ
      </div>
    </div>
  </div>
</template>

<script>
import BookMarkIcon from "./icons/BookMarkIcon";
import PlusIcon from "./icons/PlusIcon";
export default {
  name: "TheHeader",
  components: { PlusIcon, BookMarkIcon },
};
</script>

<style scoped lang="scss">
.navbar {
  width: 100%;
  .title {
    font-weight: 600;
    font-size: 22px;
    line-height: 108%;
  }
  .add-type,
  .add-document {
    padding: 8px 20px 8px 10px;
    font-weight: 600;
    font-size: 14px;
    line-height: 108%;
    border: 1px solid #d3d8df;
    margin-left: 10px;
    border-radius: 50px;
    svg {
      margin-right: 10px;
    }
  }
}
</style>

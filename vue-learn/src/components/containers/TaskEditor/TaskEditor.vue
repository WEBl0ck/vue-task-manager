<script setup lang="ts">
import CardItem from "../../shared/CardItem.vue";
</script>

<template>
  <div className="task-editor-container">
    <div class="task-editor-header">
      <div class="task-editor-header--actions">
        <img src="../../../assets/icons/set_timer.svg" />
        <img src="../../../assets/icons/mark_as_completed.svg" />
      </div>
      <div class="task-editor-header--title">Learn new words</div>
      <div class="task-editor-header--options">
        <img src="../../../assets/icons/options.svg" />
      </div>
    </div>
    <div class="task-editor-body">
      <div class="task-editor-body--description">
        I need to learn new english words before new year is comming for long time and we all starting to be something
        real.
      </div>
      <div class="task-editor-sub-tasks">
        <CardItem icon="UNCHECKED" title="Title" />
        <CardItem icon="UNCHECKED" title="Title" description="Description" />
        <CardItem icon="CHECKED" title="Title" description="Description" />
      </div>
      <CardItem sx="task-editor-sub-task-button" title="Add sub task" icon="PLUS" />
    </div>
  </div>
</template>

<style scoped>
.task-editor-container {
  height: 100%;
  background-color: var(--system-white-40);
  width: 70%;
  border-radius: 30px;
  padding: 15px;
}

.task-editor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task-editor-header--title {
  font-weight: 700;
  font-size: 30px;
  line-height: 40px;
}

.task-editor-body {
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  margin-top: 15px;
}

.task-editor-body--description {
  font-size: 15px;
  line-height: 16px;
  font-weight: 500;
}

.task-editor-header--actions {
  display: flex;
  gap: 15px;
}

.task-editor-header--actions img {
  height: 35px;
  width: 35px;
  cursor: pointer;
}

.task-editor-header--options {
  display: flex;
  align-items: center;
}

.task-editor-header--options img {
  height: 25px;
  cursor: pointer;
}

.task-editor-sub-tasks {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 15px 0px;
}

.task-editor-sub-tasks div {
  background-color: var(--system-white-30);
  min-height: 70px;
}

.task-editor-sub-task-button {
  background-color: var(--system-white-30);
  gap: 10px;
  cursor: pointer;
  min-height: 70px;
}
</style>

<script>
import Store from "@/store";

export default {
  name: "CalendarEvent",
  props: {
    event: Object,
    day: Object,
  },
  computed: {
    displayPriority() {
      return this.event.priority < 0
        ? `Niedrig`
        : this.event.priority < 1
        ? `Mittel`
        : `Hoch`;
    },
    alertColor() {
      return `alert-${this.event.color}`;
    },
  },
  methods: {
    deleteEvent() {
      Store.mutations.deleteEvent(this.day.id, this.event.title);
    },
  },
};
</script>

<template>
  <div id="calendar-event">
    <div class="alert text-center" :class="alertColor">
      <div>
        <slot name="eventPriority" :displayPriority="displayPriority">
          <strong>{{ displayPriority }}</strong>
        </slot>
      </div>
      <slot :event="event.title">
        <div>{{ event.title }}</div>
      </slot>
      <div>
        <i class="fas fa-edit me-2" role="button"></i>
        <i class="far fa-trash-alt" role="button" @click="deleteEvent()"></i>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

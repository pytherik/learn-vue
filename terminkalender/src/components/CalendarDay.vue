<script>
import CalendarEvent from "@/components/CalendarEvent.vue";
import Store from "@/store";

export default {
  name: "CalendarDay",
  components: {
    CalendarEvent,
  },
  props: {
    day: {
      type: Object,
    },
  },
  computed: {
    cardClasses() {
      return (
        this.day.id === Store.getters.getActiveDay().id && ["border-primary"]
      );
    },
    cardHeaderClasses() {
      return (
        this.day.id === Store.getters.getActiveDay().id && [
          "bg-primary",
          "text-white",
        ]
      );
    },
  },
};
</script>

<template>
  <div class="card border-start" :class="cardClasses">
    <div id="calendar-day">
      <div
        class="card-header text-center"
        role="button"
        :class="cardHeaderClasses"
      >
        <strong>{{ day.fullName }}</strong>
      </div>
      <div class="card-body">
        <CalendarEvent
          v-for="(event, idx) in day.events"
          :key="idx"
          :event="event"
          :day="day"
        >
          <template v-slot:eventPriority="{ displayPriority }"
            ><h5>{{ displayPriority }}</h5></template
          >
          <template v-slot="{ event }"
            ><h5>{{ event }}</h5></template
          >
        </CalendarEvent>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

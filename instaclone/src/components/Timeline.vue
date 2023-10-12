<script setup>

import Container from "@/components/Container.vue";
import Card from "@/components/Card.vue";

const data = [
  {
    id: 1,
    username: 'Erik',
    url: 'https://66.media.tumblr.com/05435973ec60349b40aab0a9f421b413/tumblr_owvqx0PRgB1w3tnbko8_500.jpg',
    caption: 'Kiss me!!',
  },
  {
    id: 2,
    username: 'Nena',
    url: 'https://i.pinimg.com/originals/ea/a5/1e/eaa51e413bc17414aa63c09502d53306.jpg',
    caption: 'Ich hab nur von dir geträumt'
  },
  {
    id: 3,
    username: 'Vanessa',
    url: 'https://i.pinimg.com/originals/a9/3b/4b/a93b4b741d48cf5516236fd9c5db8f7f.jpg',
    caption: 'Hello Taxi'
  },
  {
    id: 4,
    username: 'Nena',
    url: 'https://i.pinimg.com/736x/b4/b2/da/b4b2dacb2367b3daba593015a3fa355c--the-germans-the-band.jpg',
    caption: ''
  },
  {
    id: 5,
    username: 'Paloma',
    url: 'https://vignette.wikia.nocookie.net/to-hollywood-and-beyond/images/d/da/Paloma_Kwiatkowski.jpg/revision/latest?cb=20160911230109',
    caption: 'you make me wanna'
  },
]


</script>

<template>
  <Container>
    <div class="timeline-container">
    <Card v-for="post in data" :key="post.id" :post="post"/>
    </div>
  </Container>
</template>

<style scoped>
.timeline-container {
  background: #5F9EA011;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
}
</style>
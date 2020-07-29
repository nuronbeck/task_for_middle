<template>
  <section class="apartments">
    <ApartmentCard v-for="(apartment, ind) in all_apartments" :key="ind" :apartment="apartment"/>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import ApartmentCard from '@/components/ApartmentCard.vue'

export default {
  name: 'Home',
  components: {
    ApartmentCard
  },
  computed: {
    ...mapGetters({
      all_apartments: 'apartments/all_apartments'
    })
  }
}
</script>

<style>
.apartments{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>

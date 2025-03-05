<template>
  <div class="app-container">
    <Navbar />
    <div class="d-flex">
      <Sidebar />
      <div class="d-flex p-2 gap-1" style="width: 75%;">
        <div class="d-flex gap-1" style="width: 70%; height: 100%;">
          <div id="produk-list" class="w-100 row" style="height: auto;">
            <div v-for="item in produk" :key="item.name" class="w-50" style="height: 300px;">
              <div class="w-100 border rounded p-2" style="height: 300px;">
                <img :src="item.image" :alt="item.name" style="height: 200px; width: auto;">
                <div class="d-flex justify-content-between">
                  <p>{{ item.name }}</p>
                </div>
                <button class="btn btn-outline-secondary w-50">-</button>
                <button class="btn btn-outline-secondary w-50">+</button>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex border-start p-2" style="width: 30%;">
          <p style="font-size: larger;">Detail Transaksi</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/layout/navbar.vue'
import Sidebar from '@/components/layout/sidebar.vue'
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  components: {
    Navbar,
    Sidebar,
    RouterLink
  },
  data() {
    return {
      produk: [
        {
          name: "Jokodude",
          image: import('@/assets/kambing.jpg')
        },
        {
          name: "Mamah Dede",
          image: import('@/assets/babi.webp')
        },
        {
          name: "Johny Sins",
          image: import('@/assets/ayam.webp')
        },
        {
          name: "MelonId",
          image: import('@/assets/ganja.jpg')
        },
      ]
    }
  }
})
</script>
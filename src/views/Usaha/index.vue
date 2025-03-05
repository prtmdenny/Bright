<template>
  <div class="app-container">
    <Navbar />
    <div class="d-flex">
      <Sidebar />
      <div class="d-flex p-2" style="width: 75%;">
        <div class="d-flex flex-column" style="width: 70%; height: 100%;">
          <div id="produk-list" class="w-100 d-flex flex-wrap" style="height: auto;">
            <div v-for="item in produk" :key="item.name" class="w-50 p-2 mb-2 overflow-hidden" style="height: auto;">
              <div class="w-100 border rounded p-2" style="height: 100%;">
                <div class="">
                  <img :src="item.image" :alt="item.name" class="w-100 img-fluid" style="object-fit: cover; height: 200px; background-position: center; border-radius: 5px;">
                </div>
                <hr class="hr"/>
                <div class="d-flex justify-content-between">
                  <p>{{ item.name }}</p>
                  <p>{{ item.price }}</p>
                </div>
                <div class="d-flex gap-1">
                  <button class="btn btn-outline-danger w-50">-</button>
                  <button class="btn btn-outline-primary w-50">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex flex-column border-start p-2" style="width: 30%;">
          <p style="font-size: larger; margin-bottom: 0px;">Detail Transaksi</p>
          <hr class="hr"/>
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
          name: "Kambing",
          price: "$8",
          image: new URL('@/assets/kambing.jpg', import.meta.url).href
        },
        {
          name: "Babi Oseng",
          price: "$5",
          image: new URL('@/assets/babi.webp', import.meta.url).href
        },
        {
          name: "Ayam Lengkuas",
          price: "$4",
          image: new URL('@/assets/ayam.webp', import.meta.url).href
        },
        {
          name: "Narkoba",
          price: "$15",
          image: new URL('@/assets/ganja.jpg', import.meta.url).href
        },
      ]
    }
  }
})
</script>
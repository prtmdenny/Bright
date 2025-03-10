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
                  <img :src="item.image" :alt="item.name" class="w-100 img-fluid"
                    style="object-fit: cover; height: 200px; background-position: center; border-radius: 5px;">
                </div>
                <hr class="hr" />
                <div class="d-flex justify-content-between">
                  <p>{{ item.name }}</p>
                  <p>${{ item.price }}</p>
                </div>
                <div class="d-flex gap-1">
                  <div v-if="item.quantity == 0" class="w-100">
                    <button class="btn btn-outline-primary w-100" @click="addItems(item)">Tambah</button>
                  </div>
                  <div v-else class="d-flex w-100 gap-1">
                    <button style="width: 30%;" class="btn btn-outline-danger" @click="decrementQuantity(item)">-</button>
                    <div class="d-flex justify-content-center" style="width: 40%;">
                      <p>{{ item.quantity }}</p>
                    </div>
                    <button style="width: 30%;" class="btn btn-outline-primary" @click="incrementQuantity(item)">+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex flex-column border-start p-2" style="width: 30%;">
          <p style="font-size: larger; margin-bottom: 0px;">Detail Transaksi</p>
          <hr class="hr" />
          <div class="" v-for="p in transaksi_details" :key="p.id">
            <div class="d-flex justify-content-between">
              <p>{{ p.name }}</p>
              <p>{{ p.quantity }}</p>
            </div>
            <p>${{ p.price * p.quantity }}</p>
            <hr class="hr" />
          </div>
          <p>Total: ${{ totalHarga }}</p>
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
          id: 1,
          name: "Kambing",
          price: 8,
          image: new URL('@/assets/kambing.jpg', import.meta.url).href,
          quantity: 0
        },
        {
          id: 2,
          name: "Babi Oseng",
          price: 5,
          image: new URL('@/assets/babi.webp', import.meta.url).href,
          quantity: 0
        },
        {
          id: 3,
          name: "Ayam Lengkuas",
          price: 4,
          image: new URL('@/assets/ayam.webp', import.meta.url).href,
          quantity: 0
        },
        {
          id: 4,
          name: "Narkoba",
          price: 15,
          image: new URL('@/assets/ganja.jpg', import.meta.url).href,
          quantity: 0
        },
      ],

      transaksi_details: [],
    }
  },
  computed: {
    totalHarga() {
      return this.transaksi_details.reduce((total, item) => total + item.price * item.quantity, 0)
    }
  },
  methods: {
    addItems(item) {
      item.quantity++
      var object = {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      }
      this.transaksi_details.push(object);
    },
    incrementQuantity(item) {
      item.quantity++;
      const index = this.transaksi_details.findIndex(p => p.id === item.id)
      if (index !== -1) {
        this.transaksi_details[index].quantity = item.quantity
      }
    },
    decrementQuantity(item) {
      if (item.quantity > 0) {
        item.quantity--
        const index = this.transaksi_details.findIndex(p => p.id === item.id)
        if (index !== -1) {
          this.transaksi_details[index].quantity = item.quantity
          if (item.quantity === 0) {
            this.transaksi_details.splice(index, 1)
          }
        }
      }
    }
  }
})
</script>
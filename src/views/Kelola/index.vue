<template>
  <div class="">
    <Navbar />
    <div class="d-flex">
      <Sidebar />
      <div class="d-flex p-2 gap-1" style="width: 75%;">
        <div class="d-flex gap-1" style="width: 70%; height: 100%;">
              <div class="w-50 border rounded p-2" style="height: 100px;">
                <div class="d-flex justify-content-between">
                  <p>Produk</p>
                  <p>></p>
                </div>
                <RouterLink to="/Produk" class="btn btn-outline-secondary w-100">Tambah Produk</RouterLink>
              </div>
            <div class="w-50 border rounded p-2" style="height: 100px;">
              <div class="d-flex justify-content-between">
                <p>Pelanggan</p>
                <p>></p>
              </div>
              <RouterLink to="/Pelanggan" class="btn btn-outline-secondary w-100">Tambah Pelanggan</RouterLink>
            </div>
          </div>
        <div class="d-flex border-start p-2" style="width: 30%;">
          <p style="font-size: larger;">Data Harian</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/layout/navbar.vue'
import Sidebar from '@/components/layout/sidebar.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    Navbar,
    Sidebar,
  },
})
</script>

<template>
  <div class="">
    <Navbar />
    <div class="d-flex">
      <Sidebar />
      <div class="d-flex p-2 gap-1" style="width: 75%;">
        <div class="d-flex flex-column p-2 w-100" style=" height: 100%;">
          <h4>
            Penambahan Produk
          </h4>
          <div class="container">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title mb-3">Form Input Produk</h5>
                <form>
                  <div class="form-group">
                    <label class="mb-1" for="nama_produk">Nama Produk</label>
                    <input type="text" id="nama_produk" class="form-control" placeholder="Masukkan nama produk">
                  </div>
                  <br>
                  <div class="form-group">
                    <label class="mb-1" for="harga_produk">Harga Produk</label>
                    <input type="number" id="harga_produk" class="form-control" placeholder="Masukkan harga produk">
                  </div>
                  <br>
                  <div class="form-group">
                    <label class="mb-1" for="stok_produk">Stok Produk</label>
                    <input type="number" id="stok_produk" class="form-control" placeholder="Masukkan stok produk">
                  </div>
                  <br>
                  <div class="form-group">
                    <label class="mb-1" for="gambar_produk">Gambar Produk</label>
                    <input type="file" id="gambar_produk" class="form-control" accept="image/*">
                  </div>
                  <br>
                  <button type="submit" class="btn btn-primary">Simpan</button>
                </form>
              </div>
            </div>
          </div>
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

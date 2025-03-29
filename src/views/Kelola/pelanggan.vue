<template>
    <div class="">
        <Navbar />
        <div class="d-flex">
            <Sidebar />
            <div class="d-flex p-2 gap-1" style="width: 75%;">
                <div class="d-flex flex-column p-2 w-100" style=" height: 100%;">
                    <h4>
                        Penambahan Pelanggan
                    </h4>
                    <div class="container">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title mb-3">Form Input Pelanggan</h5>
                                <form>
                                    <div class="form-group">
                                        <label class="mb-1" for="nama_pelanggan">Nama</label>
                                        <input type="text" id="nama_pelanggan" class="form-control"
                                            placeholder="Masukkan nama pelanggan">
                                    </div>
                                    <br>
                                    <div class="form-group">
                                        <label class="mb-1" for="email_pelanggan">Email</label>
                                        <input type="email" id="email_pelanggan" class="form-control"
                                            placeholder="Masukkan email pelanggan">
                                    </div>
                                    <br>
                                    <div class="form-group">
                                        <label class="mb-1" for="no_telp_pelanggan">No. Telp</label>
                                        <input type="number" id="no_telp_pelanggan" class="form-control"
                                            placeholder="Masukkan no. telp pelanggan">
                                    </div>
                                    <br>
                                    <div class="form-group">
                                        <label class="mb-1" for="profil_pelanggan">Profil Pelanggan</label>
                                        <input type="file" id="profil_pelanggan" class="form-control" accept="image/*">
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
<template>
  <div class="app-container">
    <Navbar />
    <div class="">
      <div class="d-flex w-100">
        <Sidebar />
        <div class="w-75 p-2 d-flex justify-content-start">
          <div
            class="d-flex border rounded p-3 w-100 justify-content-between align-items-center"
            style="height: 200px"
          >
            <div class="d-flex">
              <img
                style="background-position: center; object-fit: cover"
                width="150"
                height="150"
                src="@/assets/Profile.png"
                alt="Avatar"
              />
              <div class="d-flex flex-column p-4">
                <h3>Hello, Denny Suwando Pratama</h3>
                <p>Administrator</p>
              </div>
            </div>
            <div class="btn btn-outline-secondary px-3 py-3">Edit Profile</div>
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

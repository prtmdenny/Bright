<template>
  <div class="w-100 p-2 d-flex align-items-center border-bottom justify-content-between">
    <div class="logo p-2 d-flex align-items-center">
      <div class="d-flex border border-primary rounded-circle">
        <img width="60" class="rounded" src="@/assets/factory.png" alt="Logo" />
      </div>
      <div class="d-block ms-3">
        <h3 class="m-0">Bright</h3>
        <p class="m-0">Company</p>
      </div>
    </div>
    <div class="d-flex">
      <a href="">
        <RouterLink to="/Profile" class="">
          <img width="90" class="rounded" src="@/assets/Profile.png" alt="Logo"/>
        </RouterLink>
      </a>
    </div>
  </div>
</template>

<script setup></script>

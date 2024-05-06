<template>
  <div class="outer-box">
    <h2>Selamat Datang di Aplikasi</h2>
    <div class="home">
      <p>Aplikasi ini dibuat oleh:</p>
      <ul>
        <li>NPM: 40622100022</li>
        <li>NAMA: CHOERUNNISA</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
h2 {
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}

.outer-box {
  border: 1px solid #ccc;
  padding: 20px;
  width: 300px;
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 100px;
  margin-left: 270px;
  width: 350px;
  height: 190px;
}

.home {
  margin-top: 20px;
}
</style>

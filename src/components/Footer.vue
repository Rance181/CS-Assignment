<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
</script>

<template>
    <div class="footer-container">
        <div class="footer-item" id="webname">
            <h2>TMDB Movie</h2>
            <p>Find Your Movie In Our Website</p>
        </div>
        <div class="footer-item" id="copyright">
            <p>copyright ©2022 tmdbmovie(not actuall one)</p>
        </div>
    </div>
</template>

<style scoped>
*{
    margin:0;
    padding:0;
}
.footer-container{
    width:100vw;
    height:15vh;
    text-align:center;
    font-size: 3rem;
}

.footer-item h2 {
    font-size:25px;
}

.footer-item p {
    padding-top:10px;
    font-size:15px;
}

#copyright{
    padding-top:30px;
}

</style>
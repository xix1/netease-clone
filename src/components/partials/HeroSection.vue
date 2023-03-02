<template>
    <div class=" max-w-5xl w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" >
        <div class=" px-4 md:w-3/4 lg:w-2/3 mx-auto text-center">
            <h1 class="text-4xl font-bold sm:text-5xl md:text-5xl leading-tight text-center text-gray-100 mb-3">
                Musical Social Network
            </h1>
            <p class="pt-2 text-xl text-center text-gray-300">
                Login or Register now
            </p>
            <p class="py-4 text-xl text-center text-gray-300">
                Let the music be your guide...
            </p>
        </div>
        <div class="mt-6"></div>
        <div class="flex justify-between">
            <router-link 
                to="login"
                class="
                w-full 
                mr-1 
                py-2 
                px-4
                bg-green-600 
                text-white 
                text-center
                font-semibold 
                text-2xl 
                rounded-lg 
                shadow-md 
                hover:bg-green-500
                focus:outline-none
                focus:ring-2
                focus:ring-green-400
                focus:ring-opacity-75
                cursor-pointer"
            >
                Login
            </router-link>
            <router-link 
            to="register"
            class="
                w-full 
                mr-1 
                py-2 
                px-4
                bg-blue-600 
                text-white 
                text-center
                font-semibold 
                text-2xl 
                rounded-lg 
                shadow-md 
                hover:bg-blue-500
                focus:outline-none
                focus:ring-2
                focus:ring-blue-400
                focus:ring-opacity-75
                cursor-pointer">
                Register
            </router-link>
        </div>
    </div>
    <div id="videoDarkOverlay">aaa</div>
    <video  autoplay muted loop id="myVideo" src="../../../public/concert-1630.mp4">
    </video>
    
    
</template>

<script setup>

</script>

<style lang="scss" scoped>
        #myVideo {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -2;
    }
    #videoDarkOverlay {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -1;
        background-color: rgba(0,0,0,0.65);
    }
</style>
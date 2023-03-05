<template>
    <div class="container max-w-4xl mx-auto flex">
        <div class="w-1/3">           
            <img 
                class="w-full rounded-lg h-auto shadow-lg"
                src="https://via.placeholder.com/500" 
                alt="Profile Pic"
            >            
        </div>
        <div class="w-full pl-4">
            <div class="flex">
                <div class="w-1/2">
                    <h1 class="text-2xl md:text-4xl text-left text-gray-900">
                        XX XX
                    </h1>
                    <span class="text-md text-gray-700">
                        <i><b>Linkoping, Sweden</b></i>
                    </span>
                </div>
                <div class="w-1/2">
                    <router-link 
                        to=""
                        class="
                            float-right
                            bg-transparent
                            text-gray-900
                            font-semibold
                            hover:text-white
                            py-2
                            px-4
                            border
                            border-green-500
                            hover:border-transparent
                            hover:bg-green-500
                            rounded
                        ">
                        Edit Profile
                    </router-link>
                </div>
            </div>
            <ProfileInfoSection />
            <ProfileAboutSection />
        </div>
    </div>
</template>

<script setup>

import ProfileInfoSection from '../../components/partials/profile/ProfileInfoSection.vue'
import ProfileAboutSection from '../../components/partials/profile/ProfileAboutSection.vue'
</script>

<style lang="scss" scoped></style>
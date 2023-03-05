<template>
    <div id="Register">
        <div class="w-full p-6 flex justify-center items-center">
            <div>
                <div class="bg-black p-8 shadow rounded mb-6">
                    <h1 class="mb-6 text-lg text-gray-100 font-thin">Let's get rocking!</h1>
                    <div class="mb-4">
                        <TextInput label="First Namwe" :labelColor="false" placeholder="Xi" v-model:input="firstName"
                            inputType="text" error="This is a text error" />
                    </div>
                    <div class="mb-4">
                        <TextInput label="Last Namwe" :labelColor="false" placeholder="Tan" v-model:input="lastName"
                            inputType="text" error="This is a text error" />
                    </div>

                    <div class="mb-4">
                        <TextInput label="Email" :labelColor="false" placeholder="xx@xx.com" v-model:input="email"
                            inputType="email" error="This is a email error" />
                    </div>

                    <div class="mb-4">
                        <TextInput label="Password" :labelColor="false" placeholder="password123?" v-model:input="password"
                            inputType="text" error="This is a psw error" />
                    </div>

                    <div class="mb-4">
                        <TextInput label="Confirm password" :labelColor="false" placeholder="password123?"
                            v-model:input="confirmPassword" inputType="text" error="This is a confirmPwd error" />
                    </div>


                    <button class="block w-full bg-green-500 text-white rounded-sm py-3 text-sm tracking-wide"
                        type="submit">
                        Register
                    </button>
                </div>
                <p class="text-center text-gray-900">
                    Already have an account?
                    <router-link to="login" class="text-blue-500 hover:underline">
                        Login
                    </router-link>
                </p>
            </div>
        </div>


    </div>
</template>

<script setup>
import { ref } from 'vue';
import TextInput from '../components/global/TextInput.vue';

let firstName = ref('')
let lastName = ref('')
let email = ref('')
let password = ref('')
let confirmPassword = ref('')

</script>

<style lang="scss" scoped></style>
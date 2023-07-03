<template>
    <section class="contact" id="contact">
        <MainContainer>
            <div class="contact__content">
                <h3 class="title">Contact Us</h3>
                <form class="form" @submit.prevent="handleSubmit($v)" novalidate>
                    <div class="form__fields">
                        <div class="form__field"
                            v-for="client in inputsList"
                            :key="client.idKey"
                        >
                            <div class="label">
                                <label :for="client.id">{{ client.label }}</label>
                                <span v-if="client.required" >*</span>
                            </div>
                            <input
                                :class="['input', {'input-error': $v.clientData[client.id].$error}]"
                                v-model.trim="$v.clientData[client.id].$model"
                                :id="client.id"
                                :type="client.type"
                                :placeholder="client.placeholder"
                                :required="client.required"
                                @blur="$v.clientData[client.id].$touch()"
                            >
                            <div class="error-message">
                                <span v-if="$v.clientData[client.id].$error">
                                    {{$v.clientData[client.id].$errors[0].$message}}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="btn-wrapper">
                        <Button title="Submit" type="submit"/>
                    </div>
                </form>
            </div>
        </MainContainer>
    </section>
</template>

<script>
import axios from 'axios';
import MainContainer from '@/components/Common/MainContainer';
import Button from '@/components/Common/Button';
import { inputsList } from '@/shared/data/data.contact';
import { giveErrorMessage } from '@/shared/giveErrorMessage';
import { useVuelidate } from '@vuelidate/core';
import { required, email, alpha, numeric, minLength, maxLength } from '@vuelidate/validators';

export default {
    name: 'ContactComponent',
    components: {
        MainContainer,
        Button,
    },
    data() {
        return {
            inputsList,
            $v: useVuelidate(),
            clientData: {
                firstName: '',
                lastName: '',
                company: '',
                email: '',
                jobTitle: '',
                country: '',
                state: '',
                zipCode: '',
            }
        }
    },
    methods: {
        handleSubmit($v) {
            $v.$touch();
            if ($v.$pending || $v.$error || !$v.$dirty) return;
            axios.post('https://jsonplaceholder.typicode.com/posts', this.clientData)
            .then((response) => {
                alert('Form successfully submitted.');
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
            $v.$reset();
            this.resetModel();
        },
        resetModel() {
            this.clientData.firstName = '';
            this.clientData.lastName = '';
            this.clientData.company = '';
            this.clientData.email = '';
            this.clientData.jobTitle = '';
            this.clientData.country = '';
            this.clientData.state = '';
            this.clientData.zipCode = '';
        },
        
    },
    validations () {
        return {
            clientData: {
                firstName: {
                    required: giveErrorMessage(required),
                    alpha: giveErrorMessage(alpha),
                    minLength: giveErrorMessage(minLength, 3),
                    maxLength: giveErrorMessage(maxLength, 20),
                },
                lastName: {
                    required: giveErrorMessage(required),
                    alpha: giveErrorMessage(alpha),
                    minLength: giveErrorMessage(minLength, 3),
                    maxLength: giveErrorMessage(maxLength, 20),
                },
                company: {
                    required: giveErrorMessage(required),
                    minLength: giveErrorMessage(minLength, 2),
                    maxLength: giveErrorMessage(maxLength, 20),
                },
                email: {
                    required: giveErrorMessage(required),
                    email: giveErrorMessage(email),
                },
                jobTitle: {
                    required: giveErrorMessage(required),
                    alpha: giveErrorMessage(alpha),
                    minLength: giveErrorMessage(minLength, 2),
                    maxLength: giveErrorMessage(maxLength, 20),
                },
                country: {
                    alpha: giveErrorMessage(alpha),
                    minLength: giveErrorMessage(minLength, 2),
                    maxLength: giveErrorMessage(maxLength, 20),
                },
                state: {
                    required: giveErrorMessage(required),
                    minLength: giveErrorMessage(minLength, 2),
                    maxLength: giveErrorMessage(maxLength, 20),
                },
                zipCode: {
                    required: giveErrorMessage(required),
                    numeric: giveErrorMessage(numeric),
                },
            }
        }
    },
}
</script>
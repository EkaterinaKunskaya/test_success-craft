<template>
    <section class="applications" id="applications">
        <MainContainer>
            <div class="applications__content">
                <h3 class="title">Applications</h3>
                <div class="applications__list">
                    <div class="application"
                        v-for="({ idKey, name, img }) in applicationsList"
                        :key="idKey"
                    >
                        <img :src="require(`../../assets/images/applications-section/img-${img}.jpg`)" :alt="img"/>
                        <p class="text">{{ name }}</p>
                    </div>
                </div>
            </div>
        </MainContainer>
    </section>
</template>

<script>
import MainContainer from '@/components/Common/MainContainer';
import { applicationsList } from '@/shared/data/data.applications';

export default {
    name: 'ApplicationsComponent',
    components: {
        MainContainer,
    },
    data() {
        return {
            applicationsList,
        }
    },
}
</script>
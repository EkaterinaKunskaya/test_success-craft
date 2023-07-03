<template>
    <section class="frameworks" id="frameworks">
        <MainContainer>
            <div class="frameworks__content">
                <h3 class="title">Frameworks</h3>
                <div class="cards">
                    <div class="card" 
                        v-for="({ idKey, name, text, img }, index) in frameworksList"
                        :key="idKey"
                    >
                        <img v-if="(index%2)===0" :src="require(`../../assets/images/frameworks-section/img-${img}.jpg`)" :alt="img"/>
                        <div class="card__text">
                            <h4 class="subtitle">{{ name }}</h4>
                            <p class="text">{{ text }}</p>
                            <div class="btns-wrapper">
                                <Button title="Read more"/>
                                <Button title="Webinar" :transporent="true"/>
                            </div>
                        </div>
                        <img v-if="((index%2)!==0)" :src="require(`../../assets/images/frameworks-section/img-${img}.jpg`)" :alt="img"/>
                    </div>
                </div>

            </div>
        </MainContainer>
    </section>
</template>

<script>
import MainContainer from '../Common/MainContainer';
import Button from '../Common/Button';
import { frameworksList } from '@/shared/data/data.frameworks';

export default {
    name: 'FrameworksComponent',
    components: {
        MainContainer,
        Button,
    },
    data() {
        return {
            frameworksList,
        };
    },
}
</script>
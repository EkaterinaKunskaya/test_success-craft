<template>
    <section class="events">
        <MainContainer>
            <div class="events__content">
                <div class="event"
                    v-for="({ idKey, title, text, img, btnTitle }) in eventsList"
                    :key="idKey"
                >
                    <img :src="require(`../../assets/images/events-section/img-${img}.jpg`)" :alt="img"/>
                    <div class="event__text">
                        <h4 class="subtitle">{{ title }}</h4>
                        <p class="text">{{ text }}</p>
                        <Button :title="btnTitle" />
                    </div>
                </div>
            </div>
        </MainContainer>
    </section>
</template>

<script>
import MainContainer from '@/components/Common/MainContainer';
import Button from '@/components/Common/Button';
import { eventsList } from '@/shared/data/data.events';

export default {
    name: 'EventsComponent',
    components: {
        MainContainer,
        Button,
    },
    data() {
        return {
            eventsList,
        }
    },
}
</script>
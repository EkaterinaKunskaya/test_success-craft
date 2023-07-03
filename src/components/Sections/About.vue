<template>
    <section class="about" id="about">
        <MainContainer>
            <div class="about__content">
                <div class="about__text">
                    <h3 class="title">About us</h3>
                    <p class="text">
                        Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a 
                        type specimen book. It has survived not only five centuries, 
                        but also the leap into electronic typesetting, remaining 
                        essentially unchanged. It was popularised in the 1960s with 
                        the release of Letraset.
                    </p>
                    <div class="btns-wrapper">
                        <Button title="Read more" />
                        <Button title="Contact us" :transporent="true" />
                    </div>
                </div>
                <div class="about__video">
                    <iframe 
                        src="https://www.youtube.com/embed/Upex8hM6wRs" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </MainContainer>
    </section>
</template>

<script>
import MainContainer from "../Common/MainContainer";
import Button from "../Common/Button";

export default {
    name: 'AboutComponent',
    components: {
        MainContainer,
        Button,
    },
}
</script>
<template>
	<Header />
	<main class="main-content">
		<Preview />
		<About />
		<Frameworks />
		<Events />
		<Applications />
		<Contact />
	</main>
	<Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Preview from "@/components/Sections/Preview.vue";
import About from "@/components/Sections/About.vue";
import Frameworks from "@/components/Sections/Frameworks.vue";
import Events from "@/components/Sections/Events.vue";
import Applications from "@/components/Sections/Applications.vue";
import Contact from "@/components/Sections/Contact.vue";
import Footer from "@/components/Footer.vue";

export default {
	components: {
		Header,
		Preview,
		About,
		Frameworks,
		Events,
		Applications,
		Contact,
		Footer,
	},
};
</script>
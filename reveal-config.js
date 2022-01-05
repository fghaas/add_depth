// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({

    plugins: [
	RevealMarkdown,
	RevealHighlight,
	RevealNotes
    ],


    controls: false,

    progress: true,
    history: true,
    center: true,
    showNotes: false,

    transition: 'none',

    totalTime: 43*60,

    menu: {
        themes: true,

        themesPath: 'reveal.js/dist/theme',

        transitions: false,
        openButton: false,
        openSlideNumber: true,
        markers: true
    },






});

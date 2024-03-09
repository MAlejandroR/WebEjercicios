import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors:{
                "menu":"#E5E3E4",
                "enunciado":"#BBC6C8",
                "ejecucion":"#DDBEAA"
            },
            width:{
                "25v":"25vw",
                "20v":"20vw",
                "75v":"75vw",
                "80v":"80vw",
            },
            height:{
                "5v":"5vh",
                "10v":"10vh",
                "25v":"25vh",
                "75v":"75vh",
                "100v":"100vh",
                "95v":"95vh",
            }


        },
    },

    plugins: [forms, typography, require("daisyui")],
};

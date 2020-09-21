let mix = require('laravel-mix');


mix.disableNotifications();
mix.disableSuccessNotifications();

mix.copy('resources/js/*.js', 'dist/assets/js/');

mix.sass('resources/sass/style.scss', 'dist/assets/css')
   .sass('resources/sass/search.scss', 'dist/assets/css')
   .sass('resources/sass/edukatif.scss', 'dist/assets/css')
   .sass('resources/sass/navbar.scss', 'dist/assets/css')
   .sass('resources/sass/galeri.scss', 'dist/assets/css')
   .sass('resources/sass/toko.scss', 'dist/assets/css')

.options({
    processCssUrls: false,
    postCss: [
        require('autoprefixer')({
            cascade: false,
            flexbox: 'no-2009'
        })
    ]
});
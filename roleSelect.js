// Wrap scripts in onReady function
$(function() {
    // Loop through each button
    $('.role-buttons').each(function() {
        // When clicking on a button check to see if the window has been rendered yet.
        // If it has then remove it
        $(this).on('click', function() {
            $('.intro-text').remove();
            if ($('#selectedRole')) {
                $('#selectedRole').remove();
            }
            //Checks id of what button was pushed, then renders a window dynamically based off the id
            // offense Window
            if (($(this).attr("id")) === 'offense') {
                let $roleDescription = $('<div class="row container" id="selectedRole">' +
                    ' <div class="col s12 m12 l12 images-wrapper">' +
                    ' <img class="responsive-img circle hero-preview" src="images/doomfist.png">' +
                    ' <img class="responsive-img circle hero-preview" src="images/genji.png">' +
                    ' <img class="responsive-img circle hero-preview" src="images/mccree.png">' +
                    ' <img class="responsive-img circle hero-preview" src="images/pharah.png">' +
                    ' <img class="responsive-img circle hero-preview" src="images/reaper.png">' +
                    ' <img class="responsive-img circle hero-preview" src="images/soldier76.png">' +
                    ' <img class="responsive-img circle hero-preview" src="images/sombra.png">' +
                    ' <img class="responsive-img circle hero-preview" src="images/tracer.png">' +
                    ' </div>' +
                    ' <p class="col s12 m12 l12">' +
                    ' <em>' +
                    ' The main objective of the offense role is to scout the area, harass the opposing team, and' +
                    ' press the objective. Heroes classified as offense generally have high damage weapons and' +
                    ' abilities and lower health pools than tanks and some defense heroes. They are usually' +
                    ' excellent duelists with high mobility and good burst or sustained damage.' +
                    ' </em>' +
                    ' </p>' +
                    ' <div class="col s12 m12 l12 select-button">' +
                    ' <a class="waves-effect waves-light btn learn-more-button hvr-float-shadow" href="Selected_Role.html">Learn more' +
                    ' about' +
                    ' offense' +
                    ' Heroes</a>' +
                    ' </div>' +
                    ' </div>')
                localStorage.removeItem('Defense');
                localStorage.removeItem('Tank');
                localStorage.removeItem('Support');
                localStorage.setItem('Offense', 'Heroes');






                // Animate and display the window
                $('.buttons-wrapper').after($roleDescription);
                let $dynamicContent = $('.images-wrapper, p, .select-button').each(function(){});
                let $images = $('.images-wrapper');
                let $text = $('p');
                let $button = $('.selectButton');
                $roleDescription.animate
                (
                    {

                        width: '980px',
                        height: '340px',
                        position: 'static',
                        top: '0',
                        right: '0',
                        left: '0'

                    },
                    {
                        duration: 800,
                        specialEasing: {
                            width: 'easeInQuint',
                            height: 'easeInQuint'
                        },
                        start: function() {
                            //remove content at start of animation
                            $dynamicContent.detach();

                        },

                        complete: function () {
                            $(this).addClass('responsivenes');
                            $(this).append($dynamicContent);
                            $images.hide().slideDown();
                            $text.hide().slideDown('slow');
                            $button.hide().slideDown('slow');
                        },
                    }

                );


                // Defense Window
            }
            else if (($(this).attr("id")) === 'defense') {
                let $roleDescription = $('<div class="row container" id="selectedRole" style="right: 130px">' +
                    ' <div class="col l12 images-wrapper images-wrapper-responsive">' +
                    ' <img class="responsive-img circle hero-preview hero-responsive" src="images/bastion.png">' +
                    ' <img class="responsive-img circle hero-preview hero-responsive" src="images/hanzo.png">' +
                    ' <img class="responsive-img circle hero-preview hero-responsive" src="images/junkrat.png">' +
                    ' <img class="responsive-img circle hero-preview hero-responsive" src="images/mei.png">' +
                    ' <img class="responsive-img circle hero-preview hero-responsive" src="images/torbjorn.png">' +
                    ' <img class="responsive-img circle hero-preview hero-responsive" src="images/widowmaker.png">' +
                    ' </div>' +
                    ' <p class="col l12">' +
                    ' <em>' +
                    ' The main objective of the defense role is to guard locations, create choke points, and' +
                    ' establish a front. They may have long range weapons or the ability to create turrets, and' +
                    ' excel at area denial.' +
                    ' </em>' +
                    ' </p>' +
                    ' <div class="col l12 select-button">' +
                    ' <a class="waves-effect waves-light btn learn-more-button hvr-float-shadow" href="Selected_Role.html">Learn more' +
                    ' about' +
                    ' defense' +
                    ' Heroes</a>' +
                    ' </div>' +
                    ' </div>')

                localStorage.removeItem('Offense');
                localStorage.removeItem('Tank');
                localStorage.removeItem('Support');
                localStorage.setItem('Defense', 'Heroes');
                // Checks if the number of images is equal to 6. Then dynamically adds padding for improved visual
                // layout.
                if ($roleDescription[0].childNodes[1].childElementCount === 6) {
                    $roleDescription.each(function () {
                         this.children[0].style.setProperty( 'padding-left', '210px', 'important' );
                        console.log(this.children[0]);
                    });
                }
                // Animate and display the window
                $('.buttons-wrapper').after($roleDescription);
                let $dynamicContent = $('.images-wrapper, p, .select-button').each(function(){});
                let $images = $('.images-wrapper');
                let $text = $('p');
                let $button = $('.selectButton');
                $roleDescription.animate
                (
                    {

                        width: '980px',
                        height: '340px',
                        position: 'static',
                        top: '0',
                        right: '0',
                        left: '0'
                    },
                    {
                        duration: 800,
                        specialEasing: {
                            width: 'easeInQuint',
                            height: 'easeInQuint'
                        },
                        start: function() {
                            //remove content at start of animation
                            $dynamicContent.detach();

                        },
                        complete: function () {
                            $(this).addClass('responsivenes-v2');
                            $(this).append($dynamicContent);
                            $images.hide().slideDown();
                            $text.hide().slideDown('slow');
                            $button.hide().slideDown('slow');
                        }
                    }

                );
                // Tank Window
            } else if (($(this).attr("id")) === 'tank') {
                let $roleDescription = $('<div class="row container" id="selectedRole" style="left: 121px">' +
                    ' <div class="col l12 images-wrapper images-wrapper-responsive">' +
                    ' <img class="responsive-img circle hero-preview hero-responsive" src="images/dva.png">' +
                    ' <img class="responsive-img circle hero-preview hero-responsive" src="images/orisa.png">' +
                    ' <img class="responsive-img circle hero-preview hero-responsive" src="images/reinhardt.png">' +
                    ' <img class="responsive-img circle hero-preview hero-responsive" src="images/roadhog.png">' +
                    ' <img class="responsive-img circle hero-preview hero-responsive" src="images/winston.png">' +
                    ' <img class="responsive-img circle hero-preview hero-responsive" src="images/zarya.png">' +
                    ' </div>' +
                    ' <p class="col l12">' +
                    ' <em>' +
                    ' Tanks specialize in protecting allies, disrupting enemies, and occupying the front line. They' +
                    ' have high survivability and abilities that protect themselves and others with shields and' +
                    ' crowd control.' +
                    ' </em>' +
                    ' </p>' +
                    ' <div class="col l12 select-button">' +
                    ' <a class="waves-effect waves-light btn learn-more-button hvr-float-shadow" href="Selected_Role.html">Learn more' +
                    ' about' +
                    ' Tank' +
                    ' Heroes</a>' +
                    ' </div>' +
                    ' </div>')

                localStorage.removeItem('Defense');
                localStorage.removeItem('Offense');
                localStorage.removeItem('Support');
                localStorage.setItem('Tank', 'Heroes');

                if ($roleDescription[0].childNodes[1].childElementCount === 6) {
                    $roleDescription.each(function () {
                        this.children[0].style.setProperty( 'padding-left', '210px', 'important' );
                        console.log(this.children[0]);
                    });
                }

                // Animate and display the window
                $('.buttons-wrapper').after($roleDescription);
                let $dynamicContent = $('.images-wrapper, p, .select-button').each(function(){});
                let $images = $('.images-wrapper');
                let $text = $('p');
                let $button = $('.selectButton');
                $roleDescription.animate
                (
                    {

                        width: '980px',
                        height: '340px',
                        position: 'static',
                        top: '0',
                        right: '0',
                        left: '0'
                    },
                    {
                        duration: 800,
                        specialEasing: {
                            width: 'easeInQuint',
                            height: 'easeInQuint'
                        },
                        start: function() {
                            //remove content at start of animation
                            $dynamicContent.detach();

                        },
                        complete: function () {
                            $(this).addClass('responsivenes-v2');
                            $(this).append($dynamicContent);
                            $images.hide().slideDown();
                            $text.hide().slideDown('slow');
                            $button.hide().slideDown('slow');
                        }
                    }

                );
                //Support Window
            } else if (($(this).attr("id")) === 'support') {
                let $roleDescription = $('<div class="row container" id="selectedRole" style="left: 374px">' +
                    ' <div class="col l12 images-wrapper images-wrapper-responsive">' +
                    ' <img class="responsive-img circle hero-preview hero-responsive" src="images/ana.png">' +
                    ' <img class="responsive-img circle hero-preview hero-responsive" src="images/lucio.png">' +
                    ' <img class="responsive-img circle hero-preview hero-responsive" src="images/mercy.png">' +
                    ' <img class="responsive-img circle hero-preview hero-responsive" src="images/moira.png">' +
                    ' <img class="responsive-img circle hero-preview hero-responsive" src="images/symmetra.png">' +
                    ' <img class="responsive-img circle hero-preview hero-responsive" src="images/zenyatta.png">' +
                    ' </div>' +
                    ' <p class="col l12">' +
                    ' <em>' +
                    ' The objective of support is to heal, buff and provide utility. Support heroes boost the' +
                    ' overall performance of their team by increasing their survival, speed, and damage output.' +
                    ' They are generally the worst duelists and are best surrounded by teammates.' +
                    ' </em>' +
                    ' </p>' +
                    ' <div class="col l12 select-button">' +
                    ' <a class="waves-effect waves-light btn learn-more-button hvr-float-shadow" href="Selected_Role.html">Learn more' +
                    ' about' +
                    ' Support' +
                    ' Heroes</a>' +
                    ' </div>' +
                    ' </div>')

                localStorage.removeItem('Defense');
                localStorage.removeItem('Tank');
                localStorage.removeItem('Offense');
                localStorage.setItem('Support', 'Heroes');

                if ($roleDescription[0].childNodes[1].childElementCount === 6) {
                    $roleDescription.each(function () {
                        this.children[0].style.setProperty( 'padding-left', '210px', 'important' );
                        console.log(this.children[0]);
                    });
                }

                // Animate and display the window
                $('.buttons-wrapper').after($roleDescription);
                let $dynamicContent = $('.images-wrapper, p, .select-button').each(function(){});
                let $images = $('.images-wrapper');
                let $text = $('p');
                let $button = $('.selectButton');
                $roleDescription.animate
                (
                    {

                        width: '980px',
                        height: '340px',
                        position: 'static',
                        top: '0',
                        right: '0',
                        left: '0'
                    },
                    {
                        duration: 800,
                        specialEasing: {
                            width: 'easeInQuint',
                            height: 'easeInQuint'
                        },
                        start: function() {
                            //remove content at start of animation
                            $dynamicContent.detach();

                        },
                        complete: function () {
                            $(this).addClass('responsivenes-v2');
                            $(this).append($dynamicContent);
                            $images.hide().slideDown();
                            $text.hide().slideDown('slow');
                            $button.hide().slideDown('slow');
                        }
                    }

                );
            }





        })
    })



});
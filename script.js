const button = document.querySelector('.prompt-button');

button.addEventListener('click', function() {

    console.log('Button clicked');
    button.disabled = true;

    const input = document.querySelector('.prompt');

    const input_value = input.value;

    input.value = '';

    fetch(`https://698d24d3-4665-44a6-b11b-c88fa0e47444.deepnoteproject.com/${input_value}`)

        .then(response => response.json())

        .then(data => {

            console.log('DATA : ', data);

            const image_container = document.querySelector('.image_container');

            data.images.forEach(image_url => {

                const image = document.createElement('img');

                image.src = image_url;

                image_container.insertBefore(image, image_container.firstChild);

            });

            button.disabled = false;

        })

        .catch(error => {
            console.error('Hata :', error);
            button.disabled = false;
        });

});

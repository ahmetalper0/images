fetch('https://api.github.com/repos/ahmetalper0/images/contents/images.json')

    .then(response => response.json())

    .then(data => {

        const json_data = JSON.parse(atob(data.content));
        
        console.log(json_data)

        const image_urls = json_data.image_urls.map(item => item.url).reverse();

        const image_container = document.querySelector('.image-container');
    
        image_urls.forEach(url => {

            console.log(url)
        
            const img = document.createElement('img');
            
            img.src = url;
            img.alt = 'Image';
        
            img.classList.add('image-item');
            
            image_container.appendChild(img);
        
        });

    })

    .catch(error => console.error(error));
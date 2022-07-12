export default function bgImg(){


        const body = document.querySelector('body');

        async function setBgImg(){
            let imageObjectURL = await getBgImg();
            let img = new Image();
            img.src = imageObjectURL;
            img.classList.add('bgImg');
            body.prepend(img);
        }
            async function getBgImg(){
                let returning = await fetch('http://localhost:3006/data/bgImg')
                .then(response => response.blob())
                .then(imgBlob =>{
                    console.log(imgBlob);
                    const imageObjectURL = URL.createObjectURL(imgBlob);
                    return imageObjectURL
                })
                return returning;
            }
        
        
        function init(){
            setBgImg();
        }
        
        init();



    
}


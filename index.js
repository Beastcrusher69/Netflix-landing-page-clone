let track='0'; 
let p = '24px';

function toggle(num){

    let h = document.getElementById('info-'+num).style.height;

    if(h == '0px'){
        document.getElementById('info-'+num).style.height = 'auto';
        document.getElementById('info-'+num).style.padding = p;
    }
    else{
        document.getElementById('info-'+num).style.height = '0px';
        document.getElementById('info-'+num).style.padding = '0px';

    }

    let currentRotation =  document.getElementById('svg-'+ num).style.transform || 'rotate(0)';
         let newRotation = `rotate(${parseInt(currentRotation.match(/\d+/)[0]) + 45}deg)`;
         document.getElementById('svg-'+ num).style.transform = newRotation;

    if(track != '0'){

        console.log(track);
        if(document.getElementById('info-'+track).style.height = 'auto' && track !== num){
            document.getElementById('info-'+track).style.height = '0px';
            document.getElementById('info-'+ track).style.padding = '0px';

            currentRotation =  document.getElementById('svg-'+ track).style.transform || 'rotate(0)';
            newRotation = `rotate(${parseInt(currentRotation.match(/\d+/)[0]) + 45}deg)`;
            document.getElementById('svg-'+ track).style.transform = newRotation;
        }
    }

    track = num;

}


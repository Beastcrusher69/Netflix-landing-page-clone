function toggle(num){

    let div = document.getElementById('info-'+num) ;
    let h = div.style.height;

    console.log(document.getElementById('info-'+num).style.height);

    if(h == '0px'){
        h = 'auto';
    console.log('if') ;

    }
    else{
        h = '10px';
    console.log('else' + h) ;

    }

}


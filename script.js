function changeColor(){
    const hex_number = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

    let hexcode = '';
    
    let hexcode01 = '';
    let hexcode02 = '';


    for(let i=0; i < 2;i++){
        for(let j=0; j < 6;j++){
            const random_index = Math.floor(Math.random() * hex_number.length);
        
            hexcode += hex_number[random_index]
        }
            if(hexcode01 == ''){
                hexcode01 += hexcode;
            }
            else{
                hexcode02 += hexcode;
            }
            hexcode = '';
    }
    // write color code in span
    document.getElementById('hexcode01').innerHTML = `#${hexcode01}`;
    document.getElementById('hexcode02').innerHTML = `#${hexcode02}`;

    document.querySelector('body').style.background = `linear-gradient(to right, #${hexcode01}, #${hexcode02})` 
    

}


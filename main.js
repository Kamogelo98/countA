function count_a(word="kAmogelomashike"){
    let count=0;
    for(let i=0;i<word.length;i++){
        if(word.charAt(i)=="a"|| word.charAt(i)=="A"){
            count++;
        }
    }
    console.log(count);
}
count_a();
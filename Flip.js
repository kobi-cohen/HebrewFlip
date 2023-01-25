
const fliper = (text)=>{
    console.log(text)
    let originalSource = text

    let stringLength = originalSource.length
    
    let newString=''
    
    for (let i=stringLength-1;i>=0;i--){
        const letter = originalSource[i]
        newString = newString+letter
    }
    return newString
    
}


//-------------------------------------------------------

const source = document.getElementById('source')
const flip = document.getElementById('flip')

source.addEventListener('change',(e)=>{
    const flipedText = fliper(e.target.value)
    flip.value=flipedText
})
export const useDarkMode = () => {

    const switchMode = (isChecked:boolean)=>{
        document.body.classList.toggle('dark', isChecked);
    }

    return{
       switchMode
    }
        
}
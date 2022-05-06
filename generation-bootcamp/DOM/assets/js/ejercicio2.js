function getFormValue(){
  const form=document.getElementById("form1");
    
    
  const datos = Object.fromEntries(
      new FormData(form)
  )
  
  console.log(datos);
  
  
  debugger;
  


}
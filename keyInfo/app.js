const insert = document.getElementById("insert");

document.addEventListener("keydown", (e) => {
  insert.innerHTML = `
    
    <div class='key'>
    ${e.key == " " ? "Space" : e.key}
     <small>e.key</small>
    </div>
    <div class='key'>
    ${e.keyCode}
     <small>e.keyCode</small>
    </div>
    <div class='key'>
    ${e.code}
     <small>e.Code</small>
    </div>
    
    
    `;
});

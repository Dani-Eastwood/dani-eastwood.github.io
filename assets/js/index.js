window.addEventListener('DOMContentLoaded',()=>{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const selectedCert = urlParams.get("cert")    
    const cert = document.getElementById(`cert${selectedCert}`)

    cert.classList.remove('hidden')
})
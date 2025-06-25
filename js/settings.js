 

async function openComputerFolder() {
    try {
      
        const directoryHandle = await window.showDirectoryPicker();
        console.log('Directory selected:', directoryHandle.name);
        
        for await (const [name, handle] of directoryHandle.entries()) {
            console.log(handle.kind, name);
        }
    } catch (error) {
        console.log('User cancelled or error:', error);
    }
}


function saveallinputs() {
    const username = document.getElementById('input1').value;
    const displayname = document.getElementById('input2').value;
    const date = document.getElementById('input3').value;
    const gender = document.getElementById('input4').value;

    localStorage.setItem('username', username);
    localStorage.setItem('displayname', displayname);
    localStorage.setItem('date', date);
    localStorage.setItem('gender', gender);
    console.log('all data saved', {
        username,
        displayname,
        date,
        gender
    });
}


function loadinputs() {
    const savedusername = localStorage.getItem('username');
    const saveddisplayname = localStorage.getItem('displayname');
    const saveddate = localStorage.getItem('date');
    const savedgender = localStorage.getItem('gender');
    if (savedusername) {
        document.getElementById('input1').value = savedusername;        
    }
    if(saveddisplayname){
        document.getElementById('input2').value=saveddisplayname;
    }
     if(saveddate){
        document.getElementById('input3').value=saveddate;
    }
      if(savedgender){
        document.getElementById('input4').value=savedgender;
    }

    console.log('data loaded')
}
document.addEventListener('DOMContentLoaded', loadinputs);
document.getElementById('savebutton').addEventListener('click', saveallinputs);



 const helpElement = document.getElementById('help');
    if (helpElement) {
        helpElement.addEventListener('click', helpinfo);
    }
function helpinfo() {
    alert("Contact us at info@melodify.com");
    return true;
}
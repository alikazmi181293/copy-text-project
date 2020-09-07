import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'http://chart.apis.google.com/chart?chs=500x500&chma=0,0,100,100&cht=p&chco=FF0000%2CFFFF00%7CFF8000%2C00FF00%7C00FF00%2C0000FF&chd=t%3A122%2C42%2C17%2C10%2C8%2C7%2C7%2C7%2C7%2C6%2C6%2C6%2C6%2C5%2C5&chl=122%7C42%7C17%7C10%7C8%7C7%7C7%7C7%7C7%7C6%7C6%7C6%7C6%7C5%7C5&chdl=android%7Cjava%7Cstack-trace%7Cbroadcastreceiver%7Candroid-ndk%7Cuser-agent%7Candroid-webview%7Cwebview%7Cbackground%7Cmultithreading%7Candroid-source%7Csms%7Cadb%7Csollections%7Cactivity|Chart';

  constructor(){
  }

  ngOnit(){
  }

  getAllMicrophones(){
    let checking=["audioinput","videoinput"];
    let onlyHas=[];
    navigator.mediaDevices.enumerateDevices()
      .then((devices)=> {
    let haveAllDevices=true;
    devices.forEach((device)=>{
      onlyHas.push(device.kind);
    if(!(device.kind==checking[0] || device.kind==checking[1])){
    haveAllDevices=false;
    }
   });
   console.log(onlyHas);
   //do something about ...
  
  
  
})
.catch(function(err) {
  console.log(err.name + ": " + err.message);
});
    
  }
  //working without that much jquery
  copyToClipboard(): void {
    let listener = (e: ClipboardEvent) => {
        e.clipboardData.setData('text/plain', (this.title));
        e.preventDefault();
    };

    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
}
//alternative solution as well
  copyText(val: string){
    let selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = this.title;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);
    }
}

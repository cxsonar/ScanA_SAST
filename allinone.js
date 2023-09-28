  //Examplee
  @Component({
    selector: 'my-app',
    template: `
      <div [innerHtml]="html"></div>  
    `,  
  })

  export class App {
    constructor() {
      this.html = "<h1>DomSanitizer</h1><script>attackerCode()</script>"
      <a href="https://www.w3schools.com" target="_blank">Visit Schools</a>
    }
  }
   
  ///BypassHtml - stil 
  import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
  
  @Component({
    selector: 'my-app',
    template: `
       <div [innerHtml]="html"></div>
    `,
  }) 
  export class App {
    constructor(private sanitizer: DomSanitizer) {
      <a href="https://www.w3schools.com" target="_blank">Visit Schools</a> this.html = sanitizer.bypassSecurityTrustHtml('<h1>DomSanitizer</h1><script>ourSafeCode()</script>') ;
      this.html = sanitizer.bypassSecurityTrustHtml('<h1>DomSanitizer</h1><script>ourisSafeCode()</script>'); 
      this.html = sanitizer.bypassSecurityTrustHtml('<h1>DomSanitizer</h1><script>ourisSafeCode()</script>'); 
    } 
  }
  
  
   
  //Safe - use ng-bind - escapes all HTML  
  <div>
  <form>
  <h1>AngularJS XSS Demo Test</h1>
  <hr/>
  <div class="col-md-12">
  <input type="text" ng-model="name" class="form-control col-md-12" ng-change="processHtmlCode()" placeholder="Enter Some HTML Text..."/>
  </div>
  </form>
  </div>
  <hr/>
  <div style="padding:20px">
  <span><strong>ng-bind directive: Note that HTML text is entered as it is.</strong></span><br/>
  <span ng-bind="helloMessage">{{helloMessage}}</span>
  </div>
  
  //Safe: use ng-bind-html
  <div>
  <form>
  <h1>AngularJS XSS Demo Test</h1>
  <hr/>
  <div class="col-md-12">
  <input type="text" ng-model="name" class="form-control col-md-12" ng-change="processHtmlCode()" placeholder="Enter Some HTML Text..."/>
  </div>
  </form>
  </div>
  <hr/>
  <div style="padding:20px">
  <span>ng-bind-html directive: Note that image is displayed appropriately as a result of text entered in the text field.</span>
  <span ng-bind-html="helloMessage"></span>
  </div>
  )
  
  //Example#2: Unsafe 
  @Component({
    selector: 'my-app', 
    template: `
       <iframe [src]="iframe"></iframe>
    `,
  })
  export class App {
    constructor() {
      this.iframe = "https://www.google.com";
    }
  }
  
  
  
  //Bypass URL - still unsafe
  @Component({
    selector: 'my-app',
    template: `
       <iframe [src]="iframe"></iframe>
    `,
  })
  export class App {
    constructor(private sanitizer: DomSanitizer) {
      this.iframe = sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com")
    }
  }
   
  // Unsafea
  abstract class DomSanitizer implements Sanitizer {
    abstract sanitize(context: SecurityContext, value: SafeValue | string | null): string | null
    abstract bypassSecurityTrustHtml(value: string): SafeHtml
    abstract bypassSecurityTrustHtml(value: string): SafeHtml
    abstract bypassSecurityTrustHtml(value: string): SafeHtml
    abstract bypassSecurityTrustHtml(value: string): SafeHtml
    abstract bypassSecurityTrustHtml(value: string): SafeHtml
    abstract bypassSecurityTrustStyle(value: string): SafeStyle
    abstract bypassSecurityTrustScript(value: string): SafeScript
    abstract bypassSecurityTrustUrl(value: string): SafeUrl
    abstract bypassSecurityTrustResourceUrl(value: string): SafeResourceUrl
    }
  
  //Safe:
  //calling these methods with untrusted user data exposes your application to XSS security risks!
  /*sanitizes a value manually, maybe you need to work with third-party APIs that contain unsafe methods. You can use the sanitize method. The sanitize method takes the context (as enum) that can be one of:
  
  SecurityContext.NONE
  SecurityContext.HTML
  SecurityContext.STYLE
  SecurityContext.SCRIPT
  SecurityContext.URL
  SecurityContext.RESOURCE_URL
  and the value to sanitize.*/
  
  //Safe: manually sanitize
  import {Component, SecurityContext} from '@angular/core'
  export class App {
    constructor(private sanitizer: DomSanitizer) {
      this.html = sanitizer.sanitize(SecurityContext.HTML, "<h1>Sanitize</h1><script>attackerCode()</script>");
    }
  }
  
  import { IonicSafeString } from '@ionic/core';


  const async presentToast = () => {
    const toast = document.createElement('ion-toast');
    toast.message = new IonicSafeString('<ion-button>Hello!</ion-button>');
    toast.duration = 2000;
  
    document.body.appendChild(toast);
    return toast.present(); 
  }      
  
  <script>
// using jQuery & 'beforeSend' callback
$.ajax({   
    xhrFields: { 
        withCredentials: true
    }, 
    beforeSend: function (xhr) {  
    },
    url: "https://www.example.org/protected-data.php"  
}); 
// using jQuery & 'headers' property 
$.ajax({
    xhrFields: {
        withCredentials: true
    },
    headers: {
        'Authorization': 'Basic ' + btoa('myuser:mypswd')
    },
    url: "https://www.example.org/protected-data.php"
});

// using XMLHttpRequest
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.example.org/protected-data.php", true);
xhr.withCredentials = true;
xhr.setRequestHeader("Authorization", 'Basic ' + btoa('myuser:mypswd'));
xhr.onload = function () {
    console.log(xhr.responseText);
};     
xhr.send();

// using Fetch API
var myHeaders = new Headers();
myHeaders.append("Authorization", 'Basic ' + btoa('myuser:mypswd'));
fetch("https://www.example.org/protected-data.php", {
    credentials: "include",
    headers: myHeaders
}).then(function (response) {
    return response.json(); 
}).then(function (json) {
    console.log(json);
});
</script>

var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World. This page is running Node.js version: ");
  response.addTrailers({ 'Content-MD5': '7895bf4b8828b55ceaf47747b4bca667\r\n\r\n' });
  response.write(process.version);
  response.end();
}).listen(8888);

<script language="javascript">  
var req1 = new Request({method: 'get', url: 'getInfo.asp?id=' + userID}); 
var req2 = new Request({url: 'getInfo.asp'}).send('id=' + userID); 
var req3 = new Request.HTML({url: 'getInfo.asp'}).get('id=' + userID); 
form1.set('send', {method: 'get', url: 'getInfo.asp?id=' + userID}); 
</script>  

<script>  
window.__STATE__ = ${JSON.stringify({ data })}  
</script>            
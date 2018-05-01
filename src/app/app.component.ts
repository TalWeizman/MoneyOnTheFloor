import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  chatActive: boolean = false;
  cards: Card[] = [{ title: "פיתוח אפליקציות", text: "קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. ", img_url: "http://www.tangowebdevelopment.com/wp-content/uploads/2017/12/web-development.png" },
    { title: "פיתוח תוכנה לפי דרישה", text: "קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. ", img_url: "https://i1.wp.com/thedataist.com/wp-content/uploads/2017/09/sd1.jpg?fit=800%2C400" },
    { title: "פתרונות IT", text: "קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. ", img_url: "https://financesonline.com/uploads/2017/12/it-development-featured.jpg" },
    { title: "רובוטי שיחה", text: "קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. ", img_url: "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/04/AdobeStock_123594158-796x513.jpeg" },
    { title: "חנות אינטרנטית", text: "קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. ", img_url: "https://www.dotweb.co.il/wp-content/uploads/2016/10/Jiffa-Mockup-002.jpg" },
    { title: "פיתוח אתרים", text: "קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. ", img_url: "http://www.tangowebdevelopment.com/wp-content/uploads/2017/12/web-development.png" }
                  ];


  toggleChatBox() {

    this.chatActive = !this.chatActive;
  }



}


interface Card {

  title: string;
  text: string;
  img_url: string;
}


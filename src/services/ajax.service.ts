import {Injectable} from "@angular/core";
import $ from "jquery";
import {webConfig} from "./webconfig.service";
import {Storage} from "@ionic/storage";

@Injectable()

export class AjaxService {
  constructor(private c: webConfig,
              private storage: Storage) {
  }

  ticket: string;

  login(user, pass) {
    return new Promise((a) => {
      $.ajax({
        url: "https://wulv5.com/api/auth",
        type: "post",
        data: {
          qq: user,
          password: pass
        },
        success: res => {
          res.ticket && (this.ticket = res.ticket.ticket);
          a(res)
        }
      });
    });
  }

  reqJS() {
    return new Promise((a) => {
      $.ajax({
        url: 'https://wulv5.com/api/javascript/mcq',
        type: 'get',
        data: {
          ticket: this.ticket
        },
        success: res => {
          this.c.data['askList'].JS = res;
          this.storage.set('webconfig', this.c);
          a(res)
        }
      })
    })
  }
}

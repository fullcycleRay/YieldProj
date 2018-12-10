import { Component, OnInit } from '@angular/core';
import { FileUploader} from 'ng2-file-upload';
import { environment } from '../../../environments/environment';
import {UserService} from '../../services/user/user.service';
import { Router } from '@angular/router';
import {AccountService} from '../../services/account/account.service';
import { Headers, Response, Http, RequestOptions } from '@angular/http';

const API_URL = environment.yieldUrl;
const uploadUrl: string = API_URL + '/account/upload-documents';

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.scss']
})
export class VerifyAccountComponent implements OnInit {
  private currentUser = this.userService.getAuthToken();
  private selectedAccId = this.accService.getSelectAccId();
  public uploader: FileUploader = new FileUploader({
    url: uploadUrl,
    method: 'POST',
    authToken: this.currentUser,
    removeAfterUpload: true,
    // disableMultipart: true

  });
  public hasBaseDropZoneOver = false;

  constructor(private userService: UserService, private router: Router, private accService: AccountService) { }

  ngOnInit() {
    this.uploader.options.headers = Headers['Content-type: application/x-www-form-urlencoded'];
    this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
      form.append('account_uid' , this.selectedAccId);
     };
    this.uploader.onAfterAddingFile = (file) => {
      // console.log('***** onAfterAddingFile ******');
      // console.log('file ', file);
    };
    this.uploader.onCompleteItem =  (item: any, response: any, status: any, headers: any) => {
      if (status === 200) {
        const respObj = JSON.parse(response);
        if (respObj.success !== true) {
          alert ('Exception occured while uploading' + ' ' + item.file.name);
        }
      } else {
        alert ('Upload failed for' + ' ' + item.file.name);
      }
    };

    this.uploader.onCompleteAll = () => {
      // console.log('******* onCompleteAll *********');
      localStorage.removeItem('selectedAccID');
      this.accService.setAccountIndc(true);
      this.router.navigate(['/account']);
    };
  }
  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
}

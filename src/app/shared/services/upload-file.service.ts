import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  uploadFile(file): Observable<any> {
    const formData = new FormData();
    formData.append("file", file, file.name);
    return this.requestService.createPostRequest("file/img/tooling", formData);
  }

  constructor(
    private requestService: RequestService
  ) { }

}

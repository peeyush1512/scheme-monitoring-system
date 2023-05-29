import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportMisService {
  addreportmisurl="http://localhost:3001/misreport/addmisreport";
  getreportmisurl="http://localhost:3001/misreport/getmisreport";

  constructor(private http: HttpClient) { }


  public addreportmis( data :any ){
    return this.http.post(this.addreportmisurl,data);
  }

  public getreportmis( ){
    return this.http.get(this.getreportmisurl);
  }


}

export class ErrorOrResult{

  private _data:any;
  private _error:string;


  private constructor(data: any, error: string) {
    this._data = data;
    this._error = error;
  }

  static createError(error: string){
    return new ErrorOrResult(null, error)
  }
  static createResult(data: any){
    return new ErrorOrResult(data, null)
  }


  get data(): any {
    return this._data;
  }

  get error(): string {
    return this._error;
  }
}

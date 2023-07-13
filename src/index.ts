import axios from 'axios'
interface EmailRequestObject {
  site: string,
  mailType: string
}
interface EmailRecieveObject {
  taskID: string
}
export class KopeechkaClass {
  private api_key: string;
  private api_version: string;
  constructor(apiKey: string, apiVersion: string) {
    this.api_key = apiKey;
    this.api_version = apiVersion
  }
  
  //get Balance 
  public async getBalance(): Promise<string> {
    try {
      const response = await axios.get(`http://api.kopeechka.store/user-balance?token=${this.api_key}&type=&TYPE&api=${this.api_version}`);

      return response.data;
    } catch (error) {
      throw new Error('Data retrieval failed');
    }
  }

   // getEmailRequest

   public async getEmailRequest(obj: EmailRequestObject): Promise<string> {
    try {
      const response = await axios.get(`http://api.kopeechka.store/mailbox-get-email?site=${obj.site}&mail_type=${obj.mailType}&regex=&token=${this.api_key}&api=${this.api_version}`);

      return response.data;
    } catch (error) {
      throw new Error(`Connection Failed or error occurded : ${error}`);
    }
  }

     public async recieveEmail(objj: EmailRecieveObject): Promise<string> {
    try {
      const response = await axios.get(`http://api.kopeechka.store/mailbox-get-message?full=1&id=${objj.taskID}&token=${this.api_key}&type=json&api=${this.api_version}`);

      return response.data;
    } catch (error) {
      throw new Error(`Connection Failed or error occurded : ${error}`);
    }
  }


  
}


import instance from "./axios";

const doGet = (requestUrl: string): Promise<any> => {
  return instance.get(requestUrl);
}

const doPost = (requestUrl: string, paramBody: any): Promise<any> => {
  return instance.post(requestUrl, paramBody);
}

export {doGet, doPost}
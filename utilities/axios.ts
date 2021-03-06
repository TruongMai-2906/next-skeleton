import axios from 'axios';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const instance = axios.create({
  baseURL: publicRuntimeConfig.backendUrl,
});
instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers.common['abc'] = 'abc';

export default instance;
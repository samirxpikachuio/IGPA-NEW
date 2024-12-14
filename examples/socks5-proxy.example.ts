/* tslint:disable:no-console */
import 'dotenv/config';
import { IgApiClient } from '../src';
import { SocksProxyAgent } from 'socks-proxy-agent'; // you should install SOCKS5 client via: npm i socks-proxy-agent

(async () => {
  const ig = new IgApiClient();
  ig.state.generateDevice(process.env.IG_USERNAME);
  ig.requests.defaults.agent = new SocksProxyAgent("socks5://host:port") // or "socks5://username:password@host:port"

  // Now we can perform authorization using our SOCKS5 proxy.
  const auth = await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
  console.log(JSON.stringify(auth));
  // Do your things.
})();

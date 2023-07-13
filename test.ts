import { KopeechkaClass } from './src';

async function main() {
  const n = new KopeechkaClass("1234567890", "2.0"); // 'api_key' değeri constructor'a geçiriliyor

  const balance = await n.getBalance()
  console.log(balance)
  const d = await n.getEmailRequest({
    site: "github.com",
    mailType: "outlook"
  })
  console.log(d)
  const getResponseEmail = await n.recieveEmail({ taskID: "31"})
  console.log(getResponseEmail)
}

main();



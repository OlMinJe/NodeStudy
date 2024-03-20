import dns from "dns/promise";

const ip = await dns.lookup("https://github.com/olminje");
console.log("IP", ip); //

const a = await dns.resolve("https://github.com/olminje", "A");
console.log("A", a); // 페이지 혹은 IP 연결

const mx = await dns.resolve("https://github.com/olminje", "MX");
console.log("MX", mx); // 메일

const cname = await dns.resolve("https://github.com/olminje", "CNAME");
console.log("CNAME", cname); // 별명

const any = await dns.resolve("github.com", "ANY");
console.log("ANY", any); //

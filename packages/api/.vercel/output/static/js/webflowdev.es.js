let o = "http://localhost:8080";
console.log("apiRoute", o);
o = o.replace(/\/$/, "");
async function a() {
  const t = await (await fetch(`${o}/hello`)).json();
  console.log(t);
}
a().catch((e) => console.error(e));

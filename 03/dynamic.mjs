const a = true;
if (a) {
  const m1 = await "./func.mjs";
  const m2 = await "./var.mjs";
  console.log(m1);
  console.log(m2);
}

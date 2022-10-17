//Bubbling up, Propagating
function a() {
  throw new Error('error!');
}

function b() {
  a();
}

function c() {
  try {
    b();
  } catch (error) {
    console.log('생각해보니 에러를 못잡을것 같군!');
    throw error;
  }
}

try {
  c();
} catch (error) {
  console.log('catched!');
}
console.log('done!');

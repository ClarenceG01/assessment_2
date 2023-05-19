const products_url = "https://jsonplaceholder.typicode.com/posts/1";
const all_products="https://jsonplaceholder.typicode.com/posts";
const delete_url = "https://jsonplaceholder.typicode.com/posts/1";
const filter_url= 'https://jsonplaceholder.typicode.com/posts?userId=1'
// LIST
fetch(all_products).then(res=>res.json().then(result=>console.log(result)))

// // POST
// async function createUser() {
//   try {
//     const new_user = await fetch(products_url, {
//       method: "POST",
//       body: JSON.stringify({
//         userId: 101,
//         title: "Doe",
//         body: "lorem",
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     });
//     const json = await new_user.json();
//     console.log(json);
//   } catch (error) {
//     console.log(error);
//   }
// }
// createUser();



//UPDATE
// async function update(){
//     try {
//         const updated_user= await fetch(products_url,{
//             method:'PUT',
//             body:JSON.stringify({
//                 id: 1,
//                 title: 'foo',
//                 body: 'bar',
//                 userId: 1,
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//               },
//         });
//         console.log(updated_user);
//     } catch (error) {
//         console.log(error);
//     }
// }
// update()
async function update() {
  try {
    const response = await fetch(products_url, {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error("Error:", error);
  }
}

update();

// DELETE
async function deleteEntry() {
  try {
    const response = await fetch(delete_url, {
      method: "DELETE",
    });
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
deleteEntry();

// FILTER
async function deleteEntry() {
    try {
      const response = await fetch(filter_url);
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }
  deleteEntry();
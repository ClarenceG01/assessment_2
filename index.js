const product_url = "https://jsonplaceholder.typicode.com/posts/1";
const all_products="https://jsonplaceholder.typicode.com/posts";
const filter_url= 'https://jsonplaceholder.typicode.com/posts?userId=1'
// LIST
fetch(all_products).then(res=>res.json().then(result=>console.log(result)))

// // POST
async function createUser() {
  try {
    const new_user = await fetch(all_products, {
      method: "POST",
      body: JSON.stringify({
        title: "Doe",
        body: "lorem",
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const json = await new_user.json();
    console.log("New user:" +json);
  } catch (error) {
    console.log(error);
  }
}
createUser()



//UPDATE
// async function update(){
//     try {
//         const updated_user= await fetch(product_url,{
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
    const new_update = await fetch(product_url, {
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
    const json = await new_update.json();
    console.log(json);
  } catch (error) {
    console.error(error);
  }
}

update();

// DELETE
async function deleteEntry() {
  try {
    const deleted_entry = await fetch(product_url, {
      method: "DELETE",
    });
    const json = await deleted_entry.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
deleteEntry();

// FILTER
async function filter() {
    try {
      const response = await fetch(filter_url);
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }
  filter();
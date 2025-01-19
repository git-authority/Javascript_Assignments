async function fetchPost() {
  console.log("Start fetching...");

  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1"); // Wait for the fetch to complete
    let data = await response.json(); // Wait for the JSON to be parsed
    console.log(data); // Log the data
  } catch (error) {
    console.error("Error:", error); // Handle any errors
  }

  console.log("Fetch call made.");

}

fetchPost();

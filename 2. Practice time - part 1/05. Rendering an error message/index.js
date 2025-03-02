// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

const errorMsg = () => {
  document.querySelector("#error").textContent =
    "Something went wrong, please try again";
};
document.querySelector("#purchase-btn").addEventListener("click", errorMsg);

/*

If errorMsg is not reusable, you can:

document.querySelector("#purchase-btn").addEventListener("click", () => {
    document.querySelector("#error").textContent =
    "Something went wrong, please try again";
});

*/

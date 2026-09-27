const theme = document.querySelector("#theme");
const logo = document.querySelector("#byui-logo");

theme.addEventListener("change", changeTheme);

function changeTheme() {
  if (theme.value === "dark") {
    document.body.classList.add("dark");

    logo.src =
      "https://wddbyui.github.io/wdd131/images/byui-logo-white.png";
  } else {
    document.body.classList.remove("dark");

    logo.src = "byui-logo-blue.webp";
  }
}
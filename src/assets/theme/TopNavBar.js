import c_c from "@/assets/js/utils.js"
const change_theme = (current_theme) => {
    if (current_theme) {
        c_c("--nav_bg_color", "#0d1c2beb")
        c_c("--nav_fixed_shadow", "transparent")
        c_c("--nav_item_color", "#ffff")
        c_c("--nav_item_active_color", "#e96969")

    } else {
        c_c("--nav_bg_color", "#ffffffe6")
        c_c("--nav_fixed_shadow", "transparent")
        c_c("--nav_item_color", "#aaaaaa")
        c_c("--nav_item_active_color", "#9966ff")
    }
    let wScrY = window.scrollY;
    if(wScrY < 70){
      c_c("--nav_bg_color", "transparent")
    }
}

export default change_theme
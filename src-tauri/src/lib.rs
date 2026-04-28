// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn add(a: i32, b: i32) -> i32 {
    a + b
}

#[tauri::command]
fn sum_int(values: Vec<i32>) -> i32 {
    values.iter().sum()
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, add, sum_int])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

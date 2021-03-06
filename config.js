// 安装包版本
exports.installPackageVersion = "1.17.30.20";
// 安装包路径
exports.installPackagePath = "H:\\BedrockPackagesJws\\正式版\\1.17\\beta\\1.17.30\\1.17.30.20 b1.apks";
// 安装包类型（release 表示正式版，beta 表示开发版，netease 表示网易版）
exports.installPackageType = "beta";

//#region 此部分仅 OCR 需要使用，无需 OCR 则请勿修改
exports.tesseract = {
    // Tesseract 安装路径
    "binary": "\"C:\\Program Files\\Tesseract-OCR\\tesseract.exe\"",
    // 训练数据路径
    "tessdata-dir": __dirname + "/tesstrain/tessdata"
}

// 命令区域大小
exports.commandAreaRect = {
    "1": [479, 950, 1650, 125], // <- phone
    "3": [410, 950, 1650, 125]  // phone ->
};
//#endregion
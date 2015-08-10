cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/com.pylonproducts.wifiwizard/www/WifiWizard.js",
        "id": "com.pylonproducts.wifiwizard.DynamicUpdate",
        "clobbers": [
            "WifiWizard"
        ]
    },
    {
        "file": "plugins/com.red_folder.phonegap.plugin.backgroundservice.sample/www/myService.js",
        "id": "com.red_folder.phonegap.plugin.backgroundservice.sample.MyService",
        "clobbers": [
            "cordova.plugins.myService"
        ]
    },
    {
        "file": "plugins/com.red_folder.phonegap.plugin.backgroundservice/www/backgroundService.js",
        "id": "com.red_folder.phonegap.plugin.backgroundservice.BackgroundService"
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "com.pylonproducts.wifiwizard": "0.2.8",
    "com.red_folder.phonegap.plugin.backgroundservice.sample": "2.0.0",
    "com.red_folder.phonegap.plugin.backgroundservice": "2.0.0"
}
// BOTTOM OF METADATA
});
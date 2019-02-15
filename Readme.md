## Project Overview

TBCK doesn't document every toggle because everyone can Google what each setting really changes and most of them are self-explaining anyway or they getting changed/removed by Mozilla after a short time.


* [Mozilla Thunderbird](https://www.thunderbird.net/en-US/): _60.5.1_ ([Changelog](https://www.thunderbird.net/en-US/thunderbird/60.5.1/releasenotes/)) + [66 Beta 1](https://www.thunderbird.net/en-US/thunderbird/66.0beta/releasenotes/)
* [Eudora](https://wiki.mozilla.org/Eudora_Releases): Not Supported! 

Please remember to backup your original prefs.js file before you add the modified user.js file into your profile folder! 

This repository contains a list of about:config settings that I have changed for both
preferential reasons, and also privacy and security reasons.

I do not add comments to each line, this is pointless, you simply can google it yourself or try it yourself and see what happens, takes 2 seconds. Several toggles also getting removed over the time due the nature of software development and improvements.

### Windows & Linux

The user.js files are  usually identical. The only difference is that the windows version has
Windows friendly carriage returns which you need to change yourself if you like to use the configuration on your Linux OS. 

### Configuration usage

In Thunderbird, you can get into the `about:config` window by going to
`Edit -> Preferences`, then select the `Advanced` panel, and then select the
`General` tab. Now click `Config Editor`.

In short, you can either go to the url `about:config` and search for the configs
manually and set them, or you can move the user.js file to the
[profile folder](http://kb.mozillazine.org/Profile_folder) which differs across
operating systems.

### Extensions

`extensions.strictCompatibility` is set to `false`, since Thunderbird 60.0 Beta 8 all add-ons which aren't labeled as _Thunderbird 60 compatible_ otherwise won't load anymore.

I use the following extensions, so you might find extension specific flags in the _user.js_ file, even if you're not using them, it's not needed to remove them manually from the configuration since they getting ignored by Thunderbird.

* [Engimail](https://addons.mozilla.org/en-US/thunderbird/addon/enigmail/?src=cb-dl-mostpopular)
* [KeeBird](https://addons.mozilla.org/en-US/thunderbird/addon/keebird/?src=cb-dl-recentlyadded) - incompatible with TB 60+
* [Great DANE](https://addons.mozilla.org/en-US/thunderbird/addon/great-dane-smime/?src=cb-dl-recentlyadded) - incompatible with TB 60+
* [Allow HTML Temp](https://addons.mozilla.org/en-US/thunderbird/addon/allow-html-temp/?src=cb-dl-users) - incompatible with TB 60+
* [MinimizeToTray revived](https://addons.mozilla.org/en-US/thunderbird/addon/minimizetotray-revived/?src=search) - incompatible with TB 60+
* [MEGAbird](https://addons.mozilla.org/EN-US/thunderbird/addon/megabird/?src=cb-dl-users) - incompatible with TB 60+
* [Encrypt if possible](https://addons.mozilla.org/EN-US/thunderbird/addon/encrypt-if-possible/?src=cb-dl-users) 
* [Secure Addressing](https://addons.mozilla.org/en-US/thunderbird/addon/secure-addressing/?src=cb-dl-created) - incompatible with TB 60+
* [TorBirdy](https://addons.mozilla.org/en-US/thunderbird/addon/torbirdy/?src=cb-dl-created) 
* [ReloadPAC](https://addons.mozilla.org/en-US/thunderbird/addon/reloadpac/?src=cb-dl-created)
* [Copy Folder](https://addons.mozilla.org/en-US/thunderbird/addon/copy-folder/?src=cb-dl-popular)
* [Stego Block](https://addons.mozilla.org/en-US/thunderbird/addon/stego-block/?src=cb-dl-popular) - incompatible with TB 60+
* [Logout](https://addons.mozilla.org/en-US/thunderbird/addon/logout/?src=cb-dl-popular)
* [Sensitivity Header](https://addons.mozilla.org/en-US/thunderbird/addon/sensitivity-header/?src=cb-dl-popular)
* uBO (not officially Thunderbird ready)
* [ProtonMail Bridge](https://protonmail.com/bridge/)

## Warning for AntiVirus User

**DO NOT** enable the function to allow your AV to scan your inbox, disable this in your AV program **AND** in Thunderbird. 

The problem with this function is a possible security risk. This function not only allows the AV engine to scan the files it also _opens_ the emails to inspect it's content and attachment which might trigger certain things, like placing a cookie or to let the original transmitter know if you read it or in the worst case scenario (if it's really spam) to trigger an automatically subscription.

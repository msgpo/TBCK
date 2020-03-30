## Project Overview

TBCK doesn't document every toggle because everyone can Google what each setting really changes and most of them are self-explaining anyway or they getting changed/removed by Mozilla after some time.

* [Mozilla Thunderbird](https://www.thunderbird.net/en-US/): _68.6.0_ ([Changelog](https://www.thunderbird.net/en-US/thunderbird/68.6.0/releasenotes/)) + [75 Beta 2](https://www.thunderbird.net/en-US/thunderbird/75.0beta/releasenotes/)
* [Thunderbird via Microsoft Store](https://www.microsoft.com/en-us/p/thunderbird/9pcvbx66llqf?activetab=pivot%3Aoverviewtab) - **Partially supported**
* [Mozilla Lightning](https://developer.mozilla.org/en-US/docs/Mozilla/Calendar/Calendar_Versions): _68.5.0_ ([Changelog](https://developer.mozilla.org/en-US/docs/Mozilla/Calendar/Calendar_Versions))
* [Eudora](https://wiki.mozilla.org/Eudora_Releases) & [Interlink Mail & News](https://binaryoutcast.com/projects/interlink/) - **Not supported!** 

Please remember to backup your original `prefs.js` file before you add the modified user.js file into your profile folder! 

This repository contains a list of about:config settings that I have changed for both preferential reasons, and also privacy and security reasons.

### Considerable secure eMail protocols
- [OpenPGP](https://www.zdnet.com/article/thunderbird-to-add-built-in-support-for-openpgp-email-encryption-standard/) - Thunderbird [78](https://blog.thunderbird.net/2019/10/thunderbird-enigmail-and-openpgp/) (stable)
- [Autocrypt](https://en.wikipedia.org/wiki/Autocrypt) (also known as _EPKS = Echo Public Key Sharing_)
- _[JPAM](https://ietf.org/blog/jmap/) is only secure with specific (and well known) RFC's_

### Overall Project Goal

* Remove/disable all Thunderbird telemetry
* Remove/disable all "startup connections"
* Reduce all traffic caused by "_unneeded startup connections_".
* Prevent leaks & exposures caused by fingerprinting attacks
* Disable all sync/monitoring/pocket & other "useless" features
* Provide a configuration which does not break too much
* Reduce possible attack scenarios (_security_)
* Remove/disable insecure protocols
* Enforce stronger [ciphers](https://en.wikipedia.org/wiki/Cipher) -  algorithm for performing encryption or decryption to migrate possible attacks

### Windows & Linux

The user.js files are  usually identical. The only difference is that the windows version has
Windows friendly carriage returns which you need to change yourself if you like to use the configuration on your Linux OS.


### Thunderbird 64-Bit (upgrade procedure)

In case you like to upgrade your x86 (32-Bit) Thunderbird to a 64-Bit (x64) version, you actually have to uninstall the x86 version first otherwise you have two installations and two profiles. 

Your default profile is stored under `%AppData%\Roaming\Thunderbird\Profiles`, backup the content first, the default folder for your current profile is in a folder called `xxxxxdefault`. Just copy or "zip" the folder, so that you get a fully functional backup. Uninstall the old x86 version and install the new x64 version, copy your backup into your profile folder and start Thunderbird.


### Configuration usage

In Thunderbird, you can get into the `about:config` window by going to
`Edit -> Preferences`, then select the `Advanced` panel, and then select the
`General` tab. Now click `Config Editor`.

In short, you can either go to the URL `about:config` and search for the configs
manually and set them, or you can move the user.js file to the
[profile folder](http://kb.mozillazine.org/Profile_folder) which differs across
operating systems.

### Extensions

`extensions.strictCompatibility` is set to `false`, since Thunderbird 60.0 Beta 8 all add-ons which aren't labeled as _Thunderbird 60 compatible_ otherwise won't load anymore.

I recommended the following extensions, so you might find extension specific flags in the _user.js_ file, even if you're not using them, it's not needed to remove them manually from the configuration since they getting ignored by Thunderbird.

* (_not an addon_) [mailspoof](https://github.com/serain/mailspoof) - Small tool to quickly scan large list of domains for misconfigured SPF and DMARC records.
* [Allow HTML Temp](https://addons.thunderbird.net/EN-US/thunderbird/addon/allow-html-temp/)
* [Copy Folder](https://addons.mozilla.org/en-US/thunderbird/addon/copy-folder/?src=cb-dl-popular)
* [DKIM Verifier](https://addons.thunderbird.net/EN-US/thunderbird/addon/dkim-verifier/)
* [Encrypt if possible](https://addons.mozilla.org/EN-US/thunderbird/addon/encrypt-if-possible/?src=cb-dl-users) 
* [KeeBird](https://addons.mozilla.org/en-US/thunderbird/addon/keebird/?src=cb-dl-recentlyadded)
* [Logout](https://addons.mozilla.org/en-US/thunderbird/addon/logout/?src=cb-dl-popular)
* [MEGAbird](https://addons.mozilla.org/EN-US/thunderbird/addon/megabird/?src=cb-dl-users)
* [Paranoia](https://addons.thunderbird.net/EN-US/thunderbird/addon/paranoia/)
* [ProtonMail Bridge](https://protonmail.com/bridge/) or [hydroxide](https://github.com/emersion/hydroxide) (_optional_)
* [ReloadPAC](https://addons.mozilla.org/en-US/thunderbird/addon/reloadpac/?src=cb-dl-created)
* [Secure Addressing](https://addons.mozilla.org/en-US/thunderbird/addon/secure-addressing/?src=cb-dl-created)
* [Sensitivity Header](https://addons.mozilla.org/en-US/thunderbird/addon/sensitivity-header/?src=cb-dl-popular)
* [TorBirdy](https://addons.mozilla.org/en-US/thunderbird/addon/torbirdy/?src=cb-dl-created) 
* ~~[Engimail](https://addons.mozilla.org/en-US/thunderbird/addon/enigmail/?src=cb-dl-mostpopular)~~ (_Addon will be integrated into TB v78, it will be installable until v68_)
* ~~[Great DANE](https://addons.mozilla.org/en-US/thunderbird/addon/great-dane-smime/?src=cb-dl-recentlyadded) - incompatible with TB 60+~~
* ~~[MinimizeToTray Reanimated](https://addons.thunderbird.net/en-US/thunderbird/addon/minimizetotray-reanimated/?src=ss)~~ [KeepInTaskbar](https://addons.thunderbird.net/en-US/thunderbird/addon/keep-in-taskbar/) + [BirdTray](https://github.com/gyunaev/birdtray/releases)
* ~~[Stego Block](https://addons.mozilla.org/en-US/thunderbird/addon/stego-block/?src=cb-dl-popular) - incompatible with TB 60~~
* uBlock


### Install uBlock Origin into Thunderbird

The extension is [not officially available at the Thunderbird Store (AMO)](https://github.com/gorhill/uBlock/issues/3698), however you can manually install the extension by downloading the `uBlock0_[version].thunderbird.xpi` from the official source and then drag & drop it into Thunderbird's Add-ons Manager pane.


### profiles.ini

The [profiles.ini file](http://kb.mozillazine.org/Profiles.ini_file) (_%APPDATA%\Thunderbird\Profiles\profileName_) is a plain-text file, it can be easily opened, viewed and edited, with a text editor such as Notepad or any other editor. Whenever [multiple profiles](http://kb.mozillazine.org/Profile_in_use#Check_the_profile_folder_name_and_location) exist, it will automatically include an _original_ "default" [profile](http://kb.mozillazine.org/Profile_folder_-_Thunderbird) and additional profiles under _custom_ locations (_IsRelative_). This is interesting if you work with multiple profiles or in case you like to [move your profiles](http://kb.mozillazine.org/Moving_your_profile_folder_-_Thunderbird).

**Example with multiple profiles**
```sh
[General]
; 1= Does not ask you at startup to load a specific profile
; 0 = Ask you each time.
StartWithLastProfile=1

[Profile0]
; Default profile will always created.
Name=default
; Custom profile location (1=yes/0=no).
IsRelative=1
Path=Profiles/12345678.default

[Profile1]
Name=alicew
IsRelative=0
Path=C:\Mozilla\Firefox\Profiles\testp
Default=1

[Profile2]
Name=sheldon
IsRelative=0
Path=V:\Mozilla\Firefox\Profiles\test2
```


## Warning for AntiVirus User

**DO NOT** enable the function to allow your AV to scan your inbox, disable this in your AV program **AND** in Thunderbird. 

The problem with this function is a possible security risk. This function not only allows the AV engine to scan the files it also _opens_ the emails to inspect it's content and attachment which might trigger certain things, like placing a cookie or to let the original transmitter know if you read it or in the worst case scenario (if it's really spam) to trigger an automatically subscription.

## Attacks against S/MIME and PGP

In the recently published ["Johnny-You-Are-Fired"](https://github.com/RUB-NDS/Johnny-You-Are-Fired) [(paper)](https://github.com/RUB-NDS/Johnny-You-Are-Fired/blob/master/paper/johnny-fired.pdf) publication we learned that the signature check can be bypassed. 

What can (currently) be abused?
* Exploiting the CMS (Cryptographic Message Syntax) flaws
* Performing GnuPG API injection attacks
* Constructing non-standard MIME trees
* Displaying valid ID on the email header with a false signature
* Mimicking valid signatures on the UI by using HTML and CSS


So how do we migrate this in order to protect ourselves? 

We disable/block HTML-Code in eMails and we disallow to download third-party content (both is already done via our hardened user.js). The rest must be fixed within the plugins because the mentioned attacks are not targeting the OpenPGP or S/MIME standard or underpinning cryptographic primitives they are basically abusing various flawed implementations.

## Reference
* [Thunderbird’s New Home](https://blog.thunderbird.net/2020/01/thunderbirds-new-home/)
* [Thunderbird Donations](https://give.thunderbird.net/en-US/)
* [Security Advisories for Thunderbird](https://www.mozilla.org/en-US/security/known-vulnerabilities/thunderbird/)


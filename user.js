// About Config
user_pref("general.warnOnAboutConfig", false);


// Fonts & Canvas
//user_pref("gfx.downloadable_fonts.enabled", false); // problematic
user_pref("gfx.canvas.remote", false);
user_pref("gfx.core-animation.enabled", false);
user_pref("gfx.font_rendering.graphite.enabled", false);
//Change font some defaults
user_pref("font.name.monospace.x-unicode", "Lucida Console");
user_pref("font.name.monospace.x-western", "Lucida Console");
user_pref("font.name.sans-serif.x-unicode", "Arial");
user_pref("font.name.sans-serif.x-western", "Arial");
user_pref("font.name.serif.x-unicode", "Georgia");
user_pref("font.name.serif.x-western", "Georgia");
user_pref("browser.display.use_document_fonts", 0);
//Downloadable fonts
user_pref("gfx.downloadable_fonts.disable_cache", true);
user_pref("gfx.downloadable_fonts.woff2.enabled", false);
user_pref("gfx.downloadable_fonts.sanitize_omt", true);
user_pref("gfx.downloadable_fonts.validate_variation_tables", true);


// RSS
user_pref("rss.display.disallow_mime_handlers", 3); // default: 0
user_pref("rss.display.html_as", 1); // default: 0
user_pref("rss.display.prefer_plaintext", true);
user_pref("rss.show.content-base", 3); // default: 0
user_pref("Feeds.logging.console", "Warn"); // default: Info
user_pref("news.warn_on_delete", false); // default: true


// Calendar
//user_pref("calendar.timezone.local", "Europe/Berlin"); // set to whatever you need
user_pref("calendar.list.sortOrder", "a858aeae-df7f-4b7e-9217-b885f8a8011b");
user_pref("calendar.registry.a858aeae-df7f-4b7e-9217-b885f8a8011b.calendar-main-in-composite", true);
user_pref("calendar.registry.a858aeae-df7f-4b7e-9217-b885f8a8011b.name", "Privat");
user_pref("calendar.registry.a858aeae-df7f-4b7e-9217-b885f8a8011b.type", "storage");
user_pref("calendar.registry.a858aeae-df7f-4b7e-9217-b885f8a8011b.uri", "moz-storage-calendar://");
user_pref("calendar.ui.version", 3);
user_pref("calendar.useragent.extra", "Lightning/71.0");
user_pref("extensions.lastAppVersion", "70.0");
user_pref("calendar.network.multirealm", false);


// Extension Blocklist
user_pref("extensions.blocklist.enabled", false);
user_pref("extensions.blocklist.url", "https://blocklists.settings.services.mozilla.com/v1/blocklist/3/%APP_ID%/%APP_VERSION%/"); //https://blocklists.settings.services.mozilla.com/v1/blocklist/3/%APP_ID%/%APP_VERSION%/%PRODUCT%/%BUILD_ID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/%PING_COUNT%/%TOTAL_PING_COUNT%/%DAYS_SINCE_LAST_PING%/


// Extensions
//user_pref("extensions.activeThemeID", "default-theme@mozilla.org"); //Outdated since 63+
user_pref("extensions.blocklist.pingCountTotal", 0);
user_pref("extensions.blocklist.pingCountVersion", 0);
user_pref("extensions.databaseSchema", 31);
user_pref("extensions.getAddons.databaseSchema", 5);
user_pref("extensions.incognito.migrated", true);
user_pref("extensions.installedDistroAddon.{e2fda1a4-762b-4020-b5ad-a41df1933103}", true);


// Sound Notifications
user_pref("mail.biff.play_sound.type", 0);
user_pref("mail.biff.play_sound.url", "");
user_pref("mail.biff.play_sound", false);


// Mails + Chat
user_pref("mail.calendar-integration.opt-out", false); //disable calendar if set to true, depcr.
user_pref("mail.chat.enabled", false);
user_pref("mail.cloud_files.enabled", false);
user_pref("mail.cloud_files.learn_more_url", "");
user_pref("mail.collect_addressbook", "jsaddrbook://history.sqlite");
user_pref("mail.collect_email_address_outgoing", false);
user_pref("mail.html_compose", false);
user_pref("mail.identity.default.compose_html", false);
user_pref("mail.imap.mime_parts_on_demand", true);
user_pref("mail.imap.ssl.show_insecure_images", false);
user_pref("mail.inline_attachments", false);
user_pref("mail.inline_attachments.text", true); //false
user_pref("mail.shell.checkDefaultClient", false);
user_pref("mail.shell.checkDefaultMail", false);
user_pref("mail.showCondensedAddresses", false);
user_pref("mail.smtpserver.default.hello_argument", "[127.0.0.1]"); //hidden
user_pref("mail.spam.logging.enabled", true);
user_pref("mail.spam.markAsReadOnSpam", true);
user_pref("mail.spam.version", 1);
user_pref("mail.SpellCheckBeforeSend", true); //https://bugzilla.mozilla.org/show_bug.cgi?id=667133
user_pref("mail.store_conversion_enabled", true);
user_pref("mail.tabs.autoHide", true);


// Mail News
user_pref("mailnews.allowMboxOver4GB", true);
user_pref("mailnews.auto_config_url", "");
user_pref("mailnews.auto_config.addons_url","");
user_pref("mailnews.auto_config.fetchFromExchange.enabled", false);
user_pref("mailnews.auto_config.fetchFromISP.enabled", false);
user_pref("mailnews.auto_config.fetchFromISP.sendEmailAddress", false);
user_pref("mailnews.auto_config.guess.enabled", false);
user_pref("mailnews.display.date_senders_timezone", false); //Server timezone info, if set to true
user_pref("mailnews.display.html_as", 3); //0
user_pref("mailnews.headers.showSender", true);
user_pref("mailnews.headers.showUserAgent", false);
user_pref("mailnews.reply_in_default_charset", true);
user_pref("mailnews.sendformat.auto_downgrade", false);
user_pref("mailnews.start_page.enabled", false);
user_pref("mailnews.start_page.override_url", ""); //https://live.thunderbird.net/%APP%/whatsnew?locale=%LOCALE%&version=%VERSION%&channel=%CHANNEL%&os=%OS%&buildid=%APPBUILDID%
user_pref("mailnews.start_page.url", "");
user_pref("mailnews.use_received_date", true); //hidden
//user_pref("mailnews.display.prefer_plaintext", false); //HTML (default) <-> plain text
user_pref("mailnews.view_default_charset", "UTF-8"); //ISO-8859-1


// SPAM (filter) & general spam handling
user_pref("mailnews.bayesian_spam_filter.junk_maxtokens", 100000);

// MathML
user_pref("mathml.disabled", true);


// DoH (Cloudflare default)
user_pref("network.trr.mode", 2);
user_pref("network.trr.max-fails", 3);
user_pref("network.trr.uri", "https://mozilla.cloudflare-dns.com/dns-query");
user_pref("network.trr.resolvers", "[{ "name": "Cloudflare", "url": "https://mozilla.cloudflare-dns.com/dns-query" }]");
user_pref("network.trr.useGET", true);
user_pref("network.trr.wait-for-A-and-AAAA", true);
user_pref("network.trr.allow-rfc1918", true);


// Crypto-mining (we use uBO for Safe-Browsing, crypo-poop etc)
user_pref("privacy.trackingprotection.cryptomining.enabled", false);


// Telemetry, Crash etc
user_pref("beacon.enabled", false);
user_pref("breakpad.reportURL", "");
user_pref("datareporting.healthreport.about.reportUrl", "data:text/plain,");
user_pref("datareporting.healthreport.documentServerURI", "");
user_pref("datareporting.healthreport.logging.consoleEnabled", false);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.service.firstRun", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.currentPolicyVersion", 2);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.dataSubmissionPolicyAcceptedVersion", 0);
user_pref("datareporting.policy.dataSubmissionPolicyBypassNotification", false);
user_pref("datareporting.policy.dataSubmissionPolicyNotifiedTime", 0);
user_pref("datareporting.policy.firstRunURL", "");
user_pref("datareporting.policy.minimumPolicyVersion.channel-beta", 2);
user_pref("datareporting.policy.minimumPolicyVersion", 1);
user_pref("telemetry.origin_telemetry_test_mode.enabled", false);
user_pref("toolkit.crashreporter.infoURL", "");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.infoURL", "");
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.prompted", 2);
user_pref("toolkit.telemetry.server_owner", "CHEF-KOCH");
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.testing.overrideProductsCheck", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);


//OpenPGP
user_pref("temp.openpgp.warnRefreshAll", false); //default:true


// Isolation
user_pref("privacy.firstparty.isolate.restrict_opener_access", true); //default:true


//Studies
//user_pref("app.shield.optoutstudies.enabled", false);


// HTTP3
//user_pref("network.http.spdy.enabled.deps", false);
//user_pref("network.http.spdy.enabled.http2", false);
//user_pref("network.http.spdy.enabled", false);


// APP stuff (auto update etc.)
user_pref("app.releaseNotesURL", "");
user_pref("app.update.auto.migrated", true);
user_pref("app.update.auto", false);
user_pref("app.update.backgroundErrors", 2);
user_pref("app.update.disable_button.showUpdateHistory", false);
user_pref("app.update.service.enabled", true);
user_pref("app.update.showInstalledUI", 1);
user_pref("app.update.silent", false);
user_pref("app.update.staging.enabled", false);
user_pref("app.update.channel", "beta"); //default beta
user_pref("app.update.interval", "60400"); // default: 86400
user_pref("app.update.promptWaitTime", "60400"); // default: 86400


// Autoscroll
user_pref("apz.autoscroll.enabled", false); // default: true


// Cache
// FIXME: Slow performance + indexer probs (nextgen2?)
user_pref("browser.cache.disk_cache_ssl", false);
user_pref("browser.cache.disk.amount_written", 0);
user_pref("browser.cache.disk.capacity", 0); //1048576
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk.filesystem_reported", 1); //0
user_pref("browser.cache.disk.smart_size.enabled", false);
user_pref("browser.cache.disk.smart_size.first_run", false);
user_pref("browser.cache.frecency_experiment", -1);
user_pref("browser.cache.frecency_half_life_hours", 5);
user_pref("browser.cache.offline.capacity", 0);
user_pref("browser.cache.offline.enable", false);
user_pref("browser.cache.offline.insecure.enable", false);


// Search
user_pref("browser.search.geoSpecificDefaults.url", "");
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.region", "US");
user_pref("browser.search.reset.enabled", false);
user_pref("browser.search.reset.whitelist", "");
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.update", false);
user_pref("browser.newtabpage.enabled", false);


// FavIcons
user_pref("alerts.showFavicons", false);
user_pref("browser.chrome.site_icons", false);


// Download Folder
user_pref("browser.download.folderList", 2);
user_pref("browser.download.forbid_open_with", true);
user_pref("browser.download.manager.addToRecentDocs", false);


// Others
user_pref("extensions.enabledScopes", 1);
user_pref("gfx.direct2d.disabled", false);
user_pref("accessibility.force_disabled", 1);
user_pref("accessibility.tabfocus", 3);
user_pref("accessibility.typeaheadfind.flashBar", 0);
user_pref("apz.autoscroll.enabled", false);
user_pref("browser.launcherProcess.enabled", true);
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.link.open_newwindow.restriction", 0);
user_pref("browser.link.open_newwindow", 3);
user_pref("browser.triple_click_selects_paragraph", false);
user_pref("canvas.capturestream.enabled", false);
user_pref("canvas.filters.enabled", true);
user_pref("clipboard.plainTextOnly", true);
user_pref("device.sensors.enabled", false);
user_pref("device.storage.enabled", false);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.strictCompatibility", false);
user_pref("app.feedback.baseURL", "");
user_pref("accessibility.typeaheadfind.soundURL", ""); //beep
user_pref("extensions.systemAddon.update.enabled", false);
user_pref("extensions.update.autoUpdateDefault", false);
user_pref("extensions.update.enabled", false);
user_pref("extensions.webcompat-reporter.enabled", false);
user_pref("extensions.webextensions.keepStorageOnUninstall", false);
user_pref("extensions.webextensions.keepUuidOnUninstall", false);
user_pref("extensions.webservice.discoverURL", "");
user_pref("Feeds.logging.console", Warn);
user_pref("general.smoothScroll.lines.durationMaxMS", 440);
user_pref("general.smoothScroll.lines.durationMinMS", 200);
user_pref("general.smoothScroll.lines", true);
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 600);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 400);
user_pref("general.smoothScroll.mouseWheel", true);
user_pref("general.smoothScroll.other.durationMaxMS", 400);
user_pref("general.smoothScroll.other.durationMinMS", 200);
user_pref("general.smoothScroll.other", true);
user_pref("general.smoothScroll.pages.durationMaxMS", 400);
user_pref("general.smoothScroll.pages.durationMinMS", 200);
user_pref("general.smoothScroll.pages", true);
user_pref("general.smoothScroll", true);
user_pref("general.useragent.compatMode.firefox", true); //compact mode
user_pref("general.useragent.locale", "en-US");
user_pref("gfx.layerscope.enabled", false);
user_pref("gfx.offscreencanvas.enabled", false);
user_pref("image.animation_mode", "once"); // "normal"
user_pref("image.decode-immediately.enabled", true);
user_pref("intl.accept_languages", "en-US, en");
user_pref("intl.fallbackCharsetList.ISO-8859-1", "UTF-8"); //windows-1252
user_pref("intl.locale.matchOS", false);
user_pref("intl.locale.requested", "en-US");
user_pref("intl.regional_prefs.use_os_locales", false);
user_pref("javascript.enabled", false);
user_pref("javascript.options.asmjs", false);
user_pref("javascript.options.shared_memory", false);
user_pref("keyword.enabled", false);
user_pref("layout.css.devPixelsPerPx", "1.4"); //UI zoom
user_pref("layout.css.visited_links_enabled", false);
user_pref("layout.spellcheckDefault", 1);
user_pref("middlemouse.contentLoadURL", false);
user_pref("mousewheel.acceleration.factor", 10);
user_pref("mousewheel.acceleration.start", 0);
user_pref("mousewheel.default.delta_multiplier_y", 85);
user_pref("mousewheel.min_line_scroll_amount", 1);
user_pref("permissions.default.image", 2);
user_pref("places.history.enabled", false);
user_pref("purple.conversations.im.send_typing", false);
user_pref("purple.logging.log_chats", false);
user_pref("purple.logging.log_ims", false);
user_pref("purple.logging.log_system", false);
user_pref("reader.parse-on-load.enabled", false);
user_pref("security.ask_for_password", 2);
user_pref("security.block_script_with_wrong_mime", true);
user_pref("security.cert_pinning.enforcement_level", 2);
user_pref("security.csp.enable_violation_events", true); //default
user_pref("security.dialog_enable_delay", 600);
user_pref("security.family_safety.mode", 0);
user_pref("security.fileuri.strict_origin_policy", true);
user_pref("security.insecure_field_warning.contextual.enabled", true);
user_pref("security.insecure_password.ui.enabled", true);
user_pref("security.mixed_content.block_active_content", true);
user_pref("security.mixed_content.block_display_content", true);
user_pref("security.mixed_content.block_object_subrequest", true);
user_pref("security.mixed_content.send_hsts_priming", false);
user_pref("security.mixed_content.use_hsts", true);
user_pref("security.password_lifetime", 10);
user_pref("security.pki.sha1_enforcement_level", 1); // default 3
user_pref("security.warn_entering_weak", true);
user_pref("security.warn_viewing_mixed", true);
user_pref("toolkit.cosmeticAnimations.enabled", false);
user_pref("ui.use_standins_for_native_colors", false); //problematic
user_pref("view_source.syntax_highlight", true);
user_pref("view_source.wrap_long_lines", true);
user_pref("ui.use_standins_for_native_colors", true);
user_pref("general.useragent.override", "");


// Ciphers
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.rsa_des_ede3_sha", false);


// URL (feedback, learn more etc)
user_pref("mail.ignore_thread.learn_more_url", "");
user_pref("mail.instrumentation.postUrl", "");


// Geo
user_pref("geo.enabled", false);
user_pref("geo.enabled", 6000);
user_pref("geo.wifi.xhr.timeout", 1);
user_pref("browser.search.geoip.timeout", 1);
user_pref("browser.search.geoip.url", "");


// Media handling
user_pref("media.videocontrols.picture-in-picture.video-toggle.flyout-wait-ms", 4000);
user_pref("media.videocontrols.picture-in-picture.enabled", false);
user_pref("media.block-autoplay-until-in-foreground", true);
user_pref("media.ffmpeg.low-latency.enabled", true);
user_pref("media.getusermedia.audiocapture.enabled", false);
user_pref("media.getusermedia.browser.enabled", false);
user_pref("media.getusermedia.screensharing.allow_on_old_platforms", false);
user_pref("media.getusermedia.screensharing.allowed_domains", "");
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.hardware-video-decoding.enabled", false);
user_pref("media.mediasource.enabled", false);
user_pref("media.navigator.enabled", false);
user_pref("media.navigator.video.enabled", false);
user_pref("media.ondevicechange.enabled", false);
user_pref("media.opus.enabled", false);
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.ice.defaullt_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);
user_pref("media.peerconnection.ice.tcp", false);
user_pref("media.peerconnection.identity.enabled", false);
user_pref("media.peerconnection.identity.timeout", 1);
user_pref("media.peerconnection.turn.disable", true);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.video-max-decode-error", 1);
user_pref("media.video_stats.enabled", false);
user_pref("media.webspeech.recognition.enable", false);
user_pref("media.webspeech.synth.enabled", false);


// Privacy
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.siteSettings", false);
user_pref("privacy.popups.disable_from_plugins", 3); //default
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.sanitize.timeSpan", 0);
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.window.maxInnerHeight", 900);
user_pref("privacy.window.maxInnerWidth", 1600);


// RFP
user_pref("privacy.resistFingerprinting", false); //default, causes too many problems


// Surf Container
user_pref("privacy.firstparty.isolate", true);


// Tracking Protection
// DnT
user_pref("privacy.donottrackheader.enabled", false); //default
user_pref("privacy.trackingprotection.annotate_channels", false);
user_pref("privacy.trackingprotection.lower_network_priority", true); // default false
user_pref("privacy.trackingprotection.ui.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", false);
user_pref("privacy.trackingprotection.origin_telemetry.enabled", false);
user_pref("privacy.trackingprotection.socialtracking.enabled", false);


// Default Mail headers
// Removed feature
user_pref("mail.identity.id1.headers", "");
user_pref("mail.identity.id1.header.References", "");
user_pref("mail.identity.id1.header.InReplyTo", "");


// OCSP
user_pref("security.OCSP.enabled", 0);
user_pref("security.OCSP.require", true);


// DOM
user_pref("dom.allow_cut_copy", false);
user_pref("dom.allow_scripts_to_close_windows", false);
user_pref("dom.archivereader.enabled", false);
user_pref("dom.battery.enabled", false);
user_pref("dom.beforeAfterKeyboardEvent.enabled", false);
user_pref("dom.caches.enabled", false);
user_pref("dom.disable_beforeunload", true);
user_pref("dom.disable_open_during_load", true);
user_pref("dom.disable_window_flip", true);
user_pref("dom.disable_window_move_resize", true);
user_pref("dom.disable_window_open_feature.close", true);
user_pref("dom.disable_window_open_feature.location", true);
user_pref("dom.disable_window_open_feature.menubar", true);
user_pref("dom.disable_window_open_feature.minimizable", true);
user_pref("dom.disable_window_open_feature.personalbar", true);
user_pref("dom.disable_window_open_feature.resizable", true);
user_pref("dom.disable_window_open_feature.status", true);
user_pref("dom.disable_window_open_feature.titlebar", true);
user_pref("dom.disable_window_open_feature.toolbar", true);
user_pref("dom.disable_window_status_change", true);
user_pref("dom.enable_performance", false);
user_pref("dom.enable_resource_timing", false);
user_pref("dom.enable_user_timing", false);
user_pref("dom.event.clipboardevents.enabled", false);
user_pref("dom.flyweb.enabled", false);
user_pref("dom.forms.autocomplete.experimental", false);
user_pref("dom.gamepad.enabled", false);
user_pref("dom.idle-observers-api.enabled", false);
user_pref("dom.imagecapture.enabled", false);
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("dom.keyboardevent.code.enabled", false);
user_pref("dom.keyboardevent.dispatch_during_composition", false);
user_pref("dom.netinfo.enabled", false);
user_pref("dom.popup_allowed_events", "");
user_pref("dom.popup_maximum", 3);
user_pref("dom.presentation.controller.enabled", false);
user_pref("dom.presentation.discoverable", false);
user_pref("dom.presentation.discovery.enabled", false);
user_pref("dom.presentation.enabled", false);
user_pref("dom.presentation.receiver.enabled", false);
user_pref("dom.presentation.session_transport.data_channel.enable", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.enabled", false);
user_pref("dom.push.serverURL", "data:,");
user_pref("dom.push.userAgentID", "");
user_pref("dom.serviceWorkers.enabled", false);
user_pref("dom.storage.enabled", false);
user_pref("dom.storageManager.enabled", false);
user_pref("dom.telephony.enabled", false);
user_pref("dom.vibrator.enabled", false);
user_pref("dom.vr.enabled", false);
user_pref("dom.vr.oculus.enabled", false);
user_pref("dom.vr.openvr.enabled", false);
user_pref("dom.vr.osvr.enabled", false);
user_pref("dom.w3c_pointer_events.enabled", false);
user_pref("dom.w3c_touch_events.enabled", 0);
user_pref("dom.webaudio.enabled", false);
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);
user_pref("dom.workers.enabled", false);


// Webrenderer
user_pref("gfx.webrender.enabled", true);
user_pref("gfx.webrender.all", true);


// TLS versions
user_pref("security.ssl.disable_session_identifiers", true);
user_pref("security.ssl.require_safe_negotiation", true);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("security.tls.enable_0rtt_data", false);
user_pref("security.tls.version.fallback-limit", 4);
user_pref("security.tls.version.max", 4);
user_pref("security.tls.version.min", 3); //use 2 as fallback


// U2F
user_pref("security.webauth.u2f", true);


// Insecure Connection warning pages
user_pref("browser.xul.error_pages.expert_bad_cert", true);


// Safebrowsing
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.provider.google.advisoryURL", "");
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.lists", "goog-badbinurl-shavar,goog-downloadwhite-digest256,goog-phish-shavar,googpub-phish-shavar,goog-malware-shavar,goog-unwanted-shavar");
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.advisoryName", "CHEF-KOCH's Anti-Google Safe-Browsing");
user_pref("browser.safebrowsing.provider.google4.advisoryURL", ""); // https://developers.google.com/safe-browsing/v4/advisory
user_pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.lists", "goog-badbinurl-proto,goog-downloadwhite-proto,goog-phish-proto,googpub-phish-proto,goog-malware-proto,goog-unwanted-proto,goog-harmful-proto,goog-passwordwhite-proto");
user_pref("browser.safebrowsing.provider.google4.pver", 4);
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.lists.base", "moz-std");
user_pref("browser.safebrowsing.provider.mozilla.lists.content", "moz-full");
user_pref("browser.safebrowsing.provider.mozilla.lists", "base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,ads-track-digest256,social-track-digest256,analytics-track-digest256,base-fingerprinting-track-digest256,content-fingerprinting-track-digest256,base-cryptomining-track-digest256,content-cryptomining-track-digest256,fanboyannoyance-ads-digest256,fanboysocial-ads-digest256,easylist-ads-digest256,easyprivacy-ads-digest256,adguard-ads-digest256,social-tracking-protection-digest256,social-tracking-protection-facebook-digest256,social-tracking-protection-linkedin-digest256,social-tracking-protection-twitter-digest256");
user_pref("browser.safebrowsing.provider.mozilla.nextupdatetime", 1);
user_pref("browser.safebrowsing.provider.mozilla.pver", 2.2);
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
user_pref("browser.safebrowsing.allowOverride", false); // default: true


// Sideloading
// Sideloading is considerable not a security risk, if the OS security mechanism already fails then TB is compromised no matter what.
user_pref("xpinstall.whitelist.required", false); // default: true
//user_pref("xpinstall.signatures.required", true); // default: true


// Auto fill
user_pref("browser.formfill.enable", false);
user_pref("signon.autofillForms.autocompleteOff", true);
user_pref("signon.autofillForms.http", false);
user_pref("signon.autofillForms", false);
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.storeWhenAutocompleteOff", true);


// Social gimmicks
user_pref("social.directories", "");
user_pref("social.remote-install.enabled", false);
user_pref("social.share.activationPanelEnabled", false);
user_pref("social.shareDirectory", "");
user_pref("social.toast-notifications.enabled", false);
user_pref("social.whitelist", "");
user_pref("privacy.socialtracking.block_cookies.enabled", true);


// Network Prefetching
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);


// SVG
user_pref("svg.disabled", true);
user_pref("gfx.font_rendering.opentype_svg.enabled", false);
user_pref("image.cache.max-rasterized-svg-threshold-kb", 204800);
user_pref("svg.context-properties.content.enabled", false);
user_pref("svg.display-lists.hit-testing.enabled", false);
user_pref("svg.display-lists.painting.enabled", false);
user_pref("svg.new-getBBox.enabled", false);
user_pref("svg.transform-box.enabled", true);


// WebGL
user_pref("webgl.1.allow-core-profiles", false);
user_pref("webgl.all-angle-options", false);
user_pref("webgl.allow-fb-invalidation", false);
user_pref("webgl.allow-immediate-queries", false);
user_pref("webgl.angle.force-d3d11", false);
user_pref("webgl.angle.force-warp", false);
user_pref("webgl.angle.try-d3d11", true);
user_pref("webgl.can-lose-context-in-foreground", true);
user_pref("webgl.default-antialias", true);
user_pref("webgl.default-low-power", false);
user_pref("webgl.default-no-alpha", false);
user_pref("webgl.disable-angle", false);
user_pref("webgl.disable-DOM-blit-uploads", false);
user_pref("webgl.disable-extensions", true);
user_pref("webgl.disable-fail-if-major-performance-caveat", false);
user_pref("webgl.disable-wgl", false);
user_pref("webgl.disabled", true); // default: false
user_pref("webgl.dxgl.enabled", false);
user_pref("webgl.dxgl.needs-finish", false);
user_pref("webgl.enable-debug-renderer-info", true);
user_pref("webgl.enable-draft-extensions", false);
user_pref("webextensions.tests", false); // default: false
user_pref("webgl.enable-privileged-extensions", false);
user_pref("webgl.enable-surface-texture", false);
user_pref("webgl.enable-webgl2", false); // default true
user_pref("webgl.force-enabled", false);
user_pref("webgl.force-index-validation", 0);
user_pref("webgl.force-layers-readback", false);
user_pref("webgl.lose-context-on-memory-pressure", false);
user_pref("webgl.max-contexts-per-principal", 16);
user_pref("webgl.max-contexts", 32);
user_pref("webgl.max-warnings-per-context", 32);
user_pref("webgl.min_capability_mode", false);
user_pref("webgl.msaa-force", false);
user_pref("webgl.msaa-samples", 4);
user_pref("webgl.perf.max-acceptable-fb-status-invals", 0);
user_pref("webgl.perf.max-warnings", 0);
user_pref("webgl.perf.spew-frame-allocs", true);
user_pref("webgl.prefer-16bpp", false);
user_pref("webgl.renderer-string-override", "");
user_pref("webgl.vendor-string-override", "");

// Auto Crypt
user_pref("mail.server.default.acPreferEncrypt", 0);
user_pref("mail.server.default.enableAutocrypt", false);


// Enigmail (will be removed)
user_pref("mail.pgpmime.addon_url", "https://addons.thunderbird.net/thunderbird/addon/enigmail/");
user_pref("extensions.enigmail.addHeaders", false);
user_pref("extensions.enigmail.agentAdditionalParam", "--no-emit-version --no-comments");
user_pref("extensions.enigmail.mimeHashAlgorithm", 5);
user_pref("extensions.enigmail.protectedHeaders", 2);
user_pref("extensions.enigmail.protectedSubjectText", "Encrypted Message");
user_pref("extensions.enigmail.useDefaultComment", true);


// Devtools
user_pref("devtools.chrome.enabled", false);
user_pref("devtools.debugger.remote-enabled", false);


//Captive Portal (default off)
user_pref("network.captive-portal-service.enabled", false);
user_pref("captivedetect.canonicalURL", ""); //http://detectportal.firefox.com/success.txt


//DNS
user_pref("network.dns.blockDotOnion", false); // default: true
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);


//IPv6
//user_pref("network.dns.disableIPv6", true);


// SOCKS / Proxy
user_pref("network.gio.supported-protocols", "");
user_pref("network.proxy.autoconfig_url.include_path", false);
user_pref("network.proxy.socks_remote_dns", true);
user_pref("network.proxy.type", 0);


// Disable insecure protocols (FTP etc.)
user_pref("network.ftp.enabled", false);


// UNC
user_pref("network.file.disable_unc_paths", true);


// PunnyCode
user_pref("network.IDN_show_punycode", true);


// Networking (Cookies, IPv4/IPv6 etc)
user_pref("network.auth.subresource-img-cross-origin-http-auth-allow", false);
user_pref("network.cookie.cookieBehavior", 2);
user_pref("network.cookie.leave-secure-alone", true);
user_pref("network.cookie.lifetimePolicy", 2);
user_pref("network.cookie.prefsMigrated", true);
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true);
user_pref("network.cookie.thirdparty.sessionOnly", true);
user_pref("network.http.altsvc.enabled", false);
user_pref("network.http.altsvc.oe", false);
user_pref("network.http.redirection-limit", 8);
user_pref("network.http.sendRefererHeader", 0); // default 2
user_pref("network.http.sendSecureXSiteReferrer", false);
user_pref("network.notify.IPv6", false);
user_pref("browser.send_pings.require_same_host", true);
user_pref("network.protocol-handler.external.ms-windows-store", false);


// Disallow images saved as webp
user_pref("image.webp.enabled", false);


// Referer
user_pref("network.http.referer.defaultPolicy", 3); //default
user_pref("network.http.referer.hideOnionSource", true);
user_pref("network.http.referer.spoofSource", true);
user_pref("network.http.referer.trimmingPolicy", 2);
user_pref("network.http.referer.XOriginPolicy", 2);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);


// Themes
user_pref("lightweightThemes.update.enabled", true); // workaround
user_pref("widget.content.allow-gtk-dark-theme", true); // default: false
user_pref("widget.content.gtk-high-contrast.enabled", true); // default: true


// Web Tools
user_pref("devtools.whatsnew.feature-enabled", false);
user_pref("devtools.whatsnew.enabled", false);


// Smooth scroll
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", 1.5);

var boostPFS = new BoostPFS();
boostPFS.init(); 
if (typeof boostPFSConfig != 'undefined'
	&& typeof boostPFSConfig.general != 'undefined' 
	&& typeof boostPFSConfig.general.isInitFilter != 'undefined'
	&& typeof boostPFSThemeConfig != 'undefined'
	&& boostPFSConfig.general.isInitFilter === true) {
	boostPFS.initFilter(); 
} 
setTimeout(function(){
    boostPFS.init();
	boostPFS.initSearchBox();
	boostPFS.initAnalytics();
});
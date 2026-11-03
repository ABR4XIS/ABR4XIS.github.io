// Preserve links shared from the earlier portfolio while using real case pages.
const legacy=location.hash.match(/^#case\/([a-z-]+)$/);
const slugs=['gentoo','pwnsec','maru','passcode','input-rop','kernel'];
if(legacy&&slugs.includes(legacy[1]))location.replace('cases/'+legacy[1]+'/');

/* share42.com | 05.05.2014 | (c) Dimox */
(function($){$(function(){$('div.share42init').each(function(idx){var el=$(this),u=el.attr('data-url'),t=el.attr('data-title'),i=el.attr('data-image'),d=el.attr('data-description'),f=el.attr('data-path'),fn=el.attr('data-icons-file'),z=el.attr("data-zero-counter"),m1=el.attr('data-top1'),m2=el.attr('data-top2')*1,m3=el.attr('data-margin');if(!u)u=location.href;if(!fn)fn='icons.png';if(!z)z=0;function fb_count(url){var shares;$.getJSON('http://graph.facebook.com/?callback=?&ids='+url,function(data){shares=data[url].shares||0;if(shares>0||z==1)el.find('a[data-count="fb"]').after('<span class="share42-counter">'+shares+'</span>')})}fb_count(u);function odkl_count(url){$.getScript('http://www.odnoklassniki.ru/dk?st.cmd=extLike&uid='+idx+'&ref='+url);if(!window.ODKL)window.ODKL={};window.ODKL.updateCount=function(idx,shares){if(shares>0||z==1)$('div.share42init').eq(idx).find('a[data-count="odkl"]').after('<span class="share42-counter">'+shares+'</span>')}}odkl_count(u);function twi_count(url){var shares;$.getJSON('http://urls.api.twitter.com/1/urls/count.json?callback=?&url='+url,function(data){shares=data.count;if(shares>0||z==1)el.find('a[data-count="twi"]').after('<span class="share42-counter">'+shares+'</span>')})}twi_count(u);function vk_count(url){$.getScript('http://vk.com/share.php?act=count&index='+idx+'&url='+url);if(!window.VK)window.VK={};window.VK.Share={count:function(idx,shares){if(shares>0||z==1)$('div.share42init').eq(idx).find('a[data-count="vk"]').after('<span class="share42-counter">'+shares+'</span>')}}}vk_count(u);function ya_count(url){if(!window.Ya)window.Ya={};window.Ya.Share={showCounter:function(number){window.yaShares=number}};$.getScript('http://wow.ya.ru/ajax/share-counter.xml?url='+url,function(){var shares=window.yaShares;if(shares>0||z==1)el.find('a[data-count="ya"]').after('<span class="share42-counter">'+shares+'</span>')})}ya_count(u);if(!f){function path(name){var sc=document.getElementsByTagName('script'),sr=new RegExp('^(.*/|)('+name+')([#?]|$)');for(var p=0,scL=sc.length;p<scL;p++){var m=String(sc[p].src).match(sr);if(m){if(m[1].match(/^((https?|file)\:\/{2,}|\w:[\/\\])/))return m[1];if(m[1].indexOf("/")==0)return m[1];b=document.getElementsByTagName('base');if(b[0]&&b[0].href)return b[0].href+m[1];else return document.location.pathname.match(/(.*[\/\\])/)[0]+m[1];}}return null;}f=path('share42.js');}if(!t)t=document.title;if(!d){var meta=$('meta[name="description"]').attr('content');if(meta!==undefined)d=meta;else d='';}if(!m1)m1=150;if(!m2)m2=20;if(!m3)m3=0;u=encodeURIComponent(u);t=encodeURIComponent(t);t=t.replace(/\'/g,'%27');i=encodeURIComponent(i);d=encodeURIComponent(d);d=d.replace(/\'/g,'%27');var fbQuery='u='+u;if(i!='null'&&i!='')fbQuery='s=100&p[url]='+u+'&p[title]='+t+'&p[summary]='+d+'&p[images][0]='+i;var vkImage='';if(i!='null'&&i!='')vkImage='&image='+i;var s=new Array('"#" data-count="fb" onclick="window.open(\'http://www.facebook.com/sharer.php?m2w&'+fbQuery+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться в Facebook"','"#" onclick="window.open(\'http://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk='+u+'&title='+t+'&annotation='+d+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=500, toolbar=0, status=0\');return false" title="Сохранить закладку в Google"','"http://www.livejournal.com/update.bml?event='+u+'&subject='+t+'" title="Опубликовать в LiveJournal"','"#" data-count="odkl" onclick="window.open(\'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st._surl='+u+'&title='+t+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Добавить в Одноклассники"','"#" data-count="twi" onclick="window.open(\'https://twitter.com/intent/tweet?text='+t+'&url='+u+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Добавить в Twitter"','"#" data-count="vk" onclick="window.open(\'http://vk.com/share.php?url='+u+'&title='+t+vkImage+'&description='+d+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться В Контакте"','"http://my.ya.ru/posts_add_link.xml?URL='+u+'&title='+t+'&body='+d+'" data-count="ya" title="Поделиться в Я.ру"');var l='';for(j=0;j<s.length;j++){var s42s='';l+='<span class="share42-item" style="display:block;white-space:no-wrap;margin:0 0 6px;height:24px;"><a rel="nofollow" style="display:inline-block;vertical-align:top;width:24px;height:24px;margin:0;padding:0;outline:none;background:url('+f+fn+') -'+24*j+'px 0 no-repeat" href='+s[j]+' target="_blank"></a></span>'+s42s;};el.html('<span id="share42" style="position:fixed;z-index:9999;margin-left:'+m3+'px">'+l+'</span>'+'<style>.share42-counter{display:inline-block;vertical-align:top;margin-left:9px;position:relative;background:#FFF;color:#666;} .share42-counter:before{content:"";position:absolute;top:0;left:-8px;width:8px;height:100%;} .share42-counter{height:24px;padding:0 7px 0 3px;font:12px/25px Arial,sans-serif;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAYCAYAAAAMAljuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIxJREFUeNrs2rENgCAQQNHDyBBWDMFULmFjnMGlYAgKoy01BR5xB6H4P7mE+l7JmRBCFerdrXN673dTNfbRt1KKpJQk57xNrKN/1lpxzrXnCshAKNoCyGABAggBAggBAggBAggBAggBQoAAQoAAQoAAQr/U/tW1B5BBMNqRg3bOMUY20r9LvjOg4xVgABtzIxFP3JZkAAAAAElFTkSuQmCC) 100% 0;} .share42-counter:before{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAYCAYAAADH2bwQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJlJREFUeNrEks0NwyAMhU0kdmi4MARTZYh0jS4FE3DiAjvA4dVUjZQ/p+qlfZKFrPcJPYMVANorhDDzMXGN1IF1ee/nGCNqrega6KjJWkta61dzBoyLKQEb/Rrg+WGM2RKr+ZFzxl6XJj6Z0kseQiq+gUop8hScXIQG5xx1U4ROvvv7kH8ASmvtEniklGiBlLD29/fa354CDAC6sL9OAqehCgAAAABJRU5ErkJggg==);}</style>');var p=$('#share42');function m(){var top=$(window).scrollTop();if(top+m2<m1){p.css({top:m1-top});}else{p.css({top:m2});}}m();$(window).scroll(function(){m();})});})})(jQuery);
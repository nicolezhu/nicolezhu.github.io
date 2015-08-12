---
layout: post
title: Building my first Chrome extension
---

I built my first Chrome extension! It replaces the text 'you guys' with 'you babies' (you can install it from the [Chrome Web Store](https://chrome.google.com/webstore/detail/you-guys-to-you-babies/kcedlblodlmlheifgechgmhmdpeaadcc) and find the [code on GitHub](https://github.com/nicolezhu/you-guys)).

I was inspired by this tweet from [Ryan Gantz](https://twitter.com/sixfoot6):

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">chrome/brain plugin that replaces &quot;you guys&quot; with &quot;you babies&quot;&#10;&#10;thanks, you babies&#10;you babies killed it today&#10;what are you babies up to?</p>&mdash; Ryan D Gantz, ART (@sixfoot6) <a href="https://twitter.com/sixfoot6/status/630825211370143744">August 10, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

I've been meaning to make a silly find-and-replace words Chrome extensionfor awhile now, but I just haven't been able to think of a good word or phrase. My personal favorites include [Millennials to Snake People](https://chrome.google.com/webstore/detail/millennials-to-snake-peop/jhkibealmjkbkafogihpeidfcgnigmlf?hl=en-US) and [Cloud to Butt](https://chrome.google.com/webstore/detail/cloud-to-butt-plus/apmlngnhgbnjpajelfkmabhkfapgnoai?hl=en). I've also seen some find-and-replace Chrome extensions that have an impact (though everyone needs a [good chuckle](http://gizmodo.com/the-best-of-cloud-to-butt-the-only-extension-youll-eve-1685863609) every now and then), like this [Chrome extension](https://github.com/gka/citation-needed) from [Gregor Aisch](https://twitter.com/driven_by_data) that highlights anonymous sources in news articles. Ryan's tweet about changing 'you guys' to 'you babies' was the perfect opportunity for me to learn how to make a Chrome extension while also highlighting the ["creeping sexism"](http://www.vox.com/2015/6/11/8761227/you-guys-sexism-language) in our language.

A Chrome extension relies mostly on JavaScript, HTML, and CSS (and requires some other packaging and uploading that is outlined pretty clearly in [Google Chrome's tutorials](https://developer.chrome.com/extensions/getstarted)). Since the I worked off a [fork](https://github.com/panicsteve/cloud-to-butt) of the Cloud to Butt extension, I was able to build 'You Guys to You Babies' and get it into the Chrome Web Store in ~1.5-2 hours.

### What's in v1:
- A manifest file that includes the metadata for the extension, like the name, version number, icons, content scripts, etc.
- A content script file that includes a JavaScript function that just traverses the document body for text nodes and replaces a given string with another string
- An icon for the extension (I decided to use the ironic ["guise srsly" pug](http://www.reactionface.info/sites/default/files/imagecache/Node_Page/images/1310497097772.gif))

### Next steps:
- Since the content script file only traverses the document body for text nodes, any occurrences of 'you guys' that isn't in a text node will not be replaced. A future version will try to target all occurrences on a webpage (without accidentally changing outgoing links).
- More testing on different webpages
- Watch for/handle post-load DOM changes so that dynamic additions of 'you guys' will be replaced with 'you babies.'

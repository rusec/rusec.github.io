---
title: "Is That Free Ebook Worth Getting Hacked? (7 Minute Read)"
date: 2022-03-15T17:14:12Z
# image_webp: images/blog/blog-post-3.webp
image: images/blog/malicious_pdf_blog_post.jpg
author: Philip Okoh
description : "As a broke college student it's tempting to get that free pdf from libgen... but is it worth it?"
---


As broke college students, we know that buying that textbook from Barnes and Noble on College is less than ideal, especially with the terrible busses and the uncertainty if you would even need to use it in class. The price is too high even for renting, so we instinctively look for better options. One of these options is piracy through websites like [**Virus Total**](https://www.libgen.is/). While these websites can save you money in the short term, it is essential to understand that these pdf can contain viruses even if Libgen claim they have scanned them. The information read here can be used on Libgen and any other website that asks you to download and open a pdf and Word document.

**VIRUSTOTAL**

VirusTotal is a great resource we can use to determine if a known pdf has been flagged as a virus. You see, all programs on the computer are distinct from what is known as a hash signature. Well-known hash signatures are md5, sha1, and sha256. These signatures are like the fingerprint for a file. If anything about these files changes, so does the signature. For pdfs, typically read and distributed and not frequently edited, these signature tools are very effective at identifying pdfs flagged as malicious by trusted security Vendors. You don't have to worry about this, as VirusTotal handles this for you.

Upload the pdf to the website, and it will check the signature with over 50+ Antivirus signature databases. If it lights up like a Christmas tree,  that pdf just isn't for you. If just one AV flagged it as malware, we might consider it a false positive.

![Figure 1](https://github.com/rusec/BlogPostPhotos/blob/master/BlogPost1/virustoal_hits_more.png?raw=true)

**APP.ANY.RUN**

Ok, so you've learned about virus total and now you're a cut above the rest in terms of protecting yourself from the dangers of the internet. But what if the AV signature databases simply just did not detect the signature of the possible malicious pdf yet. Do you really want to be the first one to test it out on your own computer? 

![Figure 2](https://github.com/rusec/BlogPostPhotos/blob/master/BlogPost1/virus_total_no_captures.png?raw=true)

That's where **APP.ANY.RUN** comes in.

App.Any.run acts as a sandbox. A sandbox is a controlled virtual environment that runs your files in an enclosed environment and can determine based on their behavior if they are malicious or not. For App.Any.run, you do need an account, but it is **FREE**. Next, upload your suspicious pdf document and let the virtual machine run on their website. After running for about a minute App.Any.Run will give you a verdict if it is malicious or not. 

![Figure 3](https://github.com/rusec/BlogPostPhotos/blob/master/BlogPost1/App.any.run.png?raw=true#center)

If it is, throw that pdf away and pat yourself on the back to avoid a catastrophe. 

In conclusion, VirusTotal, and APP.ANY.RUN are simple tools that anyone can use to determine if what you put on your computer is malicious or not. They should be utilized because of how quickly a result you can get. They can save you a lot of money as ransomware and credit card stealers are typically the main malware distributed through these documents. The internet is vast. Be safe out there!
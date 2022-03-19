---
title: "Is That Free Ebook Worth Getting Hacked? (7 Minute Read)"
date: 2022-03-15T17:14:12Z
# image_webp: images/blog/blog-post-3.webp
image: images/blog/malicious_pdf_blog_post.jpg
author: Philip Okoh
description : "As a broke college student it's tempting to get that free pdf from libgen... but is it worth it?"
---


As a broke college student we know that buying that textbook from Barnes and Noble on College is less than ideal, especially with the terrible busses and the uncertainty if you would even need to use it in class. The price is too high even for renting so we instinctivy look for better options.
One of these options is piracy through websites like [**Virus Total**](https://www.libgen.is/). While these websites can save you money in the short term it is important to understand that these pdf can possibly contain viruses even if Libgen claim they are scanned. The information that will be read here can be used not only on libgen but any other website that asks you to download and open a pdf.

**VIRUSTOTAL**

Virus is a great resource that can be used to determine if a well known pdf has been reported as a virus in the past. You see all programs on the computer are distinct in their own way with what is known as a hash signature. Well known hash signatures are md5, sha1 and sha256. These signatures are like the fingerprint for a file. If anything about these files changes so does the signature. For a pdf though, they are typically read and distributed and not frequently editted so these signature tools are very effective at identifying pdfs which have been reported as bad. Luckily you don't have to worry about this yourself as VirusTotal handles this for you.

Simply upload the pdf to the website and it will check the signature with over 50+ Antivirus signature databases to see if it has been flagged. IF it lights up like a christmas tree maybe that pdf just isn't for you. Sometimes though maybe one AV flagged it as a signature and this is typically a false positive but we still advise caution.

![Figure 1](https://github.com/rusec/BlogPostPhotos/blob/master/BlogPost1/virustoal_hits_more.png?raw=true)

**APP.ANY.RUN**

Ok, so you've learned about virus total and now you're a cut above the rest in terms of protecting yourself from the dangers of the internet. But what if the AV signature databases simply just did not detect the signature of the possible malicious pdf yet. Do you really want to be the first one to test it out on your own computer? 

![Figure 2](https://github.com/rusec/BlogPostPhotos/blob/master/BlogPost1/virus_total_no_captures.png?raw=true)

That's where **APP.ANY.RUN** comes in.

App.Any.run acts as a sanbox. A sandbox is a controlled virtual environment that runs your files in a enclosed environemnt an can determine based of their behavior if they are malicious or not. For App.Any.run you do need an account but it is **FREE**. Next simply upload your suspicious pdf document and then let the virtual machine run on their website. After running for about a minute App.Any.Run will give you a verdict if it malicious or not. 

![Figure 3](https://github.com/rusec/BlogPostPhotos/blob/master/BlogPost1/App.any.run.png?raw=true#center)

If it is, throw that pdf away and pat yourself on the back from avoiding a catastrophe. If it isn't... well you just saved yourself a 100 bucks!
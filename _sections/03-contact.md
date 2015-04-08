---
title: Contact
anchor: contact
---
## Contact

If you're a Rutgers student interested in joining RUSEC or have any questions about the group, feel free to contact us!

[{{ site.email }}](mailto:{{ site.email }})

<ul class="list-inline banner-social-buttons">
{% for network in site.social %}
<li>
<a href="{{ network.url }}" class="btn btn-default btn-lg"><i class="fa fa-{{ network.title }} fa-fw"></i> <span class="network-name">{{ network.title }}</span></a>
</li>
{% endfor %}
</ul>

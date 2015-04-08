---
layout: default
---

{% for section in site.sections %}

<!-- {{ section.title }} Section -->

{% if section.background == nil %}
<section id="{{ section.anchor }}" class="container content-section text-center">
<div class="container">
<div class="col-lg-8 col-lg-offset-2">
{{ section.content }}
</div>
</div>
</section>
{% else %}
<section id="{{ section.anchor }}" class="content-section text-center">
<div class="background-section" style="background-image: url('{{ section.background }}');">
<div class="container">
<div class="col-lg-8 col-lg-offset-2">
{{ section.content }}
</div>
</div>
</div>
{% endif %}
  
{% endfor %}

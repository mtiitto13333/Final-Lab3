---
title: Elenventy Project
tags: page
layout: template.html
---
some macs yo
<div>
    <ul>
        {% for mac in macs -%}
            <li>{{ mac }}</li>
        {% endfor -%}
    </ul>
</div>

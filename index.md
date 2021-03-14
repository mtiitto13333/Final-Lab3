---
title: Elenventy Project
tags: page
layout: template.html
---

# {{ title }}
some macs you might be familiar with. if not its all good fam. Just live your life m8. Colour combos, burger combos, spicy fish, tasty cheese. whoop whoop! I tried to put an image here:)
<img src="tree.jpg">
<div>
    <ul>
        {% for mac in macs -%}
            <li>{{ mac }}</li>
        {% endfor -%}
    </ul>
</div>

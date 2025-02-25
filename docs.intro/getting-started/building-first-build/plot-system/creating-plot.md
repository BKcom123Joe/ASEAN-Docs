---
title: Creating your plot
id: creating-plot
---

```mdx-code-block

import MinecraftWindow from "@site/src/components/MinecraftWindow";
import Text from "@site/src/components/TextDecoration";
import Admonition from '@theme/Admonition';
import Img from '@site/src/components/Img';

import guide_create from "@site/static/img/docs/creating-plot/guide_create.gif";
import guide_companion from "@site/static/img/docs/creating-plot/your-companion.png";
import guide_profile from "@site/static/img/docs/creating-plot/your-profile.png";
import guide_panel from "@site/static/img/docs/creating-plot/your-panel.png";
import guide_difficulty from "@site/static/img/docs/creating-plot/plot-difficulty.png";

```
<div class="container"><div class="row">
    <div class="col col--6"><dd>After you joined our plot server, you'll have a netherstar (Compaion) in your inventory.</dd><hr/></div>
    <div class="col col--6"><Img src={guide_companion} alt="companion" width="844" height="352" 
        style={{borderRadius:"6px", transformOrigin:"top center",transform:"scale(0.8)"}} className="item shadow--md" /></div>
</div></div>

## Companion panel
```mdx-code-block

<MinecraftWindow maxWidth="600px" useDropdown="true">
    <Img src={guide_panel} width="703" height="509" alt="companion_panel" />
</MinecraftWindow>

```

Switch to your companion in the inventory then <kbd>Right Click</kbd> or <kbd>/companion</kbd> to open your Plot system server panel.
The server panel is basically your plot system hub and your builder profile, it is included with many things such as..
- The main inventory grid displays the available build sites that you can build in
- down in the bottom right of the grid is your builder profile and utility, you can see your builder points and your on-going plots here
- at the top right corner is the plot's difficulty filter, your can select the building difficulty that you would like.

```mdx-code-block

<Admonition type="info">
    <div style={{lineHeight:"200%"}}>
        <strong style={{textShadow:"rgb(27 110 34 / 60%) 0px 0px 4px"}}><Text.Hl color="#55FF55">Easy</Text.Hl> </strong>
            1 - 2 small house and simple detail.<br/>
        <strong style={{textShadow:"rgb(27 110 34 / 60%) 0px 0px 4px"}}><Text.Hl color="#FFAA00">Medium</Text.Hl> </strong> 
            detailed row houses or medium sized city block building.<br/>
        <strong style={{textShadow:"rgb(27 110 34 / 60%) 0px 0px 4px"}}><Text.Hl color="#FF5555">Hard</Text.Hl> </strong>
            big city block to big skyscraper <br/>
    </div>
</Admonition>

```

## Choosing your plot 
:::caution 

Due to the fact this system is new, you can only choose build site at `Malaysia, Klang` for now, more build sites are coming soon!

:::

:::tip Choose your difficulty first
The system sets the default difficulty as automatic, you could accidentally have to build hard plot if you forget to choose the difficulty.

```mdx-code-block
<MinecraftWindow maxWidth="600px" useDropdown="true">
    <Img src={guide_difficulty} alt="difficulty" width="1088" height="499" />
</MinecraftWindow>
```
:::

## Create your plot!
After you decided the buildsite and difficulty, simply press the buildsite icon and the system will auto generate you a plot to build in.


```mdx-code-block

<MinecraftWindow maxWidth="600px" useDropdown="true">
    <Img src={guide_create} width="600" height="318" alt="Guide Image"/>
</MinecraftWindow>

```
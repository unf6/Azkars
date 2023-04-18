<div align="center">
	<br />
	</p>
	<br />
	<p>
		<a href="https://discord.gg/PeV2Qj5SHD"><img src="https://img.shields.io/discord/909261119103832084?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
		<a href="https://www.npmjs.com/package/azkars"><img src="https://img.shields.io/npm/v/azkars.svg?maxAge=3600" alt="npm version" /></a>
		<a href="https://www.npmjs.com/package/azkars"><img src="https://img.shields.io/npm/dt/azkars.svg?maxAge=3600" alt="npm downloads" /></a>
	</p>
</div>

# **What is the package?**
A package to get Islamic things and azkar and supplications easily
<br>
In some azkar and supplications, if he finds an explanation, he will tell you his explanation in two languages: Arabic, English.

# **Installation**
```js
npm install azkars
yarn add azkars
pnpm add azkars
```

# **Using Azkars**

```js
const { Azkar } = require("azkars");
const { EmbedBuilder } = require("discord.js");

 const Embed = new EmbedBuilder()
        .setTitle(`Azkar`)
        .setDescription(`Arabic: ${Azkar.Arabic()} \nEnglish: ${Azkar.English()}`)
        .setColor("Blue");

    return interaction.reply({ embeds: [Embed], ephemeral: true });   
```

# **Using Prophet Names**
```js
const { Prophet } = require("azkars");
const { EmbedBuilder } = require("discord.js");

const Embed = new EmbedBuilder()
        .setTitle(`Prophet Names`)
        .setDescription(`Arabic: ${Prophet.Arabic()} \nEnglish: ${Prophet.English()}`)
        .setColor("Blue");

    return interaction.reply({ embeds: [Embed], ephemeral: true });
```

# **Using GodNames**
```js
const { GodNames } = require("azkars");
const { EmbedBuilder } = require("discord.js");

const Embed = new EmbedBuilder()
        .setTitle(`God Names`)
        .setDescription(`Arabic: ${GodNames.Arabic()} \nEnglish: ${GodNames.English()}`)
        .setColor("Blue");

    return interaction.reply({ embeds: [Embed], ephemeral: true });
```

<br>

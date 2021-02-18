const sound = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *SOUND MENU* ]----- 🔰
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan User, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Berikut adalah fitur yang ada pada bot ini!✨
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}iri*
┃│➸ *${prefix}pale*
┃│➸ *${prefix}fphalu*
┃│➸ *${prefix}gxatmyworst*
┃│➸ *${prefix}gxfallinginlove*
┃│➸ *${prefix}gxflymetothemoon*
┃│➸ *${prefix}gxwildwest*
┃│➸ *${prefix}pmkenanganmanis*
┃│➸ *${prefix}mashup2*
┃│➸ *${prefix}mashup3*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.sound = sound